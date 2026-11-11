import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap, prefersReducedMotion, usePageMotion, scrollToTarget } from "@/lib/motion";
import { SplitText } from "@/components/site/SplitText";
import { Frame } from "@/components/site/Frame";
import { BOOKING_URL } from "@/lib/site";
import shore from "@/assets/shore.jpg";
import heritage from "@/assets/heritage.jpg";
import dining from "@/assets/dining.jpg";
import cottage from "@/assets/room-cottage.jpg";
import villa from "@/assets/room-villa.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ideal Beach Resort | Beachfront stays in Mahabalipuram" },
      { name: "description", content: "Cottages, villas and seafood under the palms — a beachfront resort on the Bay of Bengal beside Mahabalipuram's shore temples." },
      { property: "og:title", content: "Ideal Beach Resort | Beachfront stays in Mahabalipuram" },
      { property: "og:description", content: "Cottages, villas and seafood under the palms on the Bay of Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ROOMS = [
  { n: "01", name: "Sea-view Cottages", note: "Teak, linen and a veranda that opens onto the Bay.", img: cottage },
  { n: "02", name: "Garden Villas", note: "Red-tiled roofs and a private plunge pool under frangipani.", img: villa },
  { n: "03", name: "Poolside Rooms", note: "Step from your door into the palm-lined pool.", img: pool },
];

const VOICES = [
  { q: "We came for two nights and stayed five. The sound of the sea never left the room.", who: "Ananya & Rohit", from: "Bengaluru" },
  { q: "Breakfast under the palms, the Shore Temple at sunset — the kind of quiet you plan a year for.", who: "Claire M.", from: "Lyon" },
  { q: "The staff remembered our daughter's name by the second morning. That's Ideal.", who: "The Raghavan family", from: "Chennai" },
];

const OFFERS = [
  { tag: "Weddings", title: "Vows on the sand", body: "Lawns, beach mandaps and a team that has hosted celebrations for decades." },
  { tag: "Retreats", title: "Offsites by the sea", body: "Conference halls, team evenings on the shore, an hour from Chennai." },
  { tag: "Seasonal", title: "Long-weekend escapes", body: "Stay longer, save more — seasonal rates for slow coastal weekends." },
];

