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

export default function Home() {
  const featuredProducts = [
    {
      id: 'executive-suit-optimus',
      name: 'The Executive Suit',
      category: 'Outfits',
      price: 199,
      description: 'Premium business attire for professional environments.',
      color: '#00D9FF',
    },
    {
      id: 'rain-cover-pro',
      name: 'Rain Cover Pro',
      category: 'Protection',
      price: 79,
      description: 'Full-body weather protection for any conditions.',
      color: '#A855F7',
    },
    {
      id: 'led-accent-strips',
      name: 'LED Accent Strips',
      category: 'Accessories',
      price: 49,
      description: 'Customizable LED strips for personality and flair.',
      color: '#F59E0B',
    },
  ]

  return (
    <main className="min-h-screen bg-[#050505]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Multi-layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#050505] to-zinc-950" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-cyan-500/10 via-cyan-500/5 to-transparent blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-purple-500/8 via-violet-500/3 to-transparent blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 w-[30%] h-[30%] bg-gradient-to-r from-amber-500/5 to-transparent blur-[120px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-50" />

        {/* Particles */}
        <ParticleField count={50} color="mixed" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 text-sm font-medium tracking-wide">Q4 2026 LAUNCH</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]"
              >
                Premium Apparel
                <br />
                for Personal{' '}
                <span className="text-gradient-cyan">Robots</span>
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
                className="flex flex-wrap gap-4 mb-16"
              >
                <Link
                  href="#waitlist"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Join Waitlist</span>
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  href="/shop"
                  className="px-8 py-4 border border-white/15 text-white font-bold rounded-xl hover:border-cyan-400/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                >
                  Browse Collection
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-8"
              >
                {[
                  { value: '25+', label: 'Products' },
                  { value: '6', label: 'Models' },
                  { value: '2.3K', label: 'Waitlist' },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:block h-[550px]"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
      </section>

      {/* ===== ROBOT MODEL SHOWCASE ===== */}
      <RobotModelShowcase />

      {/* ===== HOW IT WORKS ===== */}
      <ProcessSteps />

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium tracking-wider uppercase mb-6">
                Featured
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Top <span className="text-gradient-warm">Picks</span>
              </h2>
              <p className="text-lg text-zinc-400">Pre-order the most anticipated pieces</p>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              View All
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <GlowCard
                key={product.id}
                delay={i * 0.15}
                glowColor={i === 0 ? 'cyan' : i === 1 ? 'purple' : 'amber'}
              >
                <Link href={`/shop/${product.id}`} className="block group">
                  {/* Product visual */}
                  <div className="relative h-64 flex items-center justify-center overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" />
                    <div className="absolute inset-0 bg-grid-dots opacity-30" />

                    {/* Abstract product shape */}
                    <div className="relative z-10">
                      <div
                        className="w-24 h-24 rounded-2xl border rotate-45 group-hover:rotate-[55deg] transition-transform duration-700"
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
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                        style={{ backgroundColor: `${product.color}80` }}
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-xl border border-white/10">
                      <span className="text-xs font-medium" style={{ color: product.color }}>PRE-ORDER</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: product.color }}>
                      {product.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-white mt-2 mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-2xl font-display font-bold text-white">${product.price}</span>
                      <span className="text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </GlowCard>
            ))}
          </div>

          {/* Mobile "View All" */}
          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="text-cyan-400 text-sm font-medium">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MARKET STATS ===== */}
      <section className="py-20 px-6 border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.02] via-transparent to-purple-500/[0.02]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCounter value="$2.1B" label="Market Size" sub="by 2028" />
            <AnimatedCounter value="125K" label="Robot Shipments" sub="2026 est." />
            <AnimatedCounter value="$156" label="Avg. Order Value" sub="pre-launch" />
            <AnimatedCounter value="18" label="Month ROI" sub="projected" suffix="mo" />
          </div>
        </div>
      </section>

      {/* ===== COLLECTIONS ===== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Complete <span className="text-gradient-cyan">Collections</span>
            </h2>
            <p className="text-lg text-zinc-400">Professional attire for every scenario</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Executive', count: 3, color: '#00D9FF', icon: '◆' },
              { name: 'Casual', count: 5, color: '#A855F7', icon: '○' },
              { name: 'Protection', count: 4, color: '#F59E0B', icon: '⬡' },
              { name: 'Accessories', count: 10, color: '#10B981', icon: '✦' },
            ].map((collection, i) => (
              <GlowCard
                key={i}
                delay={i * 0.1}
                glowColor={i === 0 ? 'cyan' : i === 1 ? 'purple' : i === 2 ? 'amber' : 'cyan'}
              >
                <Link href="/shop" className="block p-8 h-56 group">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div
                        className="text-2xl mb-4 opacity-40 group-hover:opacity-80 transition-opacity"
                        style={{ color: collection.color }}
                      >
                        {collection.icon}
                      </div>
                      <div className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {collection.name}
                      </div>
                      <div className="text-sm text-zinc-500">{collection.count} products</div>
                    </div>
                    <div className="text-zinc-600 group-hover:text-cyan-400 transition-colors">
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CTA / WAITLIST ===== */}
      <section className="py-32 px-6 relative overflow-hidden" id="waitlist">
        {/* Dramatic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-cyan-950/10 to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[200px]" />
        <ParticleField count={30} color="cyan" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-medium tracking-wider uppercase mb-8">
              Early Access
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Join 2,347 Early Adopters
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
              First 1,000 customers get 20% off at launch. Be first to dress the future.
            </p>

            <WaitlistForm />

            {/* Trust signals */}
            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-600">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No spam
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unsubscribe anytime
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free to join
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
