const translations = {
  en: {
    "header.kicker": "A small favour",
    "header.title": "Thanks For Your Help",
    "header.subtitle": "I really appreciate you taking the time to return my lost item.",
    "item.label": "Lost Item",
    "return.title": "Return Information",
    "return.school.title": "If found at Heep Woh College:",
    "return.school.subtitle": "Please return it to either:",
    "return.school.option1.name": "Wong Tsz Fung",
    "return.school.option1.class": "in class",
    "return.school.option1.classnum": "4E(27)",
    "return.school.option1.period": ".",
    "return.school.option2.the": "The",
    "return.school.option2.office": "School Office",
    "return.school.option2.info": ", with my name and class information.",
    "return.outside.title": "If found outside the school:",
    "return.outside.subtitle": "Please get in touch with me directly via either WhatsApp (suggested) OR email to find the best way for both of us.",
    "contact.title": "My Contact Details",
    "contact.email": "Email",
    "contact.school": "My School Address: CCC Heep Woh College",
    "contact.schooladd": "171 Po Kong Village Road, Tsz Wan Shan",
    "form.intro": "Leave your details and where you found the item. I will get back to you.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.method": "Contact Method",
    "form.phoneHint": "Include a number where I can reach you.",
    "form.location": "Location",
    "form.manual": "Manual input",
    "form.gps": "Use GPS",
    "form.locationPlaceholder": "Where did you find it?",
    "form.locate": "Get current location",
    "form.gpsWaiting": "Your precise coordinates are only sent with this form.",
    "form.gpsLoading": "Getting your current location...",
    "form.gpsReady": "Location captured successfully.",
    "form.gpsError": "Location was unavailable. Please try again or use manual input.",
    "form.message": "Message",
    "form.optional": "Optional",
    "form.messagePlaceholder": "Anything else I should know?",
    "form.submit": "Send contact details",
    "form.sending": "Sending...",
    "form.direct": "Prefer direct contact?",
    "form.required": "Please complete this field.",
    "form.invalidContact": "Please enter valid contact details.",
    "form.success": "Thank you — your contact details have been sent.",
    "form.noEndpoint": "The form endpoint is not configured yet. Please use WhatsApp or email below.",
    "form.failed": "The message could not be sent. Please try WhatsApp or email below.",
    "footer.note": "If none of the above options are convenient, please contact me via WhatsApp (suggested) OR email in advance to make other arrangements. Thank you!",
    "footer.top": "Back to top ↑",
    "theme.light": "Switch to light mode",
    "theme.dark": "Switch to dark mode"
  },
  "zh-TW": {
    "header.kicker": "一個小小請求",
    "header.title": "感謝您的協助",
    "header.subtitle": "非常感謝您花時間歸還我的遺失物品。",
    "item.label": "遺失物品",
    "return.title": "歸還資訊",
    "return.school.title": "如在協和書院找到：",
    "return.school.subtitle": "請歸還給以下任一方：",
    "return.school.option1.name": "黃梓峰",
    "return.school.option1.class": " ",
    "return.school.option1.classnum": "4E(27)",
    "return.school.option1.period": "。",
    "return.school.option2.the": "前往",
    "return.school.option2.office": "校務處",
    "return.school.option2.info": "，並附上我的姓名和班級資訊。",
    "return.outside.title": "如在校外找到：",
    "return.outside.subtitle": "請直接透過WhatsApp（建議方法）或電子郵件與我聯繫，以找到對我們雙方都方便的方式。",
    "contact.title": "我的聯絡資訊",
    "contact.email": "電子郵件",
    "contact.school": "我的學校地址：中華基督教會協和書院",
    "contact.schooladd": "九龍慈雲山蒲崗村道171號",
    "form.intro": "留下你的聯絡資料及發現物品的位置，我會盡快回覆。",
    "form.name": "姓名",
    "form.namePlaceholder": "你的姓名",
    "form.method": "聯絡方式",
    "form.phoneHint": "請提供可以聯絡你的號碼。",
    "form.location": "發現位置",
    "form.manual": "手動輸入",
    "form.gps": "使用 GPS",
    "form.locationPlaceholder": "你在哪裏找到它？",
    "form.locate": "取得目前位置",
    "form.gpsWaiting": "準確座標只會隨此表格送出。",
    "form.gpsLoading": "正在取得你目前的位置⋯⋯",
    "form.gpsReady": "已成功取得位置。",
    "form.gpsError": "無法取得位置，請重試或改用手動輸入。",
    "form.message": "留言",
    "form.optional": "選填",
    "form.messagePlaceholder": "還有其他需要告訴我的事嗎？",
    "form.submit": "傳送聯絡資料",
    "form.sending": "傳送中⋯⋯",
    "form.direct": "想直接聯絡？",
    "form.required": "請填寫此欄。",
    "form.invalidContact": "請輸入有效的聯絡資料。",
    "form.success": "謝謝，你的聯絡資料已成功送出。",
    "form.noEndpoint": "聯絡表格後端尚未設定，請使用下方 WhatsApp 或電郵。",
    "form.failed": "未能傳送訊息，請使用下方 WhatsApp 或電郵。",
    "footer.note": "如果以上選項都不方便，請事先透過WhatsApp（建議方法）或電子郵件聯繫我以作其他安排。謝謝！",
    "footer.top": "返回頂部 ↑",
    "theme.light": "切換至淺色模式",
    "theme.dark": "切換至深色模式"
  }
};

