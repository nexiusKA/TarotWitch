/**
 * TarotWitch – Internationalisation (i18n)
 * Supports: English (en) · Deutsch (de)
 */

// ─── UI String Translations ───────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    subtitle:            "Whisper your question · Let the cards speak",
    crystalTitle:        "Click to awaken the witch",
    witchDefault:        "The cards await your question, dear seeker…",
    questionLabel:       "🌙 Your Question",
    questionPlaceholder: "What does the universe want me to know about…",
    spreadLabel:         "✦ Choose a Spread:",
    askBtn:              "🔮 Ask the Witch",
    questionDisplay:     "Your question",
    revealBtn:           "✦ Reveal Next Card ✦",
    newReadingBtn:       "↩ New Reading",
    allRevealed:         "All Cards Revealed",
    reversed:            "Reversed",
    majorArcana:         "★ Major Arcana ★",
    minorArcana:         "· Minor Arcana",
    emptyQuestion:       "✨ You must whisper your question to the cards first…",
    footer:              "✦ \u00a0 TarotWitch \u00a0 ✦ \u00a0 A mystical reading awaits \u00a0 ✦",
    cardSlotsAriaLabel:  "Drawn tarot cards",
    askAreaAriaLabel:    "Ask the witch",
    readingAriaLabel:    "Your tarot reading",
  },
  de: {
    subtitle:            "Flüstere deine Frage · Lass die Karten sprechen",
    crystalTitle:        "Klick um die Hexe zu erwecken",
    witchDefault:        "Die Karten erwarten deine Frage, lieber Suchender…",
    questionLabel:       "🌙 Deine Frage",
    questionPlaceholder: "Was möchte das Universum, dass ich über … wisse…",
    spreadLabel:         "✦ Wähle eine Legung:",
    askBtn:              "🔮 Frage die Hexe",
    questionDisplay:     "Deine Frage",
    revealBtn:           "✦ Nächste Karte aufdecken ✦",
    newReadingBtn:       "↩ Neue Legung",
    allRevealed:         "Alle Karten aufgedeckt",
    reversed:            "Umgekehrt",
    majorArcana:         "★ Große Arcana ★",
    minorArcana:         "· Kleine Arcana",
    emptyQuestion:       "✨ Du musst erst deine Frage an die Karten flüstern…",
    footer:              "✦ \u00a0 TarotWitch \u00a0 ✦ \u00a0 Eine mystische Legung erwartet dich \u00a0 ✦",
    cardSlotsAriaLabel:  "Gezogene Tarotkarten",
    askAreaAriaLabel:    "Die Hexe befragen",
    readingAriaLabel:    "Deine Tarotlegung",
  },
};

// ─── German Witch Messages ────────────────────────────────────────────────────
const GREETINGS_DE = [
  "Der Schleier wird dünner… Ich spüre deine Frage, die durch die Astralebene hallt. Decke jede Karte auf, wenn du bereit bist.",
  "Ah, Suchender… die Geister erwachen. Die Karten wurden gezogen. Wende sie eine nach der anderen und lausche dem Flüstern des Kosmos.",
  "Deine Frage reist weit… durch Schatten und Sternenlicht antworten die Karten. Decke sie auf und höre zu.",
  "Der Hexenzirkel erwacht bei deinem Ruf. Dein Schicksal liegt vor dir ausgebreitet — hebe den Schleier, eine Karte nach der anderen.",
];

const REVEAL_MESSAGES_DE = [
  "Die erste Karte spricht… achte sorgfältig auf ihre Worte.",
  "Eine weitere Karte wendet sich… das Bild wird klarer.",
  "Die Karten weben nun eine Geschichte… fahre fort.",
  "Fast enthüllt… was fühlst du, während du liest?",
  "Das Muster taucht aus dem Schatten auf…",
];

const FINAL_MESSAGES_DE = [
  (cards) =>
    `Die Legung ist vollständig. ${cards.filter((c) => c.isReversed).length > 1 ? "Mehrere umgekehrte Karten deuten auf innere Blockaden hin, die es zu untersuchen gilt." : "Die Karten sprechen klar — vertraue deiner Intuition."}`,
  () => "Der Kosmos hat gesprochen. Lass diese Botschaften in dir nachwirken; die Wahrheit offenbart sich oft in der Stille.",
  () => "Deine Legung ist beendet, lieber Suchender. Was am tiefsten resoniert, ist deine wahre Antwort.",
];

// ─── German Spreads ───────────────────────────────────────────────────────────
const SPREADS_DE = {
  three: {
    name: "Drei-Karten-Legung",
    positions: ["Vergangenheit", "Gegenwart", "Zukunft"],
    description: "Eine zeitlose Legung, die den Fluss deiner Situation offenbart",
  },
  celtic: {
    name: "Keltisches Kreuz",
    positions: [
      "Du (das Herz)",
      "Die Herausforderung",
      "Das Fundament",
      "Die jüngste Vergangenheit",
      "Das mögliche Ergebnis",
      "Die nahe Zukunft",
      "Deine Einstellung",
      "Äußere Einflüsse",
      "Hoffnungen & Ängste",
      "Das endgültige Ergebnis",
    ],
    description: "Eine tiefe Legung, die alle Facetten deiner Frage beleuchtet",
  },
  single: {
    name: "Einzelkarte",
    positions: ["Deine Antwort"],
    description: "Eine Karte, die deine Frage erhellt",
  },
};

// ─── German Card Data ─────────────────────────────────────────────────────────
const GERMAN_MAJOR_ARCANA = [
  { id: 0,  name: "Der Narr",             arcana: "Major", symbol: "🃏",
    upright:  "Neue Anfänge, Unschuld, Spontaneität, ein freier Geist",
    reversed: "Leichtsinn, Ausgenutztwerden, Rücksichtslosigkeit" },
  { id: 1,  name: "Der Magier",           arcana: "Major", symbol: "🌟",
    upright:  "Manifestation, Einfallsreichtum, Kraft, inspiriertes Handeln",
    reversed: "Manipulation, schlechte Planung, ungenutzte Talente" },
  { id: 2,  name: "Die Hohepriesterin",   arcana: "Major", symbol: "🌙",
    upright:  "Intuition, heiliges Wissen, göttliche Weiblichkeit, das Unbewusste",
    reversed: "Geheimnisse, von der Intuition abgekoppelt, Rückzug" },
  { id: 3,  name: "Die Herrscherin",      arcana: "Major", symbol: "🌺",
    upright:  "Weiblichkeit, Schönheit, Natur, Fürsorge, Fülle",
    reversed: "Kreative Blockade, Abhängigkeit von anderen, innere Leere" },
  { id: 4,  name: "Der Herrscher",        arcana: "Major", symbol: "👑",
    upright:  "Autorität, Struktur, Stabilität, eine Vaterfigur",
    reversed: "Dominanz, übermäßige Kontrolle, Starrheit, Unflexibilität" },
  { id: 5,  name: "Der Hierophant",       arcana: "Major", symbol: "⛪",
    upright:  "Spirituelle Weisheit, religiöse Überzeugungen, Konformität, Tradition",
    reversed: "Persönliche Überzeugungen, Freiheit, den Status quo hinterfragen" },
  { id: 6,  name: "Die Liebenden",        arcana: "Major", symbol: "💕",
    upright:  "Liebe, Harmonie, Beziehungen, Werteabstimmung, Entscheidungen",
    reversed: "Selbstliebe, Disharmonie, Ungleichgewicht, falsch ausgerichtete Werte" },
  { id: 7,  name: "Der Wagen",            arcana: "Major", symbol: "🏆",
    upright:  "Kontrolle, Willenskraft, Erfolg, Handlung, Entschlossenheit",
    reversed: "Selbstdisziplin, Widerstand, fehlende Richtung" },
  { id: 8,  name: "Die Kraft",            arcana: "Major", symbol: "🦁",
    upright:  "Stärke, Mut, Überzeugungskraft, Einfluss, Mitgefühl",
    reversed: "Innere Stärke, Selbstzweifel, geringe Energie, rohe Emotion" },
  { id: 9,  name: "Der Einsiedler",       arcana: "Major", symbol: "🕯️",
    upright:  "Selbstsuche, Introspektion, Alleinsein, innere Führung",
    reversed: "Isolation, Einsamkeit, Rückzug, den Weg verloren" },
  { id: 10, name: "Das Rad des Schicksals", arcana: "Major", symbol: "☸️",
    upright:  "Glück, Karma, Lebenszyklen, Schicksal, ein Wendepunkt",
    reversed: "Pech, Widerstand gegen Veränderung, Zyklen durchbrechen" },
  { id: 11, name: "Die Gerechtigkeit",    arcana: "Major", symbol: "⚖️",
    upright:  "Gerechtigkeit, Fairness, Wahrheit, Ursache und Wirkung, Gesetz",
    reversed: "Ungerechtigkeit, mangelnde Verantwortlichkeit, Unehrlichkeit" },
  { id: 12, name: "Der Gehängte",         arcana: "Major", symbol: "🌀",
    upright:  "Pause, Hingabe, Loslassen, neue Perspektiven",
    reversed: "Verzögerungen, Widerstand, Aufschub, Unentschlossenheit" },
  { id: 13, name: "Der Tod",              arcana: "Major", symbol: "🌑",
    upright:  "Enden, Wandel, Transformation, Übergang",
    reversed: "Widerstand gegen Veränderung, persönliche Transformation, innere Reinigung" },
  { id: 14, name: "Die Mäßigkeit",        arcana: "Major", symbol: "🌈",
    upright:  "Balance, Mäßigung, Geduld, Sinn, Bedeutung",
    reversed: "Ungleichgewicht, Exzess, Selbstheilung, Neuausrichtung" },
  { id: 15, name: "Der Teufel",           arcana: "Major", symbol: "🔗",
    upright:  "Schattenseite, Anhaftung, Sucht, Einschränkung, Sexualität",
    reversed: "Begrenzende Glaubenssätze loslassen, dunkle Gedanken erforschen, Loslösung" },
  { id: 16, name: "Der Turm",             arcana: "Major", symbol: "⚡",
    upright:  "Plötzliche Veränderung, Umwälzung, Chaos, Offenbarung, Erwachen",
    reversed: "Persönliche Transformation, Angst vor Veränderung, Katastrophe abwenden" },
  { id: 17, name: "Der Stern",            arcana: "Major", symbol: "⭐",
    upright:  "Hoffnung, Glaube, Zweck, Erneuerung, Spiritualität",
    reversed: "Mangel an Glauben, Verzweiflung, Selbstvertrauen, Abkoppelung" },
  { id: 18, name: "Der Mond",             arcana: "Major", symbol: "🌛",
    upright:  "Illusion, Angst, das Unbewusste, Intuition, Träume",
    reversed: "Befreiung von Angst, verdrängte Emotionen, innere Verwirrung" },
  { id: 19, name: "Die Sonne",            arcana: "Major", symbol: "☀️",
    upright:  "Positivität, Freude, Wärme, Erfolg, Vitalität",
    reversed: "Inneres Kind, Niedergeschlagenheit, übertriebener Optimismus" },
  { id: 20, name: "Das Gericht",          arcana: "Major", symbol: "📯",
    upright:  "Urteil, Wiedergeburt, innerer Ruf, Absolution",
    reversed: "Selbstzweifel, innerer Kritiker, den Ruf ignorieren" },
  { id: 21, name: "Die Welt",             arcana: "Major", symbol: "🌍",
    upright:  "Vollendung, Integration, Leistung, Reisen",
    reversed: "Persönlichen Abschluss suchen, Abkürzungen, Verzögerungen" },
];

