'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        {/* Gradient orbs */}
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
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#00D9FF]/20 blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-[#00D9FF]/30 backdrop-blur-xl mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF] text-sm font-medium tracking-wide">Insights & Updates</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Robot Fashion <span className="text-[#00D9FF]">Blog</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Insights, guides, and news about the future of robot personalization.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="group relative block"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl group-hover:border-[#00D9FF]/30 transition-all duration-300">
                    {/* Post Image Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
                      {/* Simple icon instead of emoji */}
                      <div className="relative w-16 h-16 border-2 border-white/20 rounded-lg group-hover:border-cyan-500/40 transition-colors">
                        <div className="absolute inset-3 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-500/30 transition-colors" />
                      </div>
                    </div>

                    {/* Post Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <span className="text-[#00D9FF] font-semibold uppercase tracking-wider text-xs">{post.category}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-gray-500 text-sm">{post.date}</span>
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
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-500/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00D9FF]/10 blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Stay <span className="text-[#00D9FF]">Updated</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Get the latest robot fashion insights delivered to your inbox.
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
                  Subscribe
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
