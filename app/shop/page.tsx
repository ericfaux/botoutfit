'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '@/lib/products'

export default function ShopPage() {
  const [filter, setFilter] = useState<string>('all')
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const categories = [
    { value: 'all', label: 'All', icon: '🤖', count: products.length },
    { value: 'outfits', label: 'Outfits', icon: '👔', count: products.filter(p => p.category === 'outfits').length },
    { value: 'accessories', label: 'Accessories', icon: '⚡', count: products.filter(p => p.category === 'accessories').length },
    { value: 'protective', label: 'Protection', icon: '🛡️', count: products.filter(p => p.category === 'protective').length },
    { value: 'care', label: 'Care', icon: '✨', count: products.filter(p => p.category === 'care').length },
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-[#00D9FF]/30 backdrop-blur-xl mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF] text-sm font-medium tracking-wide">Pre-Launch Collection</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Shop <span className="text-[#00D9FF]">Robot Fashion</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Premium apparel and accessories designed for personal robots.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-20 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFilter(cat.value)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === cat.value
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black shadow-lg shadow-[#00D9FF]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-xl'
                }`}
              >
                {/* Active glow */}
                {filter === cat.value && (
                  <motion.div
                    layoutId="filterGlow"
                    className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/30 to-[#00B8CC]/30 rounded-xl blur-md -z-10"
                  />
                )}
                <span className="flex items-center gap-2">
                  <span className="text-lg">{cat.icon}</span>
                  {cat.label} <span className="opacity-60">({cat.count})</span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  href={`/shop/${product.id}`}
                  className="group relative block"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl group-hover:border-[#00D9FF]/30 transition-all duration-300">
                    {/* Image - Abstract placeholder */}
                    <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden group">
                      {/* Subtle grid */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
                      
                      {/* Abstract shape instead of emoji */}
                      <div className="relative z-10 w-32 h-32">
                        <div className="absolute inset-0 border-2 border-white/10 rounded-full group-hover:border-cyan-500/30 transition-colors" />
                        <div className="absolute inset-4 border border-white/5 rounded-full group-hover:border-cyan-500/20 transition-colors" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                      </div>
                      
                      {/* Quick View Button */}
                      <button
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-lg bg-white/10 backdrop-blur-xl text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all border border-white/10 hover:bg-white/20 z-20"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        Quick View
                      </button>
                      
                      {/* Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-xl border border-white/10">
                        <span className="text-cyan-400 text-xs font-medium">Q4 2026</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs text-[#00D9FF] font-semibold uppercase tracking-wider">
                          {product.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="text-2xl font-bold text-white">
                          ${product.price}
                        </div>
                        <div className="text-[#00D9FF] group-hover:translate-x-2 transition-transform duration-300">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D9FF]/10 blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              First 1,000 Get <span className="text-[#00D9FF]">20% Off</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join the waitlist and secure your early bird discount.
            </p>

            <form className="max-w-md mx-auto relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#00D9FF] to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative flex gap-3 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:scale-105 transition-transform"
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
