'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#00D9FF]/20 blur-[128px]"
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
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-[#00D9FF]/30 backdrop-blur-xl mb-8"
          >
            <span className="text-[#00D9FF] text-sm font-medium tracking-wide">About BotOutfit</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            The First Fashion Brand for{' '}
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#00F0FF] bg-clip-text text-transparent">
              Personal Robots
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Building the future of personalization—one outfit at a time.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Our Story</h2>
            
            <div className="text-gray-300 space-y-6 leading-relaxed">
              <p>
                In early 2026, we watched Tesla unveil Optimus, Figure ship their first production robots, and Unitree begin consumer sales. The robot revolution wasn't coming—it was here.
              </p>

              <p>
                But something was missing. These incredible machines, designed to assist us in our homes and workplaces, all looked the same. In a world where we customize everything from our phone cases to our sneakers, why couldn't we personalize our robots?
              </p>

              <p>
                That's when BotOutfit was born.
              </p>

              <div className="relative p-8 rounded-2xl bg-gradient-to-r from-[#00D9FF]/10 to-transparent border-l-4 border-[#00D9FF] backdrop-blur-xl my-12">
                <p className="text-white font-semibold mb-3 text-xl">Our Mission</p>
                <p className="text-gray-300 italic text-lg">
                  "To make robot personalization accessible, stylish, and fun for everyone—from tech enthusiasts to enterprise customers."
                </p>
              </div>

              <p>
                We believe personal robots deserve personal style. Whether your robot is helping around the house, representing your company, or simply being part of your family—it should reflect your taste, your brand, your personality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-16 text-center"
          >
            Why <span className="text-[#00D9FF]">Now?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Perfect Timing',
                desc: 'Tesla Optimus ships Q4 2026. Figure ships to enterprise now. Unitree available today. The market is here.'
              },
              {
                title: 'Zero Competition',
                desc: 'We\'re first. Nobody else is building robot fashion infrastructure. Category creator advantage.'
              },
              {
                title: 'Massive TAM',
                desc: '10,000+ robots in first year. 100,000+ by 2028. Phone case market: $30B. Robot fashion: untapped.'
              },
              {
                title: 'Clear Need',
                desc: 'Robots need different outfits for work vs. home, weather protection, company branding. Just like humans.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-16 text-center"
          >
            What Makes Us <span className="text-[#00D9FF]">Different</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Compatibility First',
                desc: 'Exact measurements for each robot model. Tesla Optimus is 5\'8" with 42cm torso. We design accordingly.'
              },
              {
                title: 'Premium Quality',
                desc: 'Not cheap costumes. Weather-resistant materials, reinforced stitching, professional-grade construction.'
              },
              {
                title: 'Function Meets Form',
                desc: 'UV protection, weather resistance, charging port access—built into every outfit.'
              },
              {
                title: 'First Mover',
                desc: 'We\'re defining what "good" looks like in robot fashion. Zero competition means we set the standard.'
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00D9FF] mt-2" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Be Part of the <span className="text-[#00D9FF]">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join our waitlist for early access, exclusive discounts, and behind-the-scenes updates.
            </p>

            <Link 
              href="/#waitlist" 
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all duration-300 hover:scale-105"
            >
              <span>Join the Waitlist</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
