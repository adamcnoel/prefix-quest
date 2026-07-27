# 🧙 Etymancer's Quest

A retro, terminal-styled vocabulary RPG for mastering the Latin and Greek
**roots** of English words. You play an *Etymancer* — a mage whose power comes
from knowing where words come from. Name roots and their meanings to cast
spells, earn gold and mana, buy arcane gear, and defeat bosses in spell duels.

It's a single-page app with no build step and no dependencies — just open
`index.html` in a browser. It also works as an installable PWA on iOS/desktop.

## Running it

Open `index.html` directly in any modern browser, or serve the folder with any
static file server, e.g.:

```bash
python3 -m http.server
# then visit http://localhost:8000
```

Progress is saved automatically to your browser's `localStorage` (under the key
`etymancerSave`), so you can close the tab and pick up where you left off.

## How to play

### Casting spells (the core loop)

You're shown one of two kinds of question about a word root:

- **"What does '`sed`' mean?"** — type the meaning (e.g. `sit`).
- **"What root means '`sit`'?"** — type the root (e.g. `sed`).

Type your answer (your "incantation") and press **Cast** (or Enter). If you
don't know it, press **Fizzle** to give up and reveal the answer.

- **Correct** → `✨ Spell cast!` You earn **gold** and **mana**, and your
  **streak** goes up.
- **Wrong / fizzled** → `💨 Your spell fizzles!` The answer and some example
  words are shown so you can learn it, and your streak resets to 0.

Answer matching is forgiving: for meanings, you can type the full definition or
any significant word in it (so "care" is accepted for "care for").

### Streaks & combos

Consecutive correct casts build a **streak**, which raises your **combo
multiplier**:

| Streak | Multiplier |
|--------|------------|
| 0–1    | x1         |
| 2–3    | x2         |
| 4–5    | x3         |
| …      | up to **x5** |

The multiplier scales **both** the gold and mana you earn per cast, so keeping a
streak alive is worth much more than answering carelessly. A single wrong answer
or fizzle drops you back to x1. The game shows your active multiplier above each
question and spells out the bonus on every correct cast (e.g. *"Combo x2 → +20
gold, +10 mana"*), so you can see the streak paying off.

Not sure how it all fits together? A **How to Play** button in the footer lays
out the full loop at any time.

### Stats

Your Etymancer panel tracks:

- **Level** — raised by winning spell duels.
- **Gold** — spent in the Arcane Emporium.
- **Mana** — earned by casting; spent to *channel* in duels (see below). Caps at
  a maximum (starts at 30).
- **Streak** — current run of correct casts (drives the combo multiplier).
- **Intelligence / Strength** — raised by gear; together they determine your
  spell damage in duels.
- **Robes / Staff** — your currently equipped armor and weapon.

### The Arcane Emporium (shop)

Spend gold on **robes** (armor) and **staves** (weapons) to raise your
Intelligence and Strength. The shop only shows gear near your current budget
that you don't already own, revealing stronger items as you get richer. Better
gear means harder-hitting spells in duels.

### Spell duels (boss fights)

Every 10 spells, a named boss appears (the Lexivore, the Babbling Wyrm, the
Etymophage…) scaled to your level. You can **Begin Duel** or **Flee** back to
casting.

A duel is a turn-by-turn magic battle. Both you and the boss have an **HP bar**,
and each turn shows exactly how much damage your next spell will deal (e.g.
*"24 = 22 base (INT+STR) + 2 streak"*):

- Each exchange is a root question. **Answer correctly** to strike the boss;
  spell damage scales with your **Intelligence + Strength**, plus a bonus for
  consecutive correct answers within the duel.
- **Answer wrong** and your spell fizzles — the boss strikes *you* instead.
- **Cast** vs **Channel**: both buttons cast the *same answer* you typed. **Cast**
  is a normal hit; **Channel** spends **10 mana to deal double damage**. It's the
  payoff for all the mana you've banked while casting — but it's a gamble, since
  a channeled spell that misses spends the mana anyway.

Reduce the boss's HP to zero to **win**: you level up, earn bonus gold, and get
a **full mana refill**. If your HP hits zero you're **defeated** — but you keep
all your progress, so you can grind gold, upgrade your gear, and try again.

## Roots included

The word roots and their example words live in `roots.js`. Each entry maps a
root to its `definition` and a list of `examples`. To add or edit roots, just
extend that file — the game builds its entire question pool from it
automatically. Gear lives in `equipment.js` in the same spirit.

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Layout + the entire `EtymancerGame` class (game logic). |
| `roots.js` | The word-root data (`ROOTS`): definitions and example words. |
| `equipment.js` | The shop catalog (`EQUIPMENT`): robes and staves with stats. |
| `style.css` | The green-on-black terminal theme. |
| `manifest.json` | PWA metadata (name, icons, theme). |
| `favicon.svg` | Scalable browser-tab icon (green terminal "E"). |
| `apple-touch-icon.png` | Home-screen icon for iOS. |
