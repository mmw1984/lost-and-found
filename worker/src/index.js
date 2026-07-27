const MAX_BODY_BYTES = 16_384;
const CONTACT_METHODS = new Set(["whatsapp", "telegram", "discord", "line", "instagram", "email"]);

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = env.ALLOWED_ORIGINS.split(",").map((value) => value.trim());
  return {
    "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}

function json(request, env, body, status = 200) {
  return Response.json(body, {
    status,
    headers: { ...corsHeaders(request, env), "Cache-Control": "no-store" }
  });
}

function isAllowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  return env.ALLOWED_ORIGINS.split(",").map((value) => value.trim()).includes(origin);
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validate(payload) {
  const data = {
    name: clean(payload.name, 80),
    contactMethod: clean(payload.contactMethod, 20).toLowerCase(),
    countryCode: clean(payload.countryCode, 8),
    contactValue: clean(payload.contactValue, 120),
    locationMode: clean(payload.locationMode, 10),
    location: clean(payload.location, 180),
    latitude: clean(payload.latitude, 20),
    longitude: clean(payload.longitude, 20),
    message: clean(payload.message, 1000),
    item: clean(payload.item, 180),
    language: clean(payload.language, 10),
    pageUrl: clean(payload.pageUrl, 500)
  };

  if (!data.name || !data.contactValue || !CONTACT_METHODS.has(data.contactMethod)) return null;
  if (!new Set(["manual", "gps"]).has(data.locationMode)) return null;
  if (data.locationMode === "manual" && !data.location) return null;
  if (data.locationMode === "gps" && (!data.latitude || !data.longitude)) return null;
  if (data.contactMethod === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contactValue)) return null;
  return data;
}

function text(value) {
  return value || "—";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function tableValue(value, maxLength = 180) {
  return text(value).replace(/\s+/g, " ").slice(0, maxLength);
}

function tableRow(label, value) {
  return `${label.padEnd(12)} | ${tableValue(value)}`;
}

function allowedPageUrl(value, env) {
  try {
    const url = new URL(value);
    const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim());
    return url.protocol === "https:" && allowedOrigins.includes(url.origin) ? url.href : "";
  } catch {
    return "";
  }
}

async function sendTelegram(data, env) {
  const phone = new Set(["whatsapp", "line"]).has(data.contactMethod)
    ? `${data.countryCode} ${data.contactValue}`.trim()
    : data.contactValue;
  const location = data.locationMode === "gps"
    ? `${data.latitude}, ${data.longitude}`
    : data.location;
  const receivedAt = new Intl.DateTimeFormat("en-HK", {
    timeZone: "Asia/Hong_Kong",
    dateStyle: "medium",
    timeStyle: "medium"
  }).format(new Date());
  const reference = crypto.randomUUID().split("-")[0].toUpperCase();
  const table = [
    tableRow("Reference", reference),
    tableRow("Received", receivedAt),
    tableRow("Item", data.item),
    tableRow("Finder", data.name),
    tableRow("Method", data.contactMethod.toUpperCase()),
    tableRow("Contact", phone),
    tableRow("Location", location),
    tableRow("Language", data.language)
  ].join("\n");
  const message = [
    "<b>Lost item contact</b>",
    "A finder has submitted the return form.",
    "",
    `<pre>${escapeHtml(table)}</pre>`,
    "<b>Message</b>",
    escapeHtml(text(data.message))
  ].join("\n");

  const buttons = [];
  const actionRow = [];
  if (data.locationMode === "gps") {
    actionRow.push({ text: "Open map", url: `https://maps.google.com/?q=${encodeURIComponent(`${data.latitude},${data.longitude}`)}` });
  }
  const sourceUrl = allowedPageUrl(data.pageUrl, env);
  if (sourceUrl) actionRow.push({ text: "Open source page", url: sourceUrl });
  if (actionRow.length) buttons.push(actionRow);

  const response = await fetch(env.NOTIFY_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.NOTIFY_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: message,
      parse_mode: "HTML",
      link_preview: false,
      disable_notification: false,
      buttons
    })
  });

  if (!response.ok) {
    console.error(JSON.stringify({ event: "telegram_failed", status: response.status }));
    throw new Error("Telegram rejected the notification");
  }
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request, env) });
    }
    if (request.method !== "POST") return json(request, env, { error: "Method not allowed" }, 405);
    if (!isAllowedOrigin(request, env)) return json(request, env, { error: "Origin not allowed" }, 403);
    if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
      return json(request, env, { error: "JSON required" }, 415);
    }

    const declaredLength = Number(request.headers.get("Content-Length") || 0);
    if (declaredLength > MAX_BODY_BYTES) return json(request, env, { error: "Request too large" }, 413);

    try {
      const raw = await request.text();
      if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
        return json(request, env, { error: "Request too large" }, 413);
      }
      const payload = JSON.parse(raw);
      if (payload.company) return json(request, env, { ok: true });
      const data = validate(payload);
      if (!data) return json(request, env, { error: "Invalid form data" }, 400);
      await sendTelegram(data, env);
      console.log(JSON.stringify({ event: "contact_sent", method: data.contactMethod }));
      return json(request, env, { ok: true });
    } catch (error) {
      console.error(JSON.stringify({ event: "contact_error", message: error instanceof Error ? error.message : "Unknown error" }));
      return json(request, env, { error: "Unable to send message" }, 500);
    }
  }
};
