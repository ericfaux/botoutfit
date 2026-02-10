'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#050505] to-[#050505]" />

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
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#CCFF00]/20 blur-[120px]"
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

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Insights & Updates</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight mt-4"
          >
            Robot Fashion <span className="text-gradient-lime">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 font-body max-w-2xl mx-auto"
          >
            Insights, guides, and news about the future of robot personalization.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#CCFF00]/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Card */}
                  <div className="relative border border-white/[0.06] bg-white/[0.02] rounded-xl overflow-hidden backdrop-blur-xl group-hover:border-white/[0.12] transition-all duration-300">
                    {/* Post Image Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px]" />
                      {/* Simple icon instead of emoji */}
                      <div className="relative w-16 h-16 border-2 border-white/20 rounded-lg group-hover:border-[#CCFF00]/40 transition-colors">
                        <div className="absolute inset-3 border-t-2 border-l-2 border-white/10 group-hover:border-[#CCFF00]/30 transition-colors" />
                      </div>
                    </div>

                    {/* Post Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3 text-sm">
                        <span className="text-[10px] font-display font-bold uppercase tracking-[0.15em] text-[#CCFF00]">{post.category}</span>
                        <span className="text-zinc-600">·</span>
                        <span className="text-zinc-500 font-body text-xs">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-[#CCFF00] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-zinc-500 font-body text-sm mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-zinc-600 font-body text-sm">{post.date}</span>
                        <div className="text-[#CCFF00] group-hover:translate-x-2 transition-transform duration-300">
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
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-purple-500/5 to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CCFF00]/10 blur-[150px]" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Newsletter</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6 mt-4">
              Stay <span className="text-gradient-lime">Updated</span>
            </h2>
            <p className="text-xl text-zinc-400 font-body mb-12">
              Get the latest robot fashion insights delivered to your inbox.
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
