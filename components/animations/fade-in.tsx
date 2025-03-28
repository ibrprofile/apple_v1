"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 1000,
  className = "",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10"
      case "down":
        return "translate-y-[-40px]"
      case "left":
        return "translate-x-10"
      case "right":
        return "translate-x-[-40px]"
      default:
        return ""
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transform: isVisible ? "translate(0, 0)" : undefined,
        opacity: isVisible ? 1 : 0,
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className={`${isVisible ? "" : getTransform()}`}
        style={{
          transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

