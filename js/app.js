/**
 * TarotWitch – App Logic
 * Handles card drawing, animations, and UI interactions
 */

// ─── State ───────────────────────────────────────────────────────────────────
let currentSpread = "three";
let drawnCards = [];
let revealedCount = 0;
let isReading = false;
let currentLang = localStorage.getItem("tarot-lang") || "en";

// ─── Translation Helper ───────────────────────────────────────────────────────
function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS.en[key] || key;
}

function getSpreads() {
  return currentLang === "de" ? SPREADS_DE : SPREADS;
}

function getGreetings() {
  return currentLang === "de" ? GREETINGS_DE : GREETINGS;
}

function getRevealMessages() {
  return currentLang === "de" ? REVEAL_MESSAGES_DE : REVEAL_MESSAGES;
}

function getFinalMessagesPool() {
  return currentLang === "de" ? FINAL_MESSAGES_DE : FINAL_MESSAGES;
}

// ─── DOM References ───────────────────────────────────────────────────────────
const questionInput  = document.getElementById("question-input");
const askBtn         = document.getElementById("ask-btn");
const spreadSelect   = document.getElementById("spread-select");
const tableArea      = document.getElementById("table-area");
const readingSection = document.getElementById("reading-section");
const spreadLabel    = document.getElementById("spread-label");
const spreadDesc     = document.getElementById("spread-desc");
const cardSlots      = document.getElementById("card-slots");
const revealBtn      = document.getElementById("reveal-btn");
const newReadingBtn  = document.getElementById("new-reading-btn");
const witchMessage   = document.getElementById("witch-message");
const questionDisplay = document.getElementById("question-display");
const particles      = document.getElementById("particles");
const crystalBall    = document.getElementById("crystal-ball");
const siteSubtitle   = document.querySelector(".site-subtitle");
const questionLabel  = document.querySelector('label[for="question-input"]');
const spreadSelectLabel = document.querySelector('label[for="spread-select"]');
const questionEcho   = document.querySelector(".question-display > p");
const siteFooter     = document.querySelector(".site-footer p");
const langBtnEn      = document.getElementById("lang-en");
const langBtnDe      = document.getElementById("lang-de");

// ─── Initialise ───────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  createParticles();
  setupEventListeners();
  crystalBall.addEventListener("click", crystalBallPulse);
});

function populateSpreadSelect() {
  spreadSelect.innerHTML = "";
  Object.entries(getSpreads()).forEach(([key, spread]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = spread.name;
    spreadSelect.appendChild(opt);
  });
  spreadSelect.value = currentSpread;
}

function setupEventListeners() {
  askBtn.addEventListener("click", startReading);
  revealBtn.addEventListener("click", revealNextCard);
  newReadingBtn.addEventListener("click", resetReading);

  questionInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      startReading();
    }
  });

  spreadSelect.addEventListener("change", () => {
    currentSpread = spreadSelect.value;
  });

  langBtnEn.addEventListener("click", () => switchLang("en"));
  langBtnDe.addEventListener("click", () => switchLang("de"));
}

// ─── Language Switching ───────────────────────────────────────────────────────
function switchLang(lang) {
  if (lang === currentLang) return;
  if (isReading) resetReading();
  currentLang = lang;
  localStorage.setItem("tarot-lang", lang);
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = currentLang;

  siteSubtitle.textContent          = t("subtitle");
  crystalBall.title                 = t("crystalTitle");
  questionLabel.textContent         = t("questionLabel");
  questionInput.placeholder         = t("questionPlaceholder");
  spreadSelectLabel.textContent     = t("spreadLabel");
  askBtn.textContent                = t("askBtn");
  questionEcho.textContent          = t("questionDisplay");
  siteFooter.textContent            = t("footer");

  tableArea.setAttribute("aria-label",      t("askAreaAriaLabel"));
  readingSection.setAttribute("aria-label", t("readingAriaLabel"));
  cardSlots.setAttribute("aria-label",      t("cardSlotsAriaLabel"));

  if (!isReading) {
    setWitchMessage(t("witchDefault"));
    revealBtn.textContent = t("revealBtn");
    newReadingBtn.textContent = t("newReadingBtn");
  }

  populateSpreadSelect();

  langBtnEn.classList.toggle("active", currentLang === "en");
  langBtnDe.classList.toggle("active", currentLang === "de");
}

