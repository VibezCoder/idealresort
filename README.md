# idealResort

Editorial redesign concept of https://idealresort.com/ — a TanStack Start + React 19 + Tailwind CSS v4 site with a shared GSAP/Lenis scroll engine.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd idealresort
npm i
npm run dev
```

## Checks

```sh
npm run lint
npm test
npm run build
```

## Structure

- `src/lib/motion.ts` — the single scroll engine (Lenis driven by the GSAP ticker); pages opt in via `data-reveal`, `data-split`, `data-stagger`, `data-parallax`, `data-theme` attributes.
- `src/lib/site.ts` — shared editorial content and asset URLs.
- `src/components/site/` — shared header, footer and presentation.
- `src/server.ts` + `src/start.ts` — SSR error wrapper and request middleware.
- `.site-import/` — capture of the original site used as reference material.