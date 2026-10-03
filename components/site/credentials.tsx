"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Award, GraduationCap } from "lucide-react"
import { achievements, certifications, education } from "@/lib/data"
import { SectionHeading } from "./section-heading"
import { Reveal, staggerChild, staggerParent } from "./motion"

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="06"
          eyebrow="Credentials"
          title={
            <>
              Proof, <em className="text-clay">not promises</em>.
            </>
          }
        />

        {/* Achievements */}
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {achievements.map((a) => {
            const inner = (
              <>
                <div className="flex items-start justify-between">
                  <p className="font-serif text-4xl tracking-tight text-ink md:text-5xl">{a.value}</p>
                  {a.icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={a.icon} alt="" width={22} height={22} className="opacity-80" loading="lazy" />
                  )}
                </div>
                <p className="mt-3 text-sm leading-snug text-ink-600">{a.label}</p>
              </>
            )
            return (
              <motion.li key={a.label} variants={staggerChild}>
                {a.url ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface block h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="card-surface h-full p-6">{inner}</div>
                )}
              </motion.li>
            )
          })}
        </motion.ul>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Education */}
          <Reveal>
            <h3 className="mb-6 flex items-center gap-3 font-serif text-3xl tracking-tight">
              <GraduationCap className="text-clay" size={26} /> Education
            </h3>
            <ol className="divide-y divide-cream-300 border-y border-cream-300">
              {education.map((e) => (
                <li key={e.degree} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-5">
                  <p className="font-medium text-ink">{e.degree}</p>
                  <p className="font-serif text-2xl leading-none text-clay">{e.score}</p>
                  <p className="text-sm text-ink-500">{e.school}</p>
                  <p className="text-right font-mono text-[11px] text-ink-400">{e.years}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.1}>
            <h3 className="mb-6 flex items-center gap-3 font-serif text-3xl tracking-tight">
              <Award className="text-clay" size={26} /> Certifications
            </h3>
            <ul className="divide-y divide-cream-300 border-y border-cream-300">
              {certifications.map((c) => (
                <li key={c.title}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block font-medium text-ink transition-colors group-hover:text-clay">
                        {c.title}
                      </span>
                      <span className="text-sm text-ink-500">{c.issuer}</span>
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ink-500 transition-colors group-hover:text-clay">
                      View
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
