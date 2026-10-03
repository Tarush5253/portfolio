import Link from "next/link"
import { ArrowUp, Github, Instagram, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/data"

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#ai", label: "AI" },
  { href: "/#skills", label: "Skills" },
  { href: "/projects", label: "All projects" },
  { href: "/#contact", label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream-100">
      <div className="container pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl leading-tight tracking-tight">
              Open to full-stack
              <br />
              and <em className="text-clay-light">AI engineering</em> roles.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-flex items-center gap-2 border-b border-cream-50/20 pb-1 text-cream-200 transition-colors hover:border-clay-light hover:text-cream-50"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-200/50">Navigate</p>
            <ul className="grid grid-cols-2 gap-y-2 text-sm md:grid-cols-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-cream-200/80 transition-colors hover:text-cream-50">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-200/50">Elsewhere</p>
            <div className="flex gap-2">
              {[
                { href: profile.socials.github, label: "GitHub", Icon: Github },
                { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: profile.socials.instagram, label: "Instagram", Icon: Instagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-200 transition-all hover:border-cream-50 hover:bg-cream-50 hover:text-ink"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap text-center font-serif text-[clamp(3.5rem,15vw,13rem)] leading-none tracking-[-0.04em] text-cream-50/[0.06]"
        >
          Tarush Ruhela
        </p>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-6 text-xs text-cream-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Built with love</p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-cream-50">
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
