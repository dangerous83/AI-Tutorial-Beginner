# 🤖 AI Starter Lab — PMCC 4th Watch

**AI Starter Lab: Create, Design & Present with Artificial Intelligence**
An interactive, futuristic AI-dashboard-style workshop presentation — not a normal slideshow.

- **Presenter:** Bro. Alvin — Professional Graphic Designer & AI Specialist
- **Audience:** Beginners, ages 12–22
- **Duration:** max 2 hours

## 🌐 Live site

The presentation is deployed with GitHub Pages:
**https://dangerous83.github.io/AI-Tutorial-Beginner/**

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

> ℹ️ The PMCC logo and the five module artworks (A2–A6) are loaded from the official CDN URLs. If you'll present fully offline, download them and update the `<img src>` references in `index.html`. Fallbacks are automatic: the logo falls back to styled text, and each artwork panel hides itself if its image can't load.

## 🖼 Module artwork placement

| Image | Slide | Why it fits |
|-------|-------|-------------|
| A2 | Slide 2 — What is AI? | Sits beside the AI definition panel |
| A3 | Slide 5 — AI Image Generation | Shown as the "result" next to the live demo prompt |
| A4 | Slide 7 — AI Video Generation | Beside the text-to-video / image-to-video cards |
| A5 | Slide 9 — Social Media Ads | Beside the 4-step ad workflow |
| A6 | Slide 11 — Presentations with GPT | Beside the 4-step deck workflow |

Each URL appears exactly once in `index.html` (marked with a `<!-- Visual Ax -->` comment), so swapping any artwork to a different slide is a one-line change.
