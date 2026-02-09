'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products } from '@/lib/products'

export default function ShopPage() {
  const [filter, setFilter] = useState<string>('all')
  
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const categories = [
    { value: 'all', label: 'All Products', count: products.length },
    { value: 'outfits', label: 'Outfits', count: products.filter(p => p.category === 'outfits').length },
    { value: 'accessories', label: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
    { value: 'protective', label: 'Protection', count: products.filter(p => p.category === 'protective').length },
    { value: 'care', label: 'Care', count: products.filter(p => p.category === 'care').length },
  ]

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF] text-sm font-medium">Coming Soon • Pre-Launch</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Shop <span className="text-[#00D9FF]">Robot Fashion</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of apparel, accessories, and protection gear designed specifically for personal robots.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  filter === cat.value
                    ? 'bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label} <span className="text-sm opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group relative bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D9FF]/50 transition-all"
              >
                {/* Product Image Placeholder */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,217,255,0.1)_25%,rgba(0,217,255,0.1)_50%,transparent_50%,transparent_75%,rgba(0,217,255,0.1)_75%,rgba(0,217,255,0.1))] bg-[length:20px_20px]" />
                  <div className="relative z-10 text-6xl">🤖</div>
                  
                  {/* Coming Soon Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm border border-white/20">
                    <span className="text-[#00D9FF] text-xs font-semibold">Coming Soon</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-[#00D9FF] font-semibold uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      ${product.price}
                    </div>
                    <div className="text-[#00D9FF] group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Compatibility */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-2">Compatible with:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.compatibility.slice(0, 2).map(model => (
                        <span key={model} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded">
                          {model}
                        </span>
                      ))}
                      {product.compatibility.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{product.compatibility.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be First to <span className="text-[#00D9FF]">Shop</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join our waitlist to get early access when we launch. First 1,000 customers get 20% off.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all hover:scale-105"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