const state = {
  language: localStorage.getItem("language") || "en",
  theme: localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"),
  itemName: "NAME OF THE ITEM"
};

const byId = (id) => document.getElementById(id);
const t = (key) => translations[state.language][key] || translations.en[key] || key;

function setLanguage(language) {
  state.language = translations[language] ? language : "en";
  localStorage.setItem("language", state.language);
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  byId("languageSelector").value = state.language;
  updateThemeLabel();
  updateContactInput();
}

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("theme", theme);
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#080808" : "#f2f0e9";
  byId("themeToggle").setAttribute("aria-pressed", String(theme === "light"));
  updateThemeLabel();
}

function updateThemeLabel() {
  if (!byId("themeToggle")) return;
  byId("themeToggle").ariaLabel = t(state.theme === "dark" ? "theme.light" : "theme.dark");
}

function updateItemInfo() {
  const rawHash = window.location.hash.slice(1);
  const isQrCode = rawHash.toLowerCase() === "qrcode";
  byId("lostItemBox").hidden = isQrCode;
  state.itemName = rawHash ? decodeURIComponent(rawHash) : "NAME OF THE ITEM";
  byId("itemName").textContent = state.itemName;
  byId("formItemName").value = state.itemName;
}

const phoneMethods = new Set(["whatsapp", "line"]);
function updateContactInput() {
  const input = byId("contactValue");
  const method = new FormData(byId("contactForm")).get("contactMethod") || "whatsapp";
  const isPhone = phoneMethods.has(method);
  const labels = { whatsapp: "WhatsApp", telegram: "Telegram", discord: "Discord", line: "LINE", instagram: "Instagram", email: t("contact.email") };
  byId("contactValueLabel").textContent = labels[method];
  byId("phoneInput").classList.toggle("is-handle", !isPhone);
  byId("countryCode").hidden = !isPhone;
  input.type = method === "email" ? "email" : isPhone ? "tel" : "text";
  input.inputMode = method === "email" ? "email" : isPhone ? "tel" : "text";
  input.autocomplete = method === "email" ? "email" : isPhone ? "tel-national" : "off";
  input.placeholder = method === "email" ? "name@example.com" : isPhone ? (state.language === "zh-TW" ? "電話號碼" : "Phone number") : method === "discord" ? "username" : "@username";
  byId("contactHint").textContent = isPhone ? t("form.phoneHint") : state.language === "zh-TW" ? `輸入你的 ${labels[method]} 帳戶資料。` : `Enter your ${labels[method]} account details.`;
}

