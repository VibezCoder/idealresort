import { Link } from "@tanstack/react-router";
import { BOOKING_URL, CONTACT, NAV } from "@/lib/site";
import { SplitText } from "./SplitText";

export function Footer() {
  return (
    <footer data-theme="dark" className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-28 md:px-10">
        <p data-reveal className="text-xs uppercase tracking-[0.3em] text-ink-muted">The tide is calling</p>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="group mt-6 block">
          <SplitText as="p" text="Reserve your stretch of shore." className="font-display text-[13vw] leading-[0.9] md:text-[8vw] transition-colors duration-700 group-hover:text-accent" />
        </a>
        <div className="mt-24 grid gap-12 border-t border-ink-foreground/15 pt-12 md:grid-cols-4">
          <div data-reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-ink-muted">Find us</p>
            <p className="max-w-[16rem] leading-relaxed">{CONTACT.address}</p>
          </div>
          <div data-reveal="0.08">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-ink-muted">Reservations</p>
            {CONTACT.phones.map((p) => (
              <a key={p.href} href={p.href} className="block leading-relaxed hover:text-accent">{p.label}</a>
            ))}
            <a href={`mailto:${CONTACT.email}`} className="mt-2 block hover:text-accent">{CONTACT.email}</a>
          </div>
          <div data-reveal="0.16">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-ink-muted">Explore</p>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="block leading-relaxed hover:text-accent">{n.label}</Link>
            ))}
          </div>
          <div data-reveal="0.24">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-ink-muted">Follow</p>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="block leading-relaxed hover:text-accent">Instagram</a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="block leading-relaxed hover:text-accent">Facebook</a>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-ink-muted md:flex-row">
          <span>© {new Date().getFullYear()} Ideal Beach Resort</span>
          <span>Mahabalipuram · Bay of Bengal</span>
        </div>
      </div>
    </footer>
  );
}
