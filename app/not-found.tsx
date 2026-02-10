'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-[128px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#CCFF00]/20 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* 404 Visual */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="relative w-48 h-48 mb-8"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-white/10"
              style={{ margin: `${i * 20}%` }}
            />
          ))}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-display font-bold text-[#CCFF00]">
            404
          </div>
        </motion.div>

        {/* Error code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">ERROR 404</span>
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight mt-4"
        >
          Page Not <span className="text-gradient-lime">Found</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-zinc-400 font-body mb-12 max-w-md mx-auto"
        >
          This robot outfit doesn't exist yet. But we've got plenty of others that do.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="px-8 py-4 rounded-xl bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-[0.15em] hover:shadow-2xl hover:shadow-[#CCFF00]/30 transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </Link>

          <Link
            href="/shop"
            className="px-8 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white font-display font-bold text-xs uppercase tracking-[0.15em] hover:border-[#CCFF00]/40 hover:text-[#CCFF00] transition-all"
          >
            Browse Collection
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
