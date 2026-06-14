const menuButton = document.querySelector(".menu-button");
const megaMenu = document.querySelector(".mega-menu");
const navDropdowns = document.querySelectorAll(".nav-dropdown");
const enquiryForm = document.querySelector(".enquiry-form");
const blueprintForm = document.querySelector(".blueprint-form");
const blueprintGate = document.querySelector(".blueprint-gate");
const blueprintLeadForm = document.querySelector(".blueprint-lead-form");
const blueprintReport = document.querySelector(".blueprint-report");
const printBlueprintButton = document.querySelector(".print-blueprint");
const blueprintError = document.querySelector(".blueprint-error");
const challengeForm = document.querySelector(".challenge-form");
const challengeResult = document.querySelector(".challenge-result");
const certificateForm = document.querySelector(".certificate-form");
const challengeProgress = document.querySelector("[data-challenge-progress]");
const landingPopup = document.querySelector(".landing-popup");
const landingPopupClose = document.querySelector(".landing-popup-close");
const locationSwitches = document.querySelectorAll("[data-location-switch]");
const locationCards = document.querySelectorAll("[data-location-card]");
const locationMap = document.querySelector("[data-location-map]");
const locationDirections = document.querySelector("[data-location-directions]");
const resourceDownloadButtons = document.querySelectorAll("[data-resource-download]");
const resourceLeadModal = document.querySelector(".resource-lead-modal");
const resourceLeadForm = document.querySelector(".resource-lead-form");
const resourceLeadError = document.querySelector(".resource-lead-error");
const resourceLeadTitleInput = document.querySelector('input[name="resourceTitle"]');
const futureCompassForm = document.querySelector(".future-compass-form");
const futureCompassQuestions = document.querySelector("[data-fc-questions]");
const futureCompassProgress = document.querySelector("[data-fc-progress]");
const futureCompassError = document.querySelector(".future-compass-error");
const futureCompassReport = document.querySelector(".future-compass-report");
const futureCompassDownload = document.querySelector("[data-fc-download]");
const whatsappNumber = "918826758881";
const landingPopupSeenKey = "sfisLandingPopupSeen";
const savedBlueprintKey = "sfisFutureSparkReport";
const blueprintGoogleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdX-9JaaRy0_KRHkWwxy6-IvxYKSPqS3G2UBkYKIKmlQ_TTHw/formResponse";
const futureCompassGoogleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScMaSwd0QQUIu2KrpGePXvI0ZkBcFv292iRS1KJUgWf0mg21g/formResponse";
const pendingBlueprintLeadKey = "sfisPendingBlueprintLead";
const pendingFutureCompassLeadKey = "sfisPendingFutureCompassLead";

const parentBotQuickQuestions = [
  "When will admissions open?",
  "Which classes are available?",
  "What is Kidsverse priority?",
  "Where is the enquiry office?",
  "What facilities are planned?",
  "What is Future Spark AI Report?",
  "What is Future Compass AI?",
  "What is Future Explorer Challenge?",
  "Do you have parent resources?",
];

const parentBotAnswers = [
  {
    keywords: ["admission", "admissions", "open", "start", "date", "december", "session", "apply"],
    answer:
      "Admissions are planned to open in December 2026 for the academic session commencing thereafter. Parents can register interest early because initial seats will be limited.",
  },
  {
    keywords: ["class", "grade", "nursery", "ukg", "lkg", "5", "fifth", "classes"],
    answer:
      "SFIS is planned to begin gradually up to Grade 5. This helps the school build quality, systems, teachers, and culture step by step.",
  },
  {
    keywords: ["kidsverse", "priority", "reservation", "reserved", "50", "preference"],
    answer:
      "Eligible Kidsverse students will receive admission priority, with 50% of available seats reserved as a gratitude gesture to families who trusted the founders from the beginning. Kidsverse School website: kidsverseschool.com.",
  },
  {
    keywords: ["seat", "limited", "availability", "quantity", "batch", "super 30"],
    answer:
      "Seats will be limited because SFIS is focused on quality over quantity. The goal is smaller, high-engagement learning groups where children receive individual attention.",
  },
  {
    keywords: ["test", "assessment", "screening", "syllabus", "exam"],
    answer:
      "New applicants will have an admission screening assessment. Detailed guidelines and curriculum will be released in December 2026 before admissions begin.",
  },
  {
    keywords: ["office", "enquiry", "address", "kidsverse school", "rehan", "construction"],
    answer:
      "The temporary enquiry office is Kidsverse School, Rehan, until SFIS construction is complete. Parents can visit there for guidance, priority list registration, and next steps. Kidsverse School website: kidsverseschool.com.",
  },
  {
    keywords: ["location", "campus", "where", "shani", "mandir", "kukhnaira", "map"],
    answer:
      "The SFIS campus site is in Kukhnaira, 200 meters from Shani Dev Mandir. The contact page has an interactive map for both the enquiry office and campus site.",
  },
  {
    keywords: ["facility", "facilities", "lab", "robotics", "computer", "sports", "basketball", "badminton", "cricket", "yoga", "splash", "theater", "garden"],
    answer:
      "SFIS is planned with a high-tech computer lab, robotics lab, basketball ground, badminton court, cricket net facility, yoga retreat center, splash zone, open-air theater, and beautiful gardens.",
  },
  {
    keywords: ["future spark", "ai report", "report", "child report", "strength", "learning style", "child shine"],
    answer:
      "Future Spark AI Report is a parent-friendly interactive experience for children aged 5 to 10. It gives a colorful strength report with learning signals, confidence patterns, growth guidance, and SFIS support areas.",
  },
  {
    keywords: ["future compass", "stream", "career", "grade 8", "grade 9", "grade 10", "science", "commerce", "humanities", "medical"],
    answer:
      "SFIS Future Compass AI is for Grade 8 onward students and parents. It helps families compare personality, interests, aptitude, pressure readiness, child preference, and parent preference before making stream and career direction decisions after Grade 10.",
  },
  {
    keywords: ["resource", "resources", "download", "checklist", "reading", "screen time", "summer planner", "questions"],
    answer:
      "Yes. The Parent Resource Library has free downloads including a reading checklist, school readiness checklist, screen time guide, 50 questions to ask your child, and a summer learning planner. Open resources.html from the website menu.",
  },
  {
    keywords: ["challenge", "future explorer", "young genius", "certificate", "award", "game"],
    answer:
      "The SFIS Future Explorer Challenge is a 5-minute interactive game for children aged 5 to 10. It includes IQ, observation, fun math, reading, and creativity rounds, followed by an instant Future Explorer Award certificate.",
  },
  {
    keywords: ["founder", "founders", "neha", "vinay", "behind", "managed"],
    answer:
      "Stone Field International School is founded by Neha Sharma and Vinay Sharma, the same team behind Kidsverse Playschool Rehan and the After School Activity Center Rehan. You can visit Kidsverse at kidsverseschool.com.",
  },
  {
    keywords: ["app", "diary", "parent update", "communication", "homework", "attendance"],
    answer:
      "SFIS plans a digital parent communication system for updates such as daily learning, homework, attendance, announcements, events, and parent-school communication.",
  },
  {
    keywords: ["fees", "fee", "transport", "documents", "uniform", "book", "callback", "call"],
    answer:
      "For personal details such as fees, transport, documents, or a callback, please message the enquiry team on WhatsApp at +91 88267 58881.",
  },
];

const locationMapData = {
  office: {
    label: "Kidsverse School Rehan map",
    embed: "https://www.google.com/maps?q=Kidsverse%20School%20Rehan&output=embed",
    directions: "https://www.google.com/maps/search/?api=1&query=Kidsverse%20School%20Rehan",
  },
  campus: {
    label: "Stone Field International School Kukhnaira map",
    embed: "https://www.google.com/maps?q=Kukhnaira%20200%20meters%20from%20Shani%20Dev%20Mandir&output=embed",
    directions: "https://www.google.com/maps/search/?api=1&query=Kukhnaira%20200%20meters%20from%20Shani%20Dev%20Mandir",
  },
};

function hasSeenLandingPopup() {
  return localStorage.getItem(landingPopupSeenKey) === "true" || sessionStorage.getItem(landingPopupSeenKey) === "true";
}

function markLandingPopupSeen() {
  localStorage.setItem(landingPopupSeenKey, "true");
  sessionStorage.setItem(landingPopupSeenKey, "true");
}

if (landingPopup && !hasSeenLandingPopup()) {
  landingPopup.classList.add("is-open");
  markLandingPopupSeen();
}

function closeLandingPopup() {
  landingPopup?.classList.remove("is-open");
  markLandingPopupSeen();
}

const whatsappFloat = document.createElement("a");
whatsappFloat.className = "whatsapp-float";
whatsappFloat.href =
  "https://wa.me/918826758881?text=Hello%20Stone%20Field%20International%20School%2C%20I%20want%20to%20book%20a%20campus%20visit";
whatsappFloat.target = "_blank";
whatsappFloat.rel = "noopener noreferrer";
whatsappFloat.setAttribute("aria-label", "Send WhatsApp inquiry");
whatsappFloat.textContent = "WhatsApp";
document.body.appendChild(whatsappFloat);

function createParentChatbot() {
  const bot = document.createElement("div");
  bot.className = "parent-chatbot";
  bot.innerHTML = `
    <button class="parent-chatbot-toggle" type="button" aria-expanded="false">
      <span class="parent-chatbot-icon" aria-hidden="true">AI</span>
      <span class="parent-chatbot-copy"><strong>SFIS AI</strong></span>
      <span class="parent-chatbot-ping" aria-hidden="true"></span>
    </button>
    <button class="parent-chatbot-dismiss" type="button" aria-label="Hide SFIS AI chat">X</button>
    <section class="parent-chatbot-panel" hidden aria-label="SFIS parent assistant">
      <div class="parent-chatbot-head">
        <div><span>SFIS AI Assistant</span><strong>Parent Q&A Desk</strong></div>
        <button type="button" aria-label="Close parent assistant">X</button>
      </div>
      <div class="parent-chatbot-messages" aria-live="polite"></div>
      <div class="parent-chatbot-quick" aria-label="Quick questions"></div>
      <form class="parent-chatbot-form">
        <input type="text" placeholder="Ask about admissions, classes, facilities..." aria-label="Ask SFIS a question" />
        <button type="submit">Ask</button>
      </form>
      <a class="parent-chatbot-whatsapp" href="https://wa.me/${whatsappNumber}?text=Hello%20Stone%20Field%20International%20School%2C%20I%20need%20help%20with%20admissions" target="_blank" rel="noopener noreferrer">Talk to enquiry team on WhatsApp</a>
    </section>
  `;
  document.body.appendChild(bot);

  const toggle = bot.querySelector(".parent-chatbot-toggle");
  const dismiss = bot.querySelector(".parent-chatbot-dismiss");
  const panel = bot.querySelector(".parent-chatbot-panel");
  const closeButton = bot.querySelector(".parent-chatbot-head button");
  const messages = bot.querySelector(".parent-chatbot-messages");
  const quick = bot.querySelector(".parent-chatbot-quick");
  const form = bot.querySelector(".parent-chatbot-form");
  const input = bot.querySelector(".parent-chatbot-form input");

  function addMessage(text, type = "bot") {
    const message = document.createElement("div");
    message.className = `parent-chatbot-message is-${type}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function answerQuestion(question) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    addMessage(cleanQuestion, "user");
    const query = cleanQuestion.toLowerCase();
    const ranked = parentBotAnswers
      .map((item) => ({
        item,
        score: item.keywords.reduce((score, keyword) => score + (query.includes(keyword) ? 1 : 0), 0),
      }))
      .sort((a, b) => b.score - a.score);
    const best = ranked[0];
    addMessage(
      best?.score
        ? best.item.answer
        : "I can help with admissions, classes up to Grade 5, Kidsverse priority, facilities, location, Future Spark AI Report, and enquiry office details. For a personal discussion, please use WhatsApp.",
      "bot"
    );
  }

  function setBotOpen(open) {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    bot.classList.toggle("is-open", open);
    if (open) input.focus({ preventScroll: true });
  }

  addMessage("Namaste. I can answer common parent questions about SFIS admissions, facilities, location, Kidsverse priority, and the Future Spark AI Report.");

  parentBotQuickQuestions.forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", () => answerQuestion(question));
    quick.appendChild(button);
  });

  toggle.addEventListener("click", () => setBotOpen(panel.hidden));
  dismiss.addEventListener("click", () => {
    setBotOpen(false);
  });
  closeButton.addEventListener("click", () => setBotOpen(false));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    answerQuestion(input.value);
    input.value = "";
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setBotOpen(false);
  });
}

createParentChatbot();

document.querySelectorAll("img[data-fallback]").forEach((image) => {
  image.addEventListener(
    "error",
    () => {
      image.src = image.dataset.fallback;
    },
    { once: true }
  );
});

function setMenu(open) {
  megaMenu?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  megaMenu?.setAttribute("aria-hidden", String(!open));
}

menuButton?.addEventListener("click", () => {
  setMenu(!megaMenu?.classList.contains("is-open"));
});

megaMenu?.addEventListener("click", (event) => {
  if (event.target.matches("a")) setMenu(false);
});

function closeNavDropdowns(exceptDropdown = null) {
  navDropdowns.forEach((dropdown) => {
    if (dropdown === exceptDropdown) return;
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".nav-dropdown-toggle")?.setAttribute("aria-expanded", "false");
  });
}

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown-toggle");
  const menu = dropdown.querySelector(".nav-dropdown-menu");
  toggle?.setAttribute("aria-expanded", "false");
  toggle?.addEventListener("click", (event) => {
    event.preventDefault();
    const willOpen = !dropdown.classList.contains("is-open");
    closeNavDropdowns(dropdown);
    dropdown.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
  });
  menu?.addEventListener("click", (event) => {
    if (event.target.matches("a")) closeNavDropdowns();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-dropdown")) closeNavDropdowns();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
  if (event.key === "Escape") closeNavDropdowns();
  if (event.key === "Escape" && landingPopup?.classList.contains("is-open")) closeLandingPopup();
});

landingPopupClose?.addEventListener("click", () => {
  closeLandingPopup();
});

landingPopup?.addEventListener("click", (event) => {
  if (event.target === landingPopup) closeLandingPopup();
});

function setContactLocation(locationKey) {
  const selected = locationMapData[locationKey];
  if (!selected) return;
  locationSwitches.forEach((button) => button.classList.toggle("is-active", button.dataset.locationSwitch === locationKey));
  locationCards.forEach((card) => card.classList.toggle("is-active", card.dataset.locationCard === locationKey));
  if (locationMap) {
    locationMap.src = selected.embed;
    locationMap.title = selected.label;
  }
  if (locationDirections) locationDirections.href = selected.directions;
}

locationSwitches.forEach((button) => {
  button.addEventListener("click", () => setContactLocation(button.dataset.locationSwitch));
});

enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const message = encodeURIComponent(
    `Hello Stone Field International School, I want to book a campus visit. Parent: ${data.get("parentName") || "Not provided"}, Phone: ${data.get("phone") || "Not provided"}, Student class: ${data.get("class") || "Not selected"}, Message: ${data.get("message") || "No message"}.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});

const archetypes = {
  leader: {
    name: "The Emerging Leader",
    summary: "Shows initiative, confidence, and a natural interest in taking responsibility.",
    superpowers: ["Leadership instinct", "Decision-making", "High initiative"],
    challenges: ["Practice patient listening", "Balance confidence with teamwork", "Pause before rushing into action"],
  },
  thinker: {
    name: "The Wise Thinker",
    summary: "Shows curiosity, pattern recognition, and a thoughtful question-asking style.",
    superpowers: ["Pattern recognition", "Curious learning", "Problem solving"],
    challenges: ["Build social expression gradually", "Share ideas aloud", "Avoid excessive pressure"],
  },
  creator: {
    name: "The Creative Visionary",
    summary: "Shows imagination, storytelling, and a natural interest in building new ideas.",
    superpowers: ["Storytelling ability", "Imagination", "Creative innovation"],
    challenges: ["Practice consistency", "Complete one idea before starting the next", "Use structure for creative work"],
  },
  empath: {
    name: "The Kind Collaborator",
    summary: "Shows empathy, teamwork, and a natural ability to notice others’ feelings.",
    superpowers: ["Empathy", "Team support", "Emotional awareness"],
    challenges: ["Build self-confidence", "Speak up in groups", "Learn to handle setbacks calmly"],
  },
};

let latestBlueprint = null;
let latestBlueprintSignature = "";
let pendingResourceDownloadKey = "";

function saveLatestBlueprint() {
  if (!latestBlueprint) return;
  try {
    localStorage.setItem(savedBlueprintKey, JSON.stringify(latestBlueprint));
  } catch (error) {
    console.warn("Future Spark report could not be saved in this browser.", error);
  }
}

function submitLeadToGoogleForm(lead, options = {}) {
  const formUrl = options.formUrl || blueprintGoogleFormUrl;
  const pendingKey = options.pendingKey || pendingBlueprintLeadKey;
  const extraEntries = options.extraEntries || {};
  const payload = new URLSearchParams();
  payload.set("entry.1434087836", String(lead.fatherName || "").trim());
  payload.set("entry.533861399", String(lead.childName || "").trim());
  payload.set("entry.2056952779", String(lead.mobile || "").trim());
  payload.set("entry.1366045606", String(lead.email || "").trim());
  Object.entries(extraEntries).forEach(([entry, value]) => {
    payload.set(entry, String(value || "").trim());
  });

  if (window.location.protocol === "file:") {
    localStorage.setItem(pendingKey, payload.toString());
    console.warn("Google Form submission is skipped in file mode. Open the site with http://localhost or publish it online to submit leads.");
    return;
  }

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: payload,
  }).catch((error) => {
    console.warn("Google Form submission could not be completed.", error);
  });
}

function submitBlueprintToGoogleForm(data) {
  submitLeadToGoogleForm({
    fatherName: data.get("fatherName"),
    childName: data.get("childName"),
    mobile: data.get("fatherMobile"),
    email: data.get("parentEmail"),
  });
}

