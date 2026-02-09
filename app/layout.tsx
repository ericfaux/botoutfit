'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>BotOutfit - Fashion for Your Robot</title>
        <meta name="description" content="Apparel, accessories, and outfits designed specifically for your personal AI robot. Compatible with Tesla Optimus, Figure 01, and more." />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF] to-[#00B8CC] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#00B8CC] flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  BotOutfit
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Shop
                </Link>
                <Link href="/compatibility" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Compatibility
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
                  About
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Blog
                </Link>
                <Link 
                  href="/#waitlist" 
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all duration-300"
                >
                  Join Waitlist
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden py-6 space-y-4 border-t border-white/10">
                <Link href="/shop" className="block text-gray-300 hover:text-white transition-colors font-medium">
                  Shop
                </Link>
                <Link href="/compatibility" className="block text-gray-300 hover:text-white transition-colors font-medium">
                  Compatibility
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors font-medium">
                  About
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors font-medium">
                  Blog
                </Link>
                <Link 
                  href="/#waitlist" 
                  className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold"
                >
                  Join Waitlist
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
