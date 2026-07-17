import { cn } from "@/lib/utils";

/**
 * The measure of the whole site.
 *
 * `mx-auto max-w-[1280px] px-6 lg:px-10` was hand-copied into nine files. That
 * is not a style choice repeated nine times — it is one decision stored in
 * nine places, which means it can only ever be changed eight-ninths of the
 * way. Narrowing the page to the brief's 1200px is now a one-line edit here.
 *
 * The gutters are not decoration: 24px is the minimum that keeps text off the
 * bezel on a 390px phone, and 40px at `lg` keeps the column rules clear of the
 * viewport edge.
 *
 * `size="prose"` exists because the brief sets two different maxima — 1200px
 * for layout, ~700px for reading. Past roughly 75 characters the eye loses the
 * line return on the carriage back, so long-form copy must never inherit the
 * full layout width.
 */
export function Container({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "prose" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-10",
        size === "default" ? "max-w-[1200px]" : "max-w-[700px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
