Motion lives in `src/lib/motion.ts` (Lenis driven by the GSAP ticker; pages opt in via `data-reveal`, `data-split`, `data-stagger`, `data-parallax`, `data-theme` attributes) so every page shares one scroll engine.
Hover transforms go on inner `.zoom`/`.lift` elements, never on the element GSAP animates, so hover and scroll-linked transforms never fight.
The header inks itself from `html[data-ink]`, set by section scroll triggers, so no React state re-renders on scroll.

Do not edit auto-generated files (e.g. `src/routeTree.gen.ts`). Do not put secret values in the repo.