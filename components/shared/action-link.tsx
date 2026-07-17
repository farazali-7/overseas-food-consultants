import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * The marketing CTA: a link that looks like a button.
 *
 * WHY THIS EXISTS, AND WHY IT IS NOT `<Button render={<Link/>}>`:
 *
 * Base UI's Button is a *behaviour* component for actions. Driving it with a
 * `render` prop that swaps in an anchor asks it to be something it is not, and
 * it does exactly what it warns about: `nativeButton` defaults to true, so
 * `useButton` merges `{ type: 'button' }` into the element. Rendered onto an
 * `<a>`, that emits `<a type="button" tabindex="0" href="...">` — and `type`
 * on an anchor is an advisory MIME-type hint per the HTML spec, so `type="button"`
 * is invalid there. It server-renders, so it reaches production and crawlers,
 * not just the dev console.
 *
 * Setting `nativeButton={false}` silences the warning and is *worse*: Base UI
 * then applies `role="button"` to the anchor. A screen reader would announce
 * "button" for something that navigates, Space would activate it like a button,
 * and the link would lose its link affordances (open in new tab, copy address,
 * appearing in the rotor's link list). That trades an invalid attribute for an
 * accessibility lie.
 *
 * The real question is semantic, not stylistic: these CTAs navigate to a
 * fragment or open a mail client. They are links. So they render as anchors,
 * carry no button machinery, and get Enter activation, focus, and context-menu
 * behaviour natively from the platform. Styling is just a class.
 *
 * `components/ui/button.tsx` is untouched and remains correct for real actions
 * (submits, dialog triggers). This is a sibling, not a replacement.
 *
 * Consolidating here also removes seven near-identical hand-rolled pills that
 * had already drifted (px-5 vs px-6 vs px-7, translate-x-0.5 vs translate-x-1).
 * One definition means the next hover tweak lands everywhere at once.
 *
 * Server component: no hooks, no client JS.
 */

const actionLinkVariants = cva(
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap outline-none transition-[transform,background-color,border-color,color] duration-200 ease-out focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
  {
    variants: {
      variant: {
        /** The only filled element on the page — one per view, maximum. */
        primary:
          "bg-foreground text-background hover:-translate-y-px hover:bg-[color-mix(in_oklch,var(--foreground),var(--brand)_35%)] active:translate-y-0",
        outline:
          "border border-border bg-card hover:-translate-y-px hover:border-[color-mix(in_oklch,var(--border),var(--foreground)_28%)] hover:text-brand active:translate-y-0",
        /** No border: keeps a secondary CTA from competing with the primary. */
        ghost: "text-foreground hover:text-brand",
      },
      size: {
        sm: "h-9 px-4 text-[0.8125rem]",
        md: "h-11 px-5 text-[0.9375rem]",
        lg: "h-12 px-7 text-[0.9375rem]",
      },
      /** Full-bleed on mobile where a centred pill looks stranded; auto above. */
      stretch: {
        true: "w-full sm:w-auto",
        false: "",
      },
    },
    compoundVariants: [
      // Ghost has no fill or border, so identical padding would read as a wider
      // gap than the primary it sits beside.
      { variant: "ghost", size: "lg", class: "px-5" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "lg",
      stretch: false,
    },
  },
);

type ActionLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> &
  VariantProps<typeof actionLinkVariants> & {
    href: string;
    /** Trailing arrow. Decorative — the label already carries the meaning. */
    arrow?: boolean;
  };

/**
 * `next/link` is for routes. A `mailto:`/`tel:`/absolute URL is not a route —
 * handing one to Link asks the router to resolve something it does not own.
 * These fall through to a plain anchor, which is all they ever needed.
 */
function isExternal(href: string) {
  return /^(mailto:|tel:|https?:)/.test(href);
}

export function ActionLink({
  className,
  variant,
  size,
  stretch,
  arrow = false,
  href,
  children,
  ...props
}: ActionLinkProps) {
  const classes = cn(actionLinkVariants({ variant, size, stretch, className }));

  const content = (
    <>
      {children}
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      ) : null}
    </>
  );

  if (isExternal(href)) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}

export { actionLinkVariants };
