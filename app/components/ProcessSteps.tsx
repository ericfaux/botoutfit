'use client'

import { motion } from 'framer-motion'

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Select Your Model',
      description: 'Choose your robot — Tesla Optimus, Figure 01, or Unitree G1.',
    },
    {
      number: '02',
      title: 'Pick Your Style',
      description: 'Browse our curated collections designed for perfect fit and function.',
    },
    {
      number: '03',
      title: 'Dress the Future',
      description: 'Receive precision-tailored apparel shipped to your door.',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-block text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60 mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            How It <span className="text-gradient-lime">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-[#CCFF00]/20 via-[#CCFF00]/40 to-[#CCFF00]/20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center md:text-left"
            >
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-24 h-24 mb-8">
                <span className="text-5xl font-mono font-light text-outline-lime">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
