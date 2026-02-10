'use client'

import { useMemo } from 'react'

interface ParticleFieldProps {
  count?: number
  className?: string
  color?: 'cyan' | 'purple' | 'mixed'
}

export default function ParticleField({ count = 40, className = '', color = 'cyan' }: ParticleFieldProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 4,
      opacity: Math.random() * 0.5 + 0.1,
      isCyan: color === 'cyan' ? true : color === 'purple' ? false : Math.random() > 0.4,
    }))
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
            backgroundColor: p.isCyan ? 'rgba(0,217,255,0.5)' : 'rgba(168,85,247,0.5)',
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
