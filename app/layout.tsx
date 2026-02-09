import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BotOutfit - Fashion for Your Robot",
  description: "Premium apparel and accessories designed specifically for personal robots. Compatible with Tesla Optimus, Figure 01, and more.",
  keywords: "robot fashion, robot apparel, Tesla Optimus outfit, robot accessories, AI robot clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#00B8CC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-lg">🤖</span>
                </div>
                <span className="text-xl font-bold text-white">BotOutfit</span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop
                </Link>
                <Link href="/compatibility" className="text-gray-300 hover:text-white transition-colors">
                  Compatibility
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link 
                  href="/#waitlist" 
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/40 transition-all hover:scale-105"
                >
                  Join Waitlist
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
