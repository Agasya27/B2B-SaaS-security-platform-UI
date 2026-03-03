# B2B Security Platform

A cybersecurity dashboard UI built with React, Vite, and Tailwind CSS. It covers three connected screens — Login, Dashboard, and Scan Detail — and supports both dark and light mode out of the box.

---

## What's Under the Hood

This project leans on a modern, minimal stack:

- **React 18** — functional components and hooks throughout
- **Vite 5** — fast dev server and build tooling
- **Tailwind CSS 3** — class-based dark mode, no extra config needed
- **React Router v6** — clean client-side navigation
- **Inter + JetBrains Mono** — loaded via Google Fonts for a polished, readable UI

---

## What It Does

- Switches between dark and light themes, with your preference saved across sessions
- Scales gracefully from 375px mobile screens all the way to 1280px+ desktops
- Shows skeleton loaders during page transitions so nothing feels jarring
- Lets you search and filter scans by name, type, or status
- Fires toast notifications when you kick off a scan, export results, or stop a job
- Parses console logs and highlights timestamps, URLs, and code blocks for easy reading
- Comes with a set of reusable components — `SeverityBadge`, `StatusChip`, `CircularProgress`, `StepTracker`, and more

---

## Getting Started

Clone the repo, install dependencies, and spin up the dev server:

```bash
git clone https://github.com/Agasya27/B2B-SaaS-security-platform-UI.git
cd B2BSaas
npm install
npm run dev
```

The app will be running at `http://localhost:5173`.

---

## Building for Production

```bash
npm run build
npm run preview
```

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel --prod
```

SPA routing is handled automatically via the included `vercel.json`.

---

## Project Structure

```
src/
├── App.jsx               # Route definitions
├── main.jsx              # App entry point
├── index.css             # Global styles and animations
├── components/           # Reusable UI components
├── context/              # Theme provider
├── data/                 # Mock scan data
├── layouts/              # Sidebar and topbar wrapper
└── pages/                # Login, Dashboard, ScanDetail
```

---

## A Few Things to Know

All data in the app is mocked — there's no backend to set up or connect to. Sidebar links like Settings and Notifications currently route back to the Dashboard as placeholders. Pagination is visual only and isn't wired to any real data logic yet.