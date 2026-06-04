const menuButton = document.querySelector(".menu-button");
const megaMenu = document.querySelector(".mega-menu");
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
const whatsappNumber = "918826758881";
const landingPopupSeenKey = "sfisLandingPopupSeen";
const savedBlueprintKey = "sfisFutureSparkReport";
const blueprintGoogleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdX-9JaaRy0_KRHkWwxy6-IvxYKSPqS3G2UBkYKIKmlQ_TTHw/formResponse";
const pendingBlueprintLeadKey = "sfisPendingBlueprintLead";

const parentBotQuickQuestions = [
  "When will admissions open?",
  "Which classes are available?",
  "What is Kidsverse priority?",
  "Where is the enquiry office?",
  "What facilities are planned?",
  "What is Future Spark AI Report?",
  "What is Future Explorer Challenge?",
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
      "Eligible Kidsverse students will receive admission priority, with 50% of available seats reserved as a gratitude gesture to families who trusted the founders from the beginning.",
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
      "The temporary enquiry office is Kidsverse School, Rehan, until SFIS construction is complete. Parents can visit there for guidance, priority list registration, and next steps.",
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
    keywords: ["challenge", "future explorer", "young genius", "certificate", "award", "game"],
    answer:
      "The SFIS Future Explorer Challenge is a 5-minute interactive game for children aged 5 to 10. It includes IQ, observation, fun math, reading, and creativity rounds, followed by an instant Future Explorer Award certificate.",
  },
  {
    keywords: ["founder", "founders", "neha", "vinay", "behind", "managed"],
    answer:
      "Stone Field International School is founded by Neha Sharma and Vinay Sharma, the same team behind Kidsverse Playschool Rehan and the After School Activity Center Rehan.",
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
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

function saveLatestBlueprint() {
  if (!latestBlueprint) return;
  try {
    localStorage.setItem(savedBlueprintKey, JSON.stringify(latestBlueprint));
  } catch (error) {
    console.warn("Future Spark report could not be saved in this browser.", error);
  }
}

function submitLeadToGoogleForm(lead) {
  const payload = new URLSearchParams();
  payload.set("entry.1434087836", String(lead.fatherName || "").trim());
  payload.set("entry.533861399", String(lead.childName || "").trim());
  payload.set("entry.2056952779", String(lead.mobile || "").trim());
  payload.set("entry.1366045606", String(lead.email || "").trim());

  if (window.location.protocol === "file:") {
    localStorage.setItem(pendingBlueprintLeadKey, payload.toString());
    console.warn("Google Form submission is skipped in file mode. Open the site with http://localhost or publish it online to submit leads.");
    return;
  }

  fetch(blueprintGoogleFormUrl, {
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

function submitPendingBlueprintLead() {
  const pendingPayload = localStorage.getItem(pendingBlueprintLeadKey);
  if (!pendingPayload || window.location.protocol === "file:") return;
  fetch(blueprintGoogleFormUrl, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(pendingPayload),
  })
    .then(() => localStorage.removeItem(pendingBlueprintLeadKey))
    .catch((error) => {
      console.warn("Pending Google Form submission could not be completed.", error);
    });
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
