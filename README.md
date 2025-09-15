# Diabetes AI Assistant — Frontend Prototype

This is a small React + Vite prototype implementing the requested front-end pages: role-based login, doctor dashboard, patient portal, input processing, and AI analysis.

Run locally:

1. Install dependencies:

```bash
cd "/Users/kanchumarthijaiprakash/Downloads/Diabetes AI Assistant"
npm install
```

2. Start dev server:

```bash
npm run dev
```

Tailwind setup (if you want Tailwind styling):

1. Install Tailwind and PostCSS deps:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Ensure `tailwind.config.cjs` content paths include `./src/**/*.{js,ts,jsx,tsx}` and import `./tailwind.css` from `src/main.tsx`.


Notes:
- This is a UI prototype with mock data. AI/processing is simulated.
- Charts are placeholders (canvas elements) — you can integrate Chart.js datasets in `src/pages/*`.
