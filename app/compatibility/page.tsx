'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getCompatibleProducts } from '@/lib/products'

const robotModels = [
  {
    id: 'tesla-optimus-1',
    name: 'Tesla Optimus Gen 1',
    manufacturer: 'Tesla',
    height: '5\'8" (173cm)',
    torso: '42cm',
    arms: '65cm',
    weight: '161 lbs (73 kg)',
    status: 'Coming Q4 2026',
    image: '🤖'
  },
  {
    id: 'tesla-optimus-2',
    name: 'Tesla Optimus Gen 2',
    manufacturer: 'Tesla',
    height: '5\'8" (173cm)',
    torso: '42cm',
    arms: '65cm',
    weight: '157 lbs (71 kg)',
    status: 'Coming 2027',
    image: '🤖'
  },
  {
    id: 'figure-01',
    name: 'Figure 01',
    manufacturer: 'Figure AI',
    height: '5\'6" (168cm)',
    torso: '40cm',
    arms: '63cm',
    weight: '130 lbs (59 kg)',
    status: 'Shipping to Enterprise',
    image: '🤖'
  },
  {
    id: 'unitree-g1',
    name: 'Unitree G1',
    manufacturer: 'Unitree Robotics',
    height: '5\'2" (160cm)',
    torso: '38cm',
    arms: '60cm',
    weight: '77 lbs (35 kg)',
    status: 'Available Now',
    image: '🤖'
  },
  {
    id: 'boston-dynamics-atlas',
    name: 'Boston Dynamics Atlas',
    manufacturer: 'Boston Dynamics',
    height: '6\'2" (188cm)',
    torso: '45cm',
    arms: '70cm',
    weight: '196 lbs (89 kg)',
    status: 'Research Platform',
    image: '🤖'
  },
  {
    id: 'sanctuary-phoenix',
    name: 'Sanctuary AI Phoenix',
    manufacturer: 'Sanctuary AI',
    height: '5\'7" (170cm)',
    torso: '41cm',
    arms: '64cm',
    weight: '155 lbs (70 kg)',
    status: 'Coming 2026',
    image: '🤖'
  },
]

export default function CompatibilityPage() {
  const [selectedRobot, setSelectedRobot] = useState<string | null>(null)

  const compatibleProducts = selectedRobot 
    ? getCompatibleProducts(robotModels.find(r => r.id === selectedRobot)?.name || '')
    : []

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Compatibility <span className="text-[#00D9FF]">Guide</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Find the perfect fit for your robot. Select your model below to see compatible products.
          </p>
        </div>
      </section>

      {/* Robot Selection */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Select Your Robot Model</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {robotModels.map(robot => (
              <button
                key={robot.id}
                onClick={() => setSelectedRobot(robot.id)}
                className={`relative p-6 rounded-2xl text-left transition-all ${
                  selectedRobot === robot.id
                    ? 'bg-gradient-to-br from-[#00D9FF]/20 to-[#00B8CC]/10 border-2 border-[#00D9FF]'
                    : 'bg-white/5 border border-white/10 hover:border-white/30'
                }`}
              >
                {/* Selected Indicator */}
                {selectedRobot === robot.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#00D9FF] flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}

                <div className="text-5xl mb-4">{robot.image}</div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{robot.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{robot.manufacturer}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Height:</span>
                    <span className="text-white">{robot.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Torso:</span>
                    <span className="text-white">{robot.torso}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Arms:</span>
                    <span className="text-white">{robot.arms}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className={`text-xs px-2 py-1 rounded ${
                    robot.status.includes('Available')
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {robot.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Products */}
      {selectedRobot && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Compatible Products for{' '}
              <span className="text-[#00D9FF]">
                {robotModels.find(r => r.id === selectedRobot)?.name}
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {compatibleProducts.map(product => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-[#00D9FF]/50 transition-all"
                >
                  <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-4xl">🤖</div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/80 backdrop-blur-sm">
                      <span className="text-[#00D9FF] text-xs font-semibold">Coming Soon</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#00D9FF] font-semibold uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="text-white font-semibold mt-2 mb-2 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-white">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            {compatibleProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400">No compatible products found for this model yet.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Size Guide Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Universal Size Chart</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 rounded-lg overflow-hidden">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Size</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Height</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Torso Width</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Arm Length</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Compatible Models</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">XS</td>
                  <td className="px-6 py-4 text-gray-300">5'0" - 5'4"</td>
                  <td className="px-6 py-4 text-gray-300">38-40cm</td>
                  <td className="px-6 py-4 text-gray-300">60-63cm</td>
                  <td className="px-6 py-4 text-gray-300">Custom/Small Bots</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">S</td>
                  <td className="px-6 py-4 text-gray-300">5'4" - 5'8"</td>
                  <td className="px-6 py-4 text-gray-300">40-42cm</td>
                  <td className="px-6 py-4 text-gray-300">63-66cm</td>
                  <td className="px-6 py-4 text-gray-300">Figure 01, Unitree G1</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">M</td>
                  <td className="px-6 py-4 text-gray-300">5'8" - 6'0"</td>
                  <td className="px-6 py-4 text-gray-300">42-45cm</td>
                  <td className="px-6 py-4 text-gray-300">66-70cm</td>
                  <td className="px-6 py-4 text-gray-300">Tesla Optimus, Sanctuary Phoenix</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">L</td>
                  <td className="px-6 py-4 text-gray-300">6'0" - 6'2"</td>
                  <td className="px-6 py-4 text-gray-300">45-48cm</td>
                  <td className="px-6 py-4 text-gray-300">70-73cm</td>
                  <td className="px-6 py-4 text-gray-300">Boston Dynamics Atlas</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">XL</td>
                  <td className="px-6 py-4 text-gray-300">6'2" - 6'6"</td>
                  <td className="px-6 py-4 text-gray-300">48-50cm</td>
                  <td className="px-6 py-4 text-gray-300">73-75cm</td>
                  <td className="px-6 py-4 text-gray-300">Large Industrial Bots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Don't See Your Robot CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Robot?</h2>
          <p className="text-gray-400 mb-8">
            We're constantly adding support for new models. Let us know which robot you have and we'll prioritize it.
          </p>
          <a 
            href="mailto:hello@botoutfit.com?subject=Robot Model Request"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all hover:scale-105"
          >
            Request Robot Model Support
          </a>
        </div>
      </section>
    </main>
  )
}
