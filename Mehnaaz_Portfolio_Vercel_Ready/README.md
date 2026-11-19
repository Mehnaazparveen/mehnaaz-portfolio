# Mehnaaz Parveen — Editorial Portfolio (v3)

A minimal one-page portfolio in original styling, informed by the *design principles* of the reference portfolio: understated typography, whitespace, fine dividers, compact project explanations, and light/dark modes. It does **not** copy the reference source or markup.

## Preview locally

Open `index.html` in a browser. No installation or build step required. For a local web server, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## Files

- `index.html` — complete page and real project descriptions
- `styles.css` — responsive design, light and dark themes, accent color variables
- `script.js` — theme toggle, section highlight, copyright year
- `resume/` — finalized PDF and editable Word resume, unchanged
- `assets/favicon.svg` — minimal initial mark

## Customize

Edit text and links in `index.html`. Change colors in `styles.css` under `:root` and `html[data-theme=dark]`. You can later add a genuine photo or project screenshots, but they aren't necessary.

The four links go to actual GitHub repositories; the campus matcher currently links to the repo named `WORKSHOP`. ScrapWise is a team project with the user's role described separately. PCOS and bank-loan projects are research/educational prototypes, not real diagnosis or lender approval tools. No invented scores or deployed demo links.

## Important

- The Vercel link shared as inspiration could not be loaded in the browsing environment. The matching public GitHub source `mohammedafaaz/My-Portfolio` was inspected instead for design cues. The public repo's own homepage is a different domain, so this is a *best-effort* interpretation of the shared design.
- Google Fonts are optional; system fallbacks make the website usable offline.
- This package is **not published**.

## Editorial revision

The involvement timeline highlights IEEE Computer Society, the Research and Literature Club, and engineering education. Only activities selected for public presentation are included.

## Capitalization revision

- The sidebar wordmark is **MP.** (uppercase M and P).
- The favicon displays **MP** in uppercase.
- The main name continues to display **Mehnaaz Parveen** with a capital **M**.
- The approved no-SIH content and layout remain unchanged.
- This package is ready for a later manual Vercel deployment; no deployment has been performed.
