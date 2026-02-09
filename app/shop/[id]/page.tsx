'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { getProductById, products } from '@/lib/products'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Header with gradient orbs */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#00D9FF]/20 blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400"
          >
            <Link href="/shop" className="hover:text-[#00D9FF] transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px]">{product.name}</span>
          </motion.div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl flex items-center justify-center overflow-hidden border border-white/10 backdrop-blur-xl group">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,217,255,0.05)_25%,rgba(0,217,255,0.05)_50%,transparent_50%,transparent_75%,rgba(0,217,255,0.05)_75%,rgba(0,217,255,0.05))] bg-[length:40px_40px]" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                
                {/* Abstract visualization instead of emoji */}
                <div className="relative z-10 w-48 h-48">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border-2 border-white/10"
                      style={{
                        margin: `${i * 20}%`,
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                </div>
                
                {/* Coming Soon Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/90 backdrop-blur-xl border border-[#00D9FF]/30"
                >
                  <span className="text-[#00D9FF] text-sm font-semibold">Q4 2026</span>
                </motion.div>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Product mockup - Actual product may vary
              </p>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00D9FF]/30 backdrop-blur-xl mb-6"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
                <span className="text-sm text-[#00D9FF] font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              >
                {product.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-baseline gap-4 mb-8"
              >
                <span className="text-5xl font-bold text-white">${product.price}</span>
                {!product.inStock && (
                  <span className="text-sm text-gray-500 px-3 py-1 rounded-full bg-white/5">Pre-order</span>
                )}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-300 mb-8 leading-relaxed"
              >
                {product.description}
              </motion.p>

              {/* Notify Me Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-8 relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
                <button className="relative w-full sm:w-auto px-10 py-5 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all hover:scale-105">
                  Notify Me When Available
                </button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-8 p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + (index * 0.1) }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00D9FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Compatibility */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Compatibility</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {product.compatibility.map((model, i) => (
                    <motion.div
                      key={model}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3 + (i * 0.05) }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-cyan-500/30 hover:bg-white/10 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      {model}
                    </motion.div>
                  ))}
                </div>
                <Link 
                  href="/compatibility" 
                  className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00F0FF] transition-colors text-sm group"
                >
                  View full compatibility guide
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>

              {/* Shipping & Returns */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-semibold text-white mb-6">Shipping & Returns</h2>
                <div className="space-y-3 text-gray-300">
                  {[
                    { text: 'Free shipping on orders over $200' },
                    { text: '30-day return policy' },
                    { text: '1-year quality guarantee' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 + (i * 0.1) }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-12"
          >
            You Might <span className="text-[#00D9FF]">Also Like</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, i) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/shop/${relatedProduct.id}`}
                    className="group relative block"
                  >
                    {/* Hover glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                    
                    {/* Card */}
                    <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl group-hover:border-[#00D9FF]/30 transition-all duration-300">
                      <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px]" />
                        {/* Abstract shape */}
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 border-2 border-white/10 rounded-full group-hover:border-cyan-500/30 transition-colors" />
                          <div className="absolute inset-3 border border-white/5 rounded-full group-hover:border-cyan-500/20 transition-colors" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <span className="text-xs text-[#00D9FF] font-semibold uppercase tracking-wider">
                          {relatedProduct.category}
                        </span>
                        <h3 className="text-white font-semibold mt-2 mb-3 group-hover:text-[#00D9FF] transition-colors line-clamp-2 leading-tight">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                          <p className="text-xl font-bold text-white">${relatedProduct.price}</p>
                          <div className="text-[#00D9FF] group-hover:translate-x-2 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        </div>
      </section>
    </main>
  )
}
