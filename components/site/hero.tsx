"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from "lucide-react"
import { profile, stats } from "@/lib/data"
import { CountUp, SplitWords, ease } from "./motion"

function RotatingWord() {
  const words = profile.rotatingWords
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600)
    return () => clearInterval(t)
  }, [words.length])

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a))

  // The invisible longest word reserves width so surrounding text never jumps.
  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <span aria-hidden className="invisible col-start-1 row-start-1 whitespace-nowrap font-serif italic">
        {longest}
      </span>
      <span className="sr-only">{words.join(", ")}</span>
      <AnimatePresence initial={false}>
        <motion.span
          key={words[i]}
          aria-hidden
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease }}
          className="col-start-1 row-start-1 whitespace-nowrap font-serif italic text-clay"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function CircleBadge() {
  const text = "OPEN TO OPPORTUNITIES • FULL STACK • AI • "
  return (
    <div className="relative h-28 w-28">
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-ink font-mono text-[8.4px] tracking-[0.18em]">
          <textPath href="#circle">{text}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-[30%] flex items-center justify-center rounded-full bg-clay text-cream-50">
        <ArrowDown size={18} />
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80])

  // Gentle tilt that follows the cursor
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 })

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
    >
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0 opacity-70" />
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-clay/15 blur-[120px]" />
        <div className="absolute -right-20 top-40 h-[460px] w-[460px] rounded-full bg-sage/20 blur-[120px]" />
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream-300 bg-cream-50/80 py-1.5 pl-2 pr-4 text-xs text-ink-600 shadow-soft backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Full Stack Developer at <span className="font-medium text-ink">BookLeaf Publishing</span>
          </motion.div>

          <h1 className="mt-7 font-serif text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-ink">
            <SplitWords text="Tarush" delay={0.1} />
            <br />
            <SplitWords text="Ruhela." delay={0.2} className="italic text-ink-700" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-7 text-2xl leading-snug tracking-tight text-ink md:text-3xl"
          >
            I engineer <RotatingWord />
            <br /> that ship to real users.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mt-5 max-w-xl text-pretty leading-relaxed text-ink-600 md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link href="/#work" className="btn-primary group">
              See my work
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FileText size={16} /> Resume
              </a>
            ) : (
              <Link href="/#contact" className="btn-ghost">
                Let&apos;s talk
              </Link>
            )}
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-cream-200 hover:text-ink"
              >
                <Github size={19} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-cream-200 hover:text-ink"
              >
                <Linkedin size={19} />
              </a>
              <a
                href={profile.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-cream-200"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.simpleicons.org/leetcode/5c584c" alt="" width={18} height={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          style={{ y: imgY }}
          className="relative mx-auto w-full max-w-[420px] [perspective:1200px]"
        >
          <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-cream-300 bg-ink shadow-lift">
              <Image
                src={profile.portrait}
                alt="Portrait of Tarush Ruhela at his desk"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover object-[50%_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream-50">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream-200/80">Based in</p>
                <p className="font-serif text-2xl">{profile.location}</p>
              </div>
            </div>

            {/* Floating: terminal card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="absolute -left-6 top-[18%] hidden w-64 sm:block md:-left-24"
            >
             <div className="animate-float rounded-xl border border-ink-800 bg-ink p-3.5 font-mono text-[11px] leading-relaxed text-cream-200 shadow-lift">
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </div>
              <p>
                <span className="text-clay-light">const</span> answer = <span className="text-clay-light">await</span>
              </p>
              <p className="pl-3">
                rag.<span className="text-emerald-300">ask</span>(<span className="text-amber-200">&quot;my May royalties?&quot;</span>)
              </p>
              <p className="mt-1.5 text-ink-400">{"// ✓ grounded in 8 sources"}</p>
             </div>
            </motion.div>

            {/* Floating: metric card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease }}
              className="absolute -right-4 bottom-[16%] rounded-2xl border border-cream-300 bg-cream-50/95 px-4 py-3 shadow-lift backdrop-blur md:-right-10"
            >
              <p className="font-serif text-3xl leading-none text-ink">10K+</p>
              <p className="mt-1 text-xs text-ink-500">authors on systems I own</p>
            </motion.div>
          </motion.div>

          <div className="absolute -right-6 -top-6 hidden lg:block">
            <CircleBadge />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container mt-20 md:mt-28">
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 divide-cream-300 border-y border-cream-300 md:grid-cols-4 md:divide-x"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="flex flex-col-reverse px-2 py-7 md:px-8"
            >
              <dt className="mt-2 text-sm text-ink-500">{s.label}</dt>
              <dd className="font-serif text-5xl tracking-tight text-ink md:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
