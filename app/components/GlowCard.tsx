'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'cyan' | 'purple' | 'amber' | 'lime'
  delay?: number
}

export default function GlowCard({ children, className = '', glowColor = 'lime', delay = 0 }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const glowColors = {
    lime: { border: 'rgba(204,255,0,0.3)', spotlight: 'rgba(204,255,0,0.08)', shadow: 'rgba(204,255,0,0.15)' },
    cyan: { border: 'rgba(0,217,255,0.3)', spotlight: 'rgba(0,217,255,0.08)', shadow: 'rgba(0,217,255,0.15)' },
    purple: { border: 'rgba(168,85,247,0.3)', spotlight: 'rgba(168,85,247,0.08)', shadow: 'rgba(168,85,247,0.15)' },
    amber: { border: 'rgba(245,158,11,0.3)', spotlight: 'rgba(245,158,11,0.08)', shadow: 'rgba(245,158,11,0.15)' },
  }

  const colors = glowColors[glowColor]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group rounded-xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${isHovered ? colors.border : 'rgba(255,255,255,0.06)'}`,
        boxShadow: isHovered ? `0 0 30px ${colors.shadow}` : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Mouse-tracking spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${colors.spotlight} 0%, transparent 70%)`,
            borderRadius: '50%',
          }}
        />
      )}

      {/* Top edge glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
