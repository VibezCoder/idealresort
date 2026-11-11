import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let lenis: Lenis | null = null;
let registered = false;

function ensureGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Lenis smooth scroll driven by the GSAP ticker. Call once from the root layout. */
export function useSmoothScroll() {
  useEffect(() => {
    ensureGsap();
    if (prefersReducedMotion()) return;
    const instance = new Lenis({ duration: 1.05, anchors: { offset: -88 }, autoRaf: false });
    lenis = instance;
    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const onScroll = () => {
      document.documentElement.dataset.scrolled = window.scrollY > 40 ? "true" : "false";
    };
    instance.on("scroll", onScroll);
    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis = null;
    };
  }, []);
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}

export function scrollToTarget(target: string) {
  if (lenis) lenis.scrollTo(target, { offset: -88 });
  else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

/** Text reveals, staggers, parallax and header inking for everything inside `scope`. */
export function usePageMotion(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    ensureGsap();
    const root = scope.current;
    if (!root) return;
    scrollToTop();
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      // Header re-inking per section
      root.querySelectorAll<HTMLElement>("[data-theme]").forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 44px",
          end: "bottom 44px",
          onToggle: (self) => {
            if (self.isActive) document.documentElement.dataset.ink = section.dataset.theme;
          },
        });
      });
      const first = root.querySelector<HTMLElement>("[data-theme]");
      if (first) document.documentElement.dataset.ink = first.dataset.theme;

      if (reduced) return;

      // Word-split headings
      root.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".split-word"), {
          yPercent: 115,
          rotate: 4,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Paragraph / block reveals
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          delay: Number(el.dataset.reveal) || 0,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // Cascading cards 1 → 2 → 3
      root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          y: 90,
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.16,
          scrollTrigger: { trigger: group, start: "top 85%" },
        });
      });

      // Image parallax drift (outer layer only; hover zoom lives on inner .zoom)
      root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 12;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    }, root);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, [scope]);
}

export { gsap, ScrollTrigger };
