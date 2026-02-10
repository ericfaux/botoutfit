'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import FooterWaitlistForm from './FooterWaitlistForm'
import MarqueeTicker from './MarqueeTicker'

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

  return (
    <footer className="relative bg-[#050505]">
      {/* Marquee ticker */}
      <div className="border-t border-white/[0.06] py-4">
        <MarqueeTicker
          text="DRESS THE FUTURE • ROBOT FASHION • BOTOUTFIT • PREMIUM APPAREL • EST. 2026 •"
          speed="fast"
          className="text-[10px] font-display uppercase tracking-[0.4em] text-zinc-800"
        />
      </div>

      {/* Large wordmark */}
      <div className="border-t border-white/[0.04] py-12 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-[clamp(3rem,10vw,8rem)] font-display font-bold text-white/[0.03] leading-none tracking-tighter select-none">
            BOTOUTFIT
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Newsletter */}
        <div className="py-12 border-t border-white/[0.04]">
          <div className="max-w-md">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl font-display font-bold text-white mb-3"
            >
              Stay Updated on Robot <span className="text-gradient-lime">Fashion</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-zinc-500 mb-6"
            >
              Get early access to new collections and exclusive drops.
            </motion.p>
            <FooterWaitlistForm />
          </div>
        </div>

        {/* Links grid */}
        <div className="py-12 border-t border-white/[0.04] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-md bg-[#CCFF00] opacity-90" />
                <span className="relative z-10 text-black font-display font-bold text-[9px]">BO</span>
              </div>
              <span className="text-lg font-display font-bold text-white group-hover:text-[#CCFF00] transition-colors tracking-tight">
                BotOutfit
              </span>
            </Link>
            <p className="mt-4 text-zinc-600 leading-relaxed max-w-sm text-sm">
              The first apparel brand designed for personal robots. Premium fashion for the future.
            </p>
            <div className="mt-6 flex items-center gap-6">
              {['Twitter', 'Instagram', 'LinkedIn', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-[10px] font-display uppercase tracking-[0.2em] text-zinc-600 hover:text-[#CCFF00] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-600 hover:text-[#CCFF00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-600 hover:text-[#CCFF00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-600 hover:text-[#CCFF00] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/[0.04]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-zinc-700 uppercase tracking-wider">
              &copy; {new Date().getFullYear()} BotOutfit. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-zinc-700 uppercase tracking-wider">
              <span>Built for the future of</span>
              <span className="font-semibold text-[#CCFF00]/50">robotics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