// ─── Particles ────────────────────────────────────────────────────────────────
function createParticles() {
  const PARTICLE_COUNT = 60;
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      animation-delay: ${Math.random() * 8}s;
      animation-duration: ${Math.random() * 6 + 6}s;
      opacity: ${Math.random() * 0.6 + 0.1};
    `;
    particles.appendChild(p);
  }
}

function crystalBallPulse() {
  crystalBall.classList.add("pulse-active");
  setTimeout(() => crystalBall.classList.remove("pulse-active"), 600);
}

// ─── Reading Flow ─────────────────────────────────────────────────────────────
function startReading() {
  const question = questionInput.value.trim();
  if (!question) {
    shakeElement(questionInput);
    setWitchMessage(t("emptyQuestion"));
    return;
  }
  if (isReading) return;

  isReading = true;
  currentSpread = spreadSelect.value;
  const spread = getSpreads()[currentSpread];
  const deck = currentLang === "de" ? FULL_DECK_DE : FULL_DECK;
  drawnCards = drawCardsFrom(deck, spread.positions.length);
  revealedCount = 0;

  // Show question
  questionDisplay.textContent = `"${question}"`;

  // Update spread info
  spreadLabel.textContent = spread.name;
  spreadDesc.textContent  = spread.description;

  // Build card slots
  buildCardSlots(spread);

  // Show reading section
  tableArea.classList.add("hidden");
  readingSection.classList.remove("hidden");

  setWitchMessage(getWitchGreeting());
  revealBtn.disabled = false;
  newReadingBtn.textContent = t("newReadingBtn");
  newReadingBtn.classList.remove("hidden");

  // Animate cards onto table with stagger
  const slots = cardSlots.querySelectorAll(".card-slot");
  slots.forEach((slot, i) => {
    setTimeout(() => {
      slot.classList.add("card-appear");
    }, i * 200);
  });
}

function buildCardSlots(spread) {
  cardSlots.innerHTML = "";
  cardSlots.dataset.spread = currentSpread;
  cardSlots.dataset.count  = spread.positions.length;

  spread.positions.forEach((pos, i) => {
    const slot = document.createElement("div");
    slot.className     = "card-slot";
    slot.dataset.index = i;

    const arcanaLabel = drawnCards[i].arcana === "Major"
      ? t("majorArcana")
      : drawnCards[i].suit + " " + t("minorArcana");

    slot.innerHTML = `
      <div class="card-position-label">${pos}</div>
      <div class="tarot-card face-down" id="card-${i}">
        <div class="card-inner">
          <div class="card-face card-back">
            <div class="card-back-pattern">
              <span class="back-symbol">🔮</span>
            </div>
          </div>
          <div class="card-face card-front">
            <div class="card-header">
              <span class="card-arcana">${arcanaLabel}</span>
            </div>
            <div class="card-symbol ${drawnCards[i].isReversed ? "reversed-symbol" : ""}">
              ${drawnCards[i].symbol}
            </div>
            <div class="card-name ${drawnCards[i].isReversed ? "reversed-name" : ""}">${drawnCards[i].name}</div>
            ${drawnCards[i].isReversed ? `<div class="reversed-badge">${t("reversed")}</div>` : ""}
            <div class="card-meaning">
              ${drawnCards[i].isReversed ? drawnCards[i].reversed : drawnCards[i].upright}
            </div>
          </div>
        </div>
      </div>
    `;
    cardSlots.appendChild(slot);
  });
}

function revealNextCard() {
  if (revealedCount >= drawnCards.length) return;

  const cardEl = document.getElementById(`card-${revealedCount}`);
  cardEl.classList.add("flipped");

  revealedCount++;

  if (revealedCount === drawnCards.length) {
    revealBtn.textContent = t("allRevealed");
    revealBtn.disabled    = true;
    setTimeout(() => {
      setWitchMessage(getFinalMessage(drawnCards));
    }, 600);
  } else {
    setWitchMessage(getRevealMessage(revealedCount, drawnCards.length));
  }
}

function resetReading() {
  isReading     = false;
  revealedCount = 0;
  drawnCards    = [];

  readingSection.classList.add("hidden");
  tableArea.classList.remove("hidden");

  questionInput.value    = "";
  revealBtn.textContent  = t("revealBtn");
  revealBtn.disabled     = true;
  newReadingBtn.classList.add("hidden");
  cardSlots.innerHTML    = "";

  setWitchMessage(t("witchDefault"));
}

// ─── Witch Messages ───────────────────────────────────────────────────────────
function setWitchMessage(msg) {
  witchMessage.classList.remove("fade-in");
  void witchMessage.offsetWidth; // Force reflow to restart CSS animation
  witchMessage.textContent = msg;
  witchMessage.classList.add("fade-in");
}

const GREETINGS = [
  "The veil grows thin… I sense your question resonating through the astral plane. Reveal each card when you are ready.",
  "Ah, seeker… the spirits stir. The cards have been drawn. Turn them one by one and hear what the cosmos whispers.",
  "Your question travels far… across shadow and starlight, the cards answer. Reveal them and listen.",
  "The coven stirs at your calling. Your fate is spread before you — lift the veil, one card at a time.",
];

const REVEAL_MESSAGES = [
  "The first card speaks… heed its words carefully.",
  "Another card turns… the picture grows clearer.",
  "The cards weave a story now… continue.",
  "Nearly revealed… what do you feel as you read?",
  "The pattern emerges from shadow…",
];

const FINAL_MESSAGES = [
  (cards) =>
    `The reading is complete. ${cards.filter((c) => c.isReversed).length > 1 ? "Several reversed cards suggest inner blocks to examine." : "The cards speak clearly — trust your intuition."}`,
  () => "The cosmos has spoken. Sit with these messages; truth often reveals itself in stillness.",
  () => "Your reading is done, dear seeker. What resonates most deeply is your true answer.",
];

function getWitchGreeting() {
  const pool = getGreetings();
  return pool[Math.floor(Math.random() * pool.length)];
}

function getRevealMessage(count, total) {
  const pool = getRevealMessages();
  return pool[count - 1] || pool[pool.length - 1];
}

function getFinalMessage(cards) {
  const pool = getFinalMessagesPool();
  const fn   = pool[Math.floor(Math.random() * pool.length)];
  return fn(cards);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shakeElement(el) {
  el.classList.add("shake");
  el.addEventListener("animationend", () => el.classList.remove("shake"), { once: true });
}
