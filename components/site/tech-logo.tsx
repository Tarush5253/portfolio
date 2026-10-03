"use client"

import { useState } from "react"
import type { Tech } from "@/lib/data"
import { cn } from "@/lib/utils"

/** Official technology logo, falling back to a neat monogram when no logo exists. */
export function TechLogo({ item, size = 28, className }: { item: Tech; size?: number; className?: string }) {
  const [failed, setFailed] = useState(false)

  if (!item.icon || failed) {
    const initials = item.name
      .replace(/[^A-Za-z0-9 ]/g, " ")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase()
    return (
      <span
        aria-hidden
        style={{ width: size, height: size, fontSize: size * 0.38 }}
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-md bg-ink font-mono font-semibold tracking-tight text-cream-50",
          className,
        )}
      >
        {initials}
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={item.icon}
      alt=""
      aria-hidden
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
      className={cn("shrink-0 object-contain", className)}
    />
  )
}

/** Small pill with a logo and name, used on cards. */
export function TechChip({ item }: { item: Tech }) {
  return (
    <span className="chip">
      <TechLogo item={item} size={14} />
      {item.name}
    </span>
  )
}
