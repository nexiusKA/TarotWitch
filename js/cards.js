/**
 * TarotWitch – Full 78-card tarot deck data
 * Each card has: name, arcana, suit (if Minor), uprightMeaning, reversedMeaning, symbol
 */

const MAJOR_ARCANA = [
  {
    id: 0,
    name: "The Fool",
    arcana: "Major",
    symbol: "🃏",
    upright: "New beginnings, innocence, spontaneity, a free spirit",
    reversed: "Recklessness, taken advantage of, inconsideration",
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "Major",
    symbol: "🌟",
    upright: "Manifestation, resourcefulness, power, inspired action",
    reversed: "Manipulation, poor planning, untapped talents",
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "Major",
    symbol: "🌙",
    upright: "Intuition, sacred knowledge, divine feminine, the subconscious",
    reversed: "Secrets, disconnected from intuition, withdrawal",
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "Major",
    symbol: "🌺",
    upright: "Femininity, beauty, nature, nurturing, abundance",
    reversed: "Creative block, dependence on others, emptiness",
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "Major",
    symbol: "👑",
    upright: "Authority, establishment, structure, a father figure",
    reversed: "Domination, excessive control, rigidity, inflexibility",
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "Major",
    symbol: "⛪",
    upright: "Spiritual wisdom, religious beliefs, conformity, tradition",
    reversed: "Personal beliefs, freedom, challenging the status quo",
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "Major",
    symbol: "💕",
    upright: "Love, harmony, relationships, values alignment, choices",
    reversed: "Self-love, disharmony, imbalance, misaligned values",
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "Major",
    symbol: "🏆",
    upright: "Control, willpower, success, action, determination",
    reversed: "Self-discipline, opposition, lack of direction",
  },
  {
    id: 8,
    name: "Strength",
    arcana: "Major",
    symbol: "🦁",
    upright: "Strength, courage, persuasion, influence, compassion",
    reversed: "Inner strength, self-doubt, low energy, raw emotion",
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "Major",
    symbol: "🕯️",
    upright: "Soul-searching, introspection, being alone, inner guidance",
    reversed: "Isolation, loneliness, withdrawal, lost your way",
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "Major",
    symbol: "☸️",
    upright: "Good luck, karma, life cycles, destiny, a turning point",
    reversed: "Bad luck, resistance to change, breaking cycles",
  },
  {
    id: 11,
    name: "Justice",
    arcana: "Major",
    symbol: "⚖️",
    upright: "Justice, fairness, truth, cause and effect, law",
    reversed: "Unfairness, lack of accountability, dishonesty",
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "Major",
    symbol: "🌀",
    upright: "Pause, surrender, letting go, new perspectives",
    reversed: "Delays, resistance, stalling, indecision",
  },
  {
    id: 13,
    name: "Death",
    arcana: "Major",
    symbol: "🌑",
    upright: "Endings, change, transformation, transition",
    reversed: "Resistance to change, personal transformation, inner purging",
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "Major",
    symbol: "🌈",
    upright: "Balance, moderation, patience, purpose, meaning",
    reversed: "Imbalance, excess, self-healing, realignment",
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "Major",
    symbol: "🔗",
    upright: "Shadow self, attachment, addiction, restriction, sexuality",
    reversed: "Releasing limiting beliefs, exploring dark thoughts, detachment",
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "Major",
    symbol: "⚡",
    upright: "Sudden change, upheaval, chaos, revelation, awakening",
    reversed: "Personal transformation, fear of change, averting disaster",
  },
  {
    id: 17,
    name: "The Star",
    arcana: "Major",
    symbol: "⭐",
    upright: "Hope, faith, purpose, renewal, spirituality",
    reversed: "Lack of faith, despair, self-trust, disconnection",
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "Major",
    symbol: "🌛",
    upright: "Illusion, fear, the unconscious, intuition, dreams",
    reversed: "Release of fear, repressed emotion, inner confusion",
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "Major",
    symbol: "☀️",
    upright: "Positivity, fun, warmth, success, vitality",
    reversed: "Inner child, feeling down, overly optimistic",
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "Major",
    symbol: "📯",
    upright: "Judgement, rebirth, inner calling, absolution",
    reversed: "Self-doubt, inner critic, ignoring the call",
  },
  {
    id: 21,
    name: "The World",
    arcana: "Major",
    symbol: "🌍",
    upright: "Completion, integration, accomplishment, travel",
    reversed: "Seeking personal closure, short-cuts, delays",
  },
];

