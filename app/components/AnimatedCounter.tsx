'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  label: string
  suffix?: string
  sub?: string
  className?: string
}

export default function AnimatedCounter({ value, label, suffix, sub, className = '' }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!isInView) return

    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const target = parseFloat(numericMatch[0])
    const prefix = value.slice(0, value.indexOf(numericMatch[0]))
    const suffixStr = value.slice(value.indexOf(numericMatch[0]) + numericMatch[0].length)
    const isDecimal = numericMatch[0].includes('.')
    const duration = 1500
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased

      if (isDecimal) {
        setDisplayValue(`${prefix}${current.toFixed(1)}${suffixStr}`)
      } else {
        setDisplayValue(`${prefix}${Math.round(current).toLocaleString()}${suffixStr}`)
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      <div className="text-5xl md:text-6xl font-display font-bold text-gradient-lime mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-xs text-zinc-400 uppercase tracking-[0.2em] font-display mb-1">{label}</div>
      {sub && <div className="text-[10px] text-zinc-600">{sub}</div>}
    </motion.div>
  )
}
