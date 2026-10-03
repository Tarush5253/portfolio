"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { profile } from "@/lib/data"
import { cn } from "@/lib/utils"

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "ai", label: "AI" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("")
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight the section currently in view (home page only)
  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname === "/projects" ? "work" : "")
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-clay"
        style={{ scaleX: progress }}
      />

      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <motion.nav
          aria-label="Primary"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500",
            scrolled
              ? "border-cream-300 bg-cream-50/80 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" className="group flex items-center gap-2 pl-2" aria-label="Tarush Ruhela, home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-lg italic text-cream-50 transition-colors group-hover:bg-clay">
              T
            </span>
            <span className="hidden font-medium tracking-tight sm:inline">
              Tarush<span className="text-ink-400">.dev</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id} className="relative">
                <Link
                  href={`/#${l.id}`}
                  className={cn(
                    "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active === l.id ? "text-cream-50" : "text-ink-600 hover:text-ink",
                  )}
                >
                  {l.label}
                </Link>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-1.5 rounded-full bg-clay px-4 py-2 text-sm font-medium text-cream-50 transition-all hover:bg-ink sm:inline-flex"
            >
              Hire me <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 bg-cream-50 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="flex h-full flex-col justify-center gap-2 px-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    href={`/#${l.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-2 font-serif text-5xl tracking-tight text-ink"
                  >
                    <span className="font-mono text-xs text-clay">0{i + 1}</span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="mt-8">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  {profile.email}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
