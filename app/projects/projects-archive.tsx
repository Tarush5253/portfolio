"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { projects } from "@/lib/data"
import ProjectCard from "@/components/site/project-card"
import { SplitWords, ease } from "@/components/site/motion"
import { cn } from "@/lib/utils"

const filters = [
  { id: "all", label: "All" },
  { id: "production", label: "In production" },
  { id: "Full Stack", label: "Full stack" },
  { id: "AI", label: "AI" },
  { id: "Frontend", label: "Frontend" },
  { id: "Mini", label: "Mini builds" },
] as const

type FilterId = (typeof filters)[number]["id"]

export default function ProjectsArchive() {
  const [active, setActive] = useState<FilterId>("all")

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: projects.length }
    for (const f of filters) {
      if (f.id === "all") continue
      c[f.id] = projects.filter((p) => (f.id === "production" ? p.kind === "production" : p.category === f.id)).length
    }
    return c
  }, [])

  const list = projects.filter((p) =>
    active === "all" ? true : active === "production" ? p.kind === "production" : p.category === active,
  )

  return (
    <section id="top" className="relative pb-28 pt-32 md:pt-40">
      <div aria-hidden className="bg-grid mask-fade-b pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-60" />
      <div className="container">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-ink">
          <ArrowLeft size={15} /> Back home
        </Link>

        <h1 className="mt-6 font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.03em]">
          <SplitWords text="Every project," />
          <br />
          <SplitWords text="big and small." delay={0.15} className="italic text-clay" />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-6 max-w-xl text-lg text-ink-600"
        >
          From production platforms to the browser games where I first learned to code.
        </motion.p>

        <LayoutGroup>
          <div role="tablist" aria-label="Filter projects" className="mt-12 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "relative rounded-full border px-4 py-2 text-sm transition-colors",
                  active === f.id ? "border-ink text-cream-50" : "border-cream-300 bg-cream-50 text-ink-600 hover:border-ink/40",
                )}
              >
                {active === f.id && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {f.label} <span className="ml-1 font-mono text-[11px] opacity-60">{counts[f.id]}</span>
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
