import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { BOOKING_URL, NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
          <Link to="/" className="flex items-center gap-3" aria-label="Ideal Beach Resort home">
            <img src="/site-assets/80da6815665131eb.png" alt="" className="logo-img h-10 w-auto" width={120} height={40} />
          </Link>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative text-[13px] font-medium uppercase tracking-[0.18em]"
                activeOptions={{ exact: true }}
                activeProps={{ "aria-current": "page" }}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-current px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground sm:inline-block"
            >
              Book a stay
            </a>
            <button
              type="button"
              className="relative h-10 w-10 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`absolute left-2 right-2 top-[15px] h-px bg-current transition-transform duration-500 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute left-2 right-2 top-[25px] h-px bg-current transition-transform duration-500 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-16 text-ink-foreground transition-[clip-path] duration-[900ms] ease-[cubic-bezier(.7,0,.2,1)] lg:hidden ${open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"}`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={open ? 0 : -1}
              className="font-display text-5xl leading-tight transition-all duration-700"
              style={{ transitionDelay: open ? `${200 + i * 70}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(30px)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={BOOKING_URL} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="mt-10 inline-block self-start rounded-full bg-accent px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
          Book a stay
        </a>
      </div>
    </>
  );
}
