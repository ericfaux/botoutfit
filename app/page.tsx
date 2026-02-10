'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HeroVisual from './components/HeroVisual'
import ParticleField from './components/ParticleField'
import AnimatedCounter from './components/AnimatedCounter'
import GlowCard from './components/GlowCard'
import RobotModelShowcase from './components/RobotModelShowcase'
import ProcessSteps from './components/ProcessSteps'
import Testimonials from './components/Testimonials'
import WaitlistForm from './components/WaitlistForm'
import MarqueeTicker from './components/MarqueeTicker'

export default function Home() {
  const featuredProducts = [
    {
      id: 'executive-suit-optimus',
      name: 'The Executive Suit',
      category: 'Outfits',
      price: 199,
      description: 'Premium business attire for professional environments.',
      color: '#CCFF00',
    },
    {
      id: 'rain-cover-pro',
      name: 'Rain Cover Pro',
      category: 'Protection',
      price: 79,
      description: 'Full-body weather protection for any conditions.',
      color: '#00D9FF',
    },
    {
      id: 'led-accent-strips',
      name: 'LED Accent Strips',
      category: 'Accessories',
      price: 49,
      description: 'Customizable LED strips for personality and flair.',
      color: '#A855F7',
    },
    {
      id: 'casual-weekend-set',
      name: 'Casual Weekend Set',
      category: 'Outfits',
      price: 89,
      description: 'Relaxed weekend wear for casual environments.',
      color: '#F59E0B',
    },
    {
      id: 'winter-insulated-jacket',
      name: 'Winter Insulated Jacket',
      category: 'Protection',
      price: 159,
      description: 'Insulated protection for cold weather operations.',
      color: '#CCFF00',
    },
  ]

  return (
    <main className="min-h-screen bg-[#050505]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Multi-layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#050505] to-zinc-950" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-[#CCFF00]/[0.04] via-[#CCFF00]/[0.02] to-transparent blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-cyan-500/[0.04] via-cyan-500/[0.02] to-transparent blur-[140px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-40" />

        {/* Particles */}
        <ParticleField count={40} color="mixed" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Headline — massive editorial type */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display font-bold leading-[0.95] tracking-tight mb-8"
              >
                <span className="block text-[clamp(3rem,8vw,8rem)] text-white">
                  PREMIUM
                </span>
                <span className="block text-[clamp(3rem,8vw,8rem)] text-gradient-lime">
                  APPAREL FOR
                </span>
                <span className="block text-[clamp(3rem,8vw,8rem)] text-outline">
                  ROBOTS
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
              >
                Model-specific fashion designed for Tesla Optimus, Figure 01, and Unitree G1.
                First-mover advantage in a $2B+ emerging market.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#waitlist"
                  className="group relative px-8 py-4 bg-[#CCFF00] text-black font-display font-bold text-sm uppercase tracking-[0.15em] rounded-lg hover:bg-[#d4ff33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#CCFF00]/20"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/shop"
                  className="px-8 py-4 border border-white/15 text-white font-display font-bold text-sm uppercase tracking-[0.15em] rounded-lg hover:border-[#CCFF00]/40 hover:text-[#CCFF00] transition-all duration-300"
                >
                  Explore Collection
                </Link>
              </motion.div>
            </div>

            {/* Right: Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:block h-[600px]"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </section>

      {/* ===== MARQUEE TICKER ===== */}
      <div className="border-y border-white/[0.06] py-4 bg-[#050505]">
        <MarqueeTicker
          text="DRESS THE FUTURE • ROBOT FASHION • EST. 2026 • PREMIUM APPAREL • DESIGNED FOR MACHINES • TESLA OPTIMUS • FIGURE 01 • UNITREE G1 •"
          className="text-xs font-display uppercase tracking-[0.3em] text-zinc-600"
        />
      </div>

      {/* ===== ROBOT MODEL SHOWCASE ===== */}
      <RobotModelShowcase />

      {/* ===== HOW IT WORKS ===== */}
      <ProcessSteps />

      {/* ===== FEATURED PRODUCTS — Horizontal Scroll ===== */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CCFF00]/[0.02] rounded-full blur-[150px]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60 mb-4">
                  Featured
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                  Top <span className="text-gradient-lime">Picks</span>
                </h2>
              </div>
              <Link
                href="/shop"
                className="hidden md:inline-flex items-center gap-2 text-zinc-500 hover:text-[#CCFF00] transition-colors text-xs font-display uppercase tracking-[0.15em]"
              >
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Horizontal scroll container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-6 lg:px-12 pb-4" style={{ width: 'max-content' }}>
              {featuredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/shop/${product.id}`}
                    className="block group w-[320px] md:w-[380px] rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500 overflow-hidden hover:-translate-y-1"
                    style={{ ['--glow' as string]: product.color }}
                  >
                    {/* Product visual */}
                    <div className="relative h-56 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
                      <div className="absolute inset-0 bg-grid-dots opacity-20" />

                      {/* Abstract product shape */}
                      <div className="relative z-10">
                        <div
                          className="w-20 h-20 rounded-2xl border rotate-45 group-hover:rotate-[55deg] transition-transform duration-700"
                          style={{
                            borderColor: `${product.color}40`,
                            boxShadow: `0 0 40px ${product.color}15`,
                          }}
                        />
                        <div
                          className="absolute inset-3 rounded-xl border rotate-0 group-hover:rotate-12 transition-transform duration-700"
                          style={{ borderColor: `${product.color}25` }}
                        />
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: `${product.color}80` }}
                        />
                      </div>

                      {/* Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-black/60 backdrop-blur-xl border border-white/[0.06]">
                        <span className="text-[10px] font-display uppercase tracking-wider" style={{ color: product.color }}>Pre-order</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <span className="text-[10px] font-display font-semibold uppercase tracking-[0.2em]" style={{ color: product.color }}>
                        {product.category}
                      </span>
                      <h3 className="text-lg font-display font-semibold text-white mt-2 mb-2 group-hover:text-[#CCFF00] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-zinc-500 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                        <span className="text-xl font-display font-bold text-white">${product.price}</span>
                        <span className="text-zinc-600 group-hover:text-[#CCFF00] group-hover:translate-x-1 transition-all">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile "View All" */}
          <div className="mt-6 text-center md:hidden px-6">
            <Link href="/shop" className="text-[#CCFF00] text-xs font-display uppercase tracking-[0.15em]">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MARKET STATS ===== */}
      <section className="py-20 px-6 border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#CCFF00]/[0.01] via-transparent to-cyan-500/[0.01]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCounter value="$2.1B" label="Market Size" sub="by 2028" />
            <AnimatedCounter value="125K" label="Robot Shipments" sub="2026 est." />
            <AnimatedCounter value="$156" label="Avg. Order Value" sub="pre-launch" />
            <AnimatedCounter value="18" label="Month ROI" sub="projected" suffix="mo" />
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS — Bento Grid ===== */}
      <section className="py-24 md:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60 mb-4">
              Collections
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Complete <span className="text-gradient-lime">Collections</span>
            </h2>
          </motion.div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              { name: 'Executive', count: 3, color: '#CCFF00', icon: '◆', span: 'lg:col-span-2 lg:row-span-2' },
              { name: 'Casual', count: 5, color: '#00D9FF', icon: '○', span: '' },
              { name: 'Protection', count: 4, color: '#A855F7', icon: '⬡', span: '' },
              { name: 'Accessories', count: 10, color: '#F59E0B', icon: '✦', span: 'lg:col-span-2' },
            ].map((collection, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={collection.span}
              >
                <Link
                  href="/shop"
                  className="block h-full rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500 overflow-hidden group relative"
                >
                  {/* Background gradient */}
                  <div
                    className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 30% 70%, ${collection.color}, transparent 70%)` }}
                  />

                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div>
                      <div
                        className="text-2xl mb-3 opacity-30 group-hover:opacity-60 transition-opacity"
                        style={{ color: collection.color }}
                      >
                        {collection.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                        {collection.name}
                      </div>
                      <div className="text-xs text-zinc-600 uppercase tracking-wider">{collection.count} products</div>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600 group-hover:text-[#CCFF00] transition-colors">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-display">Shop Collection</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CTA / WAITLIST ===== */}
      <section className="py-32 px-6 relative overflow-hidden" id="waitlist">
        {/* Dramatic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a00] to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#CCFF00]/[0.03] blur-[200px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Massive outlined headline */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[0.95]">
              <span className="block text-outline-lime">DRESS</span>
              <span className="block text-white">THE <span className="text-gradient-lime">FUTURE</span></span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">
              Join 2,347 early adopters. First 1,000 get 20% off at launch.
            </p>

            <WaitlistForm />

            {/* Fine print */}
            <p className="mt-6 text-[10px] text-zinc-700 uppercase tracking-wider">
              No spam • Unsubscribe anytime • Free to join
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
