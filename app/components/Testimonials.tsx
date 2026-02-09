'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finally, someone gets it. My Optimus needs professional attire for client meetings.",
      author: "Sarah Chen",
      role: "CEO, TechVentures",
      initial: "S"
    },
    {
      quote: "The protective gear saved my Figure 01 from weather damage. Essential for outdoor work.",
      author: "Marcus Rodriguez",
      role: "Construction Manager",
      initial: "M"
    },
    {
      quote: "Game changer for our hospitality robots. Guests love the branded uniforms.",
      author: "Emily Park",
      role: "Hotel Director",
      initial: "E"
    }
  ]

  return (
    <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-500/10 blur-[200px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.5rem,6vw,4rem)] font-black text-white mb-4"
          >
            Trusted by <span className="text-[#00D9FF]">Innovators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            See what early adopters are saying
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl group-hover:border-[#00D9FF]/30 transition-all">
                {/* Quote Icon */}
                <div className="text-4xl text-[#00D9FF]/30 mb-4">"</div>
                
                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {item.quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-xl font-bold text-cyan-400">
                    {item.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.author}</div>
                    <div className="text-sm text-gray-500">{item.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-white/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Industry Leaders', value: '50+' },
              { label: 'Perfect Fit Rate', value: '99%' },
              { label: 'Support Response', value: '<1hr' },
              { label: 'Customer Rating', value: '4.9/5' },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {badge.value}
                </div>
                <div className="text-sm text-zinc-500">{badge.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
