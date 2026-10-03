"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { profile } from "@/lib/data"
import { Reveal, ease } from "./motion"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const socials = [
    { label: "GitHub", href: profile.socials.github, icon: <Github size={18} /> },
    { label: "LinkedIn", href: profile.socials.linkedin, icon: <Linkedin size={18} /> },
    {
      label: "LeetCode",
      href: profile.socials.leetcode,
      // eslint-disable-next-line @next/next/no-img-element
      icon: <img src="https://cdn.simpleicons.org/leetcode/16150f" alt="" width={17} height={17} />,
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/10 blur-[120px]" />
      </div>

      <div className="container text-center">
        <Reveal>
          <p className="eyebrow justify-center">
            <span className="text-clay">07</span>
            <span className="h-px w-8 bg-ink/20" />
            Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance font-serif text-[clamp(2.8rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em]">
            Let&apos;s build something <em className="text-clay">that matters</em>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-600">
            Hiring for a full-stack or AI role? My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="btn-primary group px-7 py-4 text-base">
            <Mail size={18} /> Email me
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button type="button" onClick={copy} className="btn-ghost px-7 py-4 text-base" aria-live="polite">
            <motion.span
              key={copied ? "y" : "n"}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease }}
            >
              {copied ? <Check size={18} className="text-sage" /> : <Copy size={18} />}
            </motion.span>
            {copied ? "Copied!" : profile.email}
          </button>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-600">
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-clay">
              <Phone size={15} /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-300 bg-cream-50 text-ink transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
