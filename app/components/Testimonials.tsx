'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, someone gets it. My Optimus needs professional attire for client meetings.",
      author: "Sarah Chen",
      role: "CEO, TechVentures",
    },
    {
      quote: "The protective gear saved my Figure 01 from weather damage. Essential for outdoor work.",
      author: "Marcus Rodriguez",
      role: "Construction Manager",
    },
    {
      quote: "Game changer for our hospitality robots. Guests love the branded uniforms.",
      author: "Emily Park",
      role: "Hotel Director",
    }
  ]

  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#CCFF00]/[0.02] to-[#050505]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Trusted by <span className="text-gradient-lime">Innovators</span>
          </h2>
        </motion.div>

        {/* Single featured testimonial */}
        <div className="relative min-h-[200px]">
          {/* Giant quote mark */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] leading-none font-display text-[#CCFF00]/[0.06] select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-white leading-relaxed mb-10 max-w-3xl mx-auto">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div>
                <div className="font-display font-semibold text-white text-lg">
                  {testimonials[active].author}
                </div>
                <div className="text-sm text-zinc-500 mt-1">
                  {testimonials[active].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-8 h-2 bg-[#CCFF00]'
                  : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
