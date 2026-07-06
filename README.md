# VDF — Animated Agriculture Landing Page (Vietnamese)

A React + Framer Motion smart-agriculture landing page, rebuilt
animation-for-animation from a reference video. All content is in
Vietnamese under the "VDF" brand.

## Animations

- **Hero** — slow Ken Burns zoom on the field photo, staggered fade-up for the
  headline, tagline and "Explore more" mouse indicator.
- **Stats** — count-up numbers (32+, 182+, 134 K, $15 Billion) triggered when
  the row scrolls into view.
- **About** — emphasized copy plus three feature cards with staggered reveals.
- **Scroll text reveal** — "Chuyển đổi nông nghiệp bằng giải pháp thông minh…"
  colors in word-by-word as you scroll (`useScroll` + `useTransform`).
- **Services** — numbered items (01–03) with growing rule lines, fade-up copy
  and images sliding in from alternating sides.
- **Project** — parallax panorama banner and a working Prev/Next carousel
  (AnimatePresence slide transitions).
- **Articles** — clickable category tabs with animated list swaps.
- **CTA** — email signup with a popping "Join now" button.
- **Footer** — giant parallax "VDF." watermark overlapping the CTA.
- **Smooth scrolling** throughout via Lenis.

## Stack

- [Vite](https://vite.dev/) + React 19
- [Framer Motion](https://motion.dev/) for all animations
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- Self-hosted [Be Vietnam Pro](https://fontsource.org/fonts/be-vietnam-pro) (full Vietnamese glyph support)
- Stock photos from Unsplash/Pexels stored in `public/images`

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Deploy (SPA fallback)

The site uses client-side routing (`/linh-vuc`, `/du-an`, `/tin-tuc`), so
the host must serve `index.html` for every path:

- **Vercel** — handled by `vercel.json` (already included).
- **Netlify** — handled by `public/_redirects` (already included).
- **Nginx** — add `try_files $uri $uri/ /index.html;` to the location block.
- **GitHub Pages** — no native SPA fallback; either copy `index.html` to
  `404.html` after build, or prefer Vercel/Netlify.
