"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CounterAnimationProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function CounterAnimation({ end, duration = 2000, prefix = "", suffix = "" }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.5, // Trigger when 50% of the component is visible
  })

  useEffect(() => {
    if (!inView) {
      return
    }

    let startTimestamp: DOMHighResTimeStamp | null = null
    const step = (timestamp: DOMHighResTimeStamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)

    return () => {
      // Cleanup if component unmounts before animation finishes
      setCount(0) // Reset count on unmount or if not in view
    }
  }, [end, duration, inView])

  return <span ref={ref}>{`${prefix}${count.toLocaleString()}${suffix}`}</span>
}
