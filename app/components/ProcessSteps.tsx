'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Browse',
    description: 'Explore our curated collection of premium robot apparel, accessories, and protective gear.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="12" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <rect x="26" y="12" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <rect x="12" y="26" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <rect x="26" y="26" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Select Your Model',
    description: 'Choose your robot platform and we\'ll show you perfectly compatible fits and sizes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="16" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="16" r="2" fill="currentColor" opacity="0.6" />
        <path d="M14 34 L14 42 M34 34 L34 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 28 L32 28 L34 34 L14 34 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get Outfitted',
    description: 'Receive precision-crafted apparel designed for your robot\'s exact specifications.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M12 16 L24 8 L36 16 L36 36 L12 36 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 36 L20 28 L28 28 L28 36" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <path d="M8 18 L12 16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M40 18 L36 16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-medium tracking-wider uppercase mb-6">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Three Steps to <span className="text-gradient-purple">Style</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            From browsing to delivery, we make robot fashion effortless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting beam line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-amber-500/20" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-beam-flow" />
            </div>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative text-center group"
            >
              {/* Step icon container */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-8 group-hover:border-cyan-500/30 transition-all duration-300">
                <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </div>

              {/* Step number */}
              <div className="text-5xl font-display font-bold text-white/[0.04] absolute -top-2 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
