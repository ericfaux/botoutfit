'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
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
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#00D9FF]/20 blur-[120px]"
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
        {/* 404 Robot */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2
          }}
          className="text-[12rem] mb-8"
        >
          🤖
        </motion.div>

        {/* Error code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-[#00D9FF]/30 backdrop-blur-xl mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
          <span className="text-[#00D9FF] text-sm font-medium tracking-wide">ERROR 404</span>
        </motion.div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Page Not <span className="text-[#00D9FF]">Found</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-gray-300 mb-12 max-w-md mx-auto"
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
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold rounded-xl">
              Back to Home
            </div>
          </Link>

          <Link
            href="/shop"
            className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-[#00D9FF]/30 transition-all"
          >
            Browse Collection
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
