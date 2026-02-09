'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero - Sophisticated Tech */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Mesh gradient background with visible color */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-br from-cyan-500/25 via-cyan-500/10 to-transparent blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/20 via-purple-500/10 to-transparent blur-[130px]" />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        
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
              {/* Glassmorphic card with data viz */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-2xl overflow-hidden">
                {/* Inner gradient glow - more visible */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyan-500/20 to-transparent" />
                
                {/* Data visualization */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Chart bars */}
                  <div className="relative w-full h-full flex items-end justify-center gap-6">
                    {[
                      { height: '60%', delay: 0, color: 'from-cyan-400 to-cyan-600' },
                      { height: '80%', delay: 0.1, color: 'from-blue-400 to-blue-600' },
                      { height: '70%', delay: 0.2, color: 'from-purple-400 to-purple-600' },
                      { height: '90%', delay: 0.3, color: 'from-cyan-400 to-cyan-600' },
                      { height: '65%', delay: 0.4, color: 'from-blue-400 to-blue-600' },
                    ].map((bar, i) => (
                      <motion.div
                        key={i}
                        className={`w-12 rounded-t-lg bg-gradient-to-t ${bar.color} shadow-lg`}
                        style={{ height: bar.height }}
                        initial={{ height: 0 }}
                        animate={{ height: bar.height }}
                        transition={{ 
                          duration: 1,
                          delay: bar.delay,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Data overlay */}
                <div className="absolute bottom-8 left-8 right-8 space-y-3">
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-black/60 backdrop-blur-xl border border-white/10">
                    <div>
                      <div className="text-xs text-zinc-400 mb-1">Market Growth</div>
                      <div className="text-lg font-bold text-white">+127%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-400 mb-1">Q4 2026</div>
                      <div className="text-sm font-semibold text-cyan-400">Launch Ready</div>
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