function setLocationMode(mode) {
  const gps = mode === "gps";
  byId("locationMode").classList.toggle("is-gps", gps);
  byId("manualPane").classList.toggle("is-active", !gps);
  byId("gpsPane").classList.toggle("is-active", gps);
  byId("location").required = !gps;
  clearError("location");
}

function locateUser() {
  const status = byId("gpsStatus");
  if (!navigator.geolocation) {
    status.textContent = t("form.gpsError");
    return;
  }
  status.textContent = t("form.gpsLoading");
  byId("gpsButton").disabled = true;
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      byId("latitude").value = coords.latitude.toFixed(6);
      byId("longitude").value = coords.longitude.toFixed(6);
      status.textContent = t("form.gpsReady");
      byId("gpsButton").disabled = false;
      clearError("location");
    },
    () => {
      status.textContent = t("form.gpsError");
      byId("gpsButton").disabled = false;
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}

function showError(name, message) {
  const node = document.querySelector(`[data-error-for="${name}"]`);
  if (!node) return;
  node.textContent = message;
  node.closest(".field").classList.add("has-error");
}

function clearError(name) {
  const node = document.querySelector(`[data-error-for="${name}"]`);
  if (!node) return;
  node.textContent = "";
  node.closest(".field").classList.remove("has-error");
}

function validateForm() {
  ["name", "contactValue", "location"].forEach(clearError);
  let valid = true;
  if (!byId("name").value.trim()) { showError("name", t("form.required")); valid = false; }
  const contact = byId("contactValue");
  if (!contact.value.trim() || !contact.checkValidity()) { showError("contactValue", t("form.invalidContact")); valid = false; }
  const mode = new FormData(byId("contactForm")).get("locationMode");
  if (mode === "manual" && !byId("location").value.trim()) { showError("location", t("form.required")); valid = false; }
  if (mode === "gps" && (!byId("latitude").value || !byId("longitude").value)) { showError("location", t("form.required")); valid = false; }
  return valid;
}

function showStatus(message, type) {
  const status = byId("formStatus");
  status.textContent = message;
  status.className = `form-status is-visible is-${type}`;
}

async function submitForm(event) {
  event.preventDefault();
  if (!validateForm()) return;
  const endpoint = window.CONTACT_API_URL;
  if (!endpoint) {
    showStatus(t("form.noEndpoint"), "error");
    byId("contact-info").querySelector("details").open = true;
    return;
  }
  const button = byId("submitButton");
  const original = button.querySelector("span").textContent;
  button.disabled = true;
  button.querySelector("span").textContent = t("form.sending");
  const data = Object.fromEntries(new FormData(event.currentTarget));
  data.language = state.language;
  data.pageUrl = location.href;
  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    showStatus(t("form.success"), "success");
    event.currentTarget.reset();
    byId("messageCount").textContent = "0";
    updateContactInput();
    setLocationMode("manual");
  } catch (error) {
    console.error(error);
    showStatus(t("form.failed"), "error");
    byId("contact-info").querySelector("details").open = true;
  } finally {
    button.disabled = false;
    button.querySelector("span").textContent = original;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTheme(state.theme);
  setLanguage(state.language);
  updateItemInfo();
  byId("languageSelector").addEventListener("change", (event) => setLanguage(event.target.value));
  byId("themeToggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  byId("methodGrid").addEventListener("change", updateContactInput);
  byId("locationMode").addEventListener("change", (event) => setLocationMode(event.target.value));
  byId("gpsButton").addEventListener("click", locateUser);
  byId("message").addEventListener("input", (event) => { byId("messageCount").textContent = event.target.value.length; });
  byId("contactForm").addEventListener("submit", submitForm);
  window.addEventListener("hashchange", updateItemInfo);
});
