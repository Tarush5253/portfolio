import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"
import ProjectCard from "./project-card"
import { Reveal } from "./motion"

// Desktop column spans for a 6-column editorial grid: two wide cards, then three
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"]

function Group({ label, note, kind }: { label: string; note: string; kind: "production" | "featured" }) {
  const list = projects.filter((p) => p.kind === kind)
  return (
    <div className="mb-20 last:mb-0">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-cream-300 pb-4">
        <h3 className="font-serif text-3xl tracking-tight">{label}</h3>
        <p className="text-sm text-ink-500">{note}</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {list.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            large={i < 2}
            className={cn(spans[i], i === list.length - 1 && list.length % 2 === 1 && "md:col-span-2")}
          />
        ))}
      </div>
    </div>
  )
}

export default function Work() {
  const total = projects.length
  return (
    <section id="work" className="bg-cream-100/60 py-24 md:py-36">
      <div className="container">
        <SectionHeading
          index="05"
          eyebrow="Selected work"
          title={
            <>
              Things I&apos;ve built and <em className="text-clay">shipped</em>.
            </>
          }
          intro="Production systems used by real customers, plus the personal builds where I learn fastest."
        />

        <Group label="In production" note="Live products at companies I've worked with" kind="production" />
        <Group label="Personal builds" note="Hackathons, experiments and deep dives" kind="featured" />

        <Reveal className="mt-14 flex justify-center">
          <Link href="/projects" className="btn-primary group">
            Explore all {total} projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
