'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF08_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#00D9FF]/20 blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-[128px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-[#00D9FF]/30 backdrop-blur-xl mb-12"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#00D9FF]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[#00D9FF] text-sm font-medium tracking-wide">Pre-Launch • Waitlist Open</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
          >
            Fashion for the
            <br />
            <span className="bg-gradient-to-r from-[#00D9FF] via-[#00F0FF] to-[#00D9FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Robot Age
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            Premium apparel and accessories designed specifically for personal robots.
            <br />
            <span className="text-[#00D9FF] font-semibold">Be first</span> when Tesla Optimus ships.
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-lg mx-auto mb-16"
          >
            <form className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-6 py-4 rounded-xl bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all duration-300 hover:scale-105"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
            <motion.p 
              className="text-sm text-gray-400 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-[#00D9FF] font-semibold">2,347</span> founders and enthusiasts already joined
            </motion.p>
          </motion.div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            {['Tesla Optimus Compatible', 'Premium Materials', 'Launch Q4 2026'].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-2 rounded-full bg-white/40"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Complete <span className="text-[#00D9FF]">Collections</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From executive suits to weatherproof gear—everything your robot needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '👔', title: 'Outfits', desc: 'Premium suits, casual wear, and seasonal collections', count: '8 Collections' },
              { icon: '🎒', title: 'Accessories', desc: 'Bags, hats, LED lights, and style essentials', count: '10 Products' },
              { icon: '🛡️', title: 'Protection', desc: 'Weather covers and scratch-resistant gear', count: '5 Products' },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-xl overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,217,255,0.03)_25%,rgba(0,217,255,0.03)_50%,transparent_50%,transparent_75%,rgba(0,217,255,0.03)_75%,rgba(0,217,255,0.03))] bg-[length:20px_20px]" />
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6">{category.icon}</div>
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{category.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#00D9FF] font-medium">{category.count}</span>
                      <svg className="w-5 h-5 text-[#00D9FF] group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Robots */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Built for <span className="text-[#00D9FF]">Leading Robots</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Model-specific sizing ensures perfect fit compatibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Tesla Optimus', spec: '5\'8" • Gen 1 & 2', status: 'Q4 2026' },
              { name: 'Figure 01', spec: '5\'6" • Standard', status: 'Shipping Now' },
              { name: 'Unitree G1', spec: '5\'2" • Available', status: '$16K' },
            ].map((robot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#00D9FF]/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00D9FF] transition-colors">
                  {robot.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{robot.spec}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] text-xs font-medium">
                  {robot.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/compatibility" 
              className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00F0FF] transition-colors group"
            >
              <span className="font-medium">View Complete Compatibility Guide</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        
        {/* Large background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#00D9FF]/10 blur-[200px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              The Future is <span className="text-[#00D9FF]">Almost Here</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join 2,347 visionaries securing their spot for launch day.
              <br />
              First 1,000 customers get <span className="text-[#00D9FF] font-semibold">20% off</span>.
            </p>

            {/* Final Waitlist Form */}
            <div className="max-w-lg mx-auto">
              <form className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#00D9FF] via-purple-500 to-[#00D9FF] rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-500 animate-gradient bg-[length:200%_auto]" />
                <div className="relative flex flex-col sm:flex-row gap-4 p-3 bg-black/50 backdrop-blur-2xl rounded-2xl border border-white/20">
                  <input 
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D9FF]/50 transition-colors"
                  />
                  <button 
                    type="submit"
                    className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/60 transition-all duration-300 hover:scale-105"
                  >
                    Get Early Access
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/shop" className="hover:text-[#00D9FF] transition-colors">Shop</Link></li>
                <li><Link href="/compatibility" className="hover:text-[#00D9FF] transition-colors">Compatibility</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-[#00D9FF] transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-[#00D9FF] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Social</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="https://twitter.com/botoutfit" className="hover:text-[#00D9FF] transition-colors">Twitter</a></li>
                <li><a href="https://instagram.com/botoutfit" className="hover:text-[#00D9FF] transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">BotOutfit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The first fashion brand for personal robots.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
            © 2026 BotOutfit. Defining robot fashion.
          </div>
        </div>
      </footer>
    </main>
  )
}
