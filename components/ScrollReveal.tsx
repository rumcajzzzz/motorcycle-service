"use client"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const getAnimationClass = () => {
    const base = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${base} opacity-0 translate-y-12`
        case "down":
          return `${base} opacity-0 -translate-y-12`
        case "left":
          return `${base} opacity-0 translate-x-12`
        case "right":
          return `${base} opacity-0 -translate-x-12`
        case "fade":
          return `${base} opacity-0`
        default:
          return `${base} opacity-0 translate-y-12`
      }
    }

    return `${base} opacity-100 translate-y-0 translate-x-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
