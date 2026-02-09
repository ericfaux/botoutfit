import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductById, products } from '@/lib/products'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/shop" className="hover:text-[#00D9FF] transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-white">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,217,255,0.1)_25%,rgba(0,217,255,0.1)_50%,transparent_50%,transparent_75%,rgba(0,217,255,0.1)_75%,rgba(0,217,255,0.1))] bg-[length:40px_40px]" />
                <div className="relative z-10 text-9xl">🤖</div>
                
                {/* Coming Soon Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/80 backdrop-blur-sm border border-white/20">
                  <span className="text-[#00D9FF] text-sm font-semibold">Coming Soon</span>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                Product mockup - Actual product may vary
              </p>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-[#00D9FF] font-semibold uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                {!product.inStock && (
                  <span className="text-sm text-gray-500">Pre-order only</span>
                )}
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Notify Me Button */}
              <div className="mb-8">
                <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all hover:scale-105">
                  Notify Me When Available
                </button>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compatibility */}
              <div className="border-t border-white/10 pt-8">
                <h2 className="text-xl font-semibold text-white mb-4">Compatibility</h2>
                <div className="flex flex-wrap gap-3">
                  {product.compatibility.map(model => (
                    <div 
                      key={model}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white"
                    >
                      {model}
                    </div>
                  ))}
                </div>
                <Link 
                  href="/compatibility" 
                  className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00F0FF] transition-colors mt-4 text-sm"
                >
                  View full compatibility guide
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t border-white/10 pt-8 mt-8">
                <h2 className="text-xl font-semibold text-white mb-4">Shipping & Returns</h2>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free shipping on orders over $200</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1-year quality guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.id}`}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00D9FF]/50 transition-all"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-4xl">🤖</div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2 group-hover:text-[#00D9FF] transition-colors line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-bold text-white">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
