import Link from "next/link";

import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">
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
          <span className="font-heading text-[0.9375rem] tracking-tight">
            Overseas Food Consultants
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          render={<Link href="#contact" />}
          className="h-9 rounded-full px-4 text-[0.8125rem]"
        >
          Book a consultation
        </Button>
      </div>
    </header>
  );
}