function submitChallengeToGoogleForm(data) {
  submitLeadToGoogleForm({
    fatherName: data.get("challengeFatherName"),
    childName: data.get("challengeChild"),
    mobile: data.get("challengeFatherMobile"),
    email: data.get("challengeFatherEmail"),
  });
}

function submitResourceToGoogleForm(data, resource) {
  const childName = String(data.get("resourceChildName") || "").trim();
  submitLeadToGoogleForm({
    fatherName: data.get("resourceParentName"),
    childName: `${childName} | Resource: ${resource.title}`,
    mobile: data.get("resourceMobile"),
    email: data.get("resourceEmail"),
  });
}

function submitFutureCompassToGoogleForm(data) {
  submitLeadToGoogleForm(
    {
      fatherName: data.get("fcParentName"),
      childName: data.get("fcStudentName"),
      mobile: data.get("fcMobile"),
      email: data.get("fcEmail"),
    },
    {
      formUrl: futureCompassGoogleFormUrl,
      pendingKey: pendingFutureCompassLeadKey,
      extraEntries: {
        "entry.2132146691": data.get("fcGrade"),
      },
    }
  );
}

function submitPendingGoogleFormLead(pendingKey, formUrl) {
  const pendingPayload = localStorage.getItem(pendingKey);
  if (!pendingPayload || window.location.protocol === "file:") return;
  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(pendingKey))
    .catch((error) => {
      console.warn("Pending Google Form submission could not be completed.", error);
    });
}

function submitPendingBlueprintLead() {
  submitPendingGoogleFormLead(pendingBlueprintLeadKey, blueprintGoogleFormUrl);
  submitPendingGoogleFormLead(pendingFutureCompassLeadKey, futureCompassGoogleFormUrl);
}

submitPendingBlueprintLead();

const blueprintRequiredFields = [
  ["fatherName", "Father name"],
  ["childName", "Child name"],
  ["fatherMobile", "Mobile number"],
  ["parentEmail", "Parent email"],
  ["age", "Age"],
  ["gender", "Gender"],
  ["subject", "Favourite subject"],
  ["activity", "Favourite activity"],
  ["birthMonth", "Birth month"],
  ["birthOrder", "Birth order"],
];

const blueprintQuestionGroups = [
  ["correction", "When corrected"],
  ["confidence", "When meeting new people"],
  ["leadership", "During group activities"],
  ["creativity", "Creative play"],
  ["problemSolving", "Difficult puzzle"],
  ["focus", "Homework or tasks"],
  ["empathy", "When another child is upset"],
  ["learning", "When learning something new"],
];

function getBlueprintFormSignature(data = new FormData(blueprintForm)) {
  const keys = [...blueprintRequiredFields, ...blueprintQuestionGroups].map(([name]) => name);
  return keys.map((key) => `${key}:${String(data.get(key) || "").trim()}`).join("|");
}

function clearBlueprintError() {
  if (blueprintError) {
    blueprintError.hidden = true;
    blueprintError.textContent = "";
  }
}

