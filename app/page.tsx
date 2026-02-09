'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with visible gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-cyan-500/20 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/15 blur-[130px]" />
        
        {/* Visible grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-xl mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Q4 2026 LAUNCH</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Premium Apparel<br />
            for Personal <span className="text-cyan-400">Robots</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 mb-12 max-w-2xl"
          >
            Model-specific fashion designed for Tesla Optimus, Figure 01, and Unitree G1. 
            First-mover advantage in a $2B+ emerging market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link
              href="#waitlist"
              className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all"
            >
              Join Waitlist →
            </Link>
            <Link
              href="/shop"
              className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-cyan-400/50 hover:bg-white/5 transition-all"
            >
              Browse Collection
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-12 max-w-3xl"
          >
            {[
              { value: '25+', label: 'Products', change: '+12%' },
              { value: '6', label: 'Models', change: 'New' },
              { value: '2.3K', label: 'Waitlist', change: '+45%' },
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                <div className="flex items-baseline gap-2 mb-1">
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-cyan-400">{stat.change}</div>
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Stats Bar */}
      <section className="border-y border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$2.1B', label: 'Market Size', sub: 'by 2028' },
              { value: '125K', label: 'Robot Shipments', sub: '2026 est.' },
              { value: '$156', label: 'Avg. Order Value', sub: 'pre-launch' },
              { value: '18mo', label: 'ROI Timeline', sub: 'projected' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400 mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-600">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Complete Collections</h2>
            <p className="text-xl text-zinc-400">Professional attire for every scenario</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Executive', count: 3 },
              { name: 'Casual', count: 5 },
              { name: 'Protection', count: 4 },
              { name: 'Accessories', count: 10 },
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
                  className="group block p-8 h-56 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all"
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-3xl font-bold text-white mb-2">{collection.name}</div>
                      <div className="text-sm text-zinc-500">{collection.count} products</div>
                    </div>
                    <div className="text-zinc-400 group-hover:text-cyan-400 transition-colors">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Join 2,347 Early Adopters
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            First 1,000 customers get 20% off at launch
          </p>

          <form className="max-w-md mx-auto" id="waitlist">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-cyan-400 transition-all whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
