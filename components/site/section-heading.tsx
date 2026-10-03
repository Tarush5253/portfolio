import type { ReactNode } from "react"
import { Reveal } from "./motion"
import { cn } from "@/lib/utils"

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", align === "center" && "justify-center")}>
        <span className="text-clay">{index}</span>
        <span className="h-px w-8 bg-ink/20" />
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-ink md:text-6xl">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-600 md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
