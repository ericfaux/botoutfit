'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FooterWaitlistForm from './FooterWaitlistForm'

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
    { label: 'Twitter', href: '#', color: 'bg-blue-500' },
    { label: 'Instagram', href: '#', color: 'bg-pink-500' },
    { label: 'LinkedIn', href: '#', color: 'bg-blue-600' },
    { label: 'Discord', href: '#', color: 'bg-purple-500' },
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
            
            <FooterWaitlistForm />
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
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <div className={`w-2 h-2 rounded-full ${social.color}`} />
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
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Built for the future of</span>
              <span className="font-semibold text-cyan-400">robotics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
