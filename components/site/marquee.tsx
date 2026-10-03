import { marqueeTech } from "@/lib/data"
import { TechLogo } from "./tech-logo"

export default function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech]
  return (
    <section aria-label="Technologies I work with" className="relative border-y border-cream-300 bg-cream-100/70 py-6">
      <div className="mask-fade-x group flex overflow-hidden">
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <li
              key={`${t.name}-${i}`}
              aria-hidden={i >= marqueeTech.length}
              className="flex items-center gap-3 text-sm font-medium text-ink-600 grayscale transition duration-300 hover:text-ink hover:grayscale-0"
            >
              <TechLogo item={t} size={26} />
              {t.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
