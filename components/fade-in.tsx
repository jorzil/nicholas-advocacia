"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
}

export function FadeIn({ children, delay = 0, duration = 0.6, yOffset = 20 }: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once when it comes into view
    threshold: 0.1, // Trigger when 10% of the component is visible
  })

  const variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
