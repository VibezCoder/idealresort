import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/motion";

type Props = { eyebrow: string; title: string; intro: string; image: string; alt: string };

/** Inner-page hero: image recedes and copy lifts away as you scroll, reversing at the top. */
export function PageHero({ eyebrow, title, intro, image, alt }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".ph-word", { yPercent: 115, duration: 1.4, ease: "expo.out", stagger: 0.07, delay: 0.15 });
      gsap.from(".ph-img", { scale: 1.25, duration: 2.2, ease: "expo.out" });
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
      tl.to(".ph-copy", { yPercent: -40, opacity: 0, ease: "none" }, 0).to(".ph-img", { yPercent: 18, scale: 1.08, ease: "none" }, 0);
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} data-theme="dark" className="relative flex h-[100svh] min-h-[600px] items-end overflow-hidden bg-ink text-ink-foreground">
      <img src={image} alt={alt} className="ph-img absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="ph-copy relative mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-ink-muted">{eyebrow}</p>
        <h1 className="font-display text-[15vw] leading-[0.88] md:text-[9vw]" aria-label={title}>
          {title.split(" ").map((w, i) => (
            <span key={i} className="split-line" aria-hidden><span className="ph-word split-word">{w}&nbsp;</span></span>
          ))}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">{intro}</p>
      </div>
    </section>
  );
}
