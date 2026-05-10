# 🔮 TarotWitch

A mystical tarot-reading web app. Type your question, choose a spread, and let the witch lay the cards on the table.

## Features

- **Full 78-card deck** — all 22 Major Arcana and 56 Minor Arcana with upright & reversed meanings
- **Three spreads** — Single Card, Three-Card (Past / Present / Future), Celtic Cross (10 cards)
- **Card flip animation** — reveal cards one at a time with a 3-D flip effect
- **Reversed cards** — ~30 % of drawn cards appear reversed for deeper readings
- **Mystical UI** — dark purple / gold theme with floating particles and a crystal ball
- **Responsive** — works on desktop and mobile

## How to Use

1. Open `index.html` in any modern browser (no server needed)
2. Type your question in the text area
3. Choose a spread from the dropdown
4. Click **🔮 Ask the Witch**
5. Click **✦ Reveal Next Card ✦** to flip each card and read its meaning
6. Click **↩ New Reading** to start over

## Project Structure

```
TarotWitch/
├── index.html        # Main page
├── css/
│   └── styles.css    # Mystical dark theme
└── js/
    ├── cards.js      # Full 78-card deck data + shuffle/draw logic
    └── app.js        # UI interactions, animations, witch messages
```

## Planned Enhancements

- Add actual tarot card image files and use them instead of emoji symbols
- More spread types (Horseshoe, Relationship, Year Ahead…)
- Sound effects and ambient music
- Share / save reading functionality