const SUITS = ["Wands", "Cups", "Swords", "Pentacles"];

const SUIT_SYMBOLS = {
  Wands: "🔥",
  Cups: "🌊",
  Swords: "⚔️",
  Pentacles: "🌿",
};

const COURT_CARDS = [
  {
    rank: "Page",
    upright: "Enthusiasm, exploration, discovery, free spirit",
    reversed: "Lack of direction, procrastination, creating conflict",
  },
  {
    rank: "Knight",
    upright: "Action, adventure, energy, ambition",
    reversed: "Scattered energy, lack of focus, burnout",
  },
  {
    rank: "Queen",
    upright: "Compassion, calm, comfort, beauty, wisdom",
    reversed: "Martyrdom, insecurity, dependence, manipulation",
  },
  {
    rank: "King",
    upright: "Control, power, command, authority",
    reversed: "Domineering, controlling, abuse of power",
  },
];

const SUIT_MEANINGS = {
  Wands: {
    element: "Fire",
    theme: "passion, creativity, ambition, action",
    pip: [
      { upright: "Creation, willpower, inspiration, beginnings", reversed: "Delays, lack of motivation, weighed down" },
      { upright: "Planning, discovery, future, progress", reversed: "Personal goals, lack of long-term planning" },
      { upright: "Momentum, confidence, exploration, freedom", reversed: "Playing safe, delays, frustration" },
      { upright: "Celebration, joy, harmony, community", reversed: "Personal celebration, inner harmony, conflict" },
      { upright: "Competition, conflict, rivalry, diversity", reversed: "Avoiding conflict, respecting differences" },
      { upright: "Public recognition, victory, progress", reversed: "Private achievement, personal satisfaction" },
      { upright: "Perseverance, defending yourself, last stand", reversed: "Giving up, overwhelmed, exhaustion" },
      { upright: "Speed, swiftness, urgency, on the move", reversed: "Restlessness, burnout, delays" },
      { upright: "Resilience, grit, last stand, persistence", reversed: "Inner resources, struggle, overwhelm" },
      { upright: "Burdens, responsibility, overwhelming work", reversed: "Taking on too much, delegation, escape" },
    ],
  },
  Cups: {
    element: "Water",
    theme: "emotion, intuition, relationships, creativity",
    pip: [
      { upright: "New feelings, spirituality, intuition, love", reversed: "Blocked creativity, emptiness, lost" },
      { upright: "Partnership, unity, love, connection", reversed: "Self-love, break-ups, disharmony" },
      { upright: "Friendship, celebration, creativity, communities", reversed: "Overindulgence, gossip, isolation" },
      { upright: "Apathy, contemplation, disconnectedness", reversed: "Sudden awareness, choosing happiness" },
      { upright: "Regret, loss, grief, past", reversed: "Acceptance, moving on, forgiveness" },
      { upright: "Nostalgia, childhood memories, innocence", reversed: "Living in the past, naivety, new opportunities" },
      { upright: "Wishful thinking, choices, fantasy", reversed: "Alignment, personal values, overwhelmed" },
      { upright: "Indulge, escapism, disappointment, walking away", reversed: "Hopelessness, aimless drifting, moving on" },
      { upright: "Contentment, fulfillment, bliss, luxury", reversed: "Inner happiness, materialism, smugness" },
      { upright: "Divine love, bliss, gratitude, wishes fulfilled", reversed: "Illusion, blurred boundaries, out of touch" },
    ],
  },
  Swords: {
    element: "Air",
    theme: "truth, intellect, conflict, communication",
    pip: [
      { upright: "Breakthroughs, clarity, sharp mind", reversed: "Confusion, brutality, chaos" },
      { upright: "Difficult choices, indecision, stalemate", reversed: "Indecision, confusion, information overload" },
      { upright: "Heartbreak, painful truths, sorrow", reversed: "Recovery, forgiveness, moving on" },
      { upright: "Rest, relaxation, meditation, contemplation", reversed: "Exhaustion, burn-out, deep contemplation" },
      { upright: "Defeat, conflict, betrayal, win at all costs", reversed: "Reconciliation, making amends" },
      { upright: "Transition, change, rite of passage, moving on", reversed: "Personal transition, resistance to change" },
      { upright: "Deception, trickery, tactics, dishonesty", reversed: "Imposter, deception, coming clean" },
      { upright: "Imprisonment, entrapment, victim mentality", reversed: "Release, new perspective, freedom" },
      { upright: "Anxiety, worry, fear, depression", reversed: "Inner turmoil, releasing worry, despair" },
      { upright: "Painful endings, deep wounds, betrayal, loss", reversed: "Recovery, regeneration, fear of ruin" },
    ],
  },
  Pentacles: {
    element: "Earth",
    theme: "wealth, material, career, practical",
    pip: [
      { upright: "Financial opportunity, prosperity, new venture", reversed: "Missed opportunity, bad investment" },
      { upright: "Balancing resources, prioritization, adaptability", reversed: "Financial disorganization, overwhelmed" },
      { upright: "Teamwork, building, implementation", reversed: "Group conflict, mediocrity, apathy" },
      { upright: "Security, boundaries, conservation, control", reversed: "Boundaries, self-protective, hoarding" },
      { upright: "Poverty, insecurity, lack, destitution", reversed: "Recovery from financial loss, spiritual wealth" },
      { upright: "Generosity, charity, giving, prosperity", reversed: "Strings-attached gifts, inequality" },
      { upright: "Hard work, diligence, gardening, investment", reversed: "Lack of long-term vision, limited payoff" },
      { upright: "Skill, talent, craftsmanship, quality", reversed: "Self-development, perfectionism" },
      { upright: "Abundance, luxury, self-sufficiency", reversed: "Financial dependence, self-gain, excessive reserve" },
      { upright: "Wealth, business, leadership, achievement", reversed: "Financial failure, obsession, greed" },
    ],
  },
};

