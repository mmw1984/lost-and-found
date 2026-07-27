// Calling-code data adapted from country-telephone-data (MIT).
const COUNTRY_DIAL_CODES = [["AF","+93"],["AX","+358"],["AL","+355"],["DZ","+213"],["AS","+1684"],["AD","+376"],["AO","+244"],["AI","+1264"],["AQ","+672"],["AG","+1268"],["AR","+54"],["AM","+374"],["AW","+297"],["AU","+61"],["AT","+43"],["AZ","+994"],["BS","+1242"],["BH","+973"],["BD","+880"],["BB","+1246"],["BY","+375"],["BE","+32"],["BZ","+501"],["BJ","+229"],["BM","+1441"],["BT","+975"],["BO","+591"],["BA","+387"],["BW","+267"],["BV","+47"],["BR","+55"],["IO","+246"],["VG","+1284"],["BN","+673"],["BG","+359"],["BF","+226"],["BI","+257"],["KH","+855"],["CM","+237"],["CA","+1"],["CV","+238"],["BQ","+599"],["KY","+1345"],["CF","+236"],["TD","+235"],["CL","+56"],["CN","+86"],["CX","+61"],["CC","+61"],["CO","+57"],["KM","+269"],["CD","+243"],["CG","+242"],["CK","+682"],["CR","+506"],["CI","+225"],["HR","+385"],["CU","+53"],["CW","+599"],["CY","+357"],["CZ","+420"],["DK","+45"],["DJ","+253"],["DM","+1767"],["DO","+1"],["EC","+593"],["EG","+20"],["SV","+503"],["GQ","+240"],["ER","+291"],["EE","+372"],["ET","+251"],["FK","+500"],["FO","+298"],["FJ","+679"],["FI","+358"],["FR","+33"],["GF","+594"],["PF","+689"],["TF","+262"],["GA","+241"],["GM","+220"],["GE","+995"],["DE","+49"],["GH","+233"],["GI","+350"],["GR","+30"],["GL","+299"],["GD","+1473"],["GP","+590"],["GU","+1671"],["GT","+502"],["GG","+44"],["GN","+224"],["GW","+245"],["GY","+592"],["HT","+509"],["HM","+672"],["HN","+504"],["HK","+852"],["HU","+36"],["IS","+354"],["IN","+91"],["ID","+62"],["IR","+98"],["IQ","+964"],["IE","+353"],["IM","+44"],["IL","+972"],["IT","+39"],["JM","+1876"],["JP","+81"],["JE","+44"],["JO","+962"],["KZ","+7"],["KE","+254"],["KI","+686"],["XK","+383"],["KW","+965"],["KG","+996"],["LA","+856"],["LV","+371"],["LB","+961"],["LS","+266"],["LR","+231"],["LY","+218"],["LI","+423"],["LT","+370"],["LU","+352"],["MO","+853"],["MK","+389"],["MG","+261"],["MW","+265"],["MY","+60"],["MV","+960"],["ML","+223"],["MT","+356"],["MH","+692"],["MQ","+596"],["MR","+222"],["MU","+230"],["YT","+262"],["MX","+52"],["FM","+691"],["MD","+373"],["MC","+377"],["MN","+976"],["ME","+382"],["MS","+1664"],["MA","+212"],["MZ","+258"],["MM","+95"],["NA","+264"],["NR","+674"],["NP","+977"],["NL","+31"],["NC","+687"],["NZ","+64"],["NI","+505"],["NE","+227"],["NG","+234"],["NU","+683"],["NF","+672"],["KP","+850"],["MP","+1670"],["NO","+47"],["OM","+968"],["PK","+92"],["PW","+680"],["PS","+970"],["PA","+507"],["PG","+675"],["PY","+595"],["PE","+51"],["PH","+63"],["PN","+64"],["PL","+48"],["PT","+351"],["PR","+1"],["QA","+974"],["RE","+262"],["RO","+40"],["RU","+7"],["RW","+250"],["BL","+590"],["SH","+290"],["KN","+1869"],["LC","+1758"],["MF","+590"],["PM","+508"],["VC","+1784"],["WS","+685"],["SM","+378"],["ST","+239"],["SA","+966"],["SN","+221"],["RS","+381"],["SC","+248"],["SL","+232"],["SG","+65"],["SX","+1721"],["SK","+421"],["SI","+386"],["SB","+677"],["SO","+252"],["ZA","+27"],["GS","+500"],["KR","+82"],["SS","+211"],["ES","+34"],["LK","+94"],["SD","+249"],["SR","+597"],["SJ","+47"],["SZ","+268"],["SE","+46"],["CH","+41"],["SY","+963"],["TW","+886"],["TJ","+992"],["TZ","+255"],["TH","+66"],["TL","+670"],["TG","+228"],["TK","+690"],["TO","+676"],["TT","+1868"],["TN","+216"],["TR","+90"],["TM","+993"],["TC","+1649"],["TV","+688"],["VI","+1340"],["UG","+256"],["UA","+380"],["AE","+971"],["GB","+44"],["US","+1"],["UM","+1"],["UY","+598"],["UZ","+998"],["VU","+678"],["VA","+39"],["VE","+58"],["VN","+84"],["WF","+681"],["EH","+212"],["YE","+967"],["ZM","+260"],["ZW","+263"]];

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
    "form.item": "Lost Item",
    "form.itemPlaceholder": "What item did you find?",
    "form.itemHint": "A short description is enough.",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.method": "Contact Method",
    "form.phoneHint": "Include a number where I can reach you.",
    "form.countrySearch": "Search country or code",
    "form.countryEmpty": "No matching country or calling code.",
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
    "confirm.kicker": "Message sent",
    "confirm.title": "Contact details received",
    "confirm.message": "Thank you for helping. I will get back to you as soon as I can.",
    "confirm.close": "Done",
    "footer.note": "If none of the above options are convenient, please contact me via WhatsApp (suggested) OR email in advance to make other arrangements. Thank you!",
    "footer.top": "Back to top ↑",
    "theme.light": "Switch to light mode",
    "theme.dark": "Switch to dark mode"
  },
  "zh-TW": {
    "header.kicker": "謝謝你伸出援手",
    "header.title": "謝謝你的幫忙",
    "header.subtitle": "感謝你拾到我的物品，亦謝謝你願意花時間協助物歸原主。",
    "item.label": "遺失物品",
    "return.title": "歸還方法",
    "return.school.title": "如果你在協和書院內拾到：",
    "return.school.subtitle": "可以交給以下任何一方：",
    "return.school.option1.name": "黃梓峰",
    "return.school.option1.class": " ",
    "return.school.option1.classnum": "4E(27)",
    "return.school.option1.period": "。",
    "return.school.option2.the": "交到",
    "return.school.option2.office": "校務處",
    "return.school.option2.info": "，並告知職員我的姓名及班別。",
    "return.outside.title": "如果你在校外拾到：",
    "return.outside.subtitle": "麻煩先透過 WhatsApp（建議）或電郵聯絡我，我們再約一個大家都方便的交收方法。",
    "contact.title": "聯絡我",
    "contact.email": "電子郵件",
    "contact.school": "就讀學校：中華基督教會協和書院",
    "contact.schooladd": "九龍慈雲山蒲崗村道171號",
    "form.intro": "麻煩留下聯絡方法及拾獲位置，我會盡快聯絡你。",
    "form.item": "遺失物品",
    "form.itemPlaceholder": "你拾到的是甚麼物品？",
    "form.itemHint": "簡單描述一下便可以。",
    "form.name": "姓名",
    "form.namePlaceholder": "怎樣稱呼你？",
    "form.method": "聯絡方法",
    "form.phoneHint": "請填寫一個能夠聯絡到你的電話號碼。",
    "form.countrySearch": "搜尋國家、地區或電話區號",
    "form.countryEmpty": "找不到相符的國家、地區或區號。",
    "form.location": "拾獲位置",
    "form.manual": "手動輸入",
    "form.gps": "使用目前位置",
    "form.locationPlaceholder": "你在哪裏拾到這件物品？",
    "form.locate": "取得我的目前位置",
    "form.gpsWaiting": "位置資料只會隨這份表格傳送。",
    "form.gpsLoading": "正在讀取你的位置⋯⋯",
    "form.gpsReady": "位置已記錄。",
    "form.gpsError": "暫時無法讀取位置，請再試一次或改為手動輸入。",
    "form.message": "留言",
    "form.optional": "選填",
    "form.messagePlaceholder": "有甚麼需要補充？",
    "form.submit": "傳送聯絡資料",
    "form.sending": "傳送中⋯⋯",
    "form.direct": "或者直接聯絡我",
    "form.required": "請填寫這一欄。",
    "form.invalidContact": "請檢查聯絡資料是否正確。",
    "form.success": "已收到，謝謝你的幫忙！我會盡快聯絡你。",
    "form.noEndpoint": "聯絡表格暫時未能使用，請改用下方的 WhatsApp 或電郵聯絡我。",
    "form.failed": "暫時未能傳送資料，請稍後再試，或改用下方的 WhatsApp／電郵聯絡我。",
    "confirm.kicker": "已成功傳送",
    "confirm.title": "聯絡資料已收到",
    "confirm.message": "謝謝你幫忙！我會盡快聯絡你，商量交收安排。",
    "confirm.close": "完成",
    "footer.note": "如果以上方法都不方便，歡迎先透過 WhatsApp（建議）或電郵聯絡我，再另作安排。謝謝！",
    "footer.top": "返回頁首 ↑",
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
  updateCountryPicker();
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
  byId("qrcodeItemField").hidden = !isQrCode;
  byId("qrcodeItem").required = isQrCode;
  state.itemName = isQrCode ? byId("qrcodeItem").value.trim() : rawHash ? decodeURIComponent(rawHash) : "NAME OF THE ITEM";
  byId("itemName").textContent = state.itemName;
  byId("formItemName").value = state.itemName;
}

