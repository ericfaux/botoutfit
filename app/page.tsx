'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Hero - Bold Asymmetric */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bold gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Large geometric shapes */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-br from-[#00D9FF]/30 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-orange-500/20 to-transparent blur-[100px] rounded-full" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bold Copy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/5 backdrop-blur-xl mb-8">
                <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                <span className="text-[#00D9FF] text-sm font-medium uppercase tracking-widest">Pre-Launch</span>
              </div>

              {/* Headline - BOLD */}
              <h1 className="text-[clamp(3rem,8vw,7rem)] font-black text-white mb-6 leading-[0.9] tracking-tight">
                Your Robot<br />
                <span className="bg-gradient-to-r from-[#00D9FF] via-white to-[#00D9FF] bg-clip-text text-transparent">
                  Deserves
                </span><br />
                Fashion
              </h1>

              {/* Subhead */}
              <p className="text-2xl text-gray-400 mb-10 max-w-lg font-light leading-relaxed">
                The first apparel brand designed for personal robots. 
                <span className="text-white font-medium"> Tesla Optimus ships Q4 2026.</span>
              </p>

              {/* CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#waitlist"
                  className="group relative px-8 py-5 bg-white text-black font-bold text-lg rounded-xl overflow-hidden"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-purple-500"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Join Waitlist</span>
                </Link>
                <Link
                  href="/shop"
                  className="group relative px-8 py-5 border-2 border-white/20 text-white font-bold text-lg rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    View Collection
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10"
              >
                {[
                  { num: '25+', label: 'Products', icon: '🤖' },
                  { num: '6', label: 'Robot Models', icon: '⚡' },
                  { num: '2.3K+', label: 'Waitlist', icon: '🚀' },
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    className="group cursor-default"
                  >
                    <div className="text-sm text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                    <div className="text-4xl font-black text-white mb-1 group-hover:text-[#00D9FF] transition-colors">{stat.num}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Product Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[600px] group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              {/* Large product card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-2xl overflow-hidden group-hover:border-[#00D9FF]/40 transition-all duration-500">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/20 via-transparent to-orange-500/10" />
                
                {/* Animated grid pattern */}
                <motion.div 
                  className="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:40px_40px]"
                  animate={{
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                />
                
                {/* Robot silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-[20rem] opacity-40 select-none"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity
                    }}
                  >
                    🤖
                  </motion.div>
                </div>
                
                {/* Overlay text */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
                    <div className="text-xs text-[#00D9FF] uppercase tracking-widest font-semibold">Featured</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">Executive Suit</div>
                  <div className="text-xl text-gray-300">Tesla Optimus Edition • $199</div>
                </motion.div>
              </div>
              
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-4 -right-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-sm rounded-xl shadow-2xl shadow-orange-500/50"
                animate={{
                  rotate: [3, -2, 3],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                Coming Q4 2026
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products - Bold Grid */}
      <section className="py-32 px-6 lg:px-12 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto">
          {/* Section header - asymmetric */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
            <div>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-tight">
                Complete<br />Collections
              </h2>
            </div>
            <div>
              <p className="text-xl text-gray-400 max-w-md">
                From executive boardrooms to outdoor work—outfits engineered for every occasion.
              </p>
            </div>
          </div>

          {/* Masonry-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Executive', count: '3', color: 'from-blue-500/20', size: 'lg:row-span-2', emoji: '👔' },
              { title: 'Casual', count: '5', color: 'from-purple-500/20', emoji: '👕' },
              { title: 'Athletic', count: '2', color: 'from-green-500/20', emoji: '⚡' },
              { title: 'Protection', count: '4', color: 'from-orange-500/20', size: 'md:col-span-2', emoji: '🛡️' },
              { title: 'Accessories', count: '10', color: 'from-pink-500/20', emoji: '✨' },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative ${cat.size || ''}`}
              >
                {/* Glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <Link
                  href="/shop"
                  className="relative block h-full min-h-[300px] rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 p-8 hover:border-[#00D9FF]/30 transition-all overflow-hidden backdrop-blur-xl"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-50 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Animated grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <motion.div 
                        className="text-6xl mb-4"
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.4 }}
                      >
                        {cat.emoji}
                      </motion.div>
                      <h3 className="text-4xl font-black text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-gray-400">{cat.count} Products</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                      <span className="font-semibold">Shop Now</span>
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        whileHover={{ x: 5 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility - Full Width Feature */}
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-[#00D9FF]/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white mb-6"
            >
              Built for <span className="text-[#00D9FF]">Leading Platforms</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Model-specific sizing. Perfect fit guaranteed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Tesla Optimus', status: 'Q4 2026', badge: 'orange' },
              { name: 'Figure 01', status: 'Shipping', badge: 'green' },
              { name: 'Unitree G1', status: 'Available', badge: 'green' },
            ].map((robot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 p-10 hover:border-[#00D9FF]/50 transition-all backdrop-blur-xl">
                  <motion.div 
                    className="text-8xl mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0]
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    🤖
                  </motion.div>
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-[#00D9FF] transition-colors">
                    {robot.name}
                  </h3>
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${
                    robot.badge === 'green' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {robot.status}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA - Bold */}
      <section className="relative py-40 px-6 lg:px-12 overflow-hidden">
        {/* Dramatic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/10 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00D9FF]/20 blur-[200px] rounded-full" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-sm text-gray-400 uppercase tracking-[0.3em] mb-6">Join 2,347 visionaries</div>
            
            <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white mb-8 leading-tight">
              Be First.<br />
              <span className="text-[#00D9FF]">Get 20% Off.</span>
            </h2>

            {/* Waitlist form */}
            <form className="max-w-md mx-auto mb-12 group" id="waitlist">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00D9FF] to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500" />
                
                <div className="relative flex gap-3 p-2 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20">
                  <input 
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-6 py-5 rounded-xl bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                  />
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 rounded-xl bg-gradient-to-r from-white to-[#00D9FF] text-black font-bold text-lg shadow-lg shadow-white/20"
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </form>

            <p className="text-gray-500 text-sm">
              First 1,000 customers get 20% off at launch • No credit card required
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
