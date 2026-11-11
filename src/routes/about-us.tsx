import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { usePageMotion } from "@/lib/motion";
import { PageHero } from "@/components/site/PageHero";
import { SplitText } from "@/components/site/SplitText";
import { Frame } from "@/components/site/Frame";
import villa from "@/assets/room-villa.jpg";
import cottage from "@/assets/room-cottage.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Ideal Beach Resort | Our story" },
      { name: "description", content: "The story of Ideal Beach Resort — a family-run beachfront retreat on the East Coast Road, Mahabalipuram." },
      { property: "og:title", content: "About Ideal Beach Resort | Our story" },
      { property: "og:description", content: "A family-run beachfront retreat on the East Coast Road, Mahabalipuram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const VALUES = [
  { k: "Shade", v: "Thousands of palms, planted and tended over the years." },
  { k: "Sea", v: "Direct access to a long, quiet beach on the Bay." },
  { k: "Service", v: "A team that greets returning guests by name." },
];

function About() {
  const page = useRef<HTMLDivElement>(null);
  usePageMotion(page);
  return (
    <div ref={page}>
      <PageHero eyebrow="Our story" title="Truly Ideal" intro="A family-run retreat that grew from a palm grove on the East Coast Road into a home by the sea for travellers from everywhere." image={villa} alt="A garden villa at Ideal Beach Resort" />
      <section data-theme="light" className="bg-background px-6 py-32 md:px-10 md:py-44">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <SplitText text="Built slowly, around the trees." className="font-display text-5xl leading-[1.02] md:text-7xl" />
            <p data-reveal className="mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground">Cottages were placed where the palms allowed, gardens grew between them, and the beach was left as the sea made it. The result feels less like a hotel and more like a village by the water.</p>
          </div>
          <Frame src={cottage} alt="A sea-view cottage room" className="aspect-[4/5] md:col-span-5 md:col-start-8" amount={12} width={1200} height={1504} />
        </div>
      </section>
      <section data-theme="dark" className="bg-ink px-6 py-32 text-ink-foreground md:px-10">
        <div data-stagger className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-3">
          {VALUES.map((x) => (
            <div key={x.k} className="border-t border-ink-foreground/20 pt-10">
              <h3 className="font-display text-6xl italic">{x.k}</h3>
              <p className="mt-6 max-w-xs leading-relaxed text-ink-muted">{x.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
