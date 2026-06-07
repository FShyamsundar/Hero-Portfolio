# SHYAMVERSE — Rise of the Full Stack Hero

A comic-book themed portfolio for **F. Shyam Sundar**, Full Stack Developer (Chennai, India). Built with React + Vite + Tailwind + Framer Motion + GSAP ScrollTrigger + Lenis smooth scrolling.

> Recruiters open the site and immediately think: *"Wow. This is not a normal portfolio."*

---

## ✨ Features

- 10 comic-book chapters: Hero, Origin, Awakening (Skills), Missions (Projects), Achievement Vault, Power-Ups (Certificates), Battle History (Internships), Arsenal (Tools), Recruiter's Guild (About), and The Next Mission (Contact).
- **Code-first comic style** — speech bubbles, halftone dots, action bursts, comic borders, KAPOW SFX, all built with CSS. No heavy PNG dependency.
- Smooth scroll with **Lenis**, scroll-driven parallax with **GSAP ScrollTrigger**, panel-reveal animations with **Framer Motion**.
- Fully **responsive** — desktop, tablet, mobile. Sidebar collapses to a drawer.
- Custom Tailwind theme with the comic palette (Yellow / Red / Cyan / Navy / White).

---

## 🚀 Getting Started

```bash
# 1. Install deps
npm install

# 2. Run dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm run preview
```

Node 18+ recommended.

---

## 🗂 Project Structure

```
shyamverse/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css                 # comic styles, halftone, bursts, speech bubbles
    ├── hooks/
    │   └── useLenis.js
    ├── data/
    │   └── content.js            # all hero / skills / missions copy
    └── components/
        ├── ComicElements.jsx     # reusable Burst, Speech, Panel, Sfx
        ├── Navbar.jsx
        ├── Hero.jsx              # Issue #001 — Origin
        ├── Origin.jsx            # Chapter 1
        ├── Awakening.jsx         # Chapter 2 — Skills
        ├── Missions.jsx          # Chapter 3 — Projects
        ├── Achievements.jsx      # Chapter 4
        ├── PowerUps.jsx          # Chapter 5 — Certificates
        ├── Battle.jsx            # Chapter 6 — Experience
        ├── Arsenal.jsx           # Chapter 7 — Tools
        ├── Recruiter.jsx         # Chapter 8 — About
        └── NextMission.jsx       # Final Chapter — Contact
```

---

## 🎨 Customising

- All copy lives in `src/data/content.js` — edit names, projects, skills, certificates there.
- Color tokens in `tailwind.config.js → theme.extend.colors.comic`.
- Comic primitives in `src/index.css` (`.comic-panel`, `.speech`, `.burst`, `.btn-comic`, `.bg-halftone`...).

---

## 🧪 Tech Stack

React 18 · Vite 5 · Tailwind 3 · Framer Motion 11 · GSAP 3 (ScrollTrigger) · Lenis · React Icons · Lottie React.

---

Made with ☕, ⚡ and a lot of `console.log`.
