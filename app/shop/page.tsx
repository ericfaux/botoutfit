'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '@/lib/products'
import GlowCard from '../components/GlowCard'
import ParticleField from '../components/ParticleField'

const categoryVisuals: Record<string, { shape: string; gradient: string; color: string }> = {
  outfits: {
    shape: 'waves',
    gradient: 'from-[#CCFF00]/20 via-[#CCFF00]/10 to-lime-500/20',
    color: '#CCFF00',
  },
  accessories: {
    shape: 'geometric',
    gradient: 'from-purple-500/20 via-violet-400/10 to-purple-500/20',
    color: '#A855F7',
  },
  protective: {
    shape: 'hexagon',
    gradient: 'from-amber-500/20 via-yellow-400/10 to-amber-500/20',
    color: '#F59E0B',
  },
  care: {
    shape: 'sparkle',
    gradient: 'from-emerald-500/20 via-green-400/10 to-emerald-500/20',
    color: '#10B981',
  },
}

function ProductVisual({ category }: { category: string }) {
  const visual = categoryVisuals[category] || categoryVisuals.outfits
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-50`} />
      <div className="absolute inset-0 bg-grid-dots opacity-20" />

      {/* Category-specific abstract shape */}
      {category === 'outfits' && (
        <div className="relative z-10">
          {/* Layered fabric-like gradient waves */}
          <div className="w-28 h-28 relative">
            <div className="absolute inset-0 rounded-xl border border-[#CCFF00]/30 rotate-12 group-hover:rotate-[20deg] transition-transform duration-700" />
            <div className="absolute inset-2 rounded-xl border border-[#CCFF00]/20 -rotate-6 group-hover:rotate-0 transition-transform duration-700" />
            <div className="absolute inset-4 rounded-lg border border-[#CCFF00]/15 rotate-3 group-hover:rotate-[8deg] transition-transform duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#CCFF00]/40 group-hover:bg-[#CCFF00]/70 transition-colors" />
          </div>
        </div>
      )}
      {category === 'accessories' && (
        <div className="relative z-10">
          <div className="w-28 h-28 relative">
            <div className="absolute inset-0 border border-purple-400/25 rotate-45 group-hover:rotate-[55deg] transition-transform duration-700" />
            <div className="absolute inset-3 border border-purple-400/20 rounded-lg group-hover:rotate-12 transition-transform duration-700" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-purple-400/15" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-full bg-purple-400/15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-400/50 group-hover:bg-purple-400/80 transition-colors" />
          </div>
        </div>
      )}
      {category === 'protective' && (
        <div className="relative z-10">
          <svg viewBox="0 0 100 100" className="w-28 h-28">
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="none"
              stroke="rgba(245,158,11,0.25)"
              strokeWidth="1"
              className="group-hover:stroke-amber-400/50 transition-all duration-700"
            />
            <polygon
              points="50,18 82,35 82,65 50,82 18,65 18,35"
              fill="none"
              stroke="rgba(245,158,11,0.15)"
              strokeWidth="1"
              className="group-hover:stroke-amber-400/30 transition-all duration-700"
            />
            <circle cx="50" cy="50" r="5" fill="rgba(245,158,11,0.4)" className="group-hover:fill-amber-400/70" />
          </svg>
        </div>
      )}
      {category === 'care' && (
        <div className="relative z-10">
          <div className="w-28 h-28 relative flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border border-emerald-400/20 group-hover:border-emerald-400/40 transition-colors" />
            <div className="absolute w-12 h-12 rounded-full border border-emerald-400/15 group-hover:scale-110 transition-transform duration-700" />
            <div className="w-4 h-4 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400/70 transition-colors" />
            {/* Sparkle dots */}
            <div className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-emerald-400/30" />
            <div className="absolute bottom-4 left-2 w-1 h-1 rounded-full bg-emerald-400/25" />
            <div className="absolute top-6 left-3 w-1 h-1 rounded-full bg-emerald-400/20" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function ShopPage() {
  const [filter, setFilter] = useState<string>('all')

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter)

  const categories = [
    { value: 'all', label: 'All', count: products.length },
    { value: 'outfits', label: 'Outfits', count: products.filter(p => p.category === 'outfits').length },
    { value: 'accessories', label: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
    { value: 'protective', label: 'Protection', count: products.filter(p => p.category === 'protective').length },
    { value: 'care', label: 'Care', count: products.filter(p => p.category === 'care').length },
  ]

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#050505] to-[#050505]" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#CCFF00]/10 to-transparent blur-[150px]" />
        <ParticleField count={25} color="purple" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Pre-Launch Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight mt-4"
          >
            Shop Robot <span className="text-gradient-lime">Fashion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 font-body max-w-2xl mx-auto"
          >
            Premium apparel and accessories designed for personal robots.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 sticky top-20 z-40 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setFilter(cat.value)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-display font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20'
                    : 'bg-white/[0.03] text-zinc-500 hover:bg-white/[0.06] hover:text-[#CCFF00] border border-white/[0.06] hover:border-[#CCFF00]/40'
                }`}
              >
                {cat.label} <span className="opacity-50">({cat.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <GlowCard
                  glowColor={
                    product.category === 'outfits' ? 'lime' :
                    product.category === 'accessories' ? 'purple' :
                    product.category === 'protective' ? 'amber' : 'lime'
                  }
                >
                  <Link href={`/shop/${product.id}`} className="group relative block">
                    {/* Image area */}
                    <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-950 to-black overflow-hidden rounded-t-xl">
                      <ProductVisual category={product.category} />

                      {/* Quick View */}
                      <button
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-xl text-white text-xs font-display font-bold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white/20 z-20"
                        onClick={(e) => e.preventDefault()}
                      >
                        Quick View
                      </button>

                      {/* Badge */}
                      <div className="absolute top-3 right-3">
                        <div
                          className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-xl border text-[10px] font-display font-bold uppercase tracking-[0.15em]"
                          style={{
                            borderColor: `${categoryVisuals[product.category]?.color || '#CCFF00'}30`,
                            color: categoryVisuals[product.category]?.color || '#CCFF00',
                          }}
                        >
                          {product.inStock ? 'IN STOCK' : 'PRE-ORDER'}
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <span
                        className="text-[10px] font-display font-bold uppercase tracking-[0.15em]"
                        style={{ color: categoryVisuals[product.category]?.color || '#CCFF00' }}
                      >
                        {product.category}
                      </span>

                      <h3 className="text-lg font-display font-semibold text-white mt-2 mb-2 group-hover:text-[#CCFF00] transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-zinc-500 font-body text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="text-2xl font-display font-bold text-white">${product.price}</div>
                        <div className="text-zinc-600 group-hover:text-[#CCFF00] group-hover:translate-x-1 transition-all">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-zinc-500 font-body text-lg">No products in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#CCFF00]/5 to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/5 blur-[150px]" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Limited Offer</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 mt-4">
              First 1,000 Get <span className="text-gradient-lime">20% Off</span>
            </h2>
            <p className="text-xl text-zinc-400 font-body mb-12">
              Join the waitlist and secure your early bird discount.
            </p>

            <form className="max-w-md mx-auto relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#CCFF00]/20 to-purple-500/20 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative flex gap-3 p-2 bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.08]">
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-transparent text-white font-body placeholder-zinc-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-lg bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-[0.15em] hover:scale-105 transition-transform"
                >
                  Join
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
