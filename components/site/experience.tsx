"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { ArrowUpRight, FileCheck2, MapPin } from "lucide-react"
import { experience } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { TechChip } from "./tech-logo"
import { ease } from "./motion"

const isDoc = (label: string) => /letter|certificate/i.test(label)

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="experience" className="relative bg-cream-100/60 py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title={
            <>
              Two years of shipping to <em className="text-clay">production</em>.
            </>
          }
          intro="Four roles, one habit: take ownership and ship things that last."
        />

        <ol ref={ref} className="relative ml-3 md:ml-[13rem]">
          {/* Track and animated progress line */}
          <span aria-hidden className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-cream-300" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px origin-top bg-clay"
          />

          {experience.map((job) => (
            <motion.li
              key={job.company + job.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              className="relative pb-14 pl-8 last:pb-0 md:pl-12"
            >
              {/* Dot */}
              <span
                aria-hidden
                className="absolute -left-[7px] top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-clay bg-cream"
              >
                <span className={`h-[7px] w-[7px] rounded-full ${job.current ? "bg-clay" : "bg-clay/40"}`} />
              </span>

              {/* Period (left gutter on desktop) */}
              <p className="mb-2 whitespace-nowrap font-mono text-xs uppercase tracking-[0.06em] text-ink-500 md:absolute md:-left-[13rem] md:top-1.5 md:mb-0 md:w-[11.5rem] md:text-right">
                {job.period}
              </p>

              <article className="card-surface group p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight text-ink md:text-3xl">{job.role}</h3>
                    <p className="mt-1 text-ink-700">
                      <span className="font-medium">{job.company}</span>
                      {job.companyNote && <span className="text-ink-500"> · {job.companyNote}</span>}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 text-[11px] font-medium text-sage">
                        <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Current
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-xs text-ink-500">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>

                <p className="mt-5 inline-block rounded-lg bg-clay-soft px-3 py-1.5 text-sm font-medium text-clay">
                  {job.highlight}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-ink-600">
                      <span aria-hidden className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-ink-400" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <TechChip key={t.name} item={t} />
                  ))}
                </div>

                {job.links && job.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-cream-300 pt-5">
                    {job.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm text-ink-600 transition-colors hover:text-clay"
                      >
                        {isDoc(l.label) ? <FileCheck2 size={14} /> : null}
                        {l.label}
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
