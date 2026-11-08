import type { Metadata, Viewport } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site, sitePath } from "@/lib/site";
import "./globals.css";
import localFont from "next/font/local";
const inter = localFont({ src: "../public/fonts/inter-latin.woff2", display: "swap", variable: "--font-inter" });
export const viewport: Viewport = { themeColor: "#183c31" };
export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: { default: "AML MEDIA GROUP | Live Experiences & Travel Brands", template: "%s | AML MEDIA GROUP" }, description: site.description, applicationName: site.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: { icon: [{ url: sitePath("/favicon.ico"), sizes: "16x16 32x32 48x48" }, { url: sitePath("/favicon-96.png"), type: "image/png", sizes: "96x96" }, { url: sitePath("/favicon.svg"), type: "image/svg+xml", sizes: "any" }], apple: [{ url: sitePath("/apple-touch-icon.png"), sizes: "180x180" }] }, manifest: sitePath("/site.webmanifest"),
  openGraph: { type: "website", locale: "en_US", siteName: site.name, title: "AML MEDIA GROUP | A world worth discovering", description: site.description, images: [{ url: `${site.url}/social-card.png`, width: 1200, height: 630, alt: "AML Media Group — Concertlands, EventsCozy, and Hotels50" }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: [`${site.url}/social-card.png`] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={inter.variable}><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>; }