const GERMAN_SUITS = ["Stäbe", "Kelche", "Schwerter", "Münzen"];

const GERMAN_SUIT_SYMBOLS = {
  "Stäbe":    "🔥",
  "Kelche":   "🌊",
  "Schwerter":"⚔️",
  "Münzen":   "🌿",
};

const GERMAN_COURT_CARDS = [
  { rank: "Bube",    upright: "Begeisterung, Erkundung, Entdeckung, freier Geist",           reversed: "Fehlende Richtung, Prokrastination, Konflikte erzeugen" },
  { rank: "Ritter",  upright: "Handlung, Abenteuer, Energie, Ehrgeiz",                       reversed: "Zerstreute Energie, fehlender Fokus, Burnout" },
  { rank: "Königin", upright: "Mitgefühl, Ruhe, Trost, Schönheit, Weisheit",                 reversed: "Martyrium, Unsicherheit, Abhängigkeit, Manipulation" },
  { rank: "König",   upright: "Kontrolle, Macht, Führung, Autorität",                        reversed: "Herrschsüchtig, kontrollierend, Machtmissbrauch" },
];

const GERMAN_SUIT_MEANINGS = {
  "Stäbe": {
    element: "Feuer",
    theme: "Leidenschaft, Kreativität, Ehrgeiz, Handlung",
    pip: [
      { upright: "Schöpfung, Willenskraft, Inspiration, Anfänge",            reversed: "Verzögerungen, mangelnde Motivation, Beladenheit" },
      { upright: "Planung, Entdeckung, Zukunft, Fortschritt",                 reversed: "Persönliche Ziele, mangelnde Langzeitplanung" },
      { upright: "Schwung, Vertrauen, Erkundung, Freiheit",                   reversed: "Auf der sicheren Seite bleiben, Verzögerungen, Frustration" },
      { upright: "Feier, Freude, Harmonie, Gemeinschaft",                     reversed: "Persönliche Feier, innere Harmonie, Konflikt" },
      { upright: "Wettbewerb, Konflikt, Rivalität, Vielfalt",                 reversed: "Konflikt vermeiden, Unterschiede respektieren" },
      { upright: "Öffentliche Anerkennung, Sieg, Fortschritt",                reversed: "Private Leistung, persönliche Zufriedenheit" },
      { upright: "Ausdauer, sich verteidigen, letzter Stand",                 reversed: "Aufgeben, überwältigt, Erschöpfung" },
      { upright: "Geschwindigkeit, Dringlichkeit, in Bewegung",               reversed: "Ruhelosigkeit, Burnout, Verzögerungen" },
      { upright: "Widerstandskraft, Durchhaltevermögen, Beharrlichkeit",      reversed: "Innere Ressourcen, Kampf, Überwältigung" },
      { upright: "Lasten, Verantwortung, überwältigende Arbeit",              reversed: "Zu viel übernehmen, Delegation, Flucht" },
    ],
  },
  "Kelche": {
    element: "Wasser",
    theme: "Emotion, Intuition, Beziehungen, Kreativität",
    pip: [
      { upright: "Neue Gefühle, Spiritualität, Intuition, Liebe",             reversed: "Blockierte Kreativität, innere Leere, verloren" },
      { upright: "Partnerschaft, Einheit, Liebe, Verbindung",                 reversed: "Selbstliebe, Trennungen, Disharmonie" },
      { upright: "Freundschaft, Feier, Kreativität, Gemeinschaft",            reversed: "Ausschweifung, Klatsch, Isolation" },
      { upright: "Apathie, Kontemplation, Distanziertheit",                   reversed: "Plötzliches Bewusstsein, Glück wählen" },
      { upright: "Bedauern, Verlust, Trauer, Vergangenheit",                  reversed: "Akzeptanz, weitergehen, Vergebung" },
      { upright: "Nostalgie, Kindheitserinnerungen, Unschuld",                reversed: "In der Vergangenheit leben, Naivität, neue Chancen" },
      { upright: "Wunschdenken, Wahlmöglichkeiten, Fantasie",                 reversed: "Ausrichtung, persönliche Werte, überwältigt" },
      { upright: "Ausweichen, Eskapismus, Enttäuschung, weggehen",            reversed: "Hoffnungslosigkeit, zielloses Treiben, weitergehen" },
      { upright: "Zufriedenheit, Erfüllung, Glückseligkeit, Luxus",           reversed: "Inneres Glück, Materialismus, Selbstgefälligkeit" },
      { upright: "Göttliche Liebe, Glückseligkeit, Dankbarkeit, Wünsche erfüllt", reversed: "Illusion, verschwommene Grenzen, weltfremd" },
    ],
  },
  "Schwerter": {
    element: "Luft",
    theme: "Wahrheit, Intellekt, Konflikt, Kommunikation",
    pip: [
      { upright: "Durchbrüche, Klarheit, scharfer Verstand",                  reversed: "Verwirrung, Brutalität, Chaos" },
      { upright: "Schwierige Entscheidungen, Unentschlossenheit, Patt",       reversed: "Unentschlossenheit, Verwirrung, Informationsüberlastung" },
      { upright: "Herzschmerz, schmerzhafte Wahrheiten, Trauer",              reversed: "Genesung, Vergebung, weitergehen" },
      { upright: "Ruhe, Entspannung, Meditation, Kontemplation",              reversed: "Erschöpfung, Burnout, tiefe Kontemplation" },
      { upright: "Niederlage, Konflikt, Verrat, Sieg um jeden Preis",         reversed: "Versöhnung, Wiedergutmachung" },
      { upright: "Übergang, Wandel, Übergangsritus, weitergehen",             reversed: "Persönlicher Übergang, Widerstand gegen Wandel" },
      { upright: "Täuschung, List, Taktik, Unehrlichkeit",                    reversed: "Hochstapler, Täuschung, Geständnis" },
      { upright: "Gefangenschaft, Falle, Opfermentalität",                    reversed: "Befreiung, neue Perspektive, Freiheit" },
      { upright: "Angst, Sorge, Furcht, Depression",                          reversed: "Innerer Aufruhr, Sorge loslassen, Verzweiflung" },
      { upright: "Schmerzliche Enden, tiefe Wunden, Verrat, Verlust",         reversed: "Genesung, Regeneration, Angst vor dem Ruin" },
    ],
  },
  "Münzen": {
    element: "Erde",
    theme: "Reichtum, Material, Karriere, Praktisches",
    pip: [
      { upright: "Finanzielle Chance, Wohlstand, neues Vorhaben",             reversed: "Verpasste Chance, schlechte Investition" },
      { upright: "Ressourcen ausbalancieren, Priorisierung, Anpassungsfähigkeit", reversed: "Finanzielle Unordnung, überwältigt" },
      { upright: "Teamarbeit, Aufbau, Umsetzung",                             reversed: "Gruppenkonflikt, Mittelmäßigkeit, Apathie" },
      { upright: "Sicherheit, Grenzen, Sparsamkeit, Kontrolle",               reversed: "Grenzen, Selbstschutz, Horten" },
      { upright: "Armut, Unsicherheit, Mangel, Entbehrung",                   reversed: "Erholung von finanziellem Verlust, spiritueller Reichtum" },
      { upright: "Großzügigkeit, Wohltätigkeit, Geben, Wohlstand",            reversed: "Geschenke mit Bedingungen, Ungleichheit" },
      { upright: "Harte Arbeit, Fleiß, Gärtnern, Investition",                reversed: "Mangelnde Langzeitvision, begrenzter Ertrag" },
      { upright: "Geschick, Talent, Handwerkskunst, Qualität",                reversed: "Selbstentwicklung, Perfektionismus" },
      { upright: "Fülle, Luxus, Selbstversorgung",                            reversed: "Finanzielle Abhängigkeit, Eigennutz, übermäßige Reserve" },
      { upright: "Reichtum, Geschäft, Führung, Leistung",                     reversed: "Finanzielle Misserfolge, Besessenheit, Gier" },
    ],
  },
};

