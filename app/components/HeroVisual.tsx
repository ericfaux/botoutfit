'use client'

import { motion } from 'framer-motion'

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow — lime + cyan blend */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[400px] h-[400px] rounded-full bg-[#CCFF00]/5 blur-[120px] animate-pulse-glow" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center translate-x-10 translate-y-10">
        <div className="w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main robot figure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-80 h-[480px] animate-float"
      >
        {/* Rotating outer ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 rounded-full border border-[#CCFF00]/15 animate-rotate-slow" />
        </div>

        {/* Counter-rotating middle ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-56 h-56 rounded-full border border-cyan-400/10"
            style={{ animation: 'rotate-slow 15s linear infinite reverse' }}
          />
        </div>

        {/* Robot body SVG — fashion-forward */}
        <svg
          viewBox="0 0 200 340"
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          {/* Head — sleek rounded form */}
          <motion.rect
            x="68" y="15" width="64" height="50" rx="20"
            stroke="url(#headGrad)" strokeWidth="1.5" fill="rgba(204,255,0,0.02)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />

          {/* Visor/Eyes — single horizontal bar */}
          <motion.rect
            x="78" y="35" width="44" height="8" rx="4"
            fill="rgba(204,255,0,0.4)"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            style={{ transformOrigin: '100px 39px' }}
          />
          <motion.rect
            x="78" y="35" width="44" height="8" rx="4"
            fill="rgba(204,255,0,0.15)"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1.2, 1] }}
            transition={{ duration: 1.2, delay: 1.5 }}
            style={{ transformOrigin: '100px 39px' }}
          />

          {/* Neck */}
          <motion.line
            x1="100" y1="65" x2="100" y2="80"
            stroke="rgba(204,255,0,0.2)" strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />

          {/* Torso — structural body */}
          <motion.path
            d="M58 80 L58 190 Q58 205 73 205 L127 205 Q142 205 142 190 L142 80 Q142 72 127 72 L73 72 Q58 72 58 80 Z"
            stroke="url(#bodyGrad)" strokeWidth="1.2" fill="rgba(255,255,255,0.01)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* === FASHION OVERLAY: Jacket === */}
          <motion.path
            d="M60 82 L60 195 Q60 208 73 208 L127 208 Q140 208 140 195 L140 82 Q140 74 127 74 L73 74 Q60 74 60 82 Z"
            stroke="url(#outfitGrad)" strokeWidth="1" fill="rgba(204,255,0,0.02)"
            strokeDasharray="6 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          />

          {/* Jacket lapel — left */}
          <motion.path
            d="M73 76 L100 100 L100 82"
            stroke="rgba(204,255,0,0.5)" strokeWidth="1" fill="rgba(204,255,0,0.03)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 2.2 }}
          />

          {/* Jacket lapel — right */}
          <motion.path
            d="M127 76 L100 100 L100 82"
            stroke="rgba(204,255,0,0.5)" strokeWidth="1" fill="rgba(204,255,0,0.03)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 2.3 }}
          />

          {/* Tie */}
          <motion.path
            d="M100 100 L95 115 L100 170 L105 115 Z"
            stroke="rgba(0,217,255,0.4)" strokeWidth="0.8" fill="rgba(0,217,255,0.06)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          />

          {/* Pocket square */}
          <motion.rect
            x="115" y="110" width="12" height="10" rx="2"
            stroke="rgba(204,255,0,0.4)" strokeWidth="0.8" fill="rgba(204,255,0,0.05)"
            initial={{ opacity: 0, y: 115 }}
            animate={{ opacity: 1, y: 110 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          />

          {/* Left arm */}
          <motion.path
            d="M58 85 L38 115 L36 175 Q36 182 40 182 L46 182 Q50 182 50 175 L50 120"
            stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />

          {/* Left sleeve overlay */}
          <motion.path
            d="M58 85 L40 112 L38 150"
            stroke="rgba(204,255,0,0.25)" strokeWidth="1" fill="none"
            strokeDasharray="4 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          />

          {/* Right arm */}
          <motion.path
            d="M142 85 L162 115 L164 175 Q164 182 160 182 L154 182 Q150 182 150 175 L150 120"
            stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />

          {/* Right sleeve overlay */}
          <motion.path
            d="M142 85 L160 112 L162 150"
            stroke="rgba(204,255,0,0.25)" strokeWidth="1" fill="none"
            strokeDasharray="4 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          />

          {/* Left leg */}
          <motion.path
            d="M80 205 L78 280 Q78 290 82 290 L90 290 Q94 290 94 283 L94 210"
            stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />

          {/* Right leg */}
          <motion.path
            d="M120 205 L122 280 Q122 290 118 290 L110 290 Q106 290 106 283 L106 210"
            stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.9 }}
          />

          {/* Measurement scan beam */}
          <motion.g>
            <motion.line
              x1="30" x2="170" strokeWidth="0.5"
              stroke="rgba(204,255,0,0.4)"
              initial={{ y1: 20, y2: 20 }}
              animate={{ y1: [20, 300, 20], y2: [20, 300, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            {/* Measurement markers that appear at scan position */}
            <motion.line
              x1="25" x2="30" strokeWidth="0.5"
              stroke="rgba(204,255,0,0.3)"
              initial={{ y1: 20, y2: 20 }}
              animate={{ y1: [20, 300, 20], y2: [20, 300, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.line
              x1="170" x2="175" strokeWidth="0.5"
              stroke="rgba(204,255,0,0.3)"
              initial={{ y1: 20, y2: 20 }}
              animate={{ y1: [20, 300, 20], y2: [20, 300, 20] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
          </motion.g>

          {/* Chest emblem — BotOutfit brand */}
          <motion.circle
            cx="100" cy="140" r="8"
            stroke="rgba(204,255,0,0.3)" strokeWidth="0.8" fill="rgba(204,255,0,0.03)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
          />
          <motion.text
            x="100" y="143" textAnchor="middle" fontSize="6"
            fill="rgba(204,255,0,0.5)" fontFamily="monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
          >
            BO
          </motion.text>

          {/* Gradients */}
          <defs>
            <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(204,255,0,0.5)" />
              <stop offset="100%" stopColor="rgba(0,217,255,0.3)" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
            <linearGradient id="outfitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(204,255,0,0.5)" />
              <stop offset="100%" stopColor="rgba(0,217,255,0.3)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating fashion icons instead of generic dots */}
        {[
          { icon: '✂', delay: 0, radius: 120, duration: 14, color: '#CCFF00' },
          { icon: '◇', delay: -4, radius: 140, duration: 18, color: '#00D9FF' },
          { icon: '⬡', delay: -8, radius: 100, duration: 12, color: '#CCFF00' },
          { icon: '△', delay: -2, radius: 160, duration: 20, color: '#A855F7' },
        ].map((item, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              animation: `orbit ${item.duration}s linear infinite`,
              animationDelay: `${item.delay}s`,
              ['--orbit-radius' as string]: `${item.radius}px`,
            }}
          >
            <span
              className="text-[10px] opacity-40"
              style={{ color: item.color }}
            >
              {item.icon}
            </span>
          </div>
        ))}

        {/* Corner bracket marks — measurement frame */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l border-t border-[#CCFF00]/20" />
        <div className="absolute top-2 right-2 w-8 h-8 border-r border-t border-[#CCFF00]/20" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l border-b border-[#CCFF00]/20" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r border-b border-[#CCFF00]/20" />

        {/* Measurement label */}
        <motion.div
          className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#CCFF00]/30 to-transparent" />
          <span className="text-[8px] text-[#CCFF00]/40 font-mono tracking-wider rotate-90 origin-left translate-x-2">
            175CM
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}
