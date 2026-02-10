'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/compatibility', label: 'Compatibility' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-black/90 backdrop-blur-2xl shadow-2xl shadow-black/50'
            : 'border-b border-transparent bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group relative flex items-center gap-2"
            >
              {/* Logo mark */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-lg bg-cyan-400/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-black font-black text-xs">BO</span>
              </div>
              <span className="relative z-10 text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                BotOutfit
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-zinc-500 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.08]"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}

              <div className="w-px h-6 bg-white/10 mx-3" />

              <Link
                href="/#waitlist"
                className="group relative px-6 py-2.5 rounded-xl text-sm font-semibold overflow-hidden"
              >
                {/* Button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] rounded-xl" />
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-xl" />
                {/* Glow */}
                <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-black">Join Waitlist</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="px-6 py-8 space-y-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                      pathname === link.href
                        ? 'text-cyan-400 bg-cyan-400/5'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-4"
              >
                <Link
                  href="/#waitlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold text-center"
                >
                  Join Waitlist
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
