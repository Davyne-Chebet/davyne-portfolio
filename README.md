# Davyne Faith Chebet — Portfolio

Personal portfolio website built with **React 18 + Vite**.

## Stack
- React 18
- Vite 5
- External CSS (`src/styles/global.css`) — no CSS-in-JS, no Tailwind
- Google Fonts: Cormorant Garamond · Syne · JetBrains Mono

## Project Structure

```
davyne-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component
    ├── styles/
    │   └── global.css        # All styles + CSS variables
    ├── data/
    │   └── portfolioData.js  # All content (CV-sourced) — edit here
    ├── hooks/
    │   └── useReveal.js      # Scroll-reveal IntersectionObserver
    └── components/
        ├── Cursor.jsx
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── GraphicDesign.jsx
        ├── Experience.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Customising Content

All text, links, and data live in **`src/data/portfolioData.js`** — you never need to touch the components to update content.

Key things to personalise:
- Update the CV download link in `About.jsx` (currently `#contact`)
- Add your LinkedIn URL in `Contact.jsx` and `Footer.jsx`
- Replace project Figma/Behance links in `portfolioData.js` as needed
- Add your photo by placing it in `public/` and referencing it in `Hero.jsx`

## Deployment

Builds to `dist/` — deploy to **Vercel**, **Netlify**, or any static host.

```bash
npm run build
# Upload the dist/ folder
```

For Vercel:
```bash
npx vercel --prod
```

## Links Referenced

| Project       | URL |
|---------------|-----|
| Behance       | https://www.behance.net/davynesang |
| VML Website   | https://vml.dkut.ac.ke |
| Newsletters   | https://vml.dkut.ac.ke/Newsletter/newsletters |
| SPAQ Figma    | https://www.figma.com/design/nMQpaZwG3InJrSO9V5LdsY/SPAQ |
| SKIKA Figma   | https://www.figma.com/design/iU2pw1xxcJCZyVyEMdqbwI/SKIKA |
