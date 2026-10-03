"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { Database, FileText, Layers, MessageSquareText, Scissors, Search, Sparkles } from "lucide-react"
import { aiCapabilities, ragPipeline, tech } from "@/lib/data"
import { Reveal, ease } from "./motion"
import { TechLogo } from "./tech-logo"

const stepIcons = [FileText, Scissors, Layers, Database, Search, Sparkles]

const demo = {
  question: "Can international orders be refunded?",
  retrieval: "Retrieved 8 chunks from the policy docs · reranked to top 3",
  answer:
    "Yes. International orders can be refunded within 14 days of delivery if the item is unused. Shipping fees are not refundable.",
  sources: ["policies/refunds.md §3", "faq/shipping.md", "support/macros.json"],
}

/** Animated, illustrative walk-through of a retrieval-augmented answer. */
function RagDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-100px" })
  const [phase, setPhase] = useState(0) // 0 question, 1 retrieving, 2 answering, 3 done
  const [typed, setTyped] = useState("")
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (!inView) return
    setPhase(0)
    setTyped("")
    const timers = [setTimeout(() => setPhase(1), 900), setTimeout(() => setPhase(2), 2600)]
    return () => timers.forEach(clearTimeout)
  }, [inView, run])

  // Replay the demo a few seconds after it finishes
  useEffect(() => {
    if (phase !== 3) return
    const t = setTimeout(() => setRun((r) => r + 1), 5000)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== 2) return
    let i = 0
    const t = setInterval(() => {
      i += 2
      setTyped(demo.answer.slice(0, i))
      if (i >= demo.answer.length) {
        clearInterval(t)
        setPhase(3)
      }
    }, 22)
    return () => clearInterval(t)
  }, [phase])

  return (
    <div ref={ref} className="rounded-2xl border border-cream-50/10 bg-cream-50/[0.04] p-5 backdrop-blur md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-200/60">
          <MessageSquareText size={14} /> Grounded Q&amp;A
        </span>
        <span className="font-mono text-[10px] text-cream-200/40">illustrative demo</span>
      </div>

      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-clay px-4 py-2.5 text-sm text-cream-50">
        {demo.question}
      </div>

      <AnimatePresence>
        {phase >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 font-mono text-[11px] text-emerald-300/90"
          >
            {phase === 1 ? (
              <span className="h-3 w-3 animate-spin rounded-full border border-emerald-300/80 border-t-transparent" />
            ) : (
              <span>✓</span>
            )}
            {demo.retrieval}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-4 min-h-[96px] rounded-2xl rounded-bl-sm bg-cream-50/[0.07] px-4 py-3 text-sm leading-relaxed text-cream-100">
        {phase < 2 ? (
          <span className="inline-flex gap-1 py-1">
            {[0, 1, 2].map((d) => (
              <motion.span
                key={d}
                className="h-1.5 w-1.5 rounded-full bg-cream-200/60"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1, delay: d * 0.15 }}
              />
            ))}
          </span>
        ) : (
          <>
            {typed}
            {phase === 2 && <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-cream-100" />}
          </>
        )}
      </div>

      <AnimatePresence>
        {phase === 3 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="mt-3 flex flex-wrap gap-2"
          >
            {demo.sources.map((s, i) => (
              <motion.span
                key={s}
                variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-1.5 rounded-md border border-cream-50/10 bg-cream-50/[0.05] px-2 py-1 font-mono text-[10px] text-cream-200/80"
              >
                <span className="text-clay-light">[{i + 1}]</span> {s}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AISection() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "-120px" })

  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setActive((a) => (a + 1) % ragPipeline.length), 1300)
    return () => clearInterval(t)
  }, [inView])

  const aiStack = [tech.gemini, tech.langchain, tech.huggingface, tech.supabase, tech.postgresql, tech.n8n]

  return (
    <section id="ai" className="relative overflow-hidden bg-ink py-24 text-cream-50 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-clay/25 blur-[140px]" />
        <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-sage/25 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,253,248,0.9) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="container relative">
        <Reveal className="mb-14 md:mb-20">
          <p className="eyebrow text-cream-200/60">
            <span className="text-clay-light">03</span>
            <span className="h-px w-8 bg-cream-50/20" />
            AI Engineering
          </p>
          <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            LLMs, RAG and agents, wired into <em className="text-clay-light">real products</em>.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-200/70">
            Not demos for demos&apos; sake. AI that answers from your data, cites its sources and automates the busywork.
          </p>
        </Reveal>

        {/* Pipeline */}
        <div ref={ref} className="relative mb-16 md:mb-20">
          <div aria-hidden className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-cream-50/10 md:block">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-clay-light/0 via-clay-light to-clay-light"
              animate={{ scaleX: (active + 1) / ragPipeline.length }}
              transition={{ duration: 0.6, ease }}
            />
          </div>
          <ol className="relative grid grid-cols-3 gap-y-8 md:grid-cols-6">
            {ragPipeline.map((s, i) => {
              const Icon = stepIcons[i]
              const on = i <= active
              return (
                <li key={s.step} className="flex flex-col items-center text-center">
                  <motion.span
                    animate={{
                      scale: i === active ? 1.12 : 1,
                      backgroundColor: on ? "#d9764a" : "#262520",
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cream-50/10"
                  >
                    <Icon size={22} className={on ? "text-ink" : "text-cream-200/70"} />
                  </motion.span>
                  <span className="mt-3 text-sm font-medium">{s.step}</span>
                  <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-cream-200/50">
                    {s.detail}
                  </span>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <ul className="divide-y divide-cream-50/10 border-y border-cream-50/10">
              {aiCapabilities.map((c, i) => (
                <Reveal as="li" key={c.title} delay={i * 0.08} className="py-6">
                  <h3 className="flex items-baseline gap-4 font-serif text-2xl tracking-tight">
                    <span className="font-mono text-xs text-clay-light">0{i + 1}</span>
                    {c.title}
                  </h3>
                  <p className="mt-2 pl-9 text-[15px] leading-relaxed text-cream-200/70">{c.body}</p>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
              {aiStack.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/10 bg-cream-50/[0.06] px-3 py-1.5 text-xs text-cream-100"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cream-50">
                    <TechLogo item={t} size={13} />
                  </span>
                  {t.name}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <RagDemo />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
