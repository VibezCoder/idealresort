import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { usePageMotion } from "@/lib/motion";
import { PageHero } from "@/components/site/PageHero";
import { SplitText } from "@/components/site/SplitText";
import { Frame } from "@/components/site/Frame";
import heritage from "@/assets/heritage.jpg";
import shore from "@/assets/shore.jpg";

export const Route = createFileRoute("/mahabalipuram")({
  head: () => ({
    meta: [
      { title: "Mahabalipuram | Shore temples near Ideal Beach Resort" },
      { name: "description", content: "Explore Mahabalipuram's UNESCO Pallava monuments, stone-carvers' workshops and fishing villages from Ideal Beach Resort." },
      { property: "og:title", content: "Mahabalipuram | Shore temples near Ideal Beach Resort" },
      { property: "og:description", content: "UNESCO Pallava monuments, stone carvers and fishing villages — minutes from the resort." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Mahabalipuram,
});

const SIGHTS = [
  { n: "I", name: "Shore Temple", body: "Built in the 8th century, its granite towers face the sunrise over the Bay of Bengal." },
  { n: "II", name: "Arjuna's Penance", body: "One of the world's largest open-air rock reliefs — gods, elephants and ascetics carved in a single boulder." },
  { n: "III", name: "Pancha Rathas", body: "Five monolithic chariot-temples, each hewn whole from a single rock." },
  { n: "IV", name: "Krishna's Butterball", body: "A 250-tonne boulder balanced impossibly on a slope for thirteen centuries." },
];

function Mahabalipuram() {
  const page = useRef<HTMLDivElement>(null);
  usePageMotion(page);
  return (
    <div ref={page}>
      <PageHero eyebrow="The town next door" title="Mahabalipuram" intro="A UNESCO World Heritage town of the Pallava kings, where stone carvers still work in the lanes behind the temples." image={heritage} alt="The Shore Temple at sunset" />
      <section data-theme="light" className="bg-background px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1600px]">
          <SplitText text="Four wonders within a morning's walk." className="mb-20 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl" />
          <div data-stagger className="grid gap-px bg-border md:grid-cols-2">
            {SIGHTS.map((s) => (
              <div key={s.name} className="group bg-background">
                <div className="lift bg-background p-10 md:p-14">
                  <span className="font-display text-2xl italic text-accent">{s.n}</span>
                  <h3 className="mt-6 font-display text-4xl md:text-5xl">{s.name}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section data-theme="dark" className="bg-ink px-6 py-32 text-ink-foreground md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 md:grid-cols-2">
          <div>
            <SplitText text="Mornings with the fishermen." className="font-display text-5xl leading-[1.02] md:text-7xl" />
            <p data-reveal className="mt-10 max-w-lg text-lg leading-relaxed text-ink-muted">At first light the catamarans come in on the tide. Our team can arrange beach walks to the village, a visit to the stone-carvers, or a quiet cycle to the temples before the crowds.</p>
            <Link to="/events-offers" data-reveal className="mt-12 inline-block rounded-full border border-current px-8 py-3 text-xs uppercase tracking-[0.25em] transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">Plan your stay</Link>
          </div>
          <Frame src={shore} alt="Fishing boats on the beach at sunset" className="aspect-[4/3]" amount={12} width={1600} height={1104} />
        </div>
      </section>
    </div>
  );
}