let selectedCountryIso = "HK";

function countryFlag(iso) {
  return [...iso].map((character) => String.fromCodePoint(127397 + character.charCodeAt())).join("");
}

function getCountryData() {
  const locale = state.language === "zh-TW" ? "zh-Hant-HK" : "en";
  const localNames = new Intl.DisplayNames([locale], { type: "region" });
  const englishNames = new Intl.DisplayNames(["en"], { type: "region" });
  return COUNTRY_DIAL_CODES.map(([iso, dial]) => ({
    iso,
    dial,
    flag: countryFlag(iso),
    name: localNames.of(iso) || iso,
    englishName: englishNames.of(iso) || iso
  }));
}

function selectCountry(iso, dial) {
  selectedCountryIso = iso;
  byId("countryCode").value = dial;
  byId("countryFlag").textContent = countryFlag(iso);
  byId("countryDial").textContent = dial;
  closeCountryPicker();
}

function renderCountryOptions(query = "") {
  const list = byId("countryList");
  if (!list) return;
  const term = query.trim().toLocaleLowerCase().replace(/^\+/, "");
  const countries = getCountryData()
    .filter(({ iso, dial, name, englishName }) => !term || `${iso} ${dial.replace("+", "")} ${name} ${englishName}`.toLocaleLowerCase().includes(term))
    .sort((a, b) => {
      if (!term && a.iso === "HK") return -1;
      if (!term && b.iso === "HK") return 1;
      return a.name.localeCompare(b.name, state.language === "zh-TW" ? "zh-Hant-HK" : "en");
    });

  list.replaceChildren();
  if (!countries.length) {
    const empty = document.createElement("li");
    empty.className = "country-empty";
    empty.textContent = t("form.countryEmpty");
    list.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  countries.forEach(({ iso, dial, flag, name }) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "country-option";
    button.dataset.iso = iso;
    button.dataset.dial = dial;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", String(iso === selectedCountryIso));

    const flagNode = document.createElement("span");
    flagNode.className = "country-flag";
    flagNode.textContent = flag;
    flagNode.setAttribute("aria-hidden", "true");
    const nameNode = document.createElement("span");
    nameNode.className = "country-option-name";
    nameNode.textContent = name;
    const codeNode = document.createElement("span");
    codeNode.className = "country-option-code";
    codeNode.textContent = dial;
    button.append(flagNode, nameNode, codeNode);
    item.append(button);
    fragment.append(item);
  });
  list.append(fragment);
}

