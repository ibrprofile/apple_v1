"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

interface ScaleOnScrollProps {
  children: React.ReactNode
  minScale?: number
  maxScale?: number
  className?: string
}

export default function ScaleOnScroll({ children, minScale = 0.9, maxScale = 1, className = "" }: ScaleOnScrollProps) {
  const [scale, setScale] = useState(minScale)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const { top, height } = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the element is in the viewport
      const visiblePercentage = 1 - Math.max(0, top) / windowHeight

      // Scale based on visibility
      if (top < windowHeight && top > -height) {
        const newScale = minScale + (maxScale - minScale) * Math.min(visiblePercentage, 1)
        setScale(newScale)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [minScale, maxScale])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {children}
    </div>
  )
}

