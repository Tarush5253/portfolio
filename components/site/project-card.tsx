"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import type { Project } from "@/lib/data"
import { cn } from "@/lib/utils"
import { TechChip, TechLogo } from "./tech-logo"
import { ease } from "./motion"

const host = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, "") : "localhost")

function Cover({ project, large }: { project: Project; large?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-t-[1.4rem] border-b border-cream-300 bg-cream-200">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-cream-300 bg-cream-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 truncate rounded-md bg-cream-50 px-3 py-0.5 font-mono text-[10px] text-ink-500">
          {host(project.live)}
        </span>
      </div>

      <div className={cn("relative overflow-hidden", large ? "aspect-[16/9]" : "aspect-[16/10]")}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform [transition-duration:1200ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0 flex flex-col justify-between p-6 text-cream-50 md:p-8"
            style={{
              background: `radial-gradient(120% 120% at 0% 0%, ${project.accent} 0%, ${project.accent}dd 45%, #16150f 120%)`,
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,253,248,1) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <span className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-cream-50/70">
              {project.category}
            </span>
            <div className="relative">
              <p
                className={cn(
                  "font-serif leading-[0.95] tracking-tight transition-transform duration-700 group-hover:-translate-y-1",
                  large ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl",
                )}
              >
                {project.title}
              </p>
              <div className="mt-4 flex gap-2">
                {project.stack.map((t) => (
                  <span key={t.name} className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-50 shadow-sm">
                    <TechLogo item={t} size={16} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectCard({
  project,
  large,
  className,
  index = 0,
}: {
  project: Project
  large?: boolean
  className?: string
  index?: number
}) {
  const primary = project.live ?? project.code

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease, delay: (index % 3) * 0.07 }}
      className={cn(
        "group relative flex flex-col rounded-[1.5rem] border border-cream-300 bg-cream-50 shadow-soft transition-shadow duration-500 hover:shadow-lift",
        className,
      )}
    >
      <Cover project={project} large={large} />

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.badge && (
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-clay-soft px-2.5 py-0.5 text-[11px] font-medium text-clay">
                {project.badge}
              </span>
            )}
            <h3 className="font-serif text-2xl tracking-tight text-ink md:text-[1.7rem]">
              {primary ? (
                <a href={primary} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
          </div>
          {primary && (
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream-300 text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-cream-50"
            >
              <ArrowUpRight size={18} />
            </span>
          )}
        </div>

        <p className="mt-2 text-pretty text-[15px] leading-relaxed text-ink-600">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <TechChip key={t.name} item={t} />
          ))}
        </div>

        {(project.live || project.code) && (
          <div className="relative z-10 mt-auto flex gap-5 pt-6 text-sm">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-ink-600 transition-colors hover:text-clay"
              >
                Live site <ArrowUpRight size={14} />
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink-600 transition-colors hover:text-clay"
              >
                <Github size={14} /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
