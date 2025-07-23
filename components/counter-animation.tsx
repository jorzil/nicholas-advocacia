"use client"

import { useEffect, useState, useRef } from "react"

interface CounterAnimationProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CounterAnimation({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "text-3xl font-bold text-[#d4b26a] md:text-4xl",
}: CounterAnimationProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true

      const startTime = Date.now() + delay
      const endTime = startTime + duration

      const timer = setInterval(() => {
        const now = Date.now()

        if (now < startTime) return

        if (now >= endTime) {
          setCount(end)
          clearInterval(timer)
          return
        }

        const elapsed = now - startTime
        const progress = elapsed / duration
        setCount(Math.floor(start + progress * (end - start)))
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isVisible, start, end, duration, delay])

  return (
    <div ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </div>
  )
}
