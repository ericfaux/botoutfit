'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero - Sophisticated Tech */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle mesh gradient background - inspired by reference */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent blur-[200px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent blur-[180px]" />
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-32">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Small badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-cyan-400 text-xs font-medium tracking-wider uppercase">Q4 2026 Launch</span>
              </div>

              {/* Headline - Clean & Bold */}
              <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Premium Apparel<br />
                for Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Robots</span>
              </h1>

              {/* Subhead - Refined */}
              <p className="text-lg text-zinc-400 mb-10 max-w-lg leading-relaxed">
                Model-specific fashion designed for Tesla Optimus, Figure 01, and Unitree G1. First-mover advantage in a $2B+ emerging market.
              </p>

              {/* CTAs - Minimal */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Link
                  href="#waitlist"
                  className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden hover:shadow-xl hover:shadow-white/20 transition-all"
                >
                  Join Waitlist
                  <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/shop"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all"
                >
                  Browse Collection
                </Link>
              </div>

              {/* Metrics - Data-driven like reference */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { value: '25+', label: 'Products', change: '+12%' },
                  { value: '6', label: 'Models', change: 'New' },
                  { value: '2.3K', label: 'Waitlist', change: '+45%' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    <div className="flex items-baseline gap-2 mb-1">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-cyan-400">{stat.change}</div>
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual - Abstract, not emoji */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px]"
            >
              {/* Glassmorphic card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl overflow-hidden">
                {/* Inner gradient glow */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyan-500/10 to-transparent" />
                
                {/* Abstract visualization - not emoji */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Concentric circles */}
                  <div className="relative w-full aspect-square">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border border-white/10"
                        style={{
                          margin: `${i * 15}%`,
                        }}
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.3,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  </div>
                </div>

                {/* Data points overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10">
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">Featured</div>
                      <div className="text-sm font-semibold text-white">Executive Suit</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-500 mb-1">Tesla Optimus</div>
                      <div className="text-sm font-semibold text-cyan-400">$199</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating label - minimal */}
              <div className="absolute -top-3 -right-3 px-4 py-2 rounded-lg bg-black border border-white/20 backdrop-blur-xl">
                <div className="text-xs text-zinc-500 mb-0.5">Launching</div>
                <div className="text-sm font-semibold text-white">Q4 2026</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Like reference dashboard */}
      <section className="relative py-16 px-6 lg:px-12 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Market Size', value: '$2.1B', sublabel: 'by 2028' },
              { label: 'Robot Shipments', value: '125K', sublabel: '2026 est.' },
              { label: 'Avg. Order', value: '$156', sublabel: 'pre-launch' },
              { label: 'ROI Timeline', value: '18mo', sublabel: 'projected' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-zinc-400 mb-1">{item.label}</div>
                <div className="text-xs text-zinc-600">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections - Minimal cards */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Complete Collections
            </motion.h2>
            <p className="text-lg text-zinc-400">Professional attire for every scenario</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Executive', count: 3, color: 'from-blue-500/20' },
              { name: 'Casual', count: 5, color: 'from-purple-500/20' },
              { name: 'Protection', count: 4, color: 'from-orange-500/20' },
              { name: 'Accessories', count: 10, color: 'from-pink-500/20' },
            ].map((collection, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="/shop"
                  className="group block p-6 h-48 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">{collection.name}</div>
                      <div className="text-sm text-zinc-500">{collection.count} products</div>
                    </div>
                    <div className="text-zinc-400 group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA - Minimal */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join 2,347 Early Adopters
            </h2>
            <p className="text-lg text-zinc-400 mb-12">
              First 1,000 customers get 20% off at launch
            </p>

            <form className="max-w-md mx-auto" id="waitlist">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:shadow-xl hover:shadow-white/20 transition-all whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