/**
 * Build the full 78-card German deck
 */
function buildGermanDeck() {
  const deck = [...GERMAN_MAJOR_ARCANA.map((c) => ({ ...c }))];

  GERMAN_SUITS.forEach((suit) => {
    const suitData = GERMAN_SUIT_MEANINGS[suit];

    // Pip cards (As–10)
    for (let i = 1; i <= 10; i++) {
      const pipIndex = i - 1;
      const rankLabel = i === 1 ? "As" : String(i);
      deck.push({
        id: deck.length,
        name: `${rankLabel} der ${suit}`,
        arcana: "Minor",
        suit,
        symbol: GERMAN_SUIT_SYMBOLS[suit],
        upright:  suitData.pip[pipIndex]?.upright  || `${rankLabel} der ${suit} – ${suitData.theme}`,
        reversed: suitData.pip[pipIndex]?.reversed || `blockierte ${suitData.theme}`,
      });
    }

    // Court cards
    GERMAN_COURT_CARDS.forEach((court) => {
      deck.push({
        id: deck.length,
        name: `${court.rank} der ${suit}`,
        arcana: "Minor",
        suit,
        symbol: GERMAN_SUIT_SYMBOLS[suit],
        upright:  court.upright,
        reversed: court.reversed,
      });
    });
  });

  return deck;
}

const FULL_DECK_DE = buildGermanDeck();
