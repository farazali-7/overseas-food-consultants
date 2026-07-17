import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";

import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const title = "Overseas Food Consultants — Food Safety & Operations Consulting";

export const metadata: Metadata = {
  // Every relative OG/canonical URL resolves against this. Without it, Next
  // cannot build absolute share URLs and warns at build time.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    url: "/",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*
          Skip link. First thing in the tab order, invisible until focused.
          Without it, a keyboard or switch user pays for the masthead — logo,
          five nav links, a CTA — on every single page load before reaching
          content. WCAG 2.4.1 (Bypass Blocks).
        */}
        <a
          href="#main"
          className="sr-only rounded-control bg-foreground px-4 py-2 text-sm font-medium text-background outline-none focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Skip to content
        </a>

        {/*
          The below-fold sections reveal on scroll via framer-motion, which
          server-renders its starting state as inline `opacity:0`. With JS
          disabled those elements would never animate in and the page would
          read as blank. This forces them visible when there is no JS to run
          the reveal. The hero needs no such net — it is pure CSS.
        */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
