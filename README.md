# Harvest — Animated Agriculture Landing Page

A React + Framer Motion recreation of the "Harvest" smart-agriculture landing
page, rebuilt animation-for-animation from a reference video.

## Animations

- **Intro preloader** — the page loads as a miniature mockup, then zooms into
  the hero (Framer Motion scale/borderRadius timeline).
- **Hero** — slow Ken Burns zoom on the field photo, staggered fade-up for the
  headline, tagline and "Explore more" mouse indicator.
- **Stats** — count-up numbers (32+, 182+, 134 K, $15 Billion) triggered when
  the row scrolls into view.
- **About** — emphasized copy plus three feature cards with staggered reveals.
- **Scroll text reveal** — "Transforming Agriculture with Smart Solutions…"
  colors in word-by-word as you scroll (`useScroll` + `useTransform`).
- **Services** — numbered items (01–03) with growing rule lines, fade-up copy
  and images sliding in from alternating sides.
- **Project** — parallax panorama banner and a working Prev/Next carousel
  (AnimatePresence slide transitions).
- **Articles** — clickable category tabs with animated list swaps.
- **CTA** — email signup with a popping "Join now" button.
- **Footer** — giant parallax "Harvest." watermark overlapping the CTA.
- **Smooth scrolling** throughout via Lenis.

## Stack

- [Vite](https://vite.dev/) + React 19
- [Framer Motion](https://motion.dev/) for all animations
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- Self-hosted [Instrument Sans](https://fontsource.org/fonts/instrument-sans)
- Stock photos from Unsplash/Pexels stored in `public/images`

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```
