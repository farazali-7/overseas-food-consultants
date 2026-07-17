/**
 * The hero mark.
 *
 * The original brief asked for a laptop, dashboard, database, cloud-deploy and
 * auth-shield illustration. That is a picture of a software product, and OFC
 * does not sell software — it would have quietly repositioned the firm as a
 * SaaS vendor. Stock food photography fails the other way and repositions it
 * as a restaurant brand.
 *
 * So: a rising curve anchored to a measured baseline by control points. It
 * carries the value proposition literally — growth ("scale") that is governed
 * at every checkpoint ("with confidence") — and nods at HACCP's critical
 * control points without illustrating a single kitchen. Abstract enough to
 * stay premium, specific enough to mean something.
 *
 * Inline SVG rather than a file: it is ~2KB, needs no network request, cannot
 * shift layout, and inherits the theme's CSS variables so it recolours itself
 * in dark mode for free. An <img> could do none of that.
 *
 * Geometry note: node coordinates are the t=0.5 midpoints of each cubic
 * segment, computed from the control points, so they sit exactly on the curve
 * rather than approximately near it.
 *
 * Every path carries pathLength="1", which normalises dash geometry so a
 * single CSS keyframe draws all of them regardless of true arc length.
 */

type Node = { cx: number; cy: number; accent?: boolean };

const NODES: Node[] = [
  { cx: 80, cy: 196 },
  { cx: 267.5, cy: 169.5 },
  { cx: 440, cy: 128, accent: true },
  { cx: 612.5, cy: 89.25 },
  { cx: 800, cy: 58 },
];

const CURVE = "M 80 196 C 240 194, 300 150, 440 128 C 580 106, 640 70, 800 58";

const BASELINE_Y = 214;

/** Measurement ticks along the baseline — the "ruled instrument" texture. */
const TICKS = Array.from({ length: 22 }, (_, i) => 60 + i * 36.2);

export function HeroIllustration({ delay = "0ms" }: { delay?: string }) {
  return (
    <div
      aria-hidden
      style={{ animationDelay: delay }}
      className="fade mx-auto mt-16 w-full max-w-[880px] sm:mt-20"
    >
      <svg
        viewBox="0 0 880 260"
        fill="none"
        role="presentation"
        className="h-auto w-full overflow-visible"
      >
        {/* Reference rules at each measured height. Faint enough to read as
            paper ruling rather than as chart gridlines. */}
        {[58, 128, 196].map((y) => (
          <line
            key={y}
            x1={60}
            y1={y}
            x2={820}
            y2={y}
            stroke="var(--rule)"
            strokeWidth={1}
            strokeDasharray="2 6"
            className="fade"
            style={{ animationDelay: "500ms" }}
          />
        ))}

        {/* Baseline: the operating floor the curve is measured against. */}
        <line
          x1={60}
          y1={BASELINE_Y}
          x2={820}
          y2={BASELINE_Y}
          pathLength={1}
          stroke="var(--color-foreground)"
          strokeOpacity={0.28}
          strokeWidth={1}
          className="draw"
          style={{ animationDuration: "0.8s", animationDelay: "400ms" }}
        />

        {TICKS.map((x) => (
          <line
            key={x}
            x1={x}
            y1={BASELINE_Y}
            x2={x}
            y2={BASELINE_Y + 6}
            stroke="var(--color-foreground)"
            strokeOpacity={0.16}
            strokeWidth={1}
            className="fade"
            style={{ animationDelay: "700ms" }}
          />
        ))}

        {/* The growth curve. Drawn left-to-right, slowly — it is the one piece
            of motion in the hero allowed to take its time, because it is
            describing a trajectory and a trajectory needs duration. */}
        <path
          d={CURVE}
          pathLength={1}
          stroke="var(--color-foreground)"
          strokeWidth={1.75}
          strokeLinecap="round"
          className="draw"
          style={{ animationDelay: "850ms" }}
        />

        {/* Droplines tie each control point back to the baseline: every gain is
            accountable to a measurement. */}
        {NODES.map((n) => (
          <line
            key={`drop-${n.cx}`}
            x1={n.cx}
            y1={BASELINE_Y}
            x2={n.cx}
            y2={n.cy}
            pathLength={1}
            stroke="var(--color-foreground)"
            strokeOpacity={0.14}
            strokeWidth={1}
            className="draw"
            style={{ animationDuration: "0.5s", animationDelay: "1700ms" }}
          />
        ))}

        {NODES.map((n, i) => (
          <circle
            key={`node-${n.cx}`}
            cx={n.cx}
            cy={n.cy}
            r={4.5}
            fill="var(--color-background)"
            stroke={n.accent ? "var(--brand)" : "var(--color-foreground)"}
            strokeWidth={n.accent ? 2 : 1.5}
            className="pop"
            style={{ animationDelay: `${1250 + i * 160}ms` }}
          />
        ))}

        {/* The single accent in the whole composition. One highlighted control
            point earns far more attention than five would. */}
        <circle
          cx={440}
          cy={128}
          r={13}
          stroke="var(--brand)"
          strokeWidth={1}
          strokeOpacity={0.45}
          fill="none"
          className="pop"
          style={{ animationDuration: "0.8s", animationDelay: "1950ms" }}
        />
      </svg>
    </div>
  );
}
