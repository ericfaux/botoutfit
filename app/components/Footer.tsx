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
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: '📸', href: '#', label: 'Instagram' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
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
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-white/10 hover:border-[#00D9FF]/30 hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
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
        <div className="py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} BotOutfit. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-[#00D9FF] animate-pulse">⚡</span>
            <span>for robots</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
