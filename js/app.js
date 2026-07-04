/* ==========================================================================
   AI STARTER LAB — PMCC 4th Watch
   Interactive presentation engine
   ========================================================================== */
(function () {
  'use strict';

  /* ================================================================
     PRESENTER DATA — notes, voice-over script, image prompt per slide
     ================================================================ */
  const NOTES = {
    cover: {
      label: 'FRONT PAGE',
      notes: 'Have this screen up as people walk in — the terminal intro loops attention. Greet everyone warmly. When ready, press START (or Enter). Sound check: click the speaker icon and play a click.',
      voice: '"Welcome, everyone, to AI Starter Lab — hosted by PMCC 4th Watch! I\'m Bro. Alvin, a graphic designer and AI specialist. In the next two hours you won\'t just learn about AI... you\'ll actually create with it. Ready? Let\'s boot up!"',
      image: 'AI prompt: "futuristic glowing AI hologram interface, neon blue and gold light particles, dark tech background, church youth event energy, cinematic, ultra detailed"'
    },
    s1: {
      label: 'SLIDE 1 — WELCOME',
      notes: 'Icebreaker: ask "Who here has ever used ChatGPT or an AI filter?" Count hands. Invite 4 volunteers to come click each card (or click them yourself). Emphasize: today is HANDS-ON, not a lecture.',
      voice: '"Here\'s our mission for today. Four superpowers: creating images, making videos, designing ads, and building presentations — all with AI. No experience needed. If you can type a sentence, you can do this."',
      image: 'AI prompt: "four glowing holographic app icons floating above a teenager\'s open hand, neon blue interface, dark futuristic room, gold accents, 3D render"'
    },
    s2: {
      label: 'SLIDE 2 — WHAT IS AI?',
      notes: 'Keep the definition simple: AI learns patterns from examples, like how you learn a song by hearing it many times. Click the reveal cards one by one and let students guess before revealing. Myth-bust: AI is not a robot brain that "thinks" — it predicts patterns.',
      voice: '"So what exactly is AI? It\'s a computer system that learns patterns from millions of examples so it can write, draw, and talk like a human helper. And here\'s the twist — you already use AI every single day. Let\'s prove it."',
      image: 'AI prompt: "friendly glowing digital brain made of blue circuit lines with gold sparks, floating above a smartphone, dark background, clean tech illustration"'
    },
    s3: {
      label: 'SLIDE 3 — WHY AI MATTERS',
      notes: 'Make it personal: ask "Who has a school project due soon? Who wants to start a YouTube channel or small business?" Connect each card to their answers. Land the quote at the end — pause after reading it.',
      voice: '"Why should YOU care? Because AI is a study buddy that never sleeps, a creative superpower even if you can\'t draw, and one of the most in-demand skills for your future. Remember this: AI won\'t replace people — but people who use AI will move faster than people who don\'t."',
      image: 'AI prompt: "diverse group of teenagers using futuristic holographic screens for study and design, neon blue and gold lighting, inspiring mood, cinematic wide shot"'
    },
    s4: {
      label: 'SLIDE 4 — POWERFUL PROMPTS',
      notes: 'THE most important slide of the day. Teach R-T-C-F slowly: Role, Task, Context, Format. Read the weak prompt, then the powerful one, and (if internet is available) run both live in ChatGPT to show the difference. Have students chant "Role, Task, Context, Format" together.',
      voice: '"Talking to AI is a skill, and it has a formula: R-T-C-F. Give the AI a Role, a Task, some Context, and a Format. Watch the difference between \'make a poster\' and a real power prompt. The better your instructions, the better your results — in AI and in life!"',
      image: 'AI prompt: "glowing command line terminal with golden text forming a rising staircase of words, dark blue tech background, symbolic of leveling up, digital art"'
    },
    s5: {
      label: 'SLIDE 5 — AI IMAGE GENERATION',
      notes: 'Demo time (5 min): open Bing/Copilot image creator and type the demo prompt on screen. While it generates, explain the tools grid. If offline, show 2–3 pre-generated examples instead. Mention most tools have free tiers — no excuse not to try tonight.',
      voice: '"Now the fun part — AI art. You type a description, and seconds later the AI paints it. This is called text-to-image. There are many tools, and several are free. Let\'s generate something live, right now."',
      image: 'AI prompt: "a digital paintbrush made of light painting a vivid fantasy landscape out of pixels, neon blue and gold palette, magical, ultra detailed"'
    },
    s6: {
      label: 'SLIDE 6 — IMAGE PROMPT FORMULA',
      notes: 'Interactive: call 6 students up (or go around the room) — each one flips a card and reads it aloud. Then read the assembled full prompt at the bottom. Optional: generate it live to show the formula works.',
      voice: '"Here\'s the secret recipe pros use: Subject, Setting, Style, Lighting, Mood, Quality. Six ingredients. Stack them together and your images go from random to breathtaking. Let\'s flip each card and build a full prompt together."',
      image: 'AI prompt: "six glowing ingredient vials on a futuristic lab table labeled with holographic icons, neon blue glass, gold liquid, dark sci-fi laboratory, 3D render"'
    },
    s7: {
      label: 'SLIDE 7 — AI VIDEO GENERATION',
      notes: 'Explain the two modes with the big cards first. If possible, play one short pre-downloaded AI video clip (Sora/Runway showreel). Set expectations honestly: free tiers are limited and clips are short — but improving every month.',
      voice: '"If AI can paint a picture... can it film a movie? Yes! AI video works two ways: describe a scene with text, or upload a photo and watch it come alive. Tools like Sora, Runway, and Pika are rewriting what one creative person can do."',
      image: 'AI prompt: "holographic film clapperboard exploding into glowing video frames, robot hand holding it, neon blue and gold cinematic lighting, dark studio"'
    },
    s8: {
      label: 'SLIDE 8 — VIDEO PROMPT FORMULA',
      notes: 'Highlight what is NEW versus the image formula: Action (what moves) and Camera (how it\'s filmed). Teach 3 camera words: zoom, pan, low angle. Flip the cards with volunteers, then read the full prompt like a movie director announcing a shot.',
      voice: '"Video prompts start like image prompts but add two magic ingredients: Action — what moves — and Camera — how we film it. Say it like a director: a rainy neon street, a robot with an umbrella walks toward the camera, slow dolly zoom. Lights, prompt, action!"',
      image: 'AI prompt: "futuristic director\'s chair and camera drone filming a glowing robot on a neon rainy street, gold lens flares, cinematic behind-the-scenes shot"'
    },
    s9: {
      label: 'SLIDE 9 — SOCIAL MEDIA ADS',
      notes: 'Relatable scenario: promoting a church youth event, school club, or small online shop. Walk the 4 steps left to right. Emphasize AI does the drafts, THEY do the taste and judgment. Mention the A/B testing pro tip — real marketers do exactly this.',
      voice: '"Let\'s get practical: making an ad for social media. Old way: you\'d need a copywriter, designer, and editor. New way: you plus AI. Idea, copy, visual, assemble — four steps, one afternoon, zero budget."',
      image: 'AI prompt: "smartphone displaying a vibrant social media ad, surrounded by floating holographic like and share icons, neon blue and gold, dark background, 3D render"'
    },
    s10: {
      label: 'SLIDE 10 — HOOK + VISUAL + CTA',
      notes: 'Flip the three cards one at a time. Mini-game: say a boring line ("We have an event Saturday") and challenge students to shout better hooks. Then show the example at the bottom. This formula alone is worth the workshop for future content creators.',
      voice: '"Every great ad in your feed follows one formula: Hook, Visual, C-T-A. The hook grabs you in two seconds. The visual makes you feel. The call-to-action tells you what to do next. Master these three and your posts stop getting scrolled past."',
      image: 'AI prompt: "three glowing holographic panels labeled hook, visual, CTA floating in a dark futuristic room, gold fishing hook icon glowing, neon blue interface"'
    },
    s11: {
      label: 'SLIDE 11 — PRESENTATIONS WITH GPT',
      notes: 'School superpower slide. Walk the 4 steps, then read the Mega Prompt slowly — tell students to photograph it. Stress step 4: THEY are the editor-in-chief; AI drafts, humans decide. If time allows, run the mega prompt live on a fun topic the audience picks.',
      voice: '"Homework hack, unlocked: never start a presentation from a blank slide again. Ask GPT for an outline, then slide text, paste it into Canva or PowerPoint, and polish it with your own style. AI is your intern — you are the editor-in-chief."',
      image: 'AI prompt: "student at a futuristic desk while a friendly AI hologram assembles presentation slides in the air, neon blue interface, gold highlights, inspiring"'
    },
    s12: {
      label: 'SLIDE 12 — TURN INTO PDF',
      notes: 'Quick, practical slide (2–3 min). Do a 30-second live demo of Print → Save as PDF if possible — that trick works in ANY app. The bottom row explains WHY PDF matters: sharing, printing, locking the design.',
      voice: '"Final step of any project: saving it as a PDF. Why PDF? It opens on every device, keeps your fonts and layout perfect, and nobody can accidentally edit it. Easiest universal trick: Print, then choose Save as PDF. Works everywhere!"',
      image: 'AI prompt: "glowing document icon transforming into a shielded PDF file, blue data particles flowing, gold lock symbol, minimal dark tech illustration"'
    },
    s13: {
      label: 'SLIDE 13 — RESPONSIBLE AI',
      notes: 'Serious tone shift — slow down. Walk the DO list, then the DON\'T list. Discuss deepfakes: "If you saw a video of a friend saying something bad, could you be sure it\'s real?" Emphasize honesty about AI help and never sharing private info. Connect to integrity and character.',
      voice: '"With great power comes great responsibility. AI can make you faster — it should never make you dishonest. Double-check facts, credit AI when it helps, never fake real people, and keep private things private. The tool is powerful; YOUR character decides if it\'s used well."',
      image: 'AI prompt: "glowing golden shield protecting a digital heart made of circuits, dark background with blue data streams, symbolic, dramatic lighting, digital art"'
    },
    s14: {
      label: 'SLIDE 14 — MINI QUIZ',
      notes: 'Energy break! Split the room into 2 teams. Read each question, let teams shout answers, then hit REVEAL (plays a success sound). Keep score on paper. Small prizes (candy) work wonders. ~5 minutes.',
      voice: '"Checkpoint time! Let\'s see what stuck. Four questions, two teams, bragging rights on the line. Shout your answers before I hit reveal!"',
      image: 'AI prompt: "futuristic game show stage with glowing question mark hologram, two podiums, neon blue and gold spotlights, exciting atmosphere, 3D render"'
    },
    s15: {
      label: 'SLIDE 15 — PROMPT CHALLENGE',
      notes: 'Activity (~10 min incl. sharing). Demo the Prompt Builder: change dropdowns, hit RANDOMIZE a few times (fun!), then COPY. Students write their own prompt on paper/phone using the formula. Start the 3-minute timer. Afterwards, 3–4 volunteers read theirs aloud; class votes for the best.',
      voice: '"Time to compete! Use the formula — subject, setting, style, lighting, mood — and build the most creative image prompt you can. You have three minutes on the clock. The best prompt wins glory... and maybe candy. Ready? Go!"',
      image: 'AI prompt: "glowing countdown timer hologram above excited students writing, neon blue sparks, gold trophy in background, competitive fun atmosphere, cinematic"'
    },
    s16: {
      label: 'SLIDE 16 — FINAL ACTIVITY',
      notes: 'The big build (~20–25 min total). Teams of 2–4 pick ONE track — click through the four tabs to explain each mission. Start the 10-minute timer. Circulate and help. Reserve ~10 min after for teams to present their creation. This is the memory they take home.',
      voice: '"Final mission! Team up, choose your track — image, video, ad, or presentation — and create something REAL using everything you learned today. Ten minutes on the clock. Then each team presents. Make me proud, creators!"',
      image: 'AI prompt: "four teams of young creators at glowing workstations, each station a different color hologram, mission control room vibes, neon blue and gold, wide shot"'
    },
    s17: {
      label: 'SLIDE 17 — CLOSING',
      notes: 'Celebration + send-off. Read the certificate dramatically, then hit CELEBRATE (confetti + fanfare). Closing charge: "You came in as AI users, you leave as AI creators." Thank PMCC 4th Watch, take a group photo with this slide on screen, share resource links.',
      voice: '"Congratulations! You are now officially graduates of the AI Starter Lab. You didn\'t just learn about AI today — you created with it. Use these powers with creativity, honesty, and heart. Now go make something amazing. The future is yours!"',
      image: 'AI prompt: "golden certificate with glowing seal floating amid celebration confetti, neon blue light rays, dark elegant background, triumphant mood, ultra detailed"'
    }
  };

  /* ================================================================
     SOUND ENGINE — lightweight Web Audio, no files needed
     ================================================================ */
  const Sound = {
    ctx: null,
    muted: false,
    ensure() {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) this.ctx = new AC();
      }
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
      return this.ctx;
    },
    tone(freq, dur, { type = 'sine', gain = 0.14, when = 0, slideTo = null } = {}) {
      const ctx = this.ensure();
      if (!ctx || this.muted) return;
      const t0 = ctx.currentTime + when;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
    },
    click()  { this.tone(880, 0.06, { type: 'square', gain: 0.05 }); },
    slide()  { this.tone(520, 0.18, { type: 'sine', gain: 0.1, slideTo: 220 }); this.tone(1400, 0.1, { gain: 0.03 }); },
    reveal() { this.tone(660, 0.1, { gain: 0.09 }); this.tone(990, 0.14, { when: 0.09, gain: 0.09 }); },
    success() {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
        this.tone(f, 0.22, { when: i * 0.09, gain: 0.11 }));
    },
    startup() {
      this.tone(180, 0.9, { type: 'sine', gain: 0.08, slideTo: 420 });
      [329.63, 415.3, 493.88, 659.25].forEach((f, i) =>
        this.tone(f, 0.5, { when: 0.25 + i * 0.14, gain: 0.07 }));
    },
    type()   { this.tone(1200 + Math.random() * 500, 0.025, { type: 'square', gain: 0.012 }); },
    timerEnd() {
      [0, 0.25, 0.5].forEach(w => { this.tone(1046, 0.16, { when: w, type: 'square', gain: 0.09 }); });
      this.tone(1568, 0.4, { when: 0.8, gain: 0.1 });
    },
    fanfare() {
      [523, 523, 523, 659, 784, 659, 784, 1046].forEach((f, i) =>
        this.tone(f, 0.24, { when: i * 0.13, gain: 0.1 }));
    }
  };

  /* ================================================================
     ELEMENTS
     ================================================================ */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const slides = $$('.slide');
  const progressBar = $('#progress-bar');
  const counter = $('#slide-counter');
  const notesPanel = $('#notes-panel');
  const menuOverlay = $('#menu-overlay');
  const terminalOverlay = $('#terminal-overlay');

  let current = 0;
  let booted = false;

  /* ================================================================
     TERMINAL BOOT SEQUENCE
     ================================================================ */
  const BOOT_LINES = [
    { text: '> boot pmcc_4thwatch.ai --mode=workshop', cls: 't-cmd' },
    { text: '  loading neural modules .......... [OK]', cls: 't-ok' },
    { text: '  initializing creative engine .... [OK]', cls: 't-ok' },
    { text: '  syncing image + video labs ...... [OK]', cls: 't-ok' },
    { text: '  presenter: BRO. ALVIN — graphic designer / AI specialist', cls: 't-gold' },
    { text: '  audience: BEGINNERS [12–22] • duration: ≤ 2 HRS', cls: 't-gold' },
    { text: '> ACCESS GRANTED — WELCOME TO AI STARTER LAB ▮', cls: 't-cmd' }
  ];

  function runBoot() {
    const body = $('#terminal-body');
    let line = 0, ch = 0;
    let currentSpan = null;

    function tick() {
      if (booted) return;
      if (line >= BOOT_LINES.length) {
        $('#terminal-continue').classList.remove('hidden');
        return;
      }
      if (ch === 0) {
        currentSpan = document.createElement('span');
        currentSpan.className = BOOT_LINES[line].cls;
        body.appendChild(currentSpan);
      }
      const txt = BOOT_LINES[line].text;
      currentSpan.textContent = txt.slice(0, ++ch);
      if (ch % 3 === 0) Sound.type();
      if (ch >= txt.length) {
        body.appendChild(document.createTextNode('\n'));
        line++; ch = 0;
        setTimeout(tick, 220);
      } else {
        setTimeout(tick, 14);
      }
    }
    tick();
  }

  function finishBoot() {
    if (booted) return;
    booted = true;
    Sound.startup();
    terminalOverlay.classList.add('fading');
    setTimeout(() => terminalOverlay.remove(), 750);
    ['#hud-top', '#hud-bottom', '#progress-track'].forEach(s => $(s).classList.remove('hidden'));
    updateHUD();
  }

  terminalOverlay.addEventListener('click', () => { Sound.ensure(); finishBootIfReady(); });
  $('#skip-boot').addEventListener('click', (e) => { e.stopPropagation(); Sound.ensure(); finishBoot(); });

  function finishBootIfReady() {
    // allow click-through any time; treat as skip
    finishBoot();
  }

  /* ================================================================
     NAVIGATION
     ================================================================ */
  function goTo(index, { back = false, silent = false } = {}) {
    if (index < 0 || index >= slides.length || index === current && slides[index].classList.contains('active')) {
      if (index === current) return;
    }
    index = Math.max(0, Math.min(slides.length - 1, index));
    if (index === current) return;
    slides[current].classList.remove('active', 'exit-back');
    current = index;
    const el = slides[current];
    el.classList.toggle('exit-back', back);
    el.classList.add('active');
    if (!silent) Sound.slide();
    updateHUD();
  }

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1, { back: true });

  function updateHUD() {
    const total = slides.length - 1; // exclude cover from count
    const n = current; // cover = 0
    counter.textContent = String(n).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
    progressBar.style.width = (n / total * 100) + '%';
    refreshNotes();
    refreshMenuHighlight();
  }

  $('#btn-next').addEventListener('click', () => { Sound.click(); next(); });
  $('#btn-prev').addEventListener('click', () => { Sound.click(); prev(); });
  $('#btn-start').addEventListener('click', () => { Sound.success(); goTo(1, { silent: true }); });

  /* keyboard */
  document.addEventListener('keydown', (e) => {
    const tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'SELECT' || tag === 'INPUT' || tag === 'TEXTAREA') return;

    if (!booted) {
      if (e.key === 'Enter' || e.key === ' ') { Sound.ensure(); finishBoot(); }
      return;
    }
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ': e.preventDefault(); next(); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break;
      case 'Home': goTo(0, { back: true }); break;
      case 'End': goTo(slides.length - 1); break;
      case 'n': case 'N': toggleNotes(); break;
      case 'm': case 'M': toggleMute(); break;
      case 't': case 'T': toggleTheme(); break;
      case 'f': case 'F': toggleFullscreen(); break;
      case 'g': case 'G': toggleMenu(); break;
      case 'Escape':
        if (!menuOverlay.classList.contains('hidden')) toggleMenu();
        else if (!notesPanel.classList.contains('hidden')) toggleNotes();
        break;
    }
  });

  /* ================================================================
     HUD CONTROLS
     ================================================================ */
  function toggleTheme() {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    $('#btn-theme').textContent = html.dataset.theme === 'dark' ? '◐' : '◑';
    Sound.click();
    Particles.recolor();
  }
  $('#btn-theme').addEventListener('click', toggleTheme);

  function toggleMute() {
    Sound.ensure();
    Sound.muted = !Sound.muted;
    $('#btn-mute').textContent = Sound.muted ? '🔇' : '🔊';
    if (!Sound.muted) Sound.click();
  }
  $('#btn-mute').addEventListener('click', toggleMute);

  function toggleFullscreen() {
    Sound.click();
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  }
  $('#btn-full').addEventListener('click', toggleFullscreen);

  /* session clock */
  const clockEl = $('#hud-clock');
  const t0 = Date.now();
  setInterval(() => {
    const s = Math.floor((Date.now() - t0) / 1000);
    clockEl.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }, 1000);

  /* ================================================================
     PRESENTER NOTES
     ================================================================ */
  function refreshNotes() {
    const id = slides[current].dataset.notesId;
    const d = NOTES[id];
    if (!d) return;
    $('#notes-slide-label').textContent = d.label;
    $('#notes-text').textContent = d.notes;
    $('#notes-voice').textContent = d.voice;
    $('#notes-image').textContent = d.image;
  }
  function toggleNotes() {
    Sound.click();
    notesPanel.classList.toggle('hidden');
    refreshNotes();
  }
  $('#btn-notes').addEventListener('click', toggleNotes);
  $('#notes-close').addEventListener('click', toggleNotes);

  /* ================================================================
     SLIDE MENU
     ================================================================ */
  const MENU_TITLES = [
    'Front Page', 'Welcome to AI Starter Lab', 'What is AI?', 'Why AI Matters',
    'Writing Powerful Prompts', 'AI Image Generation', 'Image Prompt Formula',
    'AI Video Generation', 'Video Prompt Formula', 'Social Media Ads with AI',
    'Hook + Visual + CTA', 'Presentations using GPT', 'Turning Slides into PDF',
    'Responsible AI Use', 'Mini Quiz', 'Prompt Challenge', 'Final Activity', 'Closing & Certificate'
  ];
  const menuGrid = $('#menu-grid');
  MENU_TITLES.forEach((title, i) => {
    const b = document.createElement('button');
    b.className = 'menu-item';
    b.innerHTML = '<span class="mi-num mono">' + String(i).padStart(2, '0') + '</span>' + title;
    b.addEventListener('click', () => { Sound.click(); toggleMenu(); goTo(i, { back: i < current }); });
    menuGrid.appendChild(b);
  });
  function refreshMenuHighlight() {
    $$('.menu-item').forEach((m, i) => m.classList.toggle('current', i === current));
  }
  function toggleMenu() {
    Sound.click();
    menuOverlay.classList.toggle('hidden');
  }
  $('#btn-menu').addEventListener('click', toggleMenu);
  $('#menu-close').addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', (e) => { if (e.target === menuOverlay) toggleMenu(); });

  /* ================================================================
     INTERACTIVE COMPONENTS
     ================================================================ */
  /* clickable reveal cards */
  $$('[data-reveal]').forEach(card => {
    card.addEventListener('click', () => {
      const opening = !card.classList.contains('open');
      card.classList.toggle('open');
      opening ? Sound.reveal() : Sound.click();
      const hidden = card.querySelector('.cc-hidden');
      if (hidden) hidden.classList.remove('hidden');
    });
  });

  /* flip cards */
  $$('[data-flip]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      Sound.reveal();
    });
  });

  /* quiz reveal */
  $$('[data-quiz]').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.parentElement.querySelector('.quiz-answer');
      const showing = answer.classList.toggle('hidden');
      btn.textContent = showing ? 'REVEAL ▾' : 'HIDE ▴';
      if (!showing) Sound.success(); else Sound.click();
    });
  });

  /* tabs */
  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      Sound.click();
      const bar = btn.parentElement;
      bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabs = bar.parentElement;
      tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const target = tabs.querySelector('#' + btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  /* ================================================================
     PROMPT BUILDER
     ================================================================ */
  const pbSelects = ['pb-subject', 'pb-setting', 'pb-style', 'pb-light', 'pb-mood'].map(id => $('#' + id));
  const pbOutput = $('#pb-output');

  function buildPrompt() {
    if (!pbOutput) return;
    const parts = pbSelects.map(s => s.value);
    pbOutput.textContent = '▸ ' + parts.join(', ') + ', ultra detailed, high quality';
  }
  pbSelects.forEach(s => s && s.addEventListener('change', () => { Sound.click(); buildPrompt(); }));

  const pbRandom = $('#pb-random');
  if (pbRandom) pbRandom.addEventListener('click', () => {
    pbSelects.forEach(s => { s.selectedIndex = Math.floor(Math.random() * s.options.length); });
    Sound.reveal();
    buildPrompt();
  });

  const pbCopy = $('#pb-copy');
  if (pbCopy) pbCopy.addEventListener('click', () => {
    const text = pbOutput.textContent.replace(/^▸\s*/, '');
    const done = () => {
      Sound.success();
      pbCopy.textContent = '✅ COPIED!';
      setTimeout(() => { pbCopy.textContent = '📋 COPY PROMPT'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(done);
    } else done();
  });
  buildPrompt();

  /* ================================================================
     ACTIVITY TIMERS
     ================================================================ */
  $$('.timer-box').forEach(box => {
    const total = parseInt(box.dataset.timer, 10) || 60;
    const display = box.querySelector('.timer-display');
    let remaining = total;
    let interval = null;

    const render = () => {
      display.textContent = String(Math.floor(remaining / 60)).padStart(2, '0') + ':' + String(remaining % 60).padStart(2, '0');
    };
    const stop = () => { clearInterval(interval); interval = null; box.classList.remove('running'); };

    box.querySelector('.t-start').addEventListener('click', () => {
      Sound.click();
      if (interval) return;
      box.classList.remove('done');
      box.classList.add('running');
      interval = setInterval(() => {
        remaining--;
        render();
        if (remaining <= 10 && remaining > 0) Sound.tone(700, 0.05, { gain: 0.05 });
        if (remaining <= 0) {
          stop();
          box.classList.add('done');
          Sound.timerEnd();
        }
      }, 1000);
    });
    box.querySelector('.t-pause').addEventListener('click', () => { Sound.click(); stop(); });
    box.querySelector('.t-reset').addEventListener('click', () => {
      Sound.click(); stop(); box.classList.remove('done'); remaining = total; render();
    });
    render();
  });

  /* ================================================================
     CELEBRATE — confetti + fanfare
     ================================================================ */
  const celebrate = $('#btn-celebrate');
  if (celebrate) celebrate.addEventListener('click', () => {
    Sound.fanfare();
    const colors = ['#00d4ff', '#ffc94d', '#ffffff', '#7ae6ff', '#e0a62c'];
    for (let i = 0; i < 90; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDuration = (2.2 + Math.random() * 2.5) + 's';
      c.style.animationDelay = (Math.random() * 0.8) + 's';
      c.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }
  });

  /* generic click feedback on remaining buttons */
  $$('.hud-btn, .nav-btn').forEach(() => {}); // handled individually above

  /* ================================================================
     NEURAL NETWORK PARTICLE BACKGROUND
     ================================================================ */
  const Particles = (() => {
    const canvas = $('#bg-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, nodes = [];
    let colNeon = '0,212,255', colGold = '255,201,77';

    function recolor() {
      const light = document.documentElement.dataset.theme === 'light';
      colNeon = light ? '0,123,212' : '0,212,255';
      colGold = light ? '194,134,15' : '255,201,77';
    }

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const count = Math.min(90, Math.floor(W * H / 22000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1 + Math.random() * 1.8,
        gold: Math.random() < 0.18
      }));
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      const light = document.documentElement.dataset.theme === 'light';
      const lineAlpha = light ? 0.10 : 0.14;
      const dotAlpha = light ? 0.35 : 0.6;

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 150 * 150) {
            const alpha = lineAlpha * (1 - Math.sqrt(d2) / 150);
            ctx.strokeStyle = 'rgba(' + colNeon + ',' + alpha + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(' + (n.gold ? colGold : colNeon) + ',' + dotAlpha + ')';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }

    window.addEventListener('resize', resize);
    resize();
    recolor();
    requestAnimationFrame(frame);
    return { recolor };
  })();

  /* ================================================================
     GO
     ================================================================ */
  runBoot();
  updateHUD();
})();
