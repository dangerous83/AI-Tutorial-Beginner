# 🤖 AI Starter Lab — PMCC 4th Watch

**AI Starter Lab: Create, Design & Present with Artificial Intelligence**
An interactive, futuristic AI-dashboard-style workshop presentation — not a normal slideshow.

- **Presenter:** Bro. Alvin — Professional Graphic Designer & AI Specialist
- **Audience:** Beginners, ages 12–22
- **Duration:** max 2 hours

## 🚀 Run it

No build step, no dependencies. Just open the file:

1. Double-click `index.html` (Chrome or Edge recommended), **or**
2. Serve it locally: `python3 -m http.server` then open `http://localhost:8000`.

For the live event: open the page, click once (enables browser audio), press **F** for fullscreen, and enjoy the terminal boot sequence.

## ✨ Features

- Terminal-style boot/loading animation before the show
- Futuristic HUD interface: glassmorphism panels, animated glowing borders, corner brackets, scanlines, neural-network particle background
- Neon blue / gold / white / black theme with **dark ↔ light mode toggle**
- 17 content slides + animated front page + certificate-style closing slide
- Clickable reveal cards, 3D flip cards for prompt formulas, tabbed final-activity tracks (Image / Video / Ads / Presentation)
- Interactive **Prompt Builder** with randomize + copy
- Activity **timers** (3-min prompt challenge, 10-min final mission) with countdown beeps
- Mini quiz with "Reveal Answer" buttons and success sound
- **Sound effects** generated with the Web Audio API (click, slide transition, reveal, success, startup, fanfare) — zero audio files, with mute button
- Slide progress bar, slide counter, session clock, slide navigator menu
- Full **keyboard navigation** and responsive layout for laptops/projectors
- Built-in **Presenter Console** (press `N`) with notes, voice-over script, and an AI image prompt for every slide

## 🎛 Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` `Space` `PgDn` | Next slide |
| `←` `PgUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `N` | Presenter notes |
| `M` | Mute / unmute |
| `T` | Dark / light mode |
| `F` | Fullscreen |
| `G` | Slide navigator |
| `Esc` | Close panels |

## 📁 Project structure

```
index.html          — all slides & markup
css/style.css       — futuristic AI dashboard theme (dark + light)
js/app.js           — presentation engine, sounds, particles, notes data
PRESENTER_GUIDE.md  — run-of-show, notes, voice-over scripts, image prompts
```

## 📝 Presenter prep

Read `PRESENTER_GUIDE.md` — it contains the suggested 2-hour run of show, a pre-show checklist, and per-slide presenter notes, voice-over scripts, and AI image prompts (also available live in the app via the `N` key).

> ℹ️ The PMCC logo is loaded from the official CDN URL. If you'll present fully offline, download the logo and update the three `<img src>` references in `index.html` — a styled text fallback is shown automatically if the image can't load.
