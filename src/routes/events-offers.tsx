import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { usePageMotion } from "@/lib/motion";
import { PageHero } from "@/components/site/PageHero";
import { SplitText } from "@/components/site/SplitText";
import { Frame } from "@/components/site/Frame";
import { BOOKING_URL, CONTACT } from "@/lib/site";
import pool from "@/assets/pool.jpg";
import dining from "@/assets/dining.jpg";

export const Route = createFileRoute("/events-offers")({
  head: () => ({
    meta: [
      { title: "Events & Offers | Ideal Beach Resort" },
      { name: "description", content: "Beach weddings, corporate retreats and seasonal stay offers at Ideal Beach Resort, Mahabalipuram." },
      { property: "og:title", content: "Events & Offers | Ideal Beach Resort" },
      { property: "og:description", content: "Beach weddings, corporate retreats and seasonal stay offers by the Bay of Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsOffers,
});

const EVENTS = [
  { tag: "Celebrations", title: "Beach weddings", body: "Mandaps on the sand, sangeet nights on the lawn, and rooms for every guest.", img: "/site-assets/ideal-resort-slide-2.jpg" },
  { tag: "Business", title: "Retreats & offsites", body: "Conference spaces, team dinners on the shore and an easy drive from Chennai.", img: pool },
  { tag: "Evenings", title: "Private dining", body: "Candle-lit tables on the beach, set menus from our kitchen.", img: dining },
];

function EventsOffers() {
  const page = useRef<HTMLDivElement>(null);
  usePageMotion(page);
  return (
    <div ref={page}>
      <PageHero eyebrow="Gather by the sea" title="Events & Offers" intro="From weddings for three hundred to a weekend for two, we plan it around the tide." image="/site-assets/ideal-resort-slide-4.jpg" alt="A cultural performance at Ideal Beach Resort" />
      <section data-theme="light" className="bg-background px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <SplitText text="Occasions, made coastal." className="mb-20 font-display text-6xl md:text-8xl" />
          <div data-stagger className="grid gap-10 md:grid-cols-3">
            {EVENTS.map((e) => (
              <a key={e.title} href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(e.title)}`} className="group block">
                <div className="lift bg-card">
                  <Frame src={e.img} alt={e.title} className="aspect-[4/5]" amount={8} />
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-[0.3em] text-accent">{e.tag}</span>
                    <h3 className="mt-3 font-display text-3xl">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section data-theme="dark" className="bg-ocean px-6 py-32 text-ink-foreground md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p data-reveal className="mb-6 text-xs uppercase tracking-[0.3em] text-ink-muted">Current offer</p>
            <SplitText text="Stay three nights, the fourth is on the sea." className="max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl" />
            <p data-reveal className="mt-6 text-ink-muted">Ask our reservations team for current dates and terms.</p>
          </div>
          <a data-reveal href={BOOKING_URL} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground transition-transform hover:scale-105">Check availability</a>
        </div>
      </section>
    </div>
  );
}