function showBlueprintError(message, target = blueprintForm) {
  if (blueprintError) {
    blueprintError.textContent = message;
    blueprintError.hidden = false;
  }
  (blueprintError || target)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetBlueprintValidation() {
  blueprintForm?.querySelectorAll(".is-invalid").forEach((item) => item.classList.remove("is-invalid"));
}

function validateBlueprintForm(options = {}) {
  const { messagePrefix = "Please complete the form before generating the assessment report." } = options;
  if (!blueprintForm) return { isValid: true, missing: [] };

  resetBlueprintValidation();
  const missing = [];
  let firstMissingElement = null;

  blueprintRequiredFields.forEach(([name, label]) => {
    const field = blueprintForm.elements[name];
    if (!field || !String(field.value || "").trim()) {
      missing.push(label);
      field?.closest("label")?.classList.add("is-invalid");
      firstMissingElement ||= field;
    }
  });

  blueprintQuestionGroups.forEach(([name, label]) => {
    const selected = blueprintForm.querySelector(`input[name="${name}"]:checked`);
    const firstInput = blueprintForm.querySelector(`input[name="${name}"]`);
    if (!selected) {
      missing.push(label);
      firstInput?.closest("fieldset")?.classList.add("is-invalid");
      firstMissingElement ||= firstInput;
    }
  });

  if (!missing.length) {
    clearBlueprintError();
    return { isValid: true, missing: [] };
  }

  showBlueprintError(`${messagePrefix} Missing: ${missing.join(", ")}.`, firstMissingElement);
  firstMissingElement?.focus({ preventScroll: true });
  return { isValid: false, missing };
}

function pickArchetype(data) {
  const scores = { leader: 0, thinker: 0, creator: 0, empath: 0 };
  if (data.get("leadership") === "charge") scores.leader += 3;
  if (data.get("leadership") === "supports") scores.empath += 3;
  if (data.get("leadership") === "observes") scores.thinker += 2;
  if (data.get("leadership") === "alone") scores.thinker += 2;
  if (data.get("creativity") === "makes") scores.creator += 3;
  if (data.get("creativity") === "asks") scores.thinker += 1;
  if (data.get("confidence") === "talks") scores.leader += 2;
  if (data.get("confidence") === "observes") scores.thinker += 2;
  if (data.get("confidence") === "encourage") scores.empath += 1;
  if (data.get("correction") === "accepts") scores.empath += 2;
  if (data.get("correction") === "argues") scores.leader += 1;
  if (data.get("correction") === "quiet") scores.thinker += 1;
  if (data.get("problemSolving") === "tries") scores.thinker += 2;
  if (data.get("problemSolving") === "pause") scores.thinker += 1;
  if (data.get("focus") === "creative") scores.creator += 2;
  if (data.get("focus") === "finishes") scores.leader += 1;
  if (data.get("empathy") === "comforts") scores.empath += 3;
  if (data.get("empathy") === "asks") scores.empath += 2;
  if (data.get("learning") === "curious") scores.thinker += 2;
  if (data.get("learning") === "story") scores.creator += 2;
  if (data.get("learning") === "practice") scores.leader += 1;
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return {
    key: sorted[0][0],
    confidence: Math.min(72 + sorted[0][1] * 3 + Math.floor(Math.random() * 7), 96),
  };
}

function scoreSet(data, archetypeKey) {
  const base = {
    "Curiosity Signal": 74,
    "Confidence Signal": 70,
    "Creativity Signal": 76,
    "Communication Signal": 70,
    "Calmness Signal": 72,
  };
  if (archetypeKey === "leader") base["Confidence Signal"] += 13;
  if (archetypeKey === "thinker") base["Curiosity Signal"] += 13;
  if (archetypeKey === "creator") base["Creativity Signal"] += 14;
  if (archetypeKey === "empath") base["Calmness Signal"] += 12;
  if (data.get("confidence") === "talks") base["Communication Signal"] += 9;
  if (data.get("creativity") === "makes") base["Creativity Signal"] += 7;
  if (data.get("problemSolving") === "tries") base["Curiosity Signal"] += 5;
  if (data.get("focus") === "finishes") base["Calmness Signal"] += 5;
  return Object.fromEntries(Object.entries(base).map(([key, value]) => [key, Math.min(value + Math.floor(Math.random() * 5), 94)]));
}

function actionPlanSet(data, archetypeKey) {
  const plans = {
    leader: ["Give one small responsibility at home each day", "Practice turn-taking games to build listening", "Praise thoughtful decisions, not only winning"],
    thinker: ["Ask one open-ended question at dinner", "Let your child explain how they solved something", "Encourage sharing ideas in short, low-pressure moments"],
    creator: ["Offer one weekly creative challenge", "Use a simple finish-before-new-project rule", "Keep a small idea notebook for drawings and stories"],
    empath: ["Invite your child to express one feeling daily", "Use role-play to build confidence", "Celebrate helpfulness while also encouraging self-expression"],
  };
  const selected = [...plans[archetypeKey]];
  if (data.get("focus") === "reminders") selected.push("Use a visual routine chart for homework or tasks");
  if (data.get("confidence") === "encourage") selected.push("Give gentle rehearsal before social situations");
  if (data.get("problemSolving") === "frustrated") selected.push("Teach a pause-breathe-try-again routine");
  return selected.slice(0, 4);
}

function benchmarkSet(data, archetypeKey) {
  const labels = {
    leader: ["Leadership readiness", "Decision confidence", "Team initiative"],
    thinker: ["Curiosity depth", "Problem-solving patience", "Pattern spotting"],
    creator: ["Idea fluency", "Creative expression", "Imagination strength"],
    empath: ["Empathy awareness", "Team sensitivity", "Emotional understanding"],
  }[archetypeKey];
  return labels.map((label, index) => {
    const value = 68 + Math.floor(Math.random() * 24) - index * 3;
    const band = value >= 84 ? "strongly visible" : value >= 75 ? "developing well" : "emerging";
    return `${label}: ${band}`;
  });
}

function sfisAssistSet(data, archetypeKey) {
  const support = {
    leader: [
      "Leadership opportunities through classroom responsibilities, presentations, and group activities",
      "Sports and team tasks to channel confidence into cooperation",
      "Teacher mentoring to strengthen patience, listening, and respectful communication",
    ],
    thinker: [
      "Concept-based academics, robotics, and computer lab exposure to encourage inquiry",
      "Project work where questions, observation, and problem-solving are valued",
      "Communication practice so thoughtful ideas are expressed with confidence",
    ],
    creator: [
      "Open-ended activities, arts, theater, and project-based learning for creative expression",
      "Structured routines that help ideas turn into completed work",
      "Future-skills exposure through technology, design thinking, and presentation opportunities",
    ],
    empath: [
      "A caring classroom culture that values kindness, teamwork, and emotional awareness",
      "Yoga, gardens, and activity spaces that support calm confidence",
      "Small-group participation to help the child speak up gradually and safely",
    ],
  };
  const selected = [...support[archetypeKey]];
  if (data.get("focus") === "reminders") selected.push("Digital parent updates and guided routines can help maintain consistency between school and home");
  if (data.get("confidence") === "encourage" || data.get("confidence") === "hides") selected.push("Stage exposure, speaking opportunities, and teacher encouragement can build social confidence over time");
  if (data.get("creativity") === "makes") selected.push("Robotics, open-air theater, and creative challenges can give imagination a productive direction");
  if (data.get("problemSolving") === "tries") selected.push("STEM activities can nurture persistence and problem-solving habits");
  return selected.slice(0, 5);
}

function supportFitSet(scores, assistCount) {
  const values = Object.values(scores);
  const averageSignal = Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  const supportCoverage = Math.min(assistCount * 4, 20);
  const score = Math.min(Math.round(averageSignal * 0.8 + supportCoverage), 95);
  return {
    score,
    factors: [
      `Growth signal average: ${averageSignal}%`,
      `SFIS support areas identified: ${assistCount}`,
      "Support areas considered: projects, communication, sports, technology, mentoring, and wellbeing",
      "This is a guidance indicator for parent discussion, not a selection result",
    ],
  };
}

const answerLabels = {
  correction: {
    accepts: "Accepts quickly",
    upset: "Gets upset",
    argues: "Argues",
    quiet: "Becomes quiet",
  },
  confidence: {
    talks: "Starts talking immediately",
    observes: "Waits to observe",
    hides: "Hides behind parents",
    encourage: "Needs encouragement",
  },
  leadership: {
    charge: "Takes charge",
    supports: "Supports others",
    observes: "Observes",
    alone: "Prefers working alone",
  },
  creativity: {
    makes: "Makes something new",
    normal: "Uses it normally",
    ignores: "Ignores it",
    asks: "Asks what to do",
  },
  problemSolving: {
    tries: "Keeps trying different ways",
    help: "Asks for help quickly",
    pause: "Takes a break and returns",
    frustrated: "Gets frustrated",
  },
  focus: {
    finishes: "Finishes with focus",
    reminders: "Needs reminders",
    creative: "Adds creative ideas",
    rushes: "Rushes to finish",
  },
  empathy: {
    comforts: "Tries to comfort them",
    asks: "Asks what happened",
    watches: "Watches quietly",
    moves: "Moves away",
  },
  learning: {
    curious: "Asks many questions",
    practice: "Learns by practice",
    visual: "Learns by seeing examples",
    story: "Learns through stories",
  },
};

function answerSummarySet(data) {
  const questions = [
    ["When corrected", "correction"],
    ["Meeting new people", "confidence"],
    ["Group activities", "leadership"],
    ["Creative play", "creativity"],
    ["Difficult puzzle", "problemSolving"],
    ["Homework or tasks", "focus"],
    ["Another child is upset", "empathy"],
    ["Learning something new", "learning"],
  ];
  return questions.map(([label, key]) => `${label}: ${answerLabels[key][data.get(key)] || "Not selected"}`);
}

function renderBlueprint() {
  if (!latestBlueprint || !blueprintReport) return;
  const archetype = archetypes[latestBlueprint.archetypeKey];
  blueprintReport.querySelector('[data-report="archetype"]').textContent = archetype.name;
  blueprintReport.querySelector('[data-report="summary"]').textContent = archetype.summary;
  blueprintReport.querySelector('[data-report="archetypeScore"]').textContent = `${latestBlueprint.archetypeScore}%`;
  blueprintReport.querySelector('[data-report="answers"]').innerHTML = latestBlueprint.answers.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="superpowers"]').innerHTML = archetype.superpowers.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="challenges"]').innerHTML = archetype.challenges.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="actionPlan"]').innerHTML = latestBlueprint.actionPlan.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="benchmark"]').innerHTML = latestBlueprint.benchmark.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="sfisAssist"]').innerHTML = latestBlueprint.sfisAssist.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="fitFactors"]').innerHTML = latestBlueprint.fitFactors.map((item) => `<li>${item}</li>`).join("");
  blueprintReport.querySelector('[data-report="scores"]').innerHTML = Object.entries(latestBlueprint.scores)
    .map(([label, value]) => `<div class="score-row"><div><span>${label}</span><strong>${value}%</strong></div><div class="score-track"><span style="--score:${value}%"></span></div></div>`)
    .join("");
  blueprintReport.querySelector('[data-report="match"]').textContent = `${latestBlueprint.match}%`;
  blueprintReport.hidden = false;
  blueprintReport.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSavedSparkPreview() {
  const preview = document.querySelector(".spark-preview");
  if (!preview) return;

  let savedReport = null;
  try {
    savedReport = JSON.parse(localStorage.getItem(savedBlueprintKey) || "null");
  } catch (error) {
    savedReport = null;
  }

  if (!savedReport || !archetypes[savedReport.archetypeKey]) return;

  const archetype = archetypes[savedReport.archetypeKey];
  const badge = preview.querySelector('[data-spark="badge"]');
  const title = preview.querySelector('[data-spark="title"]');
  const score = preview.querySelector('[data-spark="score"]');
  const scoreLabel = preview.querySelector('[data-spark="scoreLabel"]');
  const list = preview.querySelector('[data-spark="list"]');

  if (badge) badge.textContent = "Latest report";
  if (title) title.textContent = `${savedReport.childName || "Your child"}'s Future Spark summary`;
  if (score) score.textContent = `${savedReport.archetypeScore}%`;
  if (scoreLabel) scoreLabel.textContent = `${archetype.name} - Strength Pattern Match`;
  if (list) {
    list.innerHTML = "";
    [
      archetype.summary,
      `SFIS Support Readiness: ${savedReport.match}%`,
      "Open the AI Report page to download or regenerate the full report",
    ].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
}

renderSavedSparkPreview();

let latestChallenge = null;
let selectedChallengeQuestions = [];

const challengeQuestionBank = [
  {
    round: 1,
    field: "iq",
    title: "IQ Questions",
    questions: [
      {
        prompt: "Which one does not belong with the others?",
        options: [["Apple", 0], ["Mango", 0], ["Chair", 20], ["Banana", 0]],
      },
      {
        prompt: "What comes next: 2, 4, 6, 8, __?",
        options: [["9", 0], ["10", 20], ["11", 0], ["12", 0]],
      },
      {
        prompt: "Which shape has three sides?",
        options: [["Circle", 0], ["Triangle", 20], ["Square", 0], ["Rectangle", 0]],
      },
      {
        prompt: "If all bloops are red and this is a bloop, what color is it?",
        options: [["Blue", 0], ["Green", 0], ["Red", 20], ["Yellow", 0]],
      },
      {
        prompt: "Which word is the opposite of heavy?",
        options: [["Tall", 0], ["Light", 20], ["Fast", 0], ["Round", 0]],
      },
      {
        prompt: "Which number is the smallest?",
        options: [["17", 0], ["9", 20], ["21", 0], ["13", 0]],
      },
      {
        prompt: "A clock shows 3 o'clock. Which hand points at 3?",
        options: [["Minute hand", 0], ["Hour hand", 20], ["Second hand", 0], ["No hand", 0]],
      },
      {
        prompt: "Which pair goes together like pencil and paper?",
        options: [["Spoon and shoe", 0], ["Brush and paint", 20], ["Cup and tree", 0], ["Ball and book", 0]],
      },
      {
        prompt: "What comes next: A, B, C, D, __?",
        options: [["E", 20], ["G", 0], ["Z", 0], ["A", 0]],
      },
      {
        prompt: "Which item is used to measure time?",
        options: [["Ruler", 0], ["Clock", 20], ["Bottle", 0], ["Plate", 0]],
      },
    ],
  },
  {
    round: 2,
    field: "observation",
    title: "Observation Challenge",
    questions: [
      {
        prompt: "Look carefully: teal, gold, teal, blue. Which color appears twice?",
        options: [["Teal", 20], ["Gold", 0], ["Blue", 0], ["All colors", 0]],
      },
      {
        prompt: "Spot the odd one: STAR, STAR, START, STAR.",
        options: [["First", 0], ["Second", 0], ["Third", 20], ["Fourth", 0]],
      },
      {
        prompt: "Which word has double letters: apple, kite, sun, dog?",
        options: [["Apple", 20], ["Kite", 0], ["Sun", 0], ["Dog", 0]],
      },
      {
        prompt: "Count the circles: OO OOO O. How many circles are there?",
        options: [["5", 0], ["6", 20], ["7", 0], ["8", 0]],
      },
      {
        prompt: "Which number is repeated: 4, 7, 2, 7, 9?",
        options: [["4", 0], ["7", 20], ["2", 0], ["9", 0]],
      },
      {
        prompt: "Which word is different: cat, bat, hat, pen?",
        options: [["Cat", 0], ["Bat", 0], ["Hat", 0], ["Pen", 20]],
      },
      {
        prompt: "Look at the pattern: red, blue, red, blue. What should come next?",
        options: [["Red", 20], ["Blue", 0], ["Green", 0], ["Gold", 0]],
      },
      {
        prompt: "Which letter is missing: A, B, __, D?",
        options: [["C", 20], ["E", 0], ["F", 0], ["Z", 0]],
      },
      {
        prompt: "Which item is usually found in a garden?",
        options: [["Flower", 20], ["Pillow", 0], ["Remote", 0], ["Helmet", 0]],
      },
      {
        prompt: "Which is the only animal word: table, chair, tiger, pencil?",
        options: [["Table", 0], ["Chair", 0], ["Tiger", 20], ["Pencil", 0]],
      },
    ],
  },
  {
    round: 3,
    field: "math",
    title: "Fun Math",
    questions: [
      {
        prompt: "If 6 birds sit on a tree and 4 more join them, how many birds are there?",
        options: [["8", 0], ["10", 20], ["12", 0], ["14", 0]],
      },
      {
        prompt: "What is 5 + 7?",
        options: [["10", 0], ["11", 0], ["12", 20], ["13", 0]],
      },
      {
        prompt: "Ria has 10 candies and gives 3 to a friend. How many are left?",
        options: [["6", 0], ["7", 20], ["8", 0], ["9", 0]],
      },
      {
        prompt: "Which number is even?",
        options: [["5", 0], ["7", 0], ["8", 20], ["9", 0]],
      },
      {
        prompt: "What is double of 4?",
        options: [["6", 0], ["8", 20], ["10", 0], ["12", 0]],
      },
      {
        prompt: "There are 3 boxes with 2 balls in each. How many balls are there?",
        options: [["5", 0], ["6", 20], ["7", 0], ["8", 0]],
      },
      {
        prompt: "What comes before 50?",
        options: [["48", 0], ["49", 20], ["51", 0], ["59", 0]],
      },
      {
        prompt: "A triangle has 3 sides. How many sides do 2 triangles have together?",
        options: [["5", 0], ["6", 20], ["7", 0], ["8", 0]],
      },
      {
        prompt: "Which is greater: 14 or 41?",
        options: [["14", 0], ["41", 20], ["Both same", 0], ["None", 0]],
      },
      {
        prompt: "If you count by 5s, what comes after 15?",
        options: [["16", 0], ["20", 20], ["25", 0], ["30", 0]],
      },
    ],
  },
  {
    round: 4,
    field: "reading",
    title: "Reading Skills",
    questions: [
      {
        prompt: "Read: Ria planted a seed and watered it every morning. What did Ria plant?",
        options: [["A seed", 20], ["A book", 0], ["A toy", 0], ["A pencil", 0]],
      },
      {
        prompt: "Read: Aman packed his bag before school. What did Aman pack?",
        options: [["His lunch", 0], ["His bag", 20], ["His shoes", 0], ["His cap", 0]],
      },
      {
        prompt: "Read: The little robot helped Tara clean the table. Who helped Tara?",
        options: [["A teacher", 0], ["A robot", 20], ["A bird", 0], ["A friend", 0]],
      },
      {
        prompt: "Read: Neel wore a raincoat because it was raining. Why did Neel wear a raincoat?",
        options: [["It was sunny", 0], ["It was raining", 20], ["It was night", 0], ["It was hot", 0]],
      },
      {
        prompt: "Read: The class clapped when Meera finished her poem. What did Meera finish?",
        options: [["A race", 0], ["A poem", 20], ["A puzzle", 0], ["A drawing", 0]],
      },
      {
        prompt: "Read: Kabir shared his crayons with a new student. What did Kabir share?",
        options: [["Crayons", 20], ["Books", 0], ["Shoes", 0], ["Flowers", 0]],
      },
      {
        prompt: "Read: A soft wind moved the yellow kite higher. What moved the kite?",
        options: [["A wind", 20], ["A car", 0], ["A drum", 0], ["A clock", 0]],
      },
      {
        prompt: "Read: Sia smiled after solving the puzzle. Why did Sia smile?",
        options: [["She slept", 0], ["She solved the puzzle", 20], ["She lost a toy", 0], ["She ran away", 0]],
      },
      {
        prompt: "Read: The gardener watered the plants before lunch. Who watered the plants?",
        options: [["The gardener", 20], ["The cook", 0], ["The driver", 0], ["The doctor", 0]],
      },
      {
        prompt: "Read: The team built a small bridge using blocks. What did the team build?",
        options: [["A bridge", 20], ["A kite", 0], ["A bus", 0], ["A song", 0]],
      },
    ],
  },
  {
    round: 5,
    field: "creativityChallenge",
    title: "Creativity Questions",
    questions: [
      {
        prompt: "If you could invent something for your school, what would you choose?",
        options: [["A helpful learning robot", 20], ["A magic library corner", 18], ["A garden science lab", 18], ["A new sports game", 16]],
      },
      {
        prompt: "A cardboard box is placed in front of you. What would you make?",
        options: [["A spaceship classroom", 20], ["A reading cave", 18], ["A toy house", 18], ["A storage box", 14]],
      },
      {
        prompt: "If your classroom had a new corner, what should it be?",
        options: [["Idea lab", 20], ["Art wall", 18], ["Quiet reading spot", 18], ["Bag shelf", 14]],
      },
      {
        prompt: "Which project sounds most exciting?",
        options: [["Build a tiny city", 20], ["Design a story book", 18], ["Plant a mini garden", 18], ["Copy a worksheet", 12]],
      },
      {
        prompt: "If you found a strange button, what would you do first?",
        options: [["Ask what it does and test safely", 20], ["Draw it", 18], ["Tell a story about it", 18], ["Ignore it", 12]],
      },
      {
        prompt: "What would you create for a school exhibition?",
        options: [["A working model", 20], ["A handmade poster", 18], ["A poem corner", 18], ["A plain chart", 14]],
      },
      {
        prompt: "If a friend cannot understand a game, what would you do?",
        options: [["Create a simple new rule", 20], ["Explain with examples", 18], ["Show by playing", 18], ["Stop playing", 10]],
      },
      {
        prompt: "Which idea feels most imaginative?",
        options: [["A talking science wall", 20], ["A story garden", 18], ["A kindness mailbox", 18], ["A normal notice board", 12]],
      },
      {
        prompt: "How would you make morning assembly more interesting?",
        options: [["Add student idea showcases", 20], ["Add music and stories", 18], ["Add quick quiz rounds", 18], ["Keep it exactly same", 10]],
      },
      {
        prompt: "If you could solve one school problem, what would you design?",
        options: [["A smart lost-and-found system", 20], ["A clean campus club", 18], ["A buddy help desk", 18], ["A bigger bell", 12]],
      },
    ],
  },
];

function pickChallengeQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function renderChallengeQuestions() {
  if (!challengeForm) return;
  selectedChallengeQuestions = challengeQuestionBank.map((round) => ({ ...round, ...pickChallengeQuestion(round.questions) }));
  selectedChallengeQuestions.forEach((question) => {
    const fieldset = challengeForm.querySelector(`.challenge-round[data-round="${question.round}"]`);
    if (!fieldset) return;
    fieldset.textContent = "";

    const legend = document.createElement("legend");
    const roundLabel = document.createElement("span");
    roundLabel.textContent = `Round ${question.round}`;
    legend.append(roundLabel, ` ${question.title}`);

    const prompt = document.createElement("p");
    prompt.textContent = question.prompt;

    fieldset.append(legend, prompt);
    question.options.forEach(([text, score], index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.field;
      input.value = String(score);
      input.required = index === 0;
      label.append(input, text);
      fieldset.appendChild(label);
    });
  });
}

function updateChallengeProgress() {
  if (!challengeForm || !challengeProgress) return;
  const fields = [
    "challengeFatherName",
    "challengeChild",
    "challengeFatherMobile",
    "challengeFatherEmail",
    "challengeAge",
    "iq",
    "observation",
    "math",
    "reading",
    "creativityChallenge",
  ];
  const data = new FormData(challengeForm);
  const completed = fields.filter((field) => String(data.get(field) || "").trim()).length;
  challengeProgress.style.width = `${Math.round(completed / fields.length * 100)}%`;
}

function showChallengeError(message, target = challengeForm.querySelector(".challenge-error")) {
  if (!target) return;
  target.textContent = message;
  target.hidden = false;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearChallengeErrors() {
  document.querySelectorAll(".challenge-error").forEach((error) => {
    error.hidden = true;
    error.textContent = "";
  });
}

function challengeAward(score) {
  if (score >= 86) {
    return {
      title: "Gold Explorer",
      message: "Outstanding focus, observation, reading, and creative thinking.",
    };
  }
  if (score >= 66) {
    return {
      title: "Silver Explorer",
      message: "Strong effort with bright thinking and growing confidence.",
    };
  }
  return {
    title: "Bronze Explorer",
    message: "A wonderful start with curiosity, courage, and imagination.",
  };
}

function validateChallenge() {
  if (!challengeForm) return false;
  clearChallengeErrors();
  const data = new FormData(challengeForm);
  const missing = [];
  const fatherEmail = String(data.get("challengeFatherEmail") || "").trim();
  const fatherMobile = String(data.get("challengeFatherMobile") || "").trim();
  if (!String(data.get("challengeFatherName") || "").trim()) missing.push("father name");
  if (!String(data.get("challengeChild") || "").trim()) missing.push("child name");
  if (!fatherMobile) missing.push("mobile number");
  if (!fatherEmail) missing.push("father email");
  if (!String(data.get("challengeAge") || "").trim()) missing.push("age");
  ["iq", "observation", "math", "reading", "creativityChallenge"].forEach((field) => {
    if (!data.get(field)) missing.push(field === "creativityChallenge" ? "creativity round" : `${field} round`);
  });
  if (missing.length) {
    showChallengeError(`Please complete ${missing.join(", ")} before revealing the result.`);
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fatherEmail)) {
    showChallengeError("Please enter a valid father email before revealing the result.");
    return false;
  }
  if (!/^\+?\d[\d\s-]{7,14}\d$/.test(fatherMobile)) {
    showChallengeError("Please enter a valid mobile number before revealing the result.");
    return false;
  }
  return true;
}

function loadCertificateImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function drawWrappedCanvasText(ctx, value, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = String(value).split(/\s+/);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(nextLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = nextLine;
    }
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((text, index) => {
    ctx.fillText(index === maxLines - 1 && lines.length > maxLines ? `${text}...` : text, x, y + index * lineHeight);
  });
}

function drawCanvasRoundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

async function assetToDataUrl(src) {
  try {
    const response = await fetch(src);
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    return src;
  }
}

async function createCertificateImageBlob() {
  const name = latestChallenge?.childName || "Young Explorer";
  const award = latestChallenge?.award || "Future Explorer Award";
  const score = latestChallenge?.score || 0;
  const sealUrl = new URL("assets/sfis_seal.png", window.location.href).href;
  const sealHref = await assetToDataUrl(sealUrl);
  const xml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const splitSvgText = (value, maxChars = 24, maxLines = 2) => {
    const words = String(value || "").trim().split(/\s+/).filter(Boolean);
    const lines = [];
    let current = "";
    words.forEach((word) => {
      const next = current ? `${current} ${word}` : word;
      if (next.length > maxChars && current) {
        lines.push(current);
        current = word;
      } else {
        current = next;
      }
    });
    if (current) lines.push(current);
    if (!lines.length) lines.push("Young Explorer");
    return lines.slice(0, maxLines);
  };
  const nameLines = splitSvgText(name, 24, 2);
  const nameFontSize = nameLines.length > 1 ? 48 : String(name).length > 24 ? 56 : 64;
  const nameText = nameLines
    .map((line, index) => `<tspan x="800" dy="${index === 0 ? 0 : nameFontSize + 8}">${xml(line)}</tspan>`)
    .join("");
  const nameStartY = nameLines.length > 1 ? 502 : 532;
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1120" viewBox="0 0 1600 1120">
  <defs>
    <linearGradient id="sfisBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#07110f"/>
      <stop offset="0.42" stop-color="#12332d"/>
      <stop offset="1" stop-color="#f0bd4f"/>
    </linearGradient>
    <clipPath id="sealClip"><circle cx="1320" cy="220" r="70"/></clipPath>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#07110f" flood-opacity="0.24"/>
    </filter>
  </defs>
  <rect width="1600" height="1120" fill="url(#sfisBg)"/>
  <circle cx="230" cy="190" r="210" fill="#2adbb4" opacity="0.16"/>
  <circle cx="1400" cy="920" r="270" fill="#ffffff" opacity="0.09"/>
  <rect x="80" y="80" width="1440" height="960" rx="36" fill="#fbfff8" filter="url(#softShadow)"/>
  <rect x="80" y="80" width="1440" height="960" rx="36" fill="none" stroke="#2adbb4" stroke-width="8"/>
  <rect x="122" y="122" width="1356" height="876" fill="none" stroke="#f0bd4f" stroke-width="4"/>
  <text x="800" y="190" text-anchor="middle" fill="#07110f" font-family="Arial, sans-serif" font-size="40" font-weight="900">Stone Field International School</text>
  <text x="800" y="228" text-anchor="middle" fill="#51615c" font-family="Arial, sans-serif" font-size="21" font-weight="700">Future Explorer Challenge 2026</text>
  <circle cx="1320" cy="220" r="70" fill="#07110f"/>
  <text x="1320" y="236" text-anchor="middle" fill="#f0bd4f" font-family="Arial, sans-serif" font-size="34" font-weight="900">SFIS</text>
  <image href="${xml(sealHref)}" x="1250" y="150" width="140" height="140" preserveAspectRatio="xMidYMid slice" clip-path="url(#sealClip)"/>
  <circle cx="1320" cy="220" r="78" fill="none" stroke="#f0bd4f" stroke-width="8"/>
  <text x="800" y="360" text-anchor="middle" fill="#f0bd4f" font-family="Arial, sans-serif" font-size="60" font-weight="900">Future Explorer Award</text>
  <text x="800" y="430" text-anchor="middle" fill="#51615c" font-family="Arial, sans-serif" font-size="25" font-weight="700">Presented to</text>
  <text x="800" y="${nameStartY}" text-anchor="middle" fill="#07110f" font-family="Arial, sans-serif" font-size="${nameFontSize}" font-weight="900">${nameText}</text>
  <text x="800" y="675" text-anchor="middle" fill="#51615c" font-family="Arial, sans-serif" font-size="25" font-weight="700">for successfully completing the</text>
  <text x="800" y="728" text-anchor="middle" fill="#12332d" font-family="Arial, sans-serif" font-size="30" font-weight="900">Stone Field International School Future Explorer Challenge</text>
  <rect x="560" y="790" width="480" height="66" rx="33" fill="#07110f"/>
  <text x="800" y="833" text-anchor="middle" fill="#2adbb4" font-family="Arial, sans-serif" font-size="27" font-weight="900">${xml(award)} | Score ${xml(score)}%</text>
  <line x1="610" y1="910" x2="990" y2="910" stroke="#c6b16b" stroke-width="3"/>
  <text x="800" y="948" text-anchor="middle" fill="#51615c" font-family="Arial, sans-serif" font-size="18" font-weight="700">Young Genius Award 2026</text>
</svg>`;
  return new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
}

renderChallengeQuestions();
challengeForm?.addEventListener("input", updateChallengeProgress);
challengeForm?.addEventListener("change", updateChallengeProgress);

challengeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateChallenge()) return;
  const data = new FormData(challengeForm);
  const score = ["iq", "observation", "math", "reading", "creativityChallenge"].reduce((total, field) => total + Number(data.get(field) || 0), 0);
  const award = challengeAward(score);
  latestChallenge = {
    fatherName: String(data.get("challengeFatherName") || "").trim(),
    childName: String(data.get("challengeChild") || "").trim(),
    mobile: String(data.get("challengeFatherMobile") || "").trim(),
    email: String(data.get("challengeFatherEmail") || "").trim(),
    age: data.get("challengeAge"),
    questions: selectedChallengeQuestions.map((question) => question.prompt),
    score,
    award: award.title,
  };
  submitChallengeToGoogleForm(data);
  challengeResult.querySelector("[data-challenge-result]").textContent = award.title;
  challengeResult.querySelector("[data-challenge-score]").textContent = `${score}%`;
  challengeResult.querySelector("[data-challenge-message]").textContent = award.message;
  if (certificateForm?.elements.certificateEmail) {
    certificateForm.elements.certificateEmail.value = latestChallenge.email;
  }
  challengeResult.hidden = false;
  challengeResult.scrollIntoView({ behavior: "smooth", block: "start" });
});

certificateForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearChallengeErrors();
  const email = String(new FormData(certificateForm).get("certificateEmail") || "").trim();
  const error = certificateForm.querySelector("[data-certificate-error]");
  if (!latestChallenge) {
    showChallengeError("Please complete the challenge before downloading the certificate.", error);
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showChallengeError("Please enter a valid parent email to download the certificate.", error);
    return;
  }
  const childName = safeDownloadName(latestChallenge.childName);
  const button = certificateForm.querySelector("button");
  const previousText = button?.textContent || "Download Certificate";
  if (button) {
    button.disabled = true;
    button.textContent = "Creating Certificate...";
  }
  try {
    const certificate = await createCertificateImageBlob();
    if (!certificate) throw new Error("Certificate image was empty.");
    downloadBlob(certificate, `SFIS-Future-Explorer-Certificate-${childName}.svg`);
  } catch (error) {
    showChallengeError("Certificate could not be created. Please try again.", certificateForm.querySelector("[data-certificate-error]"));
    console.warn("Certificate download failed.", error);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = previousText;
    }
  }
});

blueprintForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateBlueprintForm().isValid) return;

  const data = new FormData(blueprintForm);
  const archetypeResult = pickArchetype(data);
  const archetypeKey = archetypeResult.key;
  const scores = scoreSet(data, archetypeKey);
  const sfisAssist = sfisAssistSet(data, archetypeKey);
  const fit = supportFitSet(scores, sfisAssist.length);
  latestBlueprint = {
    fatherName: data.get("fatherName"),
    childName: data.get("childName"),
    fatherMobile: data.get("fatherMobile"),
    parentEmail: data.get("parentEmail"),
    age: data.get("age"),
    gender: data.get("gender"),
    subject: data.get("subject"),
    activity: data.get("activity"),
    birthMonth: data.get("birthMonth"),
    birthOrder: data.get("birthOrder"),
    archetypeKey,
    archetypeScore: archetypeResult.confidence,
    answers: answerSummarySet(data),
    scores,
    actionPlan: actionPlanSet(data, archetypeKey),
    benchmark: benchmarkSet(data, archetypeKey),
    sfisAssist,
    fitFactors: fit.factors,
    match: fit.score,
  };
  latestBlueprintSignature = getBlueprintFormSignature(data);
  saveLatestBlueprint();
  submitBlueprintToGoogleForm(data);
  renderBlueprint();
  if (blueprintLeadForm) {
    blueprintLeadForm.elements.parentName.value = latestBlueprint.fatherName || "";
    blueprintLeadForm.elements.mobile.value = latestBlueprint.fatherMobile || "";
    blueprintLeadForm.elements.email.value = latestBlueprint.parentEmail || "";
  }
  blueprintGate.hidden = false;
});

blueprintForm?.addEventListener("input", (event) => {
  event.target.closest("label")?.classList.remove("is-invalid");
  event.target.closest("fieldset")?.classList.remove("is-invalid");
  if (!blueprintForm.querySelector(".is-invalid")) clearBlueprintError();
});

blueprintForm?.addEventListener("change", (event) => {
  event.target.closest("label")?.classList.remove("is-invalid");
  event.target.closest("fieldset")?.classList.remove("is-invalid");
  if (!blueprintForm.querySelector(".is-invalid")) clearBlueprintError();
});

blueprintLeadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(blueprintLeadForm);
  renderBlueprint();
  const parentName = data.get("parentName") || latestBlueprint?.fatherName || "";
  const mobile = data.get("mobile") || latestBlueprint?.fatherMobile || "";
  const email = data.get("email") || latestBlueprint?.parentEmail || "";
  const message = encodeURIComponent(
    `Hello Stone Field International School, I completed the Future Spark AI Report and would like to register my child for the priority admission interest list for next year. Parent: ${parentName}, Mobile: ${mobile}, Email: ${email}, Child: ${latestBlueprint?.childName}, Age: ${latestBlueprint?.age}, Archetype: ${archetypes[latestBlueprint?.archetypeKey]?.name}, SFIS Support Readiness: ${latestBlueprint?.match}%.`
  );
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
});

printBlueprintButton?.addEventListener("click", () => {
  downloadBlueprintPdf();
});

function pdfSafeText(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[^\x20-\x7e]/g, "'")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapPdfLine(line, width = 86) {
  const words = String(line).split(/\s+/);
  const lines = [];
  let current = "";
  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > width && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function buildBlueprintPdfLines() {
  if (!latestBlueprint) return ["Please generate the assessment report first."];
  const archetype = archetypes[latestBlueprint.archetypeKey];
  const lines = [
    "Future Spark AI Report",
    "Stone Field International School",
    `Generated: ${new Date().toLocaleDateString()}`,
    "",
    "Child Profile",
    `Father Name: ${latestBlueprint.fatherName}`,
    `Name: ${latestBlueprint.childName}`,
    `Mobile: ${latestBlueprint.fatherMobile}`,
    `Email: ${latestBlueprint.parentEmail}`,
    `Age: ${latestBlueprint.age}`,
    `Gender: ${latestBlueprint.gender}`,
    `Favourite Subject: ${latestBlueprint.subject}`,
    `Favourite Activity: ${latestBlueprint.activity}`,
    `Birth Month: ${latestBlueprint.birthMonth}`,
    `Birth Order: ${latestBlueprint.birthOrder}`,
    "",
    "Questionnaire Summary",
    ...latestBlueprint.answers.map((item) => `- ${item}`),
    "",
    "AI Archetype",
    `${archetype.name} (${latestBlueprint.archetypeScore}% Strength Pattern Match)`,
    archetype.summary,
    "",
    "Hidden Superpowers",
    ...archetype.superpowers.map((item) => `- ${item}`),
    "",
    "Potential Challenges",
    ...archetype.challenges.map((item) => `- ${item}`),
    "",
    "Suggested Parent Nudges",
    ...latestBlueprint.actionPlan.map((item) => `- ${item}`),
    "",
    "Observed Growth Signals",
    ...latestBlueprint.benchmark.map((item) => `- ${item}`),
    "",
    "Growth Signal Snapshot",
    ...Object.entries(latestBlueprint.scores).map(([label, value]) => `- ${label}: ${value}%`),
    "",
    "SFIS Support Readiness",
    `${latestBlueprint.match}%`,
    "This is a guidance indicator for parent discussion, not an admission decision or a fixed judgement.",
    "",
    "How This Score Was Estimated",
    ...latestBlueprint.fitFactors.map((item) => `- ${item}`),
    "",
    "How SFIS Can Assist Your Child's Progress",
    ...latestBlueprint.sfisAssist.map((item) => `- ${item}`),
  ];
  return lines.flatMap((line) => (line ? wrapPdfLine(line) : [""]));
}

function createPdfBlob(lines) {
  const pageLineLimit = 48;
  const pages = [];
  for (let i = 0; i < lines.length; i += pageLineLimit) {
    pages.push(lines.slice(i, i + pageLineLimit));
  }

  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  addObject("<< /Type /Catalog /Pages 2 0 R >>");
  addObject("");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  const pageIds = [];
  pages.forEach((pageLines) => {
    const streamLines = ["BT", "/F1 11 Tf", "50 760 Td", "14 TL"];
    pageLines.forEach((line, index) => {
      if (index > 0) streamLines.push("T*");
      streamLines.push(`(${pdfSafeText(line)}) Tj`);
    });
    streamLines.push("ET");
    const stream = streamLines.join("\n");
    const contentId = objects.length + 2;
    const pageId = addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentId} 0 R >>`);
    addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    pageIds.push(pageId);
  });

  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((content, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${content}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function createStyledBlueprintPdfBlob() {
  if (!latestBlueprint) return createPdfBlob(["Please generate the assessment report first."]);
  const archetype = archetypes[latestBlueprint.archetypeKey];
  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };
  const pageStreams = [];
  let stream = [];
  let y = 700;

  const colors = {
    night: [0.027, 0.067, 0.059],
    panel: [0.95, 0.965, 0.93],
    teal: [0.165, 0.86, 0.705],
    gold: [0.94, 0.74, 0.31],
    ink: [0.075, 0.125, 0.11],
    muted: [0.32, 0.39, 0.36],
    white: [1, 1, 1],
  };

  const color = ([r, g, b]) => `${r} ${g} ${b}`;
  const rect = (x, ry, width, height, fill, stroke = null) => {
    stream.push("q");
    if (fill) stream.push(`${color(fill)} rg`);
    if (stroke) stream.push(`${color(stroke)} RG`);
    stream.push(`${x} ${ry} ${width} ${height} re ${stroke ? "B" : "f"}`);
    stream.push("Q");
  };
  const text = (value, x, ty, size = 10, font = "F1", fill = colors.ink) => {
    stream.push("BT");
    stream.push(`/${font} ${size} Tf`);
    stream.push(`${color(fill)} rg`);
    stream.push(`${x} ${ty} Td`);
    stream.push(`(${pdfSafeText(value)}) Tj`);
    stream.push("ET");
  };
  const wrappedText = (value, x, startY, width, size = 10, font = "F1", fill = colors.ink, leading = 13) => {
    const lines = wrapPdfLine(value, Math.max(24, Math.floor(width / (size * 0.52))));
    lines.forEach((line, index) => text(line, x, startY - index * leading, size, font, fill));
    return lines.length * leading;
  };
  const finishPage = () => {
    if (stream.length) pageStreams.push(stream.join("\n"));
    stream = [];
  };
  const startPage = () => {
    finishPage();
    rect(0, 0, 612, 792, colors.panel);
    rect(0, 728, 612, 64, colors.night);
    rect(0, 728, 612, 5, colors.teal);
    text("Future Spark AI Report", 42, 759, 20, "F2", colors.gold);
    text("Stone Field International School", 42, 741, 10, "F1", colors.white);
    text(`Child: ${latestBlueprint.childName || "Student"}`, 360, 759, 10, "F2", colors.white);
    text(`Generated: ${new Date().toLocaleDateString()}`, 360, 742, 9, "F1", colors.white);
    y = 700;
  };
  const ensure = (height) => {
    if (y - height < 48) startPage();
  };
  const sectionCard = (title, lines, accent = colors.teal) => {
    const wrapped = lines.flatMap((line) => wrapPdfLine(line, 82));
    const height = 46 + wrapped.length * 14;
    ensure(height);
    rect(36, y - height, 540, height, colors.white, [0.82, 0.86, 0.8]);
    rect(36, y - height, 6, height, accent);
    text(title, 54, y - 25, 14, "F2", colors.ink);
    wrapped.forEach((line, index) => text(line, 54, y - 46 - index * 14, 9.5, "F1", colors.muted));
    y -= height + 16;
  };
  const scoreBars = () => {
    const entries = Object.entries(latestBlueprint.scores);
    const height = 58 + entries.length * 34;
    ensure(height);
    rect(36, y - height, 540, height, colors.white, [0.82, 0.86, 0.8]);
    rect(36, y - height, 6, height, colors.gold);
    text("Growth Signal Snapshot", 54, y - 25, 14, "F2", colors.ink);
    entries.forEach(([label, value], index) => {
      const rowY = y - 54 - index * 34;
      text(label, 54, rowY, 9.5, "F2", colors.ink);
      text(`${value}%`, 510, rowY, 9.5, "F2", colors.ink);
      rect(54, rowY - 16, 450, 9, [0.88, 0.9, 0.86]);
      rect(54, rowY - 16, Math.round(450 * value / 100), 9, index % 2 ? colors.gold : colors.teal);
    });
    y -= height + 16;
  };

  startPage();

  ensure(118);
  rect(36, y - 112, 540, 112, colors.night);
  text("AI Archetype", 54, y - 28, 10, "F2", colors.teal);
  text(archetype.name, 54, y - 58, 24, "F2", colors.gold);
  wrappedText(archetype.summary, 54, y - 78, 330, 10, "F1", colors.white, 13);
  rect(430, y - 88, 118, 52, [0.12, 0.24, 0.2], colors.teal);
  text("Strength Match", 446, y - 56, 9, "F1", colors.white);
  text(`${latestBlueprint.archetypeScore}%`, 446, y - 78, 22, "F2", colors.gold);
  y -= 130;

  sectionCard("Child Profile", [
    `Father Name: ${latestBlueprint.fatherName}`,
    `Name: ${latestBlueprint.childName}`,
    `Mobile: ${latestBlueprint.fatherMobile}`,
    `Email: ${latestBlueprint.parentEmail}`,
    `Age: ${latestBlueprint.age} | Gender: ${latestBlueprint.gender}`,
    `Favourite Subject: ${latestBlueprint.subject}`,
    `Favourite Activity: ${latestBlueprint.activity}`,
    `Birth Month: ${latestBlueprint.birthMonth} | Birth Order: ${latestBlueprint.birthOrder}`,
  ], colors.gold);

  sectionCard("Questionnaire Summary", latestBlueprint.answers.map((item) => `• ${item}`), colors.teal);
  sectionCard("Hidden Superpowers", archetype.superpowers.map((item) => `• ${item}`), colors.gold);
  sectionCard("Potential Challenges", archetype.challenges.map((item) => `• ${item}`), colors.teal);
  sectionCard("Suggested Parent Nudges", latestBlueprint.actionPlan.map((item) => `• ${item}`), colors.gold);
  sectionCard("Observed Growth Signals", latestBlueprint.benchmark.map((item) => `• ${item}`), colors.teal);
  scoreBars();
  sectionCard("SFIS Support Readiness", [
    `${latestBlueprint.match}%`,
    "This score is a parent discussion indicator, not an admission decision or fixed judgement.",
    ...latestBlueprint.fitFactors.map((item) => `• ${item}`),
  ], colors.gold);
  sectionCard("How SFIS Can Assist Your Child's Progress", latestBlueprint.sfisAssist.map((item) => `• ${item}`), colors.teal);
  finishPage();

  addObject("<< /Type /Catalog /Pages 2 0 R >>");
  addObject("");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  pageStreams.forEach((pageStream) => {
    const contentId = objects.length + 2;
    const pageId = addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`);
    addObject(`<< /Length ${pageStream.length} >>\nstream\n${pageStream}\nendstream`);
    pageIds.push(pageId);
  });
  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((content, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${content}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function safeDownloadName(value) {
  return value ? String(value).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") : "child";
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}

const futureCompassStreams = {
  medical: "Science Medical",
  nonMedical: "Science Non-Medical",
  commerce: "Commerce",
  humanities: "Humanities",
  defence: "Defence",
  creative: "Creative",
  sports: "Sports",
  vocational: "Skill / Vocational",
  agriculture: "Agriculture",
  hospitality: "Hotel & Hospitality",
  aviation: "Aviation",
  emerging: "Emerging AI Careers",
};

const futureCompassTraits = {
  logical: "Logical Thinking",
  creative: "Creativity",
  analytical: "Analytical Ability",
  practical: "Practical Skill",
  communication: "Communication",
  resilience: "Pressure Readiness",
  empathy: "People Understanding",
  leadership: "Leadership",
};

const futureCompassCareers = {
  medical: ["MBBS", "BDS", "Veterinary Science", "Nursing", "Physiotherapy", "Biotechnology", "Genetic Engineering", "Biomedical Engineering", "AI in Healthcare", "Clinical Psychology", "Medical Research", "Pharmacology", "Public Health", "Nutrition", "Occupational Therapy", "Speech Therapy", "Neuroscience", "Radiology", "Medical Coding", "Health Informatics"],
  nonMedical: ["Computer Science Engineering", "AI Engineer", "Machine Learning Engineer", "Robotics Engineer", "Data Scientist", "Cyber Security Expert", "Cloud Engineer", "Drone Engineer", "Space Engineer", "ISRO Scientist", "Civil Engineer", "Mechanical Engineer", "Electronics Engineer", "Semiconductor Engineer", "Embedded Systems Engineer", "Quantum Computing Researcher", "Game Developer", "UI UX Designer", "AR VR Developer", "Digital Twin Engineer"],
  commerce: ["CA", "CS", "CMA", "Investment Banker", "Stock Market Analyst", "Financial Planner", "Economist", "Auditor", "Actuary", "Business Analyst", "Digital Marketing Strategist", "Entrepreneur", "Brand Manager", "Supply Chain Manager", "International Business", "Retail Management", "E-Commerce Manager", "FinTech Specialist", "Insurance Advisor", "Risk Analyst"],
  humanities: ["Lawyer", "Judge", "IAS", "IPS", "IFS", "Professor", "Psychologist", "Journalist", "Content Creator", "Film Maker", "Animator", "Interior Designer", "Fashion Designer", "Social Worker", "International Relations Specialist", "Diplomat", "Public Policy Expert", "Political Consultant", "Historian", "Museum Curator"],
  defence: ["NDA", "CDS", "Army Officer", "Navy Officer", "Air Force Officer", "Coast Guard", "Paramilitary Forces", "DRDO", "ISRO", "Police Services", "CAPF", "Defence Technology", "Aviation Defence", "Cyber Defence", "Logistics Officer"],
  sports: ["Professional Athlete", "Coach", "Sports Scientist", "Sports Nutritionist", "Sports Physiotherapist", "Sports Psychologist", "Fitness Trainer", "Sports Analytics Expert", "Sports Management", "Yoga Instructor", "Adventure Sports", "Physical Education Teacher"],
  creative: ["Graphic Designer", "Animation Artist", "Film Director", "Photographer", "Music Producer", "Game Designer", "VFX Artist", "YouTube Creator", "Podcaster", "Writer", "Advertising Professional", "Brand Storyteller", "Product Designer", "UI UX Designer", "Creative Technologist"],
  vocational: ["Coding Specialist", "Digital Marketing", "Electric Vehicle Technician", "3D Printing Specialist", "Mobile Repair", "Web Developer", "App Developer", "Entrepreneurship", "Interior Execution", "Beauty and Wellness", "Event Management", "Retail Operations", "Data Entry and Analytics", "Financial Services"],
  agriculture: ["Agricultural Scientist", "Food Technology", "Organic Farming", "Dairy Technology", "Fisheries", "Forestry", "Horticulture", "Agribusiness", "Soil Scientist", "Climate-Smart Agriculture"],
  hospitality: ["Hotel Management", "Chef", "Cruise Management", "Luxury Hospitality", "Event Management", "Travel Consultant", "Airline Cabin Crew", "Aviation Management", "Tourism Entrepreneurship", "Resort Management"],
  aviation: ["Commercial Pilot", "Air Traffic Controller", "Aircraft Maintenance Engineer", "Airport Management", "Drone Pilot", "Flight Dispatcher", "Aerospace Engineering", "Cabin Crew", "Aviation Safety", "Ground Operations"],
  emerging: ["AI Prompt Engineer", "AI Trainer", "AI Ethics Consultant", "Climate Scientist", "Sustainability Consultant", "Renewable Energy Engineer", "EV Engineer", "Space Tourism Specialist", "Bioinformatics", "Quantum Engineer", "Digital Health Specialist", "XR Developer", "AI Product Manager", "Prompt Designer", "AI Educator", "AI Lawyer", "Synthetic Biology", "Nanotechnology", "Computational Biology", "Robotics Product Designer"],
};

const futureCompassDemand = {
  medical: { salary: "Long study path, high trust careers", demand: "High", ai: "AI assists diagnosis, research, records, and monitoring", balance: "Varies by specialization" },
  nonMedical: { salary: "Wide range, strong top-end in tech", demand: "Very high in AI, data, cloud, robotics", ai: "AI changes tools but increases demand for strong problem solvers", balance: "Better in product and tech roles" },
  commerce: { salary: "Strong for finance, CA, business and analytics", demand: "High in finance, business, FinTech", ai: "AI automates routine work; judgement and strategy matter more", balance: "Depends on role and exam path" },
  humanities: { salary: "Strong in law, civil services, policy, media and design", demand: "Growing where communication and human insight matter", ai: "AI supports research; original thinking remains valuable", balance: "Often flexible after specialization" },
  defence: { salary: "Stable, respected, benefits-led career path", demand: "Selective and competitive", ai: "Technology and cyber defence are becoming important", balance: "High discipline and service commitment" },
  creative: { salary: "Portfolio-driven with high upside", demand: "Growing in digital media, design and content", ai: "AI raises speed; taste, originality and storytelling matter", balance: "Flexible but deadline-driven" },
  sports: { salary: "Performance and specialization driven", demand: "Growing in coaching, analytics and fitness", ai: "Data and wearable tech improve training decisions", balance: "Physically demanding" },
  vocational: { salary: "Skill-based earning can start early", demand: "Strong for practical and digital skills", ai: "AI tools reward hands-on adaptability", balance: "Often entrepreneurial" },
  agriculture: { salary: "Growing with tech, food and sustainability", demand: "Rising in food security and climate-smart farming", ai: "AI improves yield, soil and weather decisions", balance: "Field and business mix" },
  hospitality: { salary: "Good growth in luxury and travel sectors", demand: "High where service quality matters", ai: "AI supports operations; human service remains central", balance: "Shift-based and people-facing" },
  aviation: { salary: "High potential with strict training and licensing", demand: "Selective, cyclical and skill-intensive", ai: "Automation supports safety but trained professionals remain vital", balance: "Role-dependent, travel-heavy" },
  emerging: { salary: "Fast-moving, high upside for early learners", demand: "Very high in AI, climate, digital health and deep tech", ai: "These careers are built around AI-era skills", balance: "Project-driven and evolving" },
};

const futureCompassOptionFactors = [
  ["Strongly true", 1],
  ["Somewhat true", 0.68],
  ["Not sure", 0.35],
  ["Rarely true", 0],
];

function fcWeights(streams = {}, traits = {}) {
  return { streams, traits };
}

const futureCompassQuestionSections = [
  {
    title: "Personality",
    questions: [
      ["My child keeps trying when a difficult problem appears.", fcWeights({ nonMedical: 2, medical: 1, defence: 1, emerging: 1 }, { resilience: 3, analytical: 1 })],
      ["My child enjoys leading a group or taking responsibility.", fcWeights({ commerce: 1, defence: 2, sports: 1, humanities: 1 }, { leadership: 3, communication: 1 })],
      ["My child notices how others feel and tries to help.", fcWeights({ medical: 1, humanities: 2, hospitality: 1 }, { empathy: 3, communication: 1 })],
      ["My child likes building, fixing, experimenting or making things work.", fcWeights({ nonMedical: 3, vocational: 2, emerging: 1 }, { practical: 3, logical: 1 })],
      ["My child enjoys drawing, designing, storytelling, music or visual ideas.", fcWeights({ creative: 3, humanities: 1, emerging: 1 }, { creative: 3, communication: 1 })],
      ["My child is comfortable with discipline, routine and physical effort.", fcWeights({ defence: 3, sports: 2, medical: 1 }, { resilience: 2, leadership: 1 })],
      ["My child prefers observing carefully before answering.", fcWeights({ medical: 1, nonMedical: 1, humanities: 1, emerging: 1 }, { analytical: 2, logical: 1 })],
      ["My child asks deep questions about how the world works.", fcWeights({ nonMedical: 2, medical: 1, emerging: 2, humanities: 1 }, { logical: 2, analytical: 2 })],
    ],
  },
  {
    title: "Academic Interest",
    questions: [
      ["Biology, the human body, plants, animals or health topics interest my child.", fcWeights({ medical: 3, agriculture: 1 }, { analytical: 1, empathy: 1 })],
      ["Maths puzzles, formulas and numerical patterns interest my child.", fcWeights({ nonMedical: 3, commerce: 2, emerging: 1 }, { logical: 3, analytical: 2 })],
      ["Physics, machines, electricity, space or engineering ideas interest my child.", fcWeights({ nonMedical: 3, aviation: 2, defence: 1 }, { logical: 2, practical: 1 })],
      ["Computers, coding, AI, apps or digital tools interest my child.", fcWeights({ nonMedical: 2, emerging: 3, vocational: 1 }, { logical: 2, practical: 2 })],
      ["Business, money, markets, brands or entrepreneurship interest my child.", fcWeights({ commerce: 3, vocational: 1, hospitality: 1 }, { analytical: 1, leadership: 1 })],
      ["History, politics, society, law or current affairs interest my child.", fcWeights({ humanities: 3, defence: 1 }, { communication: 2, analytical: 1 })],
      ["English, public speaking, writing or debating interest my child.", fcWeights({ humanities: 2, commerce: 1, creative: 2 }, { communication: 3, creative: 1 })],
      ["Art, media, design, film, animation or content creation interest my child.", fcWeights({ creative: 3, humanities: 1, emerging: 1 }, { creative: 3 })],
    ],
  },
  {
    title: "Work Style",
    questions: [
      ["My child can work alone with focus for a long time.", fcWeights({ medical: 1, nonMedical: 2, commerce: 1, emerging: 1 }, { resilience: 1, analytical: 2 })],
      ["My child enjoys working in teams.", fcWeights({ commerce: 1, defence: 1, sports: 2, hospitality: 2 }, { communication: 2, leadership: 1 })],
      ["My child enjoys explaining things to others.", fcWeights({ humanities: 2, medical: 1, commerce: 1 }, { communication: 3, empathy: 1 })],
      ["My child enjoys research, reading and collecting information.", fcWeights({ medical: 2, humanities: 2, emerging: 1 }, { analytical: 3 })],
      ["My child enjoys selling ideas, convincing people or negotiating.", fcWeights({ commerce: 3, humanities: 1, hospitality: 1 }, { communication: 2, leadership: 1 })],
      ["My child likes outdoor activity, movement and sports.", fcWeights({ sports: 3, defence: 2, agriculture: 1 }, { resilience: 2, practical: 1 })],
      ["My child likes travelling, meeting people and real-world exposure.", fcWeights({ hospitality: 2, aviation: 2, commerce: 1, humanities: 1 }, { communication: 2 })],
      ["My child prefers practical work over only theory.", fcWeights({ vocational: 3, agriculture: 1, hospitality: 1, aviation: 1 }, { practical: 3 })],
    ],
  },
  {
    title: "Thinking Style",
    questions: [
      ["My child thinks logically and likes clear right-or-wrong answers.", fcWeights({ nonMedical: 2, commerce: 1, defence: 1 }, { logical: 3 })],
      ["My child connects ideas creatively and thinks differently.", fcWeights({ creative: 2, emerging: 2, humanities: 1 }, { creative: 3 })],
      ["My child can compare options before deciding.", fcWeights({ commerce: 2, medical: 1, humanities: 1 }, { analytical: 3 })],
      ["My child learns best by doing experiments or activities.", fcWeights({ nonMedical: 2, vocational: 2, agriculture: 1 }, { practical: 3 })],
      ["My child notices small details that others miss.", fcWeights({ medical: 2, aviation: 1, commerce: 1 }, { analytical: 2, logical: 1 })],
      ["My child is good at planning steps for a goal.", fcWeights({ commerce: 2, defence: 2, nonMedical: 1 }, { leadership: 1, analytical: 2 })],
      ["My child understands people and emotions well.", fcWeights({ humanities: 2, medical: 1, hospitality: 1 }, { empathy: 3 })],
      ["My child enjoys trying new technology before others.", fcWeights({ emerging: 3, nonMedical: 2, vocational: 1 }, { practical: 1, logical: 1 })],
    ],
  },
  {
    title: "Pressure & Discipline",
    questions: [
      ["My child can handle regular tests and competitive preparation.", fcWeights({ medical: 2, nonMedical: 1, commerce: 1, defence: 1 }, { resilience: 3 })],
      ["My child remains calm when results are not perfect.", fcWeights({ medical: 1, commerce: 1, sports: 1, defence: 1 }, { resilience: 2 })],
      ["My child can follow a daily study routine.", fcWeights({ medical: 2, nonMedical: 1, commerce: 1, defence: 1 }, { resilience: 2, analytical: 1 })],
      ["My child can prepare for long-term goals without quick rewards.", fcWeights({ medical: 2, defence: 2, commerce: 1 }, { resilience: 3 })],
      ["My child performs better through projects than high-pressure exams.", fcWeights({ creative: 2, vocational: 2, emerging: 1, humanities: 1 }, { practical: 2, creative: 1 })],
      ["My child enjoys competition and challenge.", fcWeights({ defence: 2, sports: 2, commerce: 1, nonMedical: 1 }, { resilience: 2, leadership: 1 })],
      ["My child needs emotional encouragement during pressure.", fcWeights({ humanities: 1, creative: 1, hospitality: 1 }, { empathy: 1 })],
      ["My child has the patience for many years of study.", fcWeights({ medical: 3, humanities: 1, commerce: 1 }, { resilience: 3 })],
    ],
  },
  {
    title: "Motivation",
    questions: [
      ["My child wants a career that helps people directly.", fcWeights({ medical: 2, humanities: 2, hospitality: 1 }, { empathy: 3 })],
      ["My child wants a career with innovation and future technology.", fcWeights({ emerging: 3, nonMedical: 2, aviation: 1 }, { logical: 1, creative: 1 })],
      ["My child wants financial independence and business growth.", fcWeights({ commerce: 3, vocational: 1, hospitality: 1 }, { leadership: 1, analytical: 1 })],
      ["My child wants respect, service and uniformed discipline.", fcWeights({ defence: 3, sports: 1 }, { resilience: 2, leadership: 1 })],
      ["My child wants freedom to create original work.", fcWeights({ creative: 3, humanities: 1, emerging: 1 }, { creative: 3 })],
      ["My child wants a stable government or public-service path.", fcWeights({ humanities: 2, defence: 2, commerce: 1 }, { resilience: 1, communication: 1 })],
      ["My child wants to work with nature, food, environment or sustainability.", fcWeights({ agriculture: 3, medical: 1, emerging: 1 }, { practical: 1, analytical: 1 })],
      ["My child wants a career with travel, aviation, hotels or global exposure.", fcWeights({ hospitality: 3, aviation: 3, commerce: 1 }, { communication: 2 })],
    ],
  },
  {
    title: "Career Curiosity",
    questions: [
      ["Doctor, dentist, physiotherapist, psychologist or health careers excite my child.", fcWeights({ medical: 3 }, { empathy: 1, analytical: 1 })],
      ["Engineering, robotics, AI, software or machines excite my child.", fcWeights({ nonMedical: 3, emerging: 2 }, { logical: 2, practical: 1 })],
      ["CA, finance, business, stock market or entrepreneurship excite my child.", fcWeights({ commerce: 3 }, { analytical: 2, leadership: 1 })],
      ["Law, civil services, journalism, psychology or public policy excite my child.", fcWeights({ humanities: 3 }, { communication: 2, analytical: 1 })],
      ["Army, Navy, Air Force, police or national service excite my child.", fcWeights({ defence: 3 }, { resilience: 2, leadership: 1 })],
      ["Professional sports, coaching, fitness or sports science excite my child.", fcWeights({ sports: 3 }, { resilience: 2, practical: 1 })],
      ["Design, film, animation, gaming, writing or content creation excite my child.", fcWeights({ creative: 3, emerging: 1 }, { creative: 3 })],
      ["Pilot, airport management, drone pilot or aerospace careers excite my child.", fcWeights({ aviation: 3, nonMedical: 1 }, { practical: 1, resilience: 1 })],
    ],
  },
  {
    title: "Future Readiness",
    questions: [
      ["My child is curious about how AI will change careers.", fcWeights({ emerging: 3, nonMedical: 1, commerce: 1 }, { analytical: 1, logical: 1 })],
      ["My child can communicate ideas clearly in speech or writing.", fcWeights({ humanities: 2, commerce: 1, hospitality: 1, creative: 1 }, { communication: 3 })],
      ["My child can learn from videos, apps or online tools responsibly.", fcWeights({ emerging: 2, nonMedical: 1, vocational: 1 }, { practical: 1, analytical: 1 })],
      ["My child likes solving real-life problems, not only textbook questions.", fcWeights({ emerging: 2, vocational: 2, nonMedical: 1, commerce: 1 }, { practical: 2, creative: 1 })],
      ["My child is open to careers that may not be common in our area yet.", fcWeights({ emerging: 3, creative: 1, aviation: 1 }, { creative: 1, resilience: 1 })],
      ["My child can balance marks, skills and personality development.", fcWeights({ commerce: 1, humanities: 1, emerging: 1, medical: 1 }, { resilience: 1, communication: 1 })],
      ["My child needs early exposure before making a final stream decision.", fcWeights({ vocational: 1, emerging: 1, creative: 1 }, { practical: 1 })],
      ["My child would benefit from mentoring before Grade 10 subject choices.", fcWeights({ medical: 1, nonMedical: 1, commerce: 1, humanities: 1 }, { analytical: 1, communication: 1 })],
    ],
  },
];

let latestFutureCompass = null;

function renderFutureCompassQuestions() {
  if (!futureCompassQuestions) return;
  futureCompassQuestions.innerHTML = futureCompassQuestionSections
    .map((section, sectionIndex) => {
      const questions = section.questions
        .map(([prompt], questionIndex) => {
          const globalIndex = sectionIndex * 8 + questionIndex + 1;
          const name = `fcQ${globalIndex}`;
          const options = futureCompassOptionFactors
            .map(([label, factor]) => `<label><input type="radio" name="${name}" value="${factor}" required />${label}</label>`)
            .join("");
          return `<div class="future-compass-question" data-fc-question="${name}"><p>${globalIndex}. ${prompt}</p><div class="future-compass-options">${options}</div></div>`;
        })
        .join("");
      return `<section class="future-compass-group"><h3>${section.title}</h3>${questions}</section>`;
    })
    .join("");
}

function updateFutureCompassProgress() {
  if (!futureCompassForm || !futureCompassProgress) return;
  const profileFields = ["fcParentName", "fcStudentName", "fcMobile", "fcEmail", "fcGrade", "fcCity", "fcChildPreference", "fcParentPreference"];
  const questionCount = futureCompassQuestionSections.reduce((count, section) => count + section.questions.length, 0);
  const completedProfile = profileFields.filter((name) => String(futureCompassForm.elements[name]?.value || "").trim()).length;
  const completedQuestions = Array.from({ length: questionCount }, (_, index) => futureCompassForm.querySelector(`input[name="fcQ${index + 1}"]:checked`)).filter(Boolean).length;
  const total = profileFields.length + questionCount;
  futureCompassProgress.style.width = `${Math.round((completedProfile + completedQuestions) / total * 100)}%`;
}

function showFutureCompassError(message) {
  if (!futureCompassError) return;
  futureCompassError.textContent = message;
  futureCompassError.hidden = false;
  futureCompassError.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearFutureCompassError() {
  if (!futureCompassError) return;
  futureCompassError.textContent = "";
  futureCompassError.hidden = true;
}

function validateFutureCompass() {
  if (!futureCompassForm) return false;
  futureCompassForm.querySelectorAll(".is-invalid").forEach((element) => element.classList.remove("is-invalid"));
  const missing = [];
  let firstMissing = null;
  [
    ["fcParentName", "parent name"],
    ["fcStudentName", "student name"],
    ["fcMobile", "mobile number"],
    ["fcEmail", "email"],
    ["fcGrade", "current grade"],
    ["fcCity", "city"],
    ["fcChildPreference", "child preference"],
    ["fcParentPreference", "parent preference"],
  ].forEach(([name, label]) => {
    const field = futureCompassForm.elements[name];
    if (!String(field?.value || "").trim()) {
      missing.push(label);
      field?.closest("label")?.classList.add("is-invalid");
      firstMissing ||= field;
    }
  });
  const mobile = String(futureCompassForm.elements.fcMobile?.value || "").replace(/\D/g, "");
  const email = String(futureCompassForm.elements.fcEmail?.value || "").trim();
  if (mobile && mobile.length < 10) missing.push("valid 10-digit mobile number");
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push("valid email");

  const questionCount = futureCompassQuestionSections.reduce((count, section) => count + section.questions.length, 0);
  for (let index = 1; index <= questionCount; index += 1) {
    const selected = futureCompassForm.querySelector(`input[name="fcQ${index}"]:checked`);
    if (!selected) {
      missing.push(`question ${index}`);
      const question = futureCompassForm.querySelector(`[data-fc-question="fcQ${index}"]`);
      question?.classList.add("is-invalid");
      firstMissing ||= question?.querySelector("input");
    }
  }

  if (missing.length) {
    showFutureCompassError(`Please complete the Future Compass assessment before generating the report. Missing: ${missing.slice(0, 12).join(", ")}${missing.length > 12 ? "..." : ""}.`);
    firstMissing?.focus({ preventScroll: true });
    return false;
  }
  clearFutureCompassError();
  return true;
}

function preferenceToStream(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("medical") || text.includes("doctor")) return "medical";
  if (text.includes("non-medical") || text.includes("engineer")) return "nonMedical";
  if (text.includes("commerce") || text.includes("business")) return "commerce";
  if (text.includes("humanities") || text.includes("government") || text.includes("upsc")) return "humanities";
  if (text.includes("defence")) return "defence";
  if (text.includes("creative")) return "creative";
  if (text.includes("sports")) return "sports";
  if (text.includes("skill")) return "vocational";
  return "";
}

const futureCompassStreamTraitFit = {
  medical: ["empathy", "analytical", "resilience"],
  nonMedical: ["logical", "practical", "analytical"],
  commerce: ["analytical", "leadership", "communication"],
  humanities: ["communication", "empathy", "analytical"],
  defence: ["resilience", "leadership", "practical"],
  creative: ["creative", "communication", "practical"],
  sports: ["resilience", "practical", "leadership"],
  vocational: ["practical", "logical", "creative"],
  agriculture: ["practical", "analytical", "empathy"],
  hospitality: ["communication", "empathy", "leadership"],
  aviation: ["practical", "resilience", "logical"],
  emerging: ["logical", "creative", "analytical"],
};

const futureCompassStreamSignals = {
  medical: "health, biology, patience, careful observation, and service-oriented thinking",
  nonMedical: "maths, machines, technology, experiments, and structured problem solving",
  commerce: "business, money, planning, negotiation, and decision-making",
  humanities: "communication, society, law, public service, writing, and people understanding",
  defence: "discipline, physical effort, service, leadership, and pressure handling",
  creative: "design, storytelling, media, originality, and expressive confidence",
  sports: "movement, competition, stamina, coaching, and performance discipline",
  vocational: "hands-on learning, practical work, digital skills, and early skill-building",
  agriculture: "nature, sustainability, food systems, practical field learning, and observation",
  hospitality: "travel, service, people-facing confidence, and global exposure",
  aviation: "flight, aerospace, precision, safety, travel, and technical discipline",
  emerging: "AI, future technology, real-world problem solving, and new-age careers",
};

const futureCompassTraitNotes = {
  logical: "logical thinking",
  creative: "creative imagination",
  analytical: "careful analysis",
  practical: "hands-on learning",
  communication: "communication confidence",
  resilience: "pressure readiness",
  empathy: "people understanding",
  leadership: "leadership",
};

function normalizeCompassScore(raw, max, base = 34, range = 60) {
  if (!max) return base;
  const ratio = Math.max(0, Math.min(1, raw / max));
  return Math.max(24, Math.min(96, Math.round(base + ratio * range)));
}

function topFutureCompassTraits(traitScores, limit = 3) {
  return Object.entries(traitScores).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function buildFutureCompassCareers(rankedStreams, traitScores, childStream, parentStream) {
  const candidates = [];
  rankedStreams.slice(0, 5).forEach(([stream, streamScore], streamRank) => {
    const desiredTraits = futureCompassStreamTraitFit[stream] || [];
    const traitAverage = desiredTraits.length
      ? desiredTraits.reduce((sum, key) => sum + (traitScores[key] || 0), 0) / desiredTraits.length
      : 55;
    (futureCompassCareers[stream] || []).forEach((name, careerIndex) => {
      const preferenceBoost = (stream === childStream ? 5 : 0) + (stream === parentStream ? 3 : 0);
      const score = Math.round(streamScore * 0.58 + traitAverage * 0.3 + preferenceBoost + Math.max(0, 8 - streamRank * 2) - careerIndex * 0.16);
      const strongestTrait = desiredTraits
        .map((key) => [key, traitScores[key] || 0])
        .sort((a, b) => b[1] - a[1])[0]?.[0];
      candidates.push({
        name,
        stream,
        score: Math.max(38, Math.min(96, score)),
        reason: `Connects with ${futureCompassStreams[stream]} signals and ${futureCompassTraitNotes[strongestTrait] || "overall aptitude"} shown in the answers.`,
      });
    });
  });

  const seen = new Set();
  return candidates
    .sort((a, b) => b.score - a.score)
    .filter((career) => {
      const key = career.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 20);
}

function buildFutureCompassMyths(report) {
  const top = report.topStream;
  const childStream = preferenceToStream(report.childPreference);
  const parentStream = preferenceToStream(report.parentPreference);
  const myths = [
    ["Only Science students become successful.", "False. Success depends on fit, skill, discipline, exposure and adaptability."],
    ["Commerce is for weak students.", "False. Commerce can lead to CA, finance, business, analytics, entrepreneurship and FinTech."],
    ["Arts has no scope.", "False. Humanities can lead to law, civil services, psychology, media, policy, design and international relations."],
    ["AI will replace all jobs.", "Not exactly. AI changes routine work, but students who can think, communicate and use tools well become stronger."],
  ];
  if (top === "creative") myths.unshift(["Creative careers are only hobbies.", "False. Design, media, gaming, content, branding and product work can become serious career paths with a strong portfolio."]);
  if (top === "sports") myths.unshift(["Sports means only becoming a player.", "False. Coaching, sports science, analytics, physiotherapy, fitness and sports management are also strong directions."]);
  if (top === "vocational") myths.unshift(["Skill-based careers are second choice.", "False. Practical digital and technical skills can create early earning, entrepreneurship and strong career mobility."]);
  if (top === "emerging") myths.unshift(["New-age careers are too risky.", "Partly true only without foundation. With maths, communication, projects and mentoring, emerging careers can become powerful options."]);
  if (childStream && parentStream && childStream !== parentStream) myths.unshift(["Parent and child preference must match immediately.", "False. A temporary difference is useful because it opens a better family discussion before Grade 10 pressure begins."]);
  return myths.slice(0, 4);
}

function buildFutureCompassSfisHelp(report) {
  const top = report.topStream;
  const strongestTraits = topFutureCompassTraits(report.traitScores, 2).map(([key]) => key);
  const help = [
    "Career awareness from middle school so stream selection does not become a last-minute panic decision.",
    "Parent-student counselling conversations before major academic decisions.",
  ];
  if (["nonMedical", "emerging", "aviation"].includes(top)) {
    help.push("Robotics, computer lab exposure and project work to test technology and engineering interest early.");
  }
  if (top === "medical") {
    help.push("Science observation, biology curiosity and disciplined study routines to prepare for health-related paths.");
  }
  if (["commerce", "humanities", "hospitality"].includes(top) || strongestTraits.includes("communication")) {
    help.push("Communication, presentation, debate and leadership opportunities to build confidence across people-facing careers.");
  }
  if (["defence", "sports"].includes(top) || strongestTraits.includes("resilience")) {
    help.push("Sports, fitness, discipline and responsibility-building routines for pressure readiness.");
  }
  if (["creative", "vocational", "agriculture"].includes(top) || strongestTraits.includes("creative") || strongestTraits.includes("practical")) {
    help.push("Project-based learning and hands-on showcases so students can build proof of skill, not only marks.");
  }
  help.push("Competitive exam foundation, reasoning practice and mentor exposure inside school life.");
  return [...new Set(help)].slice(0, 5);
}

function calculateFutureCompass(data) {
  const streamRaw = Object.fromEntries(Object.keys(futureCompassStreams).map((key) => [key, 0]));
  const streamMax = Object.fromEntries(Object.keys(futureCompassStreams).map((key) => [key, 0]));
  const traitRaw = Object.fromEntries(Object.keys(futureCompassTraits).map((key) => [key, 0]));
  const traitMax = Object.fromEntries(Object.keys(futureCompassTraits).map((key) => [key, 0]));
  const streamEvidence = Object.fromEntries(Object.keys(futureCompassStreams).map((key) => [key, []]));
  let questionIndex = 1;
  futureCompassQuestionSections.forEach((section) => {
    section.questions.forEach(([prompt, config]) => {
      const factor = Number(data.get(`fcQ${questionIndex}`) || 0);
      Object.entries(config.streams).forEach(([key, weight]) => {
        streamRaw[key] += weight * factor;
        streamMax[key] += weight;
        if (factor >= 0.68 && streamEvidence[key].length < 4) {
          streamEvidence[key].push(prompt);
        }
      });
      Object.entries(config.traits).forEach(([key, weight]) => {
        traitRaw[key] += weight * factor;
        traitMax[key] += weight;
      });
      questionIndex += 1;
    });
  });

  const childStream = preferenceToStream(data.get("fcChildPreference"));
  const parentStream = preferenceToStream(data.get("fcParentPreference"));
  if (childStream) {
    streamRaw[childStream] += 1.6;
    streamMax[childStream] += 1.6;
  }
  if (parentStream) {
    streamRaw[parentStream] += 0.85;
    streamMax[parentStream] += 0.85;
  }

  const finalStreamScores = Object.fromEntries(
    Object.keys(futureCompassStreams).map((key) => [
      key,
      normalizeCompassScore(streamRaw[key], streamMax[key], 31, 62),
    ])
  );
  const finalTraitScores = Object.fromEntries(
    Object.keys(futureCompassTraits).map((key) => [
      key,
      normalizeCompassScore(traitRaw[key], traitMax[key], 33, 60),
    ])
  );
  const rankedStreams = Object.entries(finalStreamScores).sort((a, b) => b[1] - a[1] || (streamRaw[b[0]] - streamRaw[a[0]]));
  const topStream = rankedStreams[0][0];
  const topCareers = buildFutureCompassCareers(rankedStreams, finalTraitScores, childStream, parentStream);
  const topTraits = topFutureCompassTraits(finalTraitScores, 3);
  const aligned = childStream && parentStream && childStream === parentStream;
  const noFixedParent = String(data.get("fcParentPreference") || "").toLowerCase().includes("no fixed");
  const alignment = aligned
    ? `Child and parent preferences both point toward ${futureCompassStreams[childStream]}. This is a strong starting point, but the final choice should still consider marks, aptitude, pressure readiness, and real exposure.`
    : noFixedParent
      ? "Parent preference is open, which is helpful. Use this report to observe the child for 3-6 months before narrowing streams."
      : `Child preference is ${data.get("fcChildPreference")}, while parent preference is ${data.get("fcParentPreference")}. This does not mean conflict. It means the family should compare interest, capability, and long-term fit calmly before deciding.`;
  const why = [
    `${futureCompassStreams[topStream]} scored highest because the answers showed stronger signals around ${futureCompassStreamSignals[topStream]}.`,
    `The strongest learning signals are ${topTraits.map(([key, value]) => `${futureCompassTraits[key]} (${value}%)`).join(", ")}.`,
    streamEvidence[topStream][0] ? `One repeated pattern was: ${streamEvidence[topStream][0]}` : "The result is based on interest, aptitude, work style, motivation, and future-readiness patterns together.",
  ];
  if (rankedStreams[0][1] - rankedStreams[1][1] <= 5) {
    why.push(`${futureCompassStreams[rankedStreams[1][0]]} is very close, so the next 3-6 months of projects and subject exposure should be observed carefully.`);
  }
  if (childStream && childStream === topStream) {
    why.push("The child's current preference is supported by the assessment pattern, which is a useful confidence signal.");
  }

  const watchAreas = [];
  if ((finalTraitScores.resilience || 0) < 62) watchAreas.push("Build pressure readiness slowly before choosing paths with long competitive preparation.");
  if ((finalTraitScores.communication || 0) < 62) watchAreas.push("Add speaking, writing and presentation practice because every stream now needs communication.");
  if (["medical", "nonMedical", "commerce"].includes(topStream) && (finalTraitScores.analytical || 0) < 64) {
    watchAreas.push("Strengthen reasoning and analysis before making an exam-heavy stream decision.");
  }
  if (childStream && parentStream && childStream !== parentStream) {
    watchAreas.push("Child and parent preferences differ, so avoid a quick decision; compare marks, interest, stress handling and exposure calmly.");
  }
  if (rankedStreams[0][1] < 66) watchAreas.push("The top score is still developing, so more exploration is recommended before narrowing the path.");
  while (watchAreas.length < 4) {
    const next = [
      "Use real exposure such as projects, reading, mentor talks and school activities before finalizing the stream.",
      "Do not treat this as a permanent label; interests can mature strongly between Grade 8 and Grade 10.",
      "Compare the report with classroom performance, teacher feedback and the student's own excitement.",
      "Keep marks, skills, personality and emotional readiness in the same conversation.",
    ].find((item) => !watchAreas.includes(item));
    if (!next) break;
    watchAreas.push(next);
  }

  return {
    parentName: String(data.get("fcParentName") || "").trim(),
    studentName: String(data.get("fcStudentName") || "").trim(),
    mobile: String(data.get("fcMobile") || "").trim(),
    email: String(data.get("fcEmail") || "").trim(),
    grade: String(data.get("fcGrade") || "").trim(),
    city: String(data.get("fcCity") || "").trim(),
    childPreference: String(data.get("fcChildPreference") || "").trim(),
    parentPreference: String(data.get("fcParentPreference") || "").trim(),
    streamScores: finalStreamScores,
    traitScores: finalTraitScores,
    rankedStreams,
    topStream,
    topCareers,
    why: why.slice(0, 5),
    watchAreas: watchAreas.slice(0, 4),
    alignment,
    alignmentTips: [
      "Do not choose a stream only because marks are high today.",
      "Give the student real exposure: labs, projects, reading, counselling, internships or mentor conversations.",
      "Revisit this decision after observing consistency, stress handling, and genuine curiosity.",
    ],
  };
}

function renderFutureCompassReport() {
  if (!latestFutureCompass || !futureCompassReport) return;
  const topLabel = futureCompassStreams[latestFutureCompass.topStream];
  futureCompassReport.querySelector('[data-fc-report="headline"]').textContent = `${latestFutureCompass.studentName}'s Future Compass`;
  futureCompassReport.querySelector('[data-fc-report="summary"]').textContent = `For ${latestFutureCompass.grade}, ${topLabel} is currently the strongest fit signal, followed by ${futureCompassStreams[latestFutureCompass.rankedStreams[1][0]]} and ${futureCompassStreams[latestFutureCompass.rankedStreams[2][0]]}. This is guidance for discussion, not a fixed career prediction.`;
  futureCompassReport.querySelector('[data-fc-report="topScore"]').textContent = `${latestFutureCompass.rankedStreams[0][1]}%`;
  futureCompassReport.querySelector('[data-fc-report="topStream"]').textContent = topLabel;
  futureCompassReport.querySelector('[data-fc-report="streamScores"]').innerHTML = latestFutureCompass.rankedStreams
    .map(([key, value]) => `<div class="score-row"><div><span>${futureCompassStreams[key]}</span><strong>${value}%</strong></div><div class="score-track"><span style="--score:${value}%"></span></div></div>`)
    .join("");
  futureCompassReport.querySelector('[data-fc-report="traitScores"]').innerHTML = Object.entries(latestFutureCompass.traitScores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => `<div class="score-row"><div><span>${futureCompassTraits[key]}</span><strong>${value}%</strong></div><div class="score-track"><span style="--score:${value}%"></span></div></div>`)
    .join("");
  futureCompassReport.querySelector('[data-fc-report="topCareers"]').innerHTML = latestFutureCompass.topCareers
    .map((career) => `<li><strong>${career.name}</strong><span>${career.score}% fit signal</span><p>${career.reason}</p></li>`)
    .join("");
  futureCompassReport.querySelector('[data-fc-report="alignment"]').textContent = latestFutureCompass.alignment;
  futureCompassReport.querySelector('[data-fc-report="alignmentTips"]').innerHTML = latestFutureCompass.alignmentTips.map((tip) => `<li>${tip}</li>`).join("");
  const whyList = futureCompassReport.querySelector('[data-fc-report="why"]');
  if (whyList) whyList.innerHTML = latestFutureCompass.why.map((item) => `<li>${item}</li>`).join("");
  const watchList = futureCompassReport.querySelector('[data-fc-report="watch"]');
  if (watchList) watchList.innerHTML = latestFutureCompass.watchAreas.map((item) => `<li>${item}</li>`).join("");
  futureCompassReport.querySelector('[data-fc-report="myths"]').innerHTML = buildFutureCompassMyths(latestFutureCompass)
    .map(([myth, answer]) => `<article><strong>${myth}</strong><p>${answer}</p></article>`)
    .join("");
  futureCompassReport.querySelector('[data-fc-report="salaryExplorer"]').innerHTML = latestFutureCompass.rankedStreams.slice(0, 4).map(([key]) => {
    const item = futureCompassDemand[key];
    return `<article><strong>${futureCompassStreams[key]}</strong><p>${item.salary}</p><span>${item.demand} demand</span><span>${item.balance}</span><p>${item.ai}</p></article>`;
  }).join("");
  futureCompassReport.querySelector('[data-fc-report="sfisHelp"]').innerHTML = buildFutureCompassSfisHelp(latestFutureCompass).map((item) => `<li>${item}</li>`).join("");
  futureCompassReport.hidden = false;
  futureCompassReport.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildFutureCompassPdfLines() {
  if (!latestFutureCompass) return ["Please generate the Future Compass report first."];
  return [
    "SFIS Future Compass AI Report",
    "Stone Field International School",
    `Generated: ${new Date().toLocaleDateString()}`,
    "",
    "Student Profile",
    `Parent: ${latestFutureCompass.parentName}`,
    `Student: ${latestFutureCompass.studentName}`,
    `Grade: ${latestFutureCompass.grade}`,
    `City: ${latestFutureCompass.city}`,
    `Mobile: ${latestFutureCompass.mobile}`,
    `Email: ${latestFutureCompass.email}`,
    `Child Preference: ${latestFutureCompass.childPreference}`,
    `Parent Preference: ${latestFutureCompass.parentPreference}`,
    "",
    "Stream Fit Score",
    ...latestFutureCompass.rankedStreams.map(([key, value]) => `- ${futureCompassStreams[key]}: ${value}%`),
    "",
    "Why This Result Appeared",
    ...latestFutureCompass.why.map((item) => `- ${item}`),
    "",
    "Top Career Directions",
    ...latestFutureCompass.topCareers.map((career, index) => `${index + 1}. ${career.name} (${career.score}%): ${career.reason}`),
    "",
    "Thinking and Learning Signals",
    ...Object.entries(latestFutureCompass.traitScores).sort((a, b) => b[1] - a[1]).map(([key, value]) => `- ${futureCompassTraits[key]}: ${value}%`),
    "",
    "What Parents Should Watch",
    ...latestFutureCompass.watchAreas.map((item) => `- ${item}`),
    "",
    "Parent vs Child Alignment",
    latestFutureCompass.alignment,
    ...latestFutureCompass.alignmentTips.map((tip) => `- ${tip}`),
    "",
    "AI Myth Buster",
    ...buildFutureCompassMyths(latestFutureCompass).map(([myth, answer]) => `- ${myth} ${answer}`),
    "",
    "How SFIS Can Help",
    ...buildFutureCompassSfisHelp(latestFutureCompass).map((item) => `- ${item}`),
  ].flatMap((line) => (line ? wrapPdfLine(line) : [""]));
}

function createStyledFutureCompassPdfBlob() {
  if (!latestFutureCompass) return createPdfBlob(["Please generate the Future Compass report first."]);
  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };
  const pageStreams = [];
  let stream = [];
  let y = 700;

  const colors = {
    night: [0.027, 0.067, 0.059],
    panel: [0.95, 0.965, 0.93],
    teal: [0.165, 0.86, 0.705],
    gold: [0.94, 0.74, 0.31],
    blue: [0.33, 0.68, 0.91],
    coral: [1, 0.455, 0.36],
    ink: [0.075, 0.125, 0.11],
    muted: [0.32, 0.39, 0.36],
    line: [0.82, 0.86, 0.8],
    white: [1, 1, 1],
  };

  const color = ([r, g, b]) => `${r} ${g} ${b}`;
  const rect = (x, ry, width, height, fill, stroke = null) => {
    stream.push("q");
    if (fill) stream.push(`${color(fill)} rg`);
    if (stroke) stream.push(`${color(stroke)} RG`);
    stream.push(`${x} ${ry} ${width} ${height} re ${stroke ? "B" : "f"}`);
    stream.push("Q");
  };
  const text = (value, x, ty, size = 10, font = "F1", fill = colors.ink) => {
    stream.push("BT");
    stream.push(`/${font} ${size} Tf`);
    stream.push(`${color(fill)} rg`);
    stream.push(`${x} ${ty} Td`);
    stream.push(`(${pdfSafeText(value)}) Tj`);
    stream.push("ET");
  };
  const wrappedText = (value, x, startY, width, size = 10, font = "F1", fill = colors.ink, leading = 13) => {
    const lines = wrapPdfLine(value, Math.max(24, Math.floor(width / (size * 0.52))));
    lines.forEach((line, index) => text(line, x, startY - index * leading, size, font, fill));
    return lines.length * leading;
  };
  const finishPage = () => {
    if (stream.length) pageStreams.push(stream.join("\n"));
    stream = [];
  };
  const startPage = () => {
    finishPage();
    rect(0, 0, 612, 792, colors.panel);
    rect(0, 728, 612, 64, colors.night);
    rect(0, 728, 612, 5, colors.teal);
    text("SFIS Future Compass AI", 42, 759, 20, "F2", colors.gold);
    text("Stone Field International School | Grade 8 onward guidance", 42, 741, 9.5, "F1", colors.white);
    text(`Student: ${latestFutureCompass.studentName || "Student"}`, 382, 759, 9.5, "F2", colors.white);
    text(`Generated: ${new Date().toLocaleDateString()}`, 382, 742, 8.5, "F1", colors.white);
    y = 700;
  };
  const ensure = (height) => {
    if (y - height < 48) startPage();
  };
  const pill = (label, x, py, fill = colors.teal, width = null) => {
    const pillWidth = width || Math.max(54, Math.min(165, label.length * 5.3 + 18));
    rect(x, py - 14, pillWidth, 20, fill);
    text(label, x + 8, py - 8, 7.7, "F2", fill === colors.gold ? colors.night : colors.night);
    return pillWidth;
  };
  const sectionCard = (title, lines, accent = colors.teal) => {
    const wrapped = lines.flatMap((line) => wrapPdfLine(line, 84));
    const height = 46 + wrapped.length * 14;
    ensure(height);
    rect(36, y - height, 540, height, colors.white, colors.line);
    rect(36, y - height, 7, height, accent);
    text(title, 54, y - 25, 14, "F2", colors.ink);
    wrapped.forEach((line, index) => text(line, 54, y - 47 - index * 14, 9.4, "F1", colors.muted));
    y -= height + 16;
  };
  const scoreBars = (title, entries, accent = colors.teal, limit = entries.length) => {
    const shown = entries.slice(0, limit);
    const height = 54 + shown.length * 29;
    ensure(height);
    rect(36, y - height, 540, height, colors.white, colors.line);
    rect(36, y - height, 7, height, accent);
    text(title, 54, y - 25, 14, "F2", colors.ink);
    shown.forEach(([label, value], index) => {
      const rowY = y - 52 - index * 29;
      text(label, 54, rowY, 8.8, "F2", colors.ink);
      text(`${value}%`, 510, rowY, 8.8, "F2", colors.ink);
      rect(54, rowY - 15, 445, 8, [0.88, 0.9, 0.86]);
      rect(54, rowY - 15, Math.round(445 * value / 100), 8, index % 3 === 0 ? colors.teal : index % 3 === 1 ? colors.gold : colors.blue);
    });
    y -= height + 16;
  };
  const miniCards = (title, cards) => {
    const rows = Math.ceil(cards.length / 2);
    const height = 50 + rows * 84;
    ensure(height);
    rect(36, y - height, 540, height, colors.white, colors.line);
    rect(36, y - height, 7, height, colors.blue);
    text(title, 54, y - 25, 14, "F2", colors.ink);
    cards.forEach((card, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = 54 + col * 260;
      const cy = y - 48 - row * 84;
      rect(x, cy - 62, 244, 66, [0.94, 0.965, 0.94], colors.line);
      text(card.title, x + 10, cy - 16, 9.5, "F2", colors.ink);
      wrappedText(card.body, x + 10, cy - 32, 218, 7.8, "F1", colors.muted, 10);
    });
    y -= height + 16;
  };

  startPage();

  const topLabel = futureCompassStreams[latestFutureCompass.topStream];
  const secondLabel = futureCompassStreams[latestFutureCompass.rankedStreams[1][0]];
  const thirdLabel = futureCompassStreams[latestFutureCompass.rankedStreams[2][0]];

  rect(36, 506, 540, 194, colors.night);
  text("Personalized Future Path Report", 54, 666, 11, "F2", colors.teal);
  wrappedText(`${latestFutureCompass.studentName}'s strongest current fit signal is ${topLabel}.`, 54, 632, 330, 23, "F2", colors.gold, 26);
  wrappedText(`Followed by ${secondLabel} and ${thirdLabel}. This is guidance for family discussion, not a fixed prediction.`, 54, 558, 310, 10.5, "F1", colors.white, 14);
  rect(428, 556, 104, 104, [0.12, 0.24, 0.2], colors.teal);
  text("TOP STREAM", 446, 626, 7.8, "F2", colors.white);
  text(`${latestFutureCompass.rankedStreams[0][1]}%`, 446, 600, 25, "F2", colors.gold);
  wrappedText(topLabel, 446, 578, 76, 8.2, "F2", colors.white, 10);
  y = 482;

  sectionCard("Student Profile", [
    `Parent: ${latestFutureCompass.parentName}`,
    `Student: ${latestFutureCompass.studentName} | ${latestFutureCompass.grade} | ${latestFutureCompass.city}`,
    `Mobile: ${latestFutureCompass.mobile} | Email: ${latestFutureCompass.email}`,
    `Child Preference: ${latestFutureCompass.childPreference}`,
    `Parent Preference: ${latestFutureCompass.parentPreference}`,
  ], colors.gold);

  scoreBars(
    "Stream Fit Score",
    latestFutureCompass.rankedStreams.map(([key, value]) => [futureCompassStreams[key], value]),
    colors.teal,
    latestFutureCompass.rankedStreams.length
  );

  sectionCard("Why This Result Appeared", latestFutureCompass.why.map((item) => `• ${item}`), colors.blue);

  scoreBars(
    "Thinking & Learning Signals",
    Object.entries(latestFutureCompass.traitScores).sort((a, b) => b[1] - a[1]).map(([key, value]) => [futureCompassTraits[key], value]),
    colors.gold
  );

  sectionCard("What Parents Should Watch", latestFutureCompass.watchAreas.map((item) => `• ${item}`), colors.coral);

  sectionCard("Parent vs Child Alignment", [
    latestFutureCompass.alignment,
    ...latestFutureCompass.alignmentTips.map((tip) => `• ${tip}`),
  ], colors.blue);

  startPage();
  const topCareers = latestFutureCompass.topCareers.slice(0, 20);
  const careerHeight = 250;
  rect(36, y - careerHeight, 540, careerHeight, colors.white, colors.line);
  rect(36, y - careerHeight, 7, careerHeight, colors.gold);
  text("Top 20 Career Directions", 54, y - 25, 15, "F2", colors.ink);
  topCareers.forEach((career, index) => {
    const col = Math.floor(index / 10);
    const row = index % 10;
    const x = 54 + col * 256;
    const rowY = y - 52 - row * 18;
    text(`${index + 1}.`, x, rowY, 8.7, "F2", colors.teal);
    text(`${career.name} (${career.score}%)`, x + 22, rowY, 8.7, "F1", colors.ink);
  });
  y -= careerHeight + 18;

  sectionCard("Career Interpretation", topCareers.slice(0, 5).map((career) => `• ${career.name}: ${career.reason}`), colors.gold);

  miniCards("AI Myth Buster", buildFutureCompassMyths(latestFutureCompass).map(([title, body]) => ({ title, body })));

  miniCards("Salary & Future Demand Explorer", latestFutureCompass.rankedStreams.slice(0, 4).map(([key]) => {
    const item = futureCompassDemand[key];
    return {
      title: futureCompassStreams[key],
      body: `${item.salary}. Demand: ${item.demand}. AI impact: ${item.ai}`,
    };
  }));

  sectionCard("How SFIS Can Help From Grade 8 Onward", buildFutureCompassSfisHelp(latestFutureCompass).map((item) => `• ${item}`), colors.teal);

  ensure(76);
  rect(36, y - 70, 540, 70, colors.night);
  text("Important note", 54, y - 24, 11, "F2", colors.gold);
  wrappedText("This AI-assisted report is for parent-student discussion. It does not replace a professional counsellor, board eligibility rules, entrance requirements, or the student's evolving interests.", 54, y - 42, 486, 8.5, "F1", colors.white, 11);
  y -= 86;
  finishPage();

  addObject("<< /Type /Catalog /Pages 2 0 R >>");
  addObject("");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  pageStreams.forEach((pageStream) => {
    const contentId = objects.length + 2;
    const pageId = addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`);
    addObject(`<< /Length ${pageStream.length} >>\nstream\n${pageStream}\nendstream`);
    pageIds.push(pageId);
  });
  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((content, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${content}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

renderFutureCompassQuestions();
updateFutureCompassProgress();

futureCompassForm?.addEventListener("input", () => {
  clearFutureCompassError();
  updateFutureCompassProgress();
});

futureCompassForm?.addEventListener("change", () => {
  clearFutureCompassError();
  updateFutureCompassProgress();
});

futureCompassForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateFutureCompass()) return;
  const data = new FormData(futureCompassForm);
  latestFutureCompass = calculateFutureCompass(data);
  submitFutureCompassToGoogleForm(data);
  renderFutureCompassReport();
});

futureCompassDownload?.addEventListener("click", () => {
  if (!latestFutureCompass) {
    showFutureCompassError("Please generate the Future Compass report before downloading the PDF.");
    return;
  }
  downloadBlob(createStyledFutureCompassPdfBlob(), `SFIS-Future-Compass-${safeDownloadName(latestFutureCompass.studentName)}.pdf`);
});

const parentResourceDownloads = {
  "reading-checklist": {
    title: "Reading Checklist by Age",
    filename: "SFIS-Reading-Checklist-by-Age.pdf",
    accent: "teal",
    summary: "A parent-friendly guide to understand whether reading is becoming joyful, confident, and age-appropriate for your child.",
    sections: [
      {
        title: "How to Use This Guide",
        body: [
          "Reading growth is not a race. Some children read early, some take time, and many grow faster when parents create a calm routine instead of pressure. Use this guide once a month and notice patterns: interest, confidence, understanding, and expression.",
          "If your child is still building a skill, mark it as 'in progress'. The goal is to understand what support is needed, not to label the child.",
        ],
      },
      {
        title: "Ages 3 to 5: Early Reading Signals",
        style: "checklist",
        items: [
          "Enjoys picture books and listens to short stories for a few minutes.",
          "Recognizes familiar sounds, rhymes, and repeated words.",
          "Can retell a simple story using their own words or gestures.",
          "Holds books correctly, turns pages, and notices pictures carefully.",
          "Begins recognizing letters in their own name or common signs.",
          "Can identify some colors, objects, animals, and actions in pictures.",
        ],
      },
      {
        title: "Ages 6 to 8: Growing Reading Confidence",
        style: "checklist",
        items: [
          "Reads simple sentences with growing fluency and less hesitation.",
          "Understands what happened first, next, and last in a story.",
          "Can answer who, what, where, when, and why questions.",
          "Reads aloud for 10 to 15 minutes with gentle support.",
          "Shows interest in new words and asks what they mean.",
          "Can connect a story to real life, family, school, or friends.",
        ],
      },
      {
        title: "Ages 9 to 10: Independent Reading Habits",
        style: "checklist",
        items: [
          "Reads short chapters, articles, or information pages independently.",
          "Can summarize the main idea in a few clear sentences.",
          "Makes predictions and explains why something may happen next.",
          "Uses a dictionary, asks questions, or understands meaning from context.",
          "Reads for information, enjoyment, school projects, and curiosity.",
          "Can discuss characters, choices, problems, and solutions in a story.",
        ],
      },
      {
        title: "7-Day Home Reading Rhythm",
        style: "numbered",
        items: [
          "Choose a fixed 15-minute reading window, preferably before screen time.",
          "Let the child select one book and the parent select one book each week.",
          "Ask one open-ended question: 'What surprised you?' or 'What would you do?'",
          "Keep a word treasure list with five new words every week.",
          "Use bedtime storytelling once or twice a week, even for older children.",
          "Celebrate effort, expression, and understanding instead of only speed.",
        ],
      },
      {
        title: "When Extra Support May Help",
        style: "prompt",
        items: [
          "Your child avoids reading repeatedly, even with easy books.",
          "They read words but cannot explain the meaning.",
          "They lose place often, skip lines, or get tired very quickly.",
          "They feel embarrassed while reading aloud.",
          "You notice a gap between oral storytelling and written reading.",
        ],
      },
      {
        title: "Parent Reflection",
        body: [
          "This week, observe one thing: does your child enjoy the reading moment, or does reading feel like a test? A peaceful reading routine often improves confidence faster than long correction sessions.",
          "At SFIS, reading will be treated as a foundation for communication, confidence, and thinking, not only as a textbook skill.",
        ],
      },
    ],
  },
  "school-readiness": {
    title: "School Readiness Checklist",
    filename: "SFIS-School-Readiness-Checklist.pdf",
    accent: "gold",
    summary: "A gentle readiness guide for independence, communication, confidence, routine, and classroom habits before the next school step.",
    sections: [
      {
        title: "Readiness Means Comfort, Not Perfection",
        body: [
          "A school-ready child is not a child who already knows everything. A school-ready child is able to try, ask for help, follow simple routines, and slowly become comfortable in a group learning environment.",
          "Parents can use this checklist to build small habits at home. Even 10 minutes of consistent practice every day can make the first school months smoother.",
        ],
      },
      {
        title: "Independence Skills",
        style: "checklist",
        items: [
          "Uses the washroom with age-appropriate independence.",
          "Opens lunch box and water bottle with minimal help.",
          "Keeps shoes, bag, bottle, and basic belongings in one place.",
          "Can follow a two-step instruction such as 'pack your book and sit down'.",
          "Can eat without long distraction and understands basic table manners.",
          "Attempts small tasks before saying 'I cannot do it'.",
        ],
      },
      {
        title: "Communication and Confidence",
        style: "checklist",
        items: [
          "Can say their name, parent name, and basic needs clearly.",
          "Can ask for help when confused, uncomfortable, or unwell.",
          "Can answer simple questions in words or short sentences.",
          "Can greet teachers, respond to instructions, and use polite words.",
          "Can share an idea, choice, or feeling with an adult.",
        ],
      },
      {
        title: "Emotional Readiness",
        style: "checklist",
        items: [
          "Can separate from parents with reassurance and routine.",
          "Can wait briefly for their turn during an activity.",
          "Can recover from small disappointment with support.",
          "Shows curiosity about school routines, teachers, and friends.",
          "Can accept simple correction without feeling deeply discouraged.",
        ],
      },
      {
        title: "Home Practice Plan",
        style: "numbered",
        items: [
          "Create a morning routine chart with wake up, freshen up, breakfast, bag, and goodbye.",
          "Practice one independence habit every week instead of correcting everything together.",
          "Do five-minute role play: asking teacher for water, help, or permission.",
          "Give small responsibilities such as arranging pencils or placing books on a shelf.",
          "Praise effort using exact words: 'You tried opening it yourself. That is progress.'",
        ],
      },
      {
        title: "Parent Reflection",
        body: [
          "Readiness grows through repeated comfort. When home and school use similar routines, children settle faster and feel safer.",
          "At SFIS, early classroom habits will be connected with communication, discipline, confidence, and care so children can learn without fear.",
        ],
      },
    ],
  },
  "screen-time": {
    title: "Screen Time Guide",
    filename: "SFIS-Screen-Time-Guide.pdf",
    accent: "blue",
    summary: "A practical family guide to make technology useful, calm, limited, and balanced with sleep, reading, outdoor play, and real conversation.",
    sections: [
      {
        title: "Technology Needs Guidance",
        body: [
          "Screens are not the enemy. Unplanned screen use is the problem. Children can learn, create, and explore through technology, but they also need sleep, movement, reading, family talk, and hands-on play.",
          "This guide helps parents move from daily arguments to clear family rules. The strongest rule is one that is simple, visible, and followed by adults too.",
        ],
      },
      {
        title: "Healthy Screen Rules",
        style: "checklist",
        items: [
          "Keep screens away during meals, homework focus time, and bedtime.",
          "Use screens in shared family spaces when possible.",
          "Prefer educational, creative, or interactive content over endless scrolling.",
          "Avoid fast-changing videos and gaming just before sleep.",
          "Create screen-free time for reading, outdoor play, art, and conversation.",
          "Do not use screens as the first solution for boredom every time.",
        ],
      },
      {
        title: "Quality Questions for Parents",
        style: "prompt",
        items: [
          "Is my child learning, creating, solving, or only watching passively?",
          "Is the content calm, age-appropriate, and safe?",
          "Can my child explain what they watched, made, or learned?",
          "Does screen time affect sleep, behavior, attention, or patience?",
          "Is my child able to stop when time is over without a major struggle?",
        ],
      },
      {
        title: "A Simple Family Agreement",
        style: "numbered",
        items: [
          "Decide daily screen windows in advance, not during an argument.",
          "Use a timer so the rule feels neutral and predictable.",
          "Keep one screen-free family hour every evening.",
          "Replace screen time with ready options: book, drawing, walk, puzzle, music, or board game.",
          "Review the rule every Sunday and adjust if school work, sleep, or behavior is affected.",
        ],
      },
      {
        title: "Better Screen Choices",
        style: "checklist",
        items: [
          "Drawing, coding, storytelling, music, robotics, or guided learning apps.",
          "Documentaries and explainer videos watched with parent discussion.",
          "Video calls with family used for real connection.",
          "Research for school projects followed by handwritten notes.",
          "Creative challenges where the child makes something after watching.",
        ],
      },
      {
        title: "Parent Reflection",
        body: [
          "A child who can use technology with balance is better prepared for the future than a child who is either overexposed or completely unguided.",
          "At SFIS, technology will be positioned as a tool for learning, problem-solving, creativity, and responsible digital habits.",
        ],
      },
    ],
  },
  "child-questions": {
    title: "50 Questions to Ask Your Child",
    filename: "SFIS-50-Questions-to-Ask-Your-Child.pdf",
    accent: "teal",
    summary: "Conversation prompts that help parents understand feelings, friendships, curiosity, confidence, dreams, and hidden worries.",
    sections: [
      {
        title: "Why Questions Matter",
        body: [
          "Children often share more when questions feel warm, specific, and pressure-free. Instead of asking only 'How was school?', try questions that invite stories, feelings, ideas, and choices.",
          "Use two or three questions at a time. The best conversations happen during a walk, bedtime, meal time, drawing, or a quiet drive.",
        ],
      },
      {
        title: "Feelings and Confidence",
        style: "numbered",
        items: [
          "What made you smile today?",
          "What felt difficult today?",
          "When did you feel proud of yourself?",
          "What is something you want to try again?",
          "What helps you feel brave?",
          "What do you do when you feel nervous?",
          "Who made you feel happy today?",
          "What is one thing you are getting better at?",
          "What would you like me to understand about you?",
          "What kind words did you hear or say today?",
        ],
      },
      {
        title: "Learning and Curiosity",
        style: "numbered",
        start: 11,
        items: [
          "What new thing did you learn?",
          "What question did you ask today?",
          "What do you want to know more about?",
          "Which subject felt interesting today?",
          "If you could build anything, what would it be?",
          "What book or story do you remember?",
          "What problem did you solve?",
          "What confused you?",
          "What would you teach someone else?",
          "What idea came to your mind today?",
        ],
      },
      {
        title: "Friendship and Values",
        style: "numbered",
        start: 21,
        items: [
          "Who did you help today?",
          "Who helped you today?",
          "What makes someone a good friend?",
          "Did you include someone in a game?",
          "What should we do when someone feels left out?",
          "What does respect mean to you?",
          "What rule do you think is important?",
          "How can we make someone feel welcome?",
          "What was a kind choice you made?",
          "What can you do when friends disagree?",
        ],
      },
      {
        title: "Dreams and Habits",
        style: "numbered",
        start: 31,
        items: [
          "What do you want to become better at?",
          "What is one dream you have?",
          "What habit should we practice at home?",
          "What do you want to create this week?",
          "What makes you feel focused?",
          "What distracts you?",
          "What is one thing you want to do by yourself?",
          "What makes school exciting?",
          "What do you want your teacher to know?",
          "What is one goal for tomorrow?",
        ],
      },
      {
        title: "Family Conversations",
        style: "numbered",
        start: 41,
        items: [
          "What should we do together this weekend?",
          "What family rule do you like?",
          "What is your favorite time of day?",
          "What makes our home happy?",
          "What can we learn together?",
          "What are you thankful for?",
          "What would make tomorrow better?",
          "What do you want to talk about more?",
          "What is one thing I can help you with?",
          "What was the best part of your day?",
        ],
      },
      {
        title: "Parent Tip",
        body: [
          "When a child answers, resist immediately correcting or advising. First say, 'Tell me more.' Listening builds trust, and trust makes future guidance easier.",
          "At SFIS, communication, confidence, empathy, and expression are treated as important life skills.",
        ],
      },
    ],
  },
  "summer-planner": {
    title: "Summer Learning Planner",
    filename: "SFIS-Summer-Learning-Planner.pdf",
    accent: "gold",
    summary: "A balanced holiday plan that keeps children active, curious, creative, responsible, and connected without making summer feel stressful.",
    sections: [
      {
        title: "Summer Should Build Energy",
        body: [
          "A good summer plan protects childhood while keeping the learning rhythm alive. The aim is not to fill every hour. The aim is to balance reading, movement, creativity, responsibility, family time, and gentle revision.",
          "Use this planner as a flexible weekly rhythm. If the child is tired, travel is planned, or family events are happening, adjust the week without guilt.",
        ],
      },
      {
        title: "Weekly Balance",
        style: "checklist",
        items: [
          "Reading: 20 minutes a day with one discussion question.",
          "Writing: three short journal entries per week.",
          "Math: 15 minutes of fun practice, four days a week.",
          "Creativity: drawing, craft, music, story, model-making, or building.",
          "Outdoor play: movement every day.",
          "Life skills: one home responsibility every week.",
          "Family connection: one shared activity without screens.",
        ],
      },
      {
        title: "Monday to Friday Rhythm",
        style: "numbered",
        items: [
          "Morning: reading, revision, or handwriting before screens.",
          "Late morning: one small responsibility such as plants, shelf, bag, or table.",
          "Afternoon: creative project, puzzle, storytelling, or skill practice.",
          "Evening: outdoor play, cycling, yoga, badminton, cricket, or walk.",
          "Night: two-minute reflection: 'What did I learn or create today?'",
        ],
      },
      {
        title: "Weekend Ideas",
        style: "prompt",
        items: [
          "Visit a library, garden, market, museum, farm, or local place of interest.",
          "Cook one simple recipe together and let the child explain the steps.",
          "Create a family story night where everyone adds one part.",
          "Build a small science, craft, gardening, or recycling project.",
          "Call grandparents and ask about childhood games or school memories.",
          "Make a photo diary of one meaningful day.",
        ],
      },
      {
        title: "Four-Week Mini Challenge",
        style: "numbered",
        items: [
          "Week 1: Finish one book and share the story in five sentences.",
          "Week 2: Create one model, poster, poem, or performance.",
          "Week 3: Learn one life skill such as folding clothes, watering plants, or setting a table.",
          "Week 4: Present one topic to the family for two minutes.",
        ],
      },
      {
        title: "Parent Reminder",
        body: [
          "Summer learning should feel balanced, not stressful. A child who reads, plays, helps, creates, and speaks confidently is developing many future skills at the same time.",
          "At SFIS, holidays and school routines will be seen as part of the same growth journey: academics, confidence, sports, creativity, and character.",
        ],
      },
    ],
  },
};

function createStyledResourcePdfBlob(resource) {
  const objects = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };
  const pageStreams = [];
  let stream = [];
  let y = 680;

  const palette = {
    night: [0.02, 0.075, 0.065],
    ink: [0.075, 0.12, 0.105],
    muted: [0.36, 0.42, 0.39],
    panel: [0.955, 0.965, 0.94],
    soft: [0.985, 0.975, 0.93],
    white: [1, 1, 1],
    teal: [0.13, 0.78, 0.64],
    gold: [0.95, 0.72, 0.28],
    blue: [0.26, 0.48, 0.88],
    line: [0.82, 0.86, 0.78],
  };
  const accent = palette[resource.accent] || palette.teal;
  const color = ([r, g, b]) => `${r} ${g} ${b}`;
  const rect = (x, ry, width, height, fill, stroke = null) => {
    stream.push("q");
    if (fill) stream.push(`${color(fill)} rg`);
    if (stroke) stream.push(`${color(stroke)} RG`);
    stream.push(`${x} ${ry} ${width} ${height} re ${stroke ? "B" : "f"}`);
    stream.push("Q");
  };
  const circle = (x, cy, r, fill) => {
    stream.push("q");
    stream.push(`${color(fill)} rg`);
    stream.push(`${x - r} ${cy} m ${x - r} ${cy + r * 0.55} ${x - r * 0.55} ${cy + r} ${x} ${cy + r} c ${x + r * 0.55} ${cy + r} ${x + r} ${cy + r * 0.55} ${x + r} ${cy} c ${x + r} ${cy - r * 0.55} ${x + r * 0.55} ${cy - r} ${x} ${cy - r} c ${x - r * 0.55} ${cy - r} ${x - r} ${cy - r * 0.55} ${x - r} ${cy} c f`);
    stream.push("Q");
  };
  const text = (value, x, ty, size = 10, font = "F1", fill = palette.ink) => {
    stream.push("BT");
    stream.push(`/${font} ${size} Tf`);
    stream.push(`${color(fill)} rg`);
    stream.push(`${x} ${ty} Td`);
    stream.push(`(${pdfSafeText(value)}) Tj`);
    stream.push("ET");
  };
  const wrappedLines = (value, width, size = 10) => wrapPdfLine(value, Math.max(24, Math.floor(width / (size * 0.52))));
  const itemHeight = (item, width, size = 9.5) => wrappedLines(item, width, size).length * 12 + 9;
  const footer = () => {
    const pageNo = pageStreams.length + 1;
    rect(36, 31, 540, 1, palette.line);
    text("Stone Field International School | Parent Resource Library", 42, 17, 8, "F1", palette.muted);
    text(`Page ${pageNo}`, 540, 17, 8, "F2", palette.muted);
  };
  const finishPage = () => {
    if (!stream.length) return;
    footer();
    pageStreams.push(stream.join("\n"));
    stream = [];
  };
  const startPage = () => {
    finishPage();
    rect(0, 0, 612, 792, palette.panel);
    rect(0, 724, 612, 68, palette.night);
    rect(0, 724, 612, 5, accent);
    text("Stone Field International School", 42, 759, 13, "F2", palette.white);
    text("Parent Resource Library", 42, 741, 9, "F1", palette.white);
    text(new Date().toLocaleDateString(), 504, 750, 9, "F1", palette.white);
    y = 690;
  };
  const ensure = (height) => {
    if (y - height < 56) startPage();
  };
  const renderSection = (section, index) => {
    const bodyLines = (section.body || []).flatMap((line) => wrappedLines(line, 466, 9.6));
    const items = section.items || [];
    const listHeight = items.reduce((total, item) => total + itemHeight(item, 428), 0);
    const height = 54 + bodyLines.length * 13 + listHeight + (items.length ? 8 : 0);
    ensure(height);
    rect(36, y - height, 540, height, palette.white, palette.line);
    rect(36, y - height, 7, height, index % 2 ? palette.gold : accent);
    circle(64, y - 28, 12, index % 2 ? palette.gold : accent);
    text(String(index + 1).padStart(2, "0"), 57, y - 32, 8, "F2", palette.night);
    text(section.title, 88, y - 31, 14, "F2", palette.ink);
    let currentY = y - 55;
    bodyLines.forEach((line) => {
      text(line, 58, currentY, 9.6, "F1", palette.muted);
      currentY -= 13;
    });
    if (items.length && bodyLines.length) currentY -= 6;
    items.forEach((item, itemIndex) => {
      const lines = wrappedLines(item, 428, 9.5);
      if (section.style === "numbered") {
        const itemNumber = (section.start || 1) + itemIndex;
        circle(65, currentY + 1, 8, index % 2 ? accent : palette.gold);
        text(String(itemNumber), itemNumber > 9 ? 60 : 62, currentY - 2, 7, "F2", palette.night);
      } else if (section.style === "checklist") {
        rect(58, currentY - 7, 11, 11, palette.soft, accent);
      } else {
        rect(56, currentY - 9, 54, 15, palette.soft, accent);
        text("Reflect", 66, currentY - 5, 7, "F2", palette.ink);
      }
      const textX = section.style === "prompt" ? 122 : 82;
      lines.forEach((line, lineIndex) => {
        text(line, textX, currentY - lineIndex * 12, 9.5, "F1", palette.ink);
      });
      currentY -= lines.length * 12 + 9;
    });
    y -= height + 14;
  };

  startPage();
  rect(36, y - 134, 540, 134, palette.night);
  rect(54, y - 110, 118, 64, accent);
  text("FREE", 77, y - 69, 22, "F2", palette.night);
  text("PARENT GUIDE", 69, y - 88, 8, "F2", palette.night);
  text(resource.title, 194, y - 50, resource.title.length > 33 ? 21 : 24, "F2", palette.gold);
  wrappedLines(resource.summary, 330, 10.5).forEach((line, index) => {
    text(line, 196, y - 76 - index * 14, 10.5, "F1", palette.white);
  });
  y -= 156;
  rect(36, y - 64, 540, 64, palette.soft, palette.line);
  text("Designed for parents of young learners", 58, y - 25, 13, "F2", palette.ink);
  text("Read, mark, discuss, and revisit this guide as your child grows.", 58, y - 45, 9.5, "F1", palette.muted);
  y -= 84;

  resource.sections.forEach((section, index) => renderSection(section, index));
  ensure(76);
  rect(36, y - 70, 540, 70, palette.night);
  text("Next Step", 58, y - 26, 13, "F2", palette.gold);
  text("Save this PDF, revisit it monthly, and use it as a warm conversation starter with your child.", 58, y - 45, 9.5, "F1", palette.white);
  text("For school enquiries, WhatsApp: 8826758881", 58, y - 59, 9.5, "F2", accent);
  finishPage();

  addObject("<< /Type /Catalog /Pages 2 0 R >>");
  addObject("");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  pageStreams.forEach((pageStream) => {
    const contentId = objects.length + 2;
    const pageId = addObject(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`);
    addObject(`<< /Length ${pageStream.length} >>\nstream\n${pageStream}\nendstream`);
    pageIds.push(pageId);
  });
  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((content, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${content}\nendobj\n`;
  });
  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: "application/pdf" });
}

function downloadParentResource(resourceKey) {
  const resource = parentResourceDownloads[resourceKey];
  if (!resource) return;
  downloadBlob(createStyledResourcePdfBlob(resource), resource.filename);
}

function showResourceLeadError(message) {
  if (!resourceLeadError) return;
  resourceLeadError.textContent = message;
  resourceLeadError.hidden = false;
}

function clearResourceLeadError() {
  if (!resourceLeadError) return;
  resourceLeadError.textContent = "";
  resourceLeadError.hidden = true;
}

function openResourceLeadModal(resourceKey) {
  const resource = parentResourceDownloads[resourceKey];
  if (!resourceLeadModal || !resourceLeadForm || !resource) {
    downloadParentResource(resourceKey);
    return;
  }
  pendingResourceDownloadKey = resourceKey;
  resourceLeadForm.reset();
  clearResourceLeadError();
  if (resourceLeadTitleInput) resourceLeadTitleInput.value = resource.title;
  const title = resourceLeadModal.querySelector("#resourceLeadTitle");
  if (title) title.textContent = `Get ${resource.title}`;
  resourceLeadModal.hidden = false;
  resourceLeadForm.querySelector("input")?.focus({ preventScroll: true });
}

function closeResourceLeadModal() {
  if (!resourceLeadModal) return;
  resourceLeadModal.hidden = true;
  pendingResourceDownloadKey = "";
  clearResourceLeadError();
}

function validateResourceLeadForm(data) {
  const required = [
    ["resourceParentName", "parent name"],
    ["resourceChildName", "child name"],
    ["resourceMobile", "mobile number"],
    ["resourceEmail", "email"],
  ];
  const missing = required.find(([field]) => !String(data.get(field) || "").trim());
  if (missing) return `Please enter ${missing[1]} before downloading the guide.`;
  const mobile = String(data.get("resourceMobile") || "").replace(/\D/g, "");
  if (mobile.length < 10) return "Please enter a valid 10-digit mobile number.";
  const email = String(data.get("resourceEmail") || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  return "";
}

resourceDownloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openResourceLeadModal(button.dataset.resourceDownload);
  });
});

document.querySelectorAll("[data-resource-lead-close]").forEach((button) => {
  button.addEventListener("click", closeResourceLeadModal);
});

resourceLeadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const resource = parentResourceDownloads[pendingResourceDownloadKey];
  if (!resource) return;
  const data = new FormData(resourceLeadForm);
  const error = validateResourceLeadForm(data);
  if (error) {
    showResourceLeadError(error);
    return;
  }
  clearResourceLeadError();
  submitResourceToGoogleForm(data, resource);
  downloadParentResource(pendingResourceDownloadKey);
  closeResourceLeadModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && resourceLeadModal && !resourceLeadModal.hidden) {
    closeResourceLeadModal();
  }
});

function downloadBlueprintPdf() {
  const validation = validateBlueprintForm({
    messagePrefix: "Please complete all child details and answer every question before downloading the PDF.",
  });
  if (!validation.isValid) return;

  if (!latestBlueprint) {
    showBlueprintError("Please generate the assessment report first, then download the PDF.");
    return;
  }

  if (latestBlueprintSignature !== getBlueprintFormSignature()) {
    showBlueprintError("Some answers have changed. Please click Generate Assessment Report again before downloading the updated PDF.");
    return;
  }

  const blob = createStyledBlueprintPdfBlob();
  const childName = safeDownloadName(latestBlueprint.childName);
  downloadBlob(blob, `SFIS-AI-Generated-${childName}.pdf`);
}
