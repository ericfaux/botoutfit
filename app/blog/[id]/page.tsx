import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPostById, blogPosts } from '@/lib/blog-posts'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

// This is a placeholder. In a real app, you'd fetch the full content from a CMS or markdown files
function getFullBlogContent(id: string) {
  // Placeholder content - will be replaced with actual blog posts
  const contentMap: Record<string, string> = {
    'why-robot-fashion-is-next-big-thing': `
      <p class="lead">The robot revolution isn't coming—it's here. And with it comes an entirely new category of consumer demand: robot personalization.</p>

      <h2>The Personal Robot Market is Exploding</h2>
      <p>In 2026, we're witnessing something unprecedented. Tesla's Optimus is entering production. Figure AI is shipping robots to enterprise customers. Unitree's G1 is available for purchase today. Boston Dynamics' Spot has been in the field for years.</p>

      <p>Within the next 12-24 months, tens of thousands of humanoid robots will be in homes and businesses worldwide. And just like we personalize everything from our smartphones to our cars, these robots will need outfits for different occasions, weather conditions, and environments.</p>

      <h2>Why Personalization Matters</h2>
      <p>Think about your phone. When you bought it, the first thing you did was pick a case. Maybe you added a pop socket, a screen protector, or a custom wallpaper. We personalize our devices because they're extensions of ourselves.</p>

      <p>Robots are no different. In fact, they're even more personal. They'll be:</p>
      <ul>
        <li>Representing us in professional settings</li>
        <li>Interacting with guests in our homes</li>
        <li>Working alongside us daily</li>
        <li>Becoming part of our families</li>
      </ul>

      <p>A robot in a business suit sends a different message than one in casual wear. A robot with weather protection is more practical for outdoor work. And a robot with your company's branding reinforces your brand identity.</p>

      <h2>The Market Opportunity</h2>
      <p>The personalization market for consumer tech is massive. Phone cases alone are a $30 billion industry. Custom car accessories? Over $50 billion. Sneaker customization and collectibles? Another multi-billion dollar market.</p>

      <p>Robot fashion has the potential to be even bigger because:</p>
      <ul>
        <li><strong>Higher price points:</strong> Robot apparel is more substantial than a phone case</li>
        <li><strong>Recurring purchases:</strong> Seasonal collections, work vs. casual, protective gear</li>
        <li><strong>B2B + B2C:</strong> Both consumer and enterprise markets</li>
        <li><strong>First-mover advantage:</strong> The category doesn't exist yet</li>
      </ul>

      <h2>What Robot Owners Actually Want</h2>
      <p>We've spoken to early adopters, enterprise customers, and robotics enthusiasts. Here's what they're looking for:</p>

      <h3>1. Compatibility Clarity</h3>
      <p>Every robot model has different dimensions. Tesla Optimus is 5'8" with a 42cm torso. Figure 01 is 5'6" with a 40cm torso. Buyers need confidence that products will fit their specific model.</p>

      <h3>2. Quality Over Novelty</h3>
      <p>These aren't Halloween costumes. Buyers want durable, weather-resistant, professional-grade apparel that will last.</p>

      <h3>3. Functional Design</h3>
      <p>Easy access to charging ports. Materials that don't interfere with sensors. Designs that allow full range of motion. Form AND function matter.</p>

      <h3>4. Style Options</h3>
      <p>From executive suits to casual wear, protective gear to accessories—variety is key.</p>

      <h2>The Technical Challenges</h2>
      <p>Creating apparel for robots isn't as simple as shrinking human clothing. We're dealing with:</p>
      <ul>
        <li><strong>Non-human proportions:</strong> Different arm lengths, torso shapes, joint flexibility</li>
        <li><strong>Sensor placement:</strong> Cameras, LIDAR, and other sensors can't be obstructed</li>
        <li><strong>Charging access:</strong> Daily charging means easy port access is critical</li>
        <li><strong>Movement requirements:</strong> Robots need full range of motion</li>
        <li><strong>Material considerations:</strong> Some fabrics interfere with electronics</li>
      </ul>

      <p>These challenges create a moat. This isn't something anyone can do well. It requires deep understanding of robotics, materials science, and fashion design.</p>

      <h2>The Enterprise Opportunity</h2>
      <p>While consumer demand is exciting, the enterprise market is massive:</p>

      <h3>Company Branding</h3>
      <p>Businesses will want robots branded with their logos, colors, and style. Think restaurant robots in branded uniforms, retail robots in store colors, hotel robots in professional attire.</p>

      <h3>Industry-Specific Gear</h3>
      <p>Healthcare robots need different apparel than warehouse robots. Construction sites require hi-vis and protective gear. Hospitality demands elegant, professional styling.</p>

      <h3>Seasonal & Event-Based</h3>
      <p>Hotels might want holiday-themed outfits. Convention centers need event-specific branding. Retail stores want seasonal collections.</p>

      <h2>Why Now?</h2>
      <p>The timing is perfect. We're at the inflection point where:</p>
      <ul>
        <li>Multiple manufacturers are shipping consumer robots</li>
        <li>Price points are dropping to consumer-accessible levels ($10K-50K)</li>
        <li>Use cases are proven (not just research toys)</li>
        <li>Public perception is shifting from fear to curiosity to excitement</li>
        <li>Zero established competition in robot fashion</li>
      </ul>

      <p>In five years, robot apparel will be as normal as phone cases. But right now, we have the opportunity to define what "good" looks like.</p>

      <h2>The Future of Robot Personalization</h2>
      <p>Robot fashion is just the beginning. We envision a world where:</p>
      <ul>
        <li>Robots have wardrobes for different occasions</li>
        <li>Custom designs and limited editions create collectibility</li>
        <li>Seasonal collections drive recurring revenue</li>
        <li>Community-designed apparel creates engagement</li>
        <li>Partnerships with brands extend beyond tech into lifestyle</li>
      </ul>

      <h2>Join the Movement</h2>
      <p>We're building BotOutfit to be the first and best brand in robot fashion. We're:</p>
      <ul>
        <li>Working directly with robot manufacturers for perfect fit</li>
        <li>Using premium, functional materials</li>
        <li>Designing with both form and function in mind</li>
        <li>Building a community of early adopters</li>
      </ul>

      <p>The robot revolution is here. Let's make sure our robots look their best.</p>

      <p class="cta-box">Ready to be part of the future? <a href="/#waitlist">Join our waitlist</a> to get early access when we launch.</p>
    `,
  }

  return contentMap[id] || '<p>Content coming soon...</p>'
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  const fullContent = getFullBlogContent(params.id)

  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/blog" className="hover:text-[#00D9FF] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white">{post.category}</span>
          </div>

          {/* Post Header */}
          <div className="mb-8">
            <span className="text-[#00D9FF] font-semibold text-sm uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,217,255,0.1)_25%,rgba(0,217,255,0.1)_50%,transparent_50%,transparent_75%,rgba(0,217,255,0.1)_75%,rgba(0,217,255,0.1))] bg-[length:40px_40px]" />
            <div className="relative z-10 text-9xl">🤖</div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#00D9FF] prose-a:no-underline hover:prose-a:text-[#00F0FF]
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-gray-300 prose-ul:my-6
              prose-li:mb-2
              [&_.lead]:text-xl [&_.lead]:text-gray-200 [&_.lead]:mb-8
              [&_.cta-box]:bg-gradient-to-r [&_.cta-box]:from-[#00D9FF]/10 [&_.cta-box]:to-transparent
              [&_.cta-box]:border-l-4 [&_.cta-box]:border-[#00D9FF] [&_.cta-box]:p-6 [&_.cta-box]:my-8
            "
            dangerouslySetInnerHTML={{ __html: fullContent }}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Read More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00D9FF]/50 transition-all"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-4xl">📝</div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#00D9FF] font-semibold uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