function Home() {
  const page = useRef<HTMLDivElement>(null);
  usePageMotion(page);
  return (
    <div ref={page}>
      <Hero />

      <section data-theme="light" className="bg-background px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
          <p data-reveal className="text-xs uppercase tracking-[0.3em] text-muted-foreground md:col-span-3">(01) — The resort</p>
          <div className="md:col-span-9">
            <SplitText text="Forty acres of palm grove, one long stretch of sand, and the oldest temples on the coast for neighbours." className="font-display text-4xl leading-[1.05] md:text-7xl" />
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <p data-reveal className="text-lg leading-relaxed text-muted-foreground">Ideal Beach Resort sits on the East Coast Road just north of Mahabalipuram — far enough to hear only the waves, close enough to walk the UNESCO monuments at dawn.</p>
              <p data-reveal="0.1" className="text-lg leading-relaxed text-muted-foreground">Rooms open onto gardens and sea. Days drift between the pool, the beach and long lunches of the morning's catch.</p>
            </div>
          </div>
        </div>
      </section>

      <div data-theme="light" className="overflow-hidden border-y border-border bg-background py-8">
        <div className="marquee flex w-max gap-16 whitespace-nowrap font-display text-6xl italic text-muted-foreground md:text-8xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-16">
              <span>Sea</span><span>·</span><span>Stone</span><span>·</span><span>Palm</span><span>·</span><span>Spice</span><span>·</span><span>Tide</span><span>·</span>
            </span>
          ))}
        </div>
      </div>

      <section id="stay" data-theme="light" className="bg-background px-6 py-32 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SplitText text="Places to stay" className="font-display text-6xl md:text-8xl" />
            <p data-reveal className="max-w-sm text-muted-foreground">Three ways to wake by the Bay of Bengal — each a few steps from the sand.</p>
          </div>
          <div data-stagger className="grid gap-10 md:grid-cols-3">
            {ROOMS.map((r, i) => (
              <a key={r.n} href={BOOKING_URL} target="_blank" rel="noreferrer" className={`group block ${i === 1 ? "md:mt-24" : i === 2 ? "md:mt-48" : ""}`}>
                <div className="lift bg-card">
                  <Frame src={r.img} alt={r.name} className="aspect-[4/5]" amount={8} width={1200} height={1504} />
                  <div className="flex items-start justify-between gap-6 p-6">
                    <div>
                      <h3 className="font-display text-3xl">{r.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
                    </div>
                    <span className="font-display text-xl italic text-accent">{r.n}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section data-theme="dark" className="bg-ink px-6 py-32 text-ink-foreground md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 md:grid-cols-12">
          <Frame src={heritage} alt="The Shore Temple at sunset" className="aspect-[4/5] md:col-span-5" amount={14} width={1280} height={1600} />
          <div className="md:col-span-6 md:col-start-7">
            <p data-reveal className="mb-8 text-xs uppercase tracking-[0.3em] text-ink-muted">(02) — Heritage</p>
            <SplitText text="Thirteen centuries of carved granite, five minutes down the road." className="font-display text-5xl leading-[1.02] md:text-7xl" />
            <p data-reveal className="mt-10 max-w-lg text-lg leading-relaxed text-ink-muted">The Pallava kings carved temples from living rock here. Watch the Shore Temple turn gold at dusk, then walk back along the beach to dinner.</p>
            <Link to="/mahabalipuram" data-reveal className="group mt-12 inline-flex items-center gap-4 text-sm uppercase tracking-[0.25em]">
              <span className="h-px w-12 bg-current transition-all duration-700 group-hover:w-20" /> Discover Mahabalipuram
            </Link>
          </div>
        </div>
      </section>

      <section data-theme="light" className="bg-secondary px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p data-reveal className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">(03) — Dining</p>
            <SplitText text="The catch, the coast, the candlelight." className="font-display text-5xl leading-[1.02] md:text-7xl" />
            <p data-reveal className="mt-10 max-w-md text-lg leading-relaxed text-muted-foreground">Tiger prawns off the grill, Chettinad spice, cold drinks at the bar as the tide comes in. Tables are set on the sand when the evening is kind.</p>
          </div>
          <div className="relative md:col-span-7">
            <Frame src={dining} alt="Candle-lit seafood dinner on the beach" className="aspect-[4/3]" amount={10} width={1600} height={1200} />
            <Frame src="/site-assets/ideal-resort-slide-3.jpg" alt="The bar at Ideal Beach Resort" className="absolute -bottom-16 -left-10 hidden aspect-square w-56 border-8 border-secondary md:block" amount={16} />
          </div>
        </div>
      </section>

      <section data-theme="light" className="bg-background px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SplitText text="Events & offers" className="font-display text-6xl md:text-8xl" />
            <Link to="/events-offers" data-reveal className="text-sm uppercase tracking-[0.25em] underline-offset-8 hover:underline">See everything →</Link>
          </div>
          <div data-stagger className="grid gap-px bg-border md:grid-cols-3">
            {OFFERS.map((o) => (
              <Link key={o.title} to="/events-offers" className="group block bg-background">
                <div className="lift flex h-full flex-col justify-between bg-background p-10 transition-colors duration-700 group-hover:bg-ink group-hover:text-ink-foreground">
                  <span className="text-xs uppercase tracking-[0.3em] text-accent">{o.tag}</span>
                  <div className="mt-24">
                    <h3 className="font-display text-4xl">{o.title}</h3>
                    <p className="mt-4 leading-relaxed opacity-70">{o.body}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-theme="dark" className="bg-ocean px-6 py-32 text-ink-foreground md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <p data-reveal className="mb-16 text-xs uppercase tracking-[0.3em] text-ink-muted">(04) — Guest voices</p>
          <div data-stagger className="grid gap-16 md:grid-cols-3">
            {VOICES.map((v) => (
              <figure key={v.who} className="border-t border-ink-foreground/25 pt-10">
                <blockquote className="font-display text-3xl leading-snug">“{v.q}”</blockquote>
                <figcaption className="mt-8 text-sm uppercase tracking-[0.2em] text-ink-muted">{v.who} — {v.from}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section data-theme="light" className="bg-background px-6 py-32 md:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-4 md:grid-cols-4">
          {["ideal-resort-slide-1.jpg", "ideal-resort-slide-2.jpg", "ideal-resort-slide-3.jpg", "ideal-resort-slide-4.jpg"].map((f, i) => (
            <Frame key={f} src={`/site-assets/${f}`} alt="Life at Ideal Beach Resort" className={`aspect-[3/4] ${i % 2 ? "md:mt-20" : ""}`} amount={i % 2 ? 16 : 8} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cut = el.querySelector<HTMLElement>(".cutout");
    if (prefersReducedMotion()) {
      cut?.style.setProperty("--m", "4000");
      return;
    }
    const ctx = gsap.context(() => {
      // Arrival: the palm cutout blooms open, copy rises.
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .fromTo(".cutout", { "--m": 0 }, { "--m": 46, duration: 1.8 })
        .fromTo(".hero-img", { scale: 1.6 }, { scale: 1.3, duration: 2.2 }, 0)
        .from(".hero-word", { yPercent: 120, duration: 1.3, stagger: 0.07 }, 0.5)
        .from(".hero-meta", { opacity: 0, y: 20, duration: 1, stagger: 0.1 }, 0.9);

      // Scroll: cutout expands into the full image, copy lifts away. Scrubbed, reverses at top.
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top top", end: "+=160%", scrub: 1, pin: true, anticipatePin: 1 },
      });
      tl.fromTo(".cutout", { "--m": 46 }, { "--m": 5200, ease: "power3.in", immediateRender: false }, 0)
        .fromTo(".hero-img", { scale: 1.3 }, { scale: 1, ease: "none", immediateRender: false }, 0)
        .to(".hero-copy", { yPercent: -60, opacity: 0, ease: "power1.in", duration: 0.45 }, 0)
        .to(".hero-meta", { opacity: 0, duration: 0.25 }, 0)
        .fromTo(".hero-after", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.3 }, 0.7);
    }, el);
    return () => ctx.revert();
  }, []);

  const words = "Where the palms meet the Bay".split(" ");
  return (
    <section ref={ref} data-theme="dark" className="relative h-[100svh] overflow-hidden bg-ink text-ink-foreground">
      <div className="cutout absolute inset-0">
        <img src={shore} alt="Palms and fishing boats on the beach at sunset" className="hero-img h-full w-full object-cover" width={1600} height={1104} />
      </div>
      <div className="hero-copy pointer-events-none absolute inset-x-0 top-[14vh] px-6 text-center md:top-[12vh]">
        <p className="hero-meta mb-5 text-xs uppercase tracking-[0.4em] text-ink-muted">Ideal Beach Resort · Mahabalipuram</p>
        <h1 className="font-display text-[13vw] leading-[0.9] md:text-[7.5vw]" aria-label="Where the palms meet the Bay">
          {words.map((w, i) => (
            <span key={i} className="split-line" aria-hidden><span className="hero-word split-word">{w}&nbsp;</span></span>
          ))}
        </h1>
      </div>
      <div className="hero-after pointer-events-none absolute inset-x-0 bottom-16 px-6 text-center opacity-0">
        <p className="font-display text-4xl italic md:text-6xl">Arrive. Exhale. Stay a while.</p>
      </div>
      <div className="absolute inset-x-0 bottom-8 flex items-end justify-between px-6 text-xs uppercase tracking-[0.3em] md:px-10">
        <span className="hero-meta text-ink-muted">12.65° N, 80.20° E</span>
        <button type="button" onClick={() => scrollToTarget("#stay")} className="hero-meta flex flex-col items-center gap-3 text-ink-muted hover:text-ink-foreground">
          Scroll <span className="h-10 w-px animate-pulse bg-current" />
        </button>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="hero-meta text-ink-muted hover:text-ink-foreground">Book →</a>
      </div>
    </section>
  );
}
