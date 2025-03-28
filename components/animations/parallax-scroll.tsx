"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

interface ParallaxScrollProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxScroll({ children, speed = 0.5, className = "" }: ParallaxScrollProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const { top } = ref.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Only apply parallax when element is in view
      if (top < windowHeight && top > -ref.current.offsetHeight) {
        setOffset((scrollY - (top + scrollY - windowHeight / 2)) * speed)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}

