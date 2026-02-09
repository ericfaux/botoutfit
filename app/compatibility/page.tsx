'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getCompatibleProducts } from '@/lib/products'

const robotModels = [
  {
    id: 'tesla-optimus-1',
    name: 'Tesla Optimus Gen 1',
    manufacturer: 'Tesla',
    height: '5\'8"',
    torso: '42cm',
    arms: '65cm',
    status: 'Q4 2026',
    statusColor: 'yellow'
  },
  {
    id: 'figure-01',
    name: 'Figure 01',
    manufacturer: 'Figure AI',
    height: '5\'6"',
    torso: '40cm',
    arms: '63cm',
    status: 'Shipping',
    statusColor: 'green'
  },
  {
    id: 'unitree-g1',
    name: 'Unitree G1',
    manufacturer: 'Unitree',
    height: '5\'2"',
    torso: '38cm',
    arms: '60cm',
    status: 'Available',
    statusColor: 'green'
  },
]

export default function CompatibilityPage() {
  const [selectedRobot, setSelectedRobot] = useState<string | null>(null)

  const compatibleProducts = selectedRobot 
    ? getCompatibleProducts(robotModels.find(r => r.id === selectedRobot)?.name || '')
    : []

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-[#00D9FF]/20 blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Perfect <span className="text-[#00D9FF]">Fit</span> Guaranteed
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Model-specific sizing for every robot. Select yours below.
          </motion.p>
        </div>
      </section>

      {/* Robot Selection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {robotModels.map((robot, i) => (
              <motion.button
                key={robot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedRobot(robot.id)}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-8 rounded-3xl text-left transition-all duration-300 ${
                  selectedRobot === robot.id
                    ? 'bg-gradient-to-br from-[#00D9FF]/20 to-purple-500/10 border-2 border-[#00D9FF] shadow-2xl shadow-[#00D9FF]/20'
                    : 'bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-xl'
                }`}
              >
                {/* Pulsing glow for selected */}
                <AnimatePresence>
                  {selectedRobot === robot.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-2 bg-gradient-to-r from-[#00D9FF]/30 to-purple-500/30 rounded-3xl blur-xl -z-10"
                    />
                  )}
                </AnimatePresence>
                
                {/* Selected indicator */}
                <AnimatePresence>
                  {selectedRobot === robot.id && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#00D9FF] flex items-center justify-center shadow-lg shadow-[#00D9FF]/50"
                    >
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Abstract icon instead of emoji */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />
                  <div className="absolute inset-2 border border-white/10 rounded-md" />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors ${
                    selectedRobot === robot.id ? 'bg-cyan-400' : 'bg-white/30'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-2">{robot.name}</h3>
                <p className="text-sm text-gray-400 mb-6">{robot.manufacturer}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Height</span>
                    <span className="text-white font-medium">{robot.height}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Torso</span>
                    <span className="text-white font-medium">{robot.torso}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Arms</span>
                    <span className="text-white font-medium">{robot.arms}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium ${
                    robot.statusColor === 'green'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {robot.status}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Products */}
      <AnimatePresence mode="wait">
        {selectedRobot && (
          <motion.section
            key={selectedRobot}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                Compatible with{' '}
                <span className="text-[#00D9FF]">
                  {robotModels.find(r => r.id === selectedRobot)?.name}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {compatibleProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={`/shop/${product.id}`}
                      className="group block relative"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF]/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
                      <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group-hover:border-[#00D9FF]/30 transition-all backdrop-blur-xl">
                        <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px]" />
                          {/* Abstract icon */}
                          <div className="relative w-20 h-20">
                            <div className="absolute inset-0 border-2 border-white/10 rounded-full group-hover:border-cyan-500/30 transition-colors" />
                            <div className="absolute inset-3 border border-white/5 rounded-full group-hover:border-cyan-500/20 transition-colors" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="text-xs text-[#00D9FF] font-semibold uppercase tracking-wider">
                            {product.category}
                          </span>
                          <h3 className="text-white font-semibold mt-2 mb-2 group-hover:text-[#00D9FF] transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-lg font-bold text-white">${product.price}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Size Chart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Universal Size <span className="text-[#00D9FF]">Chart</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <div className="min-w-[800px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    {['Size', 'Height', 'Torso', 'Arms', 'Models'].map((header) => (
                      <th key={header} className="px-6 py-4 text-left text-white font-semibold text-sm">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { size: 'S', height: '5\'4" - 5\'8"', torso: '40-42cm', arms: '63-66cm', models: 'Figure 01, Unitree G1' },
                    { size: 'M', height: '5\'8" - 6\'0"', torso: '42-45cm', arms: '66-70cm', models: 'Tesla Optimus' },
                    { size: 'L', height: '6\'0" - 6\'2"', torso: '45-48cm', arms: '70-73cm', models: 'Atlas' },
                  ].map((row, i) => (
                    <motion.tr
                      key={row.size}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-medium">{row.size}</td>
                      <td className="px-6 py-4 text-gray-300">{row.height}</td>
                      <td className="px-6 py-4 text-gray-300">{row.torso}</td>
                      <td className="px-6 py-4 text-gray-300">{row.arms}</td>
                      <td className="px-6 py-4 text-gray-300">{row.models}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D9FF]/5 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Don't See Your Robot?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let us know which model you have and we'll prioritize it.
            </p>
            <a 
              href="mailto:hello@botoutfit.com?subject=Robot Model Request"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00D9FF] to-[#00B8CC] text-black font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all duration-300 hover:scale-105"
            >
              Request Support
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
