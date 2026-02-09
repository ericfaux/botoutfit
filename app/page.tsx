import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D9FF15_1px,transparent_1px),linear-gradient(to_bottom,#00D9FF15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            <span className="text-[#00D9FF] text-sm font-medium">Coming Soon • Pre-Launch</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Dress Your Robot
            <br />
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#C0C0C0] bg-clip-text text-transparent">
              For Every Occasion
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Apparel, accessories, and outfits designed specifically for your personal AI robot. 
            <span className="text-[#00D9FF]"> Be first in line</span> when we launch.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-12">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all hover:scale-105"
              >
                Join Waitlist
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-3">
              <span className="text-[#00D9FF] font-semibold">2,347</span> early adopters already joined
            </p>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Compatible with Tesla Optimus</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium Quality Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Free Early Bird Discount</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Personalization for the <span className="text-[#00D9FF]">Robot Age</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From executive suits to casual wear, accessories to protective gear—everything your robot needs to look its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-8 hover:border-[#00D9FF]/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/0 to-[#00D9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Outfits</h3>
                <p className="text-gray-400 mb-4">Complete outfit sets for work, play, and everything in between.</p>
                <span className="text-[#00D9FF] text-sm font-medium">8 Collections →</span>
              </div>
            </div>

            {/* Category Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-8 hover:border-[#00D9FF]/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/0 to-[#00D9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Accessories</h3>
                <p className="text-gray-400 mb-4">Hats, bags, LED accents, and more to perfect the look.</p>
                <span className="text-[#00D9FF] text-sm font-medium">10 Products →</span>
              </div>
            </div>

            {/* Category Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-8 hover:border-[#00D9FF]/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/0 to-[#00D9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Protection</h3>
                <p className="text-gray-400 mb-4">Weather-resistant covers and scratch protection gear.</p>
                <span className="text-[#00D9FF] text-sm font-medium">5 Products →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Robots */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Designed for the Leading <span className="text-[#00D9FF]">Robot Platforms</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
            We ensure perfect fit compatibility with model-specific sizing and measurements.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#00D9FF]/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Tesla Optimus</h3>
              <p className="text-gray-400 text-sm">5'8" • Gen 1 & 2</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#00D9FF]/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Figure 01</h3>
              <p className="text-gray-400 text-sm">5'6" • Standard</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-[#00D9FF]/50 transition-all">
              <h3 className="text-xl font-semibold text-white mb-2">Unitree G1</h3>
              <p className="text-gray-400 text-sm">5'2" • Available Now</p>
            </div>
          </div>

          <Link 
            href="/compatibility" 
            className="inline-block mt-12 text-[#00D9FF] hover:text-[#00F0FF] transition-colors font-medium"
          >
            View Complete Compatibility Guide →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Don't Miss the <span className="text-[#00D9FF]">Robot Revolution</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Personal robots are coming. Be ready with the perfect outfit. Join 2,347 early adopters who secured their spot.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all"
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all hover:scale-105"
              >
                Get Early Access
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              First 1,000 customers get <span className="text-[#00D9FF] font-semibold">20% off</span> at launch
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">BotOutfit</h3>
              <p className="text-gray-400 text-sm">Fashion for your future robot companion.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/shop" className="hover:text-[#00D9FF] transition-colors">Shop</Link></li>
                <li><Link href="/compatibility" className="hover:text-[#00D9FF] transition-colors">Compatibility</Link></li>
                <li><Link href="/sizing" className="hover:text-[#00D9FF] transition-colors">Size Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-[#00D9FF] transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-[#00D9FF] transition-colors">Blog</Link></li>
                <li><Link href="/press" className="hover:text-[#00D9FF] transition-colors">Press Kit</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://twitter.com/botoutfit" className="hover:text-[#00D9FF] transition-colors">Twitter</a></li>
                <li><a href="https://instagram.com/botoutfit" className="hover:text-[#00D9FF] transition-colors">Instagram</a></li>
                <li><a href="https://tiktok.com/@botoutfit" className="hover:text-[#00D9FF] transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            © 2026 BotOutfit. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
