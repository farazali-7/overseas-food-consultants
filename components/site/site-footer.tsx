import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/shared/container";

/**
 * The editorial footer.
 *
 * A utility footer would end the site on a list of links — the visual
 * equivalent of trailing off mid-sentence. This one is built as the closing
 * page of an annual report: a statement, then the navigation, then the
 * details, separated by full-bleed rules. The visitor leaves with the same
 * feeling the hero opened with, which is the whole reason it exists.
 *
 * Paper, not a dark slab. Almost every site inverts the footer, and the
 * inversion is exactly what makes it read as chrome bolted onto the bottom
 * rather than the last page of the document.
 *
 * Static server component: no motion, no client JS. This is the end of the
 * page — animating link lists at the moment the visitor is deciding to leave
 * is noise, and the brief's own animation rule (communicate, never decorate)
 * rules it out.
 */

const NAV = [
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-rule bg-[color-mix(in_oklch,var(--background),var(--foreground)_1.5%)]">
      <div aria-hidden className="grain-overlay" />

      <Container className="relative">
        {/* The statement. Set at section-heading scale because it is one —
            the last thing the site says, not a strapline under a logo. */}
        <div className="py-20 sm:py-24">
          <p className="font-heading max-w-[20ch] text-balance text-[clamp(1.5rem,3vw,2.25rem)] font-normal leading-[1.15] tracking-[-0.02em]">
            Helping food businesses build safer, smarter and more resilient
            operations.
          </p>
        </div>

        <div className="h-px bg-rule" />

        <div className="grid gap-12 py-14 sm:grid-cols-2">
          <nav aria-label="Footer">
            <h2 className="eyebrow text-muted-foreground/60">Navigation</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-muted-foreground/60">Connect</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={siteConfig.linkedin}
                  className={linkClass}
                  target="_blank"
                  // noreferrer alongside noopener: without it the destination
                  // still receives the referring URL.
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                {siteConfig.location}
              </li>
            </ul>
          </div>

        </div>

        <div className="h-px bg-rule" />

        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="flex size-7 items-center justify-center rounded-[6px] bg-foreground font-mono text-[0.625rem] font-medium tracking-tight text-background"
            >
              OFC
            </span>
            {/* Prerendered statically, so this year is stamped at build time.
                Correct as long as the site is rebuilt on deploy; if it ever
                goes a full year without one, the year goes stale. */}
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
          </div>
          {/* The last line on the page. It is not a credit — it restates the
              promise in the register the whole site has been speaking in. */}
          <p className="text-sm text-muted-foreground/70">
            Designed with clarity. Built for long-term partnerships.
          </p>
        </div>
      </Container>
    </footer>
  );
}
