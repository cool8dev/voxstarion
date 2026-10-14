# VoxStarion — Official Studio Website

Static website for **VoxStarion**, an independent game studio.
Tagline: *Play Beyond. Learn Within.*

Built with static HTML, Tailwind CSS (production-compiled), and vanilla JavaScript.
No backend, no frameworks, no analytics, no cookies.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, values, games showcase, philosophy, CTA |
| `about.html` | Studio story, name philosophy, vision, mission, five pillars |
| `privacy.html` | Privacy Policy draft (12 sections, TOC, anchors) |
| `terms.html` | Terms of Service draft (12 sections) |
| `contact.html` | Contact options + support guidance (mailto only, no fake form) |

## Project structure

```text
voxstarion/
├── index.html / about.html / privacy.html / terms.html / contact.html
├── src/
│   ├── input.css        # Tailwind directives + design-system extras
│   └── main.js          # theme toggle + mobile menu (source)
├── assets/
│   ├── css/style.css    # compiled production CSS (generated, do not edit)
│   ├── js/config.js     # OWNER-CONFIGURABLE: emails, URLs, game data
│   ├── js/main.js       # copied from src/main.js for deployment
│   ├── images/          # (empty — add optimized owned visuals here)
│   ├── favicon.svg
│   └── og-cover.svg     # social preview image
├── package.json / tailwind.config.js / postcss.config.js
├── README.md
└── CONTENT_CHECKLIST.md # everything the owner must verify before launch
```

## Development

Requirements: Node.js 18+ and npm.

```bash
cd voxstarion
npm install          # install Tailwind + PostCSS (one time)
npm run build        # compile src/input.css -> assets/css/style.css (minified)
npm run watch:css    # optional: rebuild on file changes
```

Open any `*.html` directly in a browser, or serve the folder:

```bash
npx serve .           # or: python3 -m http.server 8000
```

## Configuration before launch

1. Edit `assets/js/config.js`:
   - `contactEmail` — public support address (required before Google Play review)
   - `privacyEmail` — privacy requests address (may match contact email)
   - `siteDomain`, `googlePlayDeveloperUrl` — when known
   - `games[]` — update `status` and add `googlePlayUrl` only for real listings
2. Review `privacy.html` against each game's actual SDKs and data practices.
3. Review `terms.html` — set legal entity, jurisdiction, effective dates.
4. Work through every item in `CONTENT_CHECKLIST.md`.

## Deployment

Any static host works (GitHub Pages, Netlify, Cloudflare Pages, plain HTTPS hosting):

1. Run `npm run build` so `assets/css/style.css` is fresh.
2. Upload the whole folder; keep relative paths intact.
3. Ensure HTTPS; each page needs a permanent public URL (for Play Console links).
4. Smoke-test: all 5 pages, theme toggle persistence, mobile menu, no console errors.

## Design notes

- Dark slate + teal accent; Space Grotesk display, Inter body (single Google Fonts request, system fallbacks).
- Theme: `localStorage` override → `prefers-color-scheme` default; anti-flash inline script in `<head>`; `prefers-reduced-motion` respected.
- Accessibility: skip link, visible focus, landmarks, aria-expanded menu, keyboard-operable toggle.
- Game art is original inline SVG (no unlicensed screenshots). Real art goes in `assets/images/`.

## REVIEW BEFORE PUBLISHING

- `privacy.html` and `terms.html` are **drafts**. Do not publish until the facts in `CONTENT_CHECKLIST.md` are verified.
- Never invent: founding year, team size, address, awards, partnerships, store listings, emails, or SDK integrations.