function openCountryPicker() {
  byId("countryPanel").hidden = false;
  byId("countryTrigger").setAttribute("aria-expanded", "true");
  byId("countrySearch").setAttribute("aria-expanded", "true");
  byId("countrySearch").value = "";
  renderCountryOptions();
  requestAnimationFrame(() => byId("countrySearch").focus());
}

function closeCountryPicker() {
  byId("countryPanel").hidden = true;
  byId("countryTrigger").setAttribute("aria-expanded", "false");
  byId("countrySearch").setAttribute("aria-expanded", "false");
}

function updateCountryPicker() {
  if (!byId("countryList")) return;
  const selected = getCountryData().find(({ iso }) => iso === selectedCountryIso) || getCountryData().find(({ iso }) => iso === "HK");
  byId("countryFlag").textContent = selected.flag;
  byId("countryDial").textContent = selected.dial;
  byId("countryCode").value = selected.dial;
  renderCountryOptions(byId("countrySearch").value);
}

const phoneMethods = new Set(["whatsapp", "line"]);
function updateContactInput() {
  const input = byId("contactValue");
  const method = new FormData(byId("contactForm")).get("contactMethod") || "whatsapp";
  const isPhone = phoneMethods.has(method);
  const labels = { whatsapp: "WhatsApp", telegram: "Telegram", discord: "Discord", line: "LINE", instagram: "Instagram", email: t("contact.email") };
  byId("contactValueLabel").textContent = labels[method];
  byId("phoneInput").classList.toggle("is-handle", !isPhone);
  byId("countryPicker").hidden = !isPhone;
  if (!isPhone) closeCountryPicker();
  input.type = method === "email" ? "email" : isPhone ? "tel" : "text";
  input.inputMode = method === "email" ? "email" : isPhone ? "tel" : "text";
  input.autocomplete = method === "email" ? "email" : isPhone ? "tel-national" : "off";
  input.placeholder = method === "email" ? "name@example.com" : isPhone ? (state.language === "zh-TW" ? "電話號碼" : "Phone number") : method === "discord" ? "username" : "@username";
  byId("contactHint").textContent = isPhone ? t("form.phoneHint") : state.language === "zh-TW" ? `請填寫你的 ${labels[method]} 帳戶名稱。` : `Enter your ${labels[method]} account details.`;
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
  ["item", "name", "contactValue", "location"].forEach(clearError);
  let valid = true;
  if (!byId("qrcodeItemField").hidden && !byId("qrcodeItem").value.trim()) { showError("item", t("form.required")); valid = false; }
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
  const form = event.currentTarget;
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
  const data = Object.fromEntries(new FormData(form));
  data.language = state.language;
  data.pageUrl = location.href;
  try {
    const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    showStatus(t("form.success"), "success");
    if (!byId("successDialog").open) byId("successDialog").showModal();
    form.reset();
    selectedCountryIso = "HK";
    byId("messageCount").textContent = "0";
    updateCountryPicker();
    updateItemInfo();
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
  byId("countryTrigger").addEventListener("click", () => {
    if (byId("countryPanel").hidden) openCountryPicker(); else closeCountryPicker();
  });
  byId("countrySearch").addEventListener("input", (event) => renderCountryOptions(event.target.value));
  byId("countrySearch").addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeCountryPicker(); byId("countryTrigger").focus(); }
    if (event.key === "ArrowDown") {
      const firstOption = byId("countryList").querySelector(".country-option");
      if (firstOption) { event.preventDefault(); firstOption.focus(); }
    }
  });
  byId("countryList").addEventListener("click", (event) => {
    const option = event.target.closest(".country-option");
    if (option) selectCountry(option.dataset.iso, option.dataset.dial);
  });
  byId("countryList").addEventListener("keydown", (event) => {
    const option = event.target.closest(".country-option");
    if (!option) return;
    const options = [...byId("countryList").querySelectorAll(".country-option")];
    const index = options.indexOf(option);
    if (event.key === "ArrowDown" && options[index + 1]) { event.preventDefault(); options[index + 1].focus(); }
    if (event.key === "ArrowUp") { event.preventDefault(); (options[index - 1] || byId("countrySearch")).focus(); }
    if (event.key === "Escape") { closeCountryPicker(); byId("countryTrigger").focus(); }
  });
  document.addEventListener("click", (event) => { if (!byId("countryPicker").contains(event.target)) closeCountryPicker(); });
  byId("locationMode").addEventListener("change", (event) => setLocationMode(event.target.value));
  byId("gpsButton").addEventListener("click", locateUser);
  byId("message").addEventListener("input", (event) => { byId("messageCount").textContent = event.target.value.length; });
  byId("qrcodeItem").addEventListener("input", (event) => { state.itemName = event.target.value.trim(); byId("formItemName").value = state.itemName; clearError("item"); });
  byId("contactForm").addEventListener("submit", submitForm);
  byId("successClose").addEventListener("click", () => byId("successDialog").close());
  byId("successDialog").addEventListener("click", (event) => { if (event.target === byId("successDialog")) byId("successDialog").close(); });
  window.addEventListener("hashchange", updateItemInfo);
});
