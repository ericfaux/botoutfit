'use client'

import { motion } from 'framer-motion'

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-cyan-400/5 blur-[100px] animate-pulse-glow" />
      </div>

      {/* Main robot assembly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-80 h-96 animate-float"
      >
        {/* Rotating outer ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full border border-cyan-400/20 animate-rotate-slow" />
        </div>

        {/* Counter-rotating middle ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-56 h-56 rounded-full border border-purple-500/15"
            style={{ animation: 'rotate-slow 15s linear infinite reverse' }}
          />
        </div>

        {/* Robot body - stylized geometric silhouette */}
        <svg
          viewBox="0 0 200 280"
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          {/* Head - rounded rectangle */}
          <motion.rect
            x="65" y="20" width="70" height="55" rx="18"
            stroke="url(#headGradient)" strokeWidth="1.5" fill="rgba(0,217,255,0.03)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />

          {/* Eyes */}
          <motion.circle
            cx="85" cy="45" r="6"
            fill="rgba(0,217,255,0.6)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
          />
          <motion.circle
            cx="115" cy="45" r="6"
            fill="rgba(0,217,255,0.6)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1] }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
          />

          {/* Eye glow */}
          <circle cx="85" cy="45" r="10" fill="rgba(0,217,255,0.1)" />
          <circle cx="115" cy="45" r="10" fill="rgba(0,217,255,0.1)" />

          {/* Neck */}
          <motion.line
            x1="100" y1="75" x2="100" y2="90"
            stroke="rgba(0,217,255,0.3)" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Torso */}
          <motion.path
            d="M60 90 L60 180 Q60 195 75 195 L125 195 Q140 195 140 180 L140 90 Q140 82 125 82 L75 82 Q60 82 60 90 Z"
            stroke="url(#bodyGradient)" strokeWidth="1.5" fill="rgba(0,217,255,0.02)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Outfit overlay on torso - the "fashion" element */}
          <motion.path
            d="M62 95 L62 175 Q62 188 75 188 L125 188 Q138 188 138 175 L138 95 Q138 87 125 87 L75 87 Q62 87 62 95 Z"
            stroke="url(#outfitGradient)" strokeWidth="0.8" fill="rgba(168,85,247,0.04)"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          />

          {/* Collar detail */}
          <motion.path
            d="M75 85 L100 95 L125 85"
            stroke="rgba(168,85,247,0.5)" strokeWidth="1" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2.2 }}
          />

          {/* Left arm */}
          <motion.path
            d="M60 95 L40 120 L38 165 Q38 172 42 172 L48 172 Q52 172 52 165 L52 125"
            stroke="rgba(0,217,255,0.25)" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />

          {/* Right arm */}
          <motion.path
            d="M140 95 L160 120 L162 165 Q162 172 158 172 L152 172 Q148 172 148 165 L148 125"
            stroke="rgba(0,217,255,0.25)" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />

          {/* Left leg */}
          <motion.path
            d="M80 195 L78 245 Q78 255 82 255 L90 255 Q94 255 94 248 L94 200"
            stroke="rgba(0,217,255,0.25)" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />

          {/* Right leg */}
          <motion.path
            d="M120 195 L122 245 Q122 255 118 255 L110 255 Q106 255 106 248 L106 200"
            stroke="rgba(0,217,255,0.25)" strokeWidth="1.5" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />

          {/* Scanning line */}
          <motion.line
            x1="55" x2="145" strokeWidth="1"
            stroke="rgba(0,217,255,0.3)"
            initial={{ y1: 20, y2: 20 }}
            animate={{ y1: [20, 260, 20], y2: [20, 260, 20] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />

          {/* Chest logo/emblem - BotOutfit brand */}
          <motion.circle
            cx="100" cy="130" r="12"
            stroke="rgba(168,85,247,0.4)" strokeWidth="1" fill="rgba(168,85,247,0.05)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          />
          <motion.text
            x="100" y="134" textAnchor="middle" fontSize="8"
            fill="rgba(168,85,247,0.6)" fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            BO
          </motion.text>

          {/* Gradients */}
          <defs>
            <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,217,255,0.6)" />
              <stop offset="100%" stopColor="rgba(0,217,255,0.2)" />
            </linearGradient>
            <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,217,255,0.4)" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.3)" />
              <stop offset="100%" stopColor="rgba(0,217,255,0.2)" />
            </linearGradient>
            <linearGradient id="outfitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
              <stop offset="100%" stopColor="rgba(0,217,255,0.3)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbiting particles */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              animation: `orbit ${10 + i * 3}s linear infinite`,
              animationDelay: `${i * -3}s`,
              ['--orbit-radius' as string]: `${100 + i * 25}px`,
            }}
          >
            <div
              className={`w-${i === 0 ? 2 : 1.5} h-${i === 0 ? 2 : 1.5} rounded-full ${
                i % 2 === 0 ? 'bg-cyan-400/60' : 'bg-purple-400/60'
              }`}
              style={{ width: i === 0 ? 8 : 5, height: i === 0 ? 8 : 5 }}
            />
          </div>
        ))}

        {/* Corner accent marks */}
        <div className="absolute top-6 left-4 w-6 h-6 border-l border-t border-cyan-400/30" />
        <div className="absolute top-6 right-4 w-6 h-6 border-r border-t border-cyan-400/30" />
        <div className="absolute bottom-6 left-4 w-6 h-6 border-l border-b border-cyan-400/30" />
        <div className="absolute bottom-6 right-4 w-6 h-6 border-r border-b border-cyan-400/30" />
      </motion.div>
    </div>
  )
}
