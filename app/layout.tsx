import type React from "react"
import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MotionProvider } from "@/components/site/motion"
import { profile } from "@/lib/data"

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

const title = `${profile.name} · Full Stack & AI Developer`
const description =
  "Full Stack Developer building production web apps, payment workflows and LLM/RAG systems with Next.js, Node.js, NestJS and Supabase."

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  keywords: [
    "Tarush Ruhela",
    "Full Stack Developer",
    "Next.js developer",
    "Node.js",
    "NestJS",
    "RAG",
    "LLM",
    "AI engineer",
    "portfolio",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title,
    description,
    siteName: profile.name,
    images: [{ url: profile.portrait, width: 1254, height: 1254, alt: profile.name }],
  },
  twitter: { card: "summary_large_image", title, description, images: [profile.portrait] },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#f8f4eb",
  width: "device-width",
  initialScale: 1,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.portrait}`,
  address: { "@type": "PostalAddress", addressLocality: "Ghaziabad", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "BookLeaf Publishing" },
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.leetcode],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="grain min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
