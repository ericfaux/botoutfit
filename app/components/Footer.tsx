'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Shop All', href: '/shop' },
      { label: 'Compatibility', href: '/compatibility' },
      { label: 'Coming Soon', href: '/shop' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: 'mailto:hello@botoutfit.com' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Returns', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: '𝕏', href: '#', label: 'Twitter', color: 'hover:bg-blue-500/20 hover:border-blue-500/50' },
    { icon: '📸', href: '#', label: 'Instagram', color: 'hover:bg-pink-500/20 hover:border-pink-500/50' },
    { icon: '💼', href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600/20 hover:border-blue-600/50' },
    { icon: '🤖', href: '#', label: 'Discord', color: 'hover:bg-purple-500/20 hover:border-purple-500/50' },
  ]

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Gradient orb */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00D9FF]/5 blur-[150px] pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/5">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Stay Updated on Robot <span className="text-[#00D9FF]">Fashion</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-8"
            >
              Get early access to new collections, exclusive drops, and robot care tips.
            </motion.p>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-md mx-auto relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-purple-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative flex gap-2 p-1.5 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:scale-105 transition-transform whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </motion.form>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <span className="text-2xl font-black text-white group-hover:text-[#00D9FF] transition-colors">
                BotOutfit
              </span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-sm">
              The first apparel brand designed for personal robots. Premium fashion for the future.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#00D9FF] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} BotOutfit. All rights reserved.
              </p>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-700" />
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Status:</span>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">All Systems Operational</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="flex items-center gap-2 text-sm text-gray-500"
              whileHover={{ scale: 1.05 }}
            >
              <span>Powered by</span>
              <span className="text-[#00D9FF]">🤖</span>
              <span className="font-semibold text-white">Innovation</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
