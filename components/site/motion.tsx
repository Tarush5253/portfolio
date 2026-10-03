"use client"

import { MotionConfig, motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"

const ease = [0.22, 1, 0.36, 1] as const

/** Respects the visitor's reduced-motion setting across the whole site. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

/** Fades and lifts its children into view once, when scrolled to. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "li" | "section" | "article"
}) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </Comp>
  )
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

/** Reveals a headline word by word. */
export function SplitWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ")
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/** Counts up from zero when the number scrolls into view. */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const value = useMotionValue(0)
  const spring = useSpring(value, { stiffness: 60, damping: 18 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) value.set(to)
  }, [inView, to, value])

  useEffect(() => spring.on("change", (v) => setDisplay(Math.round(v))), [spring])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export { ease }
