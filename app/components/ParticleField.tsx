'use client'

import { useMemo } from 'react'

interface ParticleFieldProps {
  count?: number
  className?: string
  color?: 'cyan' | 'purple' | 'mixed' | 'lime'
}

export default function ParticleField({ count = 40, className = '', color = 'mixed' }: ParticleFieldProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const rand = Math.random()
      let particleColor: string
      if (color === 'lime') {
        particleColor = 'rgba(204,255,0,0.4)'
      } else if (color === 'cyan') {
        particleColor = 'rgba(0,217,255,0.4)'
      } else if (color === 'purple') {
        particleColor = 'rgba(168,85,247,0.4)'
      } else {
        // mixed: lime + cyan + purple
        particleColor = rand > 0.6
          ? 'rgba(204,255,0,0.4)'
          : rand > 0.3
          ? 'rgba(0,217,255,0.3)'
          : 'rgba(168,85,247,0.3)'
      }

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: Math.random() * 4 + 4,
        opacity: Math.random() * 0.5 + 0.1,
        color: particleColor,
      }
    })
  }, [count, color])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
