# Trip Hop World

A black-and-white, vinyl-inspired microsite that invites visitors to fall in love with trip-hop — artists, albums, playlists, and poetry.
**educational and non-commercial purposes only**.

## 🌍 Live demo

[Trip Hop World on Vercel](https://twoja-domena.vercel.app)

## 📂 Repository

[GitHub Repo](https://github.com/RagnarKocur/triphopworld)

## 🚀 How to run locally

1. Clone this repo:
   ```bash
   git clone https://github.com/RagnarKocur/triphopworld.git
   ```

## Purpose

Create an atmospheric, text-first, responsive site where users can:

- Discover **artists** and iconic **albums**
- Play curated **playlists**
- Read **poetry/lyrics** reflections
- Browse a visual **archive**

## Tech Stack

- HTML5 (semantic structure)
- CSS3 (Grid, Flexbox, `aspect-ratio`, media queries)
- No frameworks; vanilla and minimal on purpose
- Deployed with Vercel (planned)

## Structure

trip-hop_world/
├─ index.html
├─ pages/
│ ├─ artists.html
│ ├─ albums.html
│ ├─ poetry.html
│ ├─ archive.html
│ ├─ playlists.html
│ └─ about.html
├─ assets/
│ ├─ CSS/
│ │ └─ style.css
│ ├─ images/ # page artwork / photos
│ └─ video/
│ └─ hero.mp4 # muted hero background
└─ README.md

## Responsiveness

- Breakpoints:
  - `@media (max-width: 1024px)` → **tablet**: sidebar → topbar, grids 3→2 cols
  - `@media (max-width: 767px)` → **mobile**: single column, stacked sections
- Vinyls remain circular using `aspect-ratio: 1/1`.

## Navigation (important detail)

- From **Home** → subpages use `pages/...`
- From **subpages** → **Home** uses `../index.html`
- Subpage → subpage uses filenames only (`artists.html`, etc.)
  _(This avoids `/pages/pages/...` 404s.)_

## Pages

- **Home:** hero video, title/subline, 3 featured artists
- **Artists:** featured + grid of reps
- **Albums:** vinyl-style grid of iconic records
- **Poetry:** Lyrics / Reflections / Fusion (with audio)
- **Archive:** decades timeline + video links
- **Playlists:** Mood / Curator / Legacy (vinyl circles)
- **About:** manifesto, portrait, bio, quote, contacts

## Accessibility

- High-contrast B&W theme
- Semantic headings and landmarks
- Large tap targets on mobile
- (To add) `alt` text for images; `aria-label` for video toggle

## Dev Notes

- CSS comments document key choices (breakpoints, grids, aspect-ratio).
- Built step-by-step with AI assistance (ChatGPT) but coded and integrated manually.

## Roadmap

- Replace placeholders with real images & Spotify/YT embeds
- Add album/artist subpages
- Light animations (vinyl hover spin)
- Deploy to Vercel, add custom domain
