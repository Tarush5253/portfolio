"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { corePrinciples, focusAreas, profile } from "@/lib/data"
import { Reveal, staggerChild, staggerParent } from "./motion"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Photo panel */}
        <Reveal>
          <div ref={ref} className="relative h-[520px] overflow-hidden rounded-[2rem] shadow-lift md:h-[640px]">
            <motion.div style={{ y }} className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src={profile.candid}
                alt="Tarush at a metro station at sunset"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[50%_35%]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-cream-50 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-200/80">Off the keyboard</p>
              <p className="mt-2 max-w-xs font-serif text-2xl leading-snug md:text-3xl">
                1200+ rapid on Chess.com. Hackathons whenever I can.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow">
              <span className="text-clay">01</span>
              <span className="h-px w-8 bg-ink/20" />
              About
            </p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              A developer who owns <em className="text-clay">outcomes</em>, not just tickets.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-7 space-y-4 text-pretty text-lg leading-relaxed text-ink-600">
              <p>
                I started with HTML pages and browser games. Today I build systems that move money, books and data
                for thousands of people.
              </p>
              <p>
                At BookLeaf I own the platforms behind payouts, royalties and fulfilment. On the side I run{" "}
                <a
                  href="https://www.freewaystudy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline decoration-clay/50 underline-offset-4 hover:decoration-clay"
                >
                  Freeway Study
                </a>
                , my own EdTech product.
              </p>
            </div>
          </Reveal>

          <motion.ol
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-10 divide-y divide-cream-300 border-y border-cream-300"
          >
            {focusAreas.map((f, i) => (
              <motion.li key={f.title} variants={staggerChild} className="group flex gap-5 py-5">
                <span className="pt-1 font-mono text-xs text-clay">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{f.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <Reveal delay={0.15} className="mt-8">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">Strong CS foundations</p>
            <div className="flex flex-wrap gap-2">
              {corePrinciples.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
