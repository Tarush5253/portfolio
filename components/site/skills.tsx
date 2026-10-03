"use client"

import { motion } from "framer-motion"
import { skillGroups } from "@/lib/data"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"
import { TechLogo } from "./tech-logo"
import { ease } from "./motion"

// Column spans on the 6-column desktop grid, in the order of skillGroups
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3", "lg:col-span-6"]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title={
            <>
              A toolkit for the <em className="text-clay">whole stack</em>.
            </>
          }
          intro="The technologies I reach for, from the first commit to the production deploy."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, gi) => {
            const highlight = g.title.startsWith("AI")
            return (
              <motion.article
                key={g.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease, delay: (gi % 3) * 0.06 }}
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
                  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
                }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border p-6 transition-colors duration-500 md:p-7",
                  highlight ? "border-clay/40 bg-clay-soft/50" : "border-cream-300 bg-cream-50/70",
                  spans[gi],
                )}
              >
                {/* Cursor spotlight */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(380px circle at var(--x) var(--y), rgba(180,83,42,0.10), transparent 60%)",
                  }}
                />

                <header className="relative mb-6 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight text-ink">{g.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-500">{g.caption}</p>
                  </div>
                  <span className="font-mono text-[11px] text-ink-400">{String(g.items.length).padStart(2, "0")}</span>
                </header>

                <ul className="relative flex flex-wrap gap-2.5">
                  {g.items.map((t, i) => (
                    <motion.li
                      key={t.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease, delay: 0.15 + i * 0.04 }}
                      whileHover={{ y: -4 }}
                      className="flex w-[86px] flex-col items-center gap-2 rounded-2xl border border-cream-300 bg-cream-50 px-2 pb-3 pt-4 text-center shadow-[0_1px_0_rgba(22,21,15,0.04)] transition-shadow duration-300 hover:shadow-soft"
                    >
                      <TechLogo item={t} size={32} />
                      <span className="text-[11px] font-medium leading-tight text-ink-700">{t.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
