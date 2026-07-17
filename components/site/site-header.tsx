"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ActionLink } from "@/components/shared/action-link";
import { Container } from "@/components/shared/container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/**
 * The masthead.
 *
 * De-glassed per the brief: `backdrop-blur` was doing the one thing this brand
 * cannot afford — looking like a SaaS product. Solid paper, a hairline rule,
 * and a shadow that appears only once the page has moved. The shadow is the
 * only signal that the bar is floating above content, and it earns its keep by
 * being absent until it is true.
 *
 * CLIENT COMPONENT, JUSTIFIED: two genuinely client-side concerns — scroll
 * position and disclosure state. Neither exists on the server. This is the
 * whole client boundary for the header; every section below it stays server
 * or is client only where framer-motion requires.
 *
 * NO HYDRATION RISK: `scrolled` initialises to `false`, which is what the
 * server renders. The effect only corrects it after mount (for a deep-link
 * that lands mid-page). Server and client agree on the first paint, which is
 * the only frame React compares.
 */

const NAV = [
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Passive: this listener must never be able to block scrolling. React
    // bails out when the boolean is unchanged, so this re-renders twice per
    // page life (down past 8px, and back up), not once per frame.
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background transition-[box-shadow,border-color] duration-[var(--dur-medium)] ease-[var(--ease-out)] motion-reduce:transition-none",
        scrolled ? "border-rule/70 shadow-header" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span
            aria-hidden
            className="flex size-7 items-center justify-center rounded-[6px] bg-foreground font-mono text-[0.625rem] font-medium tracking-tight text-background"
          >
            OFC
          </span>
          {/* Below sm the mark carries the brand alone; the full wordmark
              cannot share a 390px row with the CTA without wrapping. */}
          <span className="hidden whitespace-nowrap f
          ont-heading text-[0.9375rem] tracking-tight sm:inline">
            Overseas Food Consultants
          </span>
          <span className="sr-only sm:hidden">Overseas Food Consultants</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm text-muted-foreground outline-none transition-colors duration-[var(--dur-fast)] hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink
            href="#contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Book a consultation
          </ActionLink>

          {/* Mobile disclosure. A real <button> — it performs an action rather
              than navigating, which is exactly the distinction the CTA above
              gets wrong when it is built on Base UI's Button. */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-10 items-center justify-center rounded-control text-foreground outline-none transition-colors duration-[var(--dur-fast)] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 md:hidden"
            >
              <Menu aria-hidden className="size-5" strokeWidth={1.5} />
            </SheetTrigger>

            <SheetContent
              side="right"
              // The primitive ships its own close button in the corner. Ours
              // sits in a labelled row with the "Menu" eyebrow, which reads as
              // designed rather than bolted on — so theirs is turned off. Two
              // X's is not a redundancy, it is a bug.
              showCloseButton={false}
              // Full-screen. The width overrides must carry the SAME
              // `data-[side=right]:` prefix as the primitive's own
              // `w-3/4` / `sm:max-w-sm`, or tailwind-merge cannot see them as
              // conflicting and the more specific data-variant simply wins —
              // which is exactly how a bare `w-full` here silently lost.
              className="border-l-0 bg-background data-[side=right]:w-full data-[side=right]:sm:max-w-none"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <div className="flex h-full flex-col px-6 pb-10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-muted-foreground/60">Menu</span>
                  <SheetClose
                    aria-label="Close menu"
                    className="inline-flex size-10 items-center justify-center rounded-control outline-none transition-colors duration-[var(--dur-fast)] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <X aria-hidden className="size-5" strokeWidth={1.5} />
                  </SheetClose>
                </div>

                {/* Large type, generous rows. A phone menu is not a shrunken
                    desktop nav — it is the only navigation that exists here,
                    so it gets the whole screen and a comfortable touch row. */}
                <nav aria-label="Mobile" className="mt-10 flex flex-col">
                  {NAV.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-heading border-b border-rule/70 py-5 text-[1.75rem] tracking-[-0.02em] outline-none transition-colors duration-[var(--dur-fast)] hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-10">
                  <ActionLink
                    href="#contact"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Book a consultation
                  </ActionLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
