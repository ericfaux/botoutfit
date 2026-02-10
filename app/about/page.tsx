'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ParticleField from '../components/ParticleField'
import GlowCard from '../components/GlowCard'

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#050505] to-[#050505]" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#CCFF00]/10 blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-purple-500/8 blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <ParticleField count={20} color="mixed" />

        <motion.div
          style={{ y, opacity }}
          className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">About BotOutfit</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight mt-4"
          >
            The First Fashion Brand for{' '}
            <span className="text-gradient-lime">Personal Robots</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-zinc-400 font-body leading-relaxed"
          >
            Building the future of personalization—one outfit at a time.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section with Timeline */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Our Journey</span>
            <h2 className="text-4xl font-display font-bold text-white mb-12 mt-4">Our <span className="text-gradient-lime">Story</span></h2>

            <div className="relative pl-8 border-l border-[#CCFF00]/20">
              {/* Timeline dots */}
              {[
                {
                  year: 'Early 2026',
                  text: 'We watched Tesla unveil Optimus, Figure ship their first production robots, and Unitree begin consumer sales. The robot revolution wasn\'t coming—it was here.',
                },
                {
                  year: 'The Insight',
                  text: 'These incredible machines, designed to assist us in our homes and workplaces, all looked the same. In a world where we customize everything from our phone cases to our sneakers, why couldn\'t we personalize our robots?',
                },
                {
                  year: 'BotOutfit Born',
                  text: 'That\'s when BotOutfit was born. We believe personal robots deserve personal style—whether helping around the house, representing your company, or simply being part of your family.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#CCFF00]/40">
                    <div className="absolute inset-1 rounded-full bg-[#CCFF00]/60" />
                  </div>

                  <div className="text-[#CCFF00] text-sm font-display font-medium tracking-wider uppercase mb-3">{item.year}</div>
                  <p className="text-zinc-400 font-body leading-relaxed text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 relative p-8 rounded-xl bg-gradient-to-r from-[#CCFF00]/5 to-purple-500/5 border-l-4 border-[#CCFF00] backdrop-blur-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-[60px]" />
              <p className="text-white font-display font-semibold mb-3 text-xl relative z-10">Our Mission</p>
              <p className="text-zinc-300 font-body italic text-lg relative z-10 leading-relaxed">
                "To make robot personalization accessible, stylish, and fun for everyone—from tech enthusiasts to enterprise customers."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/[0.01]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Market Timing</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
              Why <span className="text-gradient-lime">Now?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Perfect Timing',
                desc: 'Tesla Optimus ships Q4 2026. Figure ships to enterprise now. Unitree available today. The market is here.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Zero Competition',
                desc: 'We\'re first. Nobody else is building robot fashion infrastructure. Category creator advantage.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Massive TAM',
                desc: '10,000+ robots in first year. 100,000+ by 2028. Phone case market: $30B. Robot fashion: untapped.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Clear Need',
                desc: 'Robots need different outfits for work vs. home, weather protection, company branding. Just like humans.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <GlowCard key={i} delay={i * 0.1} glowColor={i % 2 === 0 ? 'lime' : 'purple'}>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#CCFF00] mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-body leading-relaxed">{item.desc}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Our Edge</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
              What Makes Us <span className="text-gradient-purple">Different</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Compatibility First',
                desc: 'Exact measurements for each robot model. Tesla Optimus is 5\'8" with 42cm torso. We design accordingly.',
                icon: '🎯',
              },
              {
                title: 'Premium Quality',
                desc: 'Not cheap costumes. Weather-resistant materials, reinforced stitching, professional-grade construction.',
                icon: '✨',
              },
              {
                title: 'Function Meets Form',
                desc: 'UV protection, weather resistance, charging port access—built into every outfit.',
                icon: '⚡',
              },
              {
                title: 'First Mover',
                desc: 'We\'re defining what "good" looks like in robot fashion. Zero competition means we set the standard.',
                icon: '🚀',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 p-6 rounded-xl hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-lg group-hover:border-[#CCFF00]/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#CCFF00]/5 to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/5 blur-[150px]" />
        <ParticleField count={20} color="cyan" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Get Started</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 mt-4">
              Be Part of the <span className="text-gradient-lime">Journey</span>
            </h2>
            <p className="text-xl text-zinc-400 font-body mb-12">
              Join our waitlist for early access, exclusive discounts, and behind-the-scenes updates.
            </p>

            <Link
              href="/#waitlist"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-[0.15em] hover:shadow-2xl hover:shadow-[#CCFF00]/30 transition-all duration-300 hover:scale-105"
            >
              <span>Join the Waitlist</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