/**
 * Generate the full 78-card deck
 */
function buildDeck() {
  const deck = [...MAJOR_ARCANA.map((c) => ({ ...c }))];

  SUITS.forEach((suit) => {
    const suitData = SUIT_MEANINGS[suit];

    // Pip cards (Ace–10)
    for (let i = 1; i <= 10; i++) {
      const pipIndex = i - 1;
      const rankLabel = i === 1 ? "Ace" : String(i);
      deck.push({
        id: deck.length,
        name: `${rankLabel} of ${suit}`,
        arcana: "Minor",
        suit,
        symbol: SUIT_SYMBOLS[suit],
        upright: suitData.pip[pipIndex]?.upright || `${rankLabel} of ${suit} energy – ${suitData.theme}`,
        reversed: suitData.pip[pipIndex]?.reversed || `Blocked ${suitData.theme}`,
      });
    }

    // Court cards
    COURT_CARDS.forEach((court) => {
      deck.push({
        id: deck.length,
        name: `${court.rank} of ${suit}`,
        arcana: "Minor",
        suit,
        symbol: SUIT_SYMBOLS[suit],
        upright: court.upright,
        reversed: court.reversed,
      });
    });
  });

  return deck;
}

const FULL_DECK = buildDeck();

/**
 * Shuffle an array using Fisher-Yates and randomly assign reversed status
 */
function shuffleDeck(deck) {
  const shuffled = deck.map((card) => ({
    ...card,
    isReversed: Math.random() < 0.3, // 30% chance of reversed
  }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Draw n cards from the deck
 */
function drawCards(n) {
  const shuffled = shuffleDeck(FULL_DECK);
  return shuffled.slice(0, n);
}

// Named spread configurations
const SPREADS = {
  three: {
    name: "Three-Card Spread",
    positions: ["Past", "Present", "Future"],
    description: "A timeless spread revealing the flow of your situation",
  },
  celtic: {
    name: "Celtic Cross",
    positions: [
      "You (the heart)",
      "The Challenge",
      "The Foundation",
      "The Recent Past",
      "The Possible Outcome",
      "The Near Future",
      "Your Attitude",
      "External Influences",
      "Hopes & Fears",
      "The Final Outcome",
    ],
    description: "A deep reading that explores all facets of your question",
  },
  single: {
    name: "Single Card",
    positions: ["Your Answer"],
    description: "One card to illuminate your question",
  },
};
