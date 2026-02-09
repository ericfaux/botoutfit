import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 mb-8">
            <span className="text-[#00D9FF] text-sm font-medium">About BotOutfit</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            The First Fashion Brand for <span className="text-[#00D9FF]">Personal Robots</span>
          </h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            We're building the future of personalization—one outfit at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              In early 2026, we watched Tesla unveil Optimus, Figure ship their first production robots, and Unitree begin consumer sales. The robot revolution wasn't coming—it was here.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              But something was missing. These incredible machines, designed to assist us in our homes and workplaces, all looked the same. In a world where we customize everything from our phone cases to our sneakers, why couldn't we personalize our robots?
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              That's when BotOutfit was born.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              We believe personal robots deserve personal style. Whether your robot is helping around the house, representing your company, or simply being part of your family—it should reflect your taste, your brand, your personality.
            </p>

            <div className="bg-gradient-to-r from-[#00D9FF]/10 to-transparent border-l-4 border-[#00D9FF] p-6 my-8">
              <p className="text-white font-semibold mb-2">Our Mission</p>
              <p className="text-gray-300 italic">
                "To make robot personalization accessible, stylish, and fun for everyone—from tech enthusiasts to enterprise customers."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Why Now?</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The timing is perfect. Tesla's Optimus is entering production. Figure's robots are shipping to enterprise customers. Boston Dynamics' Spot has been in the field for years. Unitree's G1 is available for purchase today.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Within the next 12-24 months, tens of thousands of humanoid robots will be in homes and businesses worldwide. And just like we dress ourselves every day, these robots will need outfits for different occasions, weather conditions, and environments.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">What Makes Us Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00D9FF] mb-3">Compatibility First</h3>
                <p className="text-gray-300">
                  Every product includes exact measurements and model compatibility. We know Tesla Optimus Gen 1 is 5'8" with a 42cm torso—and we design accordingly.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00D9FF] mb-3">Premium Quality</h3>
                <p className="text-gray-300">
                  We're not selling cheap costumes. Our apparel uses weather-resistant materials, reinforced stitching, and professional-grade construction.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00D9FF] mb-3">Function Meets Form</h3>
                <p className="text-gray-300">
                  Our designs aren't just stylish—they're practical. UV protection, weather resistance, and easy charging port access are built into every outfit.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#00D9FF] mb-3">First Mover</h3>
                <p className="text-gray-300">
                  We're building the robot fashion category from scratch. Zero competition means we can define what "good" looks like.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Our Values</h2>
            
            <div className="space-y-4 my-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Forward-Thinking</h3>
                  <p className="text-gray-300">We see the future first. We're building for a world that's just around the corner.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Quality Over Hype</h3>
                  <p className="text-gray-300">We're not here for quick cash. We're building a brand that lasts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community-Driven</h3>
                  <p className="text-gray-300">Early adopters shape our product. We listen, iterate, and improve together.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#00D9FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Playful, Not Dystopian</h3>
                  <p className="text-gray-300">Robot fashion should be fun. We're optimistic about the future.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Looking Ahead</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're just getting started. Right now, we're in pre-launch mode—building the brand, creating the products, and gathering early adopters who believe in the vision.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Our first collection will launch when Tesla Optimus and Figure robots begin shipping to consumers. We're partnering with manufacturers to ensure perfect fit, testing materials in real-world conditions, and designing for durability.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Beyond fashion, we see a world where robot personalization extends to accessories, upgrades, and custom modifications. We're building relationships with robot makers, designers, and the tech community to make that future a reality.
            </p>

            <div className="bg-gradient-to-r from-[#00D9FF]/10 to-transparent border-l-4 border-[#00D9FF] p-6 my-8">
              <p className="text-white font-semibold mb-2">Want to be part of the journey?</p>
              <p className="text-gray-300 mb-4">
                Join our waitlist to get early access, exclusive discounts, and behind-the-scenes updates as we build the robot fashion category.
              </p>
              <Link 
                href="/#waitlist" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all"
              >
                Join the Waitlist
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section (Placeholder for now) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Meet the Founder</h2>
          <p className="text-gray-400 mb-8">More coming soon...</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-gray-400 mb-8">We'd love to hear from you.</p>
          <a 
            href="mailto:hello@botoutfit.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#00D9FF]/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@botoutfit.com
          </a>
        </div>
      </section>
    </main>
  )
}
