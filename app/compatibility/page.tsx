'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getCompatibleProducts } from '@/lib/products'
import GlowCard from '../components/GlowCard'
import ParticleField from '../components/ParticleField'

const robotModels = [
  {
    id: 'tesla-optimus-1',
    name: 'Tesla Optimus Gen 1',
    manufacturer: 'Tesla',
    height: '5\'8"',
    torso: '42cm',
    arms: '65cm',
    status: 'Q4 2026',
    statusColor: 'yellow',
    color: '#CCFF00',
  },
  {
    id: 'figure-01',
    name: 'Figure 01',
    manufacturer: 'Figure AI',
    height: '5\'6"',
    torso: '40cm',
    arms: '63cm',
    status: 'Shipping',
    statusColor: 'green',
    color: '#A855F7',
  },
  {
    id: 'unitree-g1',
    name: 'Unitree G1',
    manufacturer: 'Unitree',
    height: '5\'2"',
    torso: '38cm',
    arms: '60cm',
    status: 'Available',
    statusColor: 'green',
    color: '#F59E0B',
  },
]

function RobotIcon({ color, isSelected }: { color: string; isSelected: boolean }) {
  return (
    <svg viewBox="0 0 64 80" className="w-14 h-18" fill="none">
      <rect
        x="18" y="4" width="28" height="20" rx="8"
        stroke={isSelected ? color : 'rgba(255,255,255,0.15)'}
        strokeWidth="1.5"
        fill={isSelected ? `${color}08` : 'transparent'}
      />
      <circle cx="26" cy="14" r="3" fill={isSelected ? `${color}90` : 'rgba(255,255,255,0.1)'} />
      <circle cx="38" cy="14" r="3" fill={isSelected ? `${color}90` : 'rgba(255,255,255,0.1)'} />
      <line x1="32" y1="24" x2="32" y2="30" stroke={isSelected ? `${color}40` : 'rgba(255,255,255,0.08)'} strokeWidth="1.5" />
      <path
        d="M18 30 Q18 28 22 28 L42 28 Q46 28 46 30 L46 58 Q46 62 42 62 L22 62 Q18 62 18 58 Z"
        stroke={isSelected ? `${color}50` : 'rgba(255,255,255,0.1)'}
        strokeWidth="1.5"
        fill={isSelected ? `${color}05` : 'transparent'}
      />
      <path d="M18 34 L10 42 L10 54" stroke={isSelected ? `${color}25` : 'rgba(255,255,255,0.06)'} strokeWidth="1" fill="none" />
      <path d="M46 34 L54 42 L54 54" stroke={isSelected ? `${color}25` : 'rgba(255,255,255,0.06)'} strokeWidth="1" fill="none" />
      <path d="M26 62 L25 74 L30 74" stroke={isSelected ? `${color}25` : 'rgba(255,255,255,0.06)'} strokeWidth="1" fill="none" />
      <path d="M38 62 L39 74 L34 74" stroke={isSelected ? `${color}25` : 'rgba(255,255,255,0.06)'} strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function CompatibilityPage() {
  const [selectedRobot, setSelectedRobot] = useState<string | null>(null)

  const compatibleProducts = selectedRobot
    ? getCompatibleProducts(robotModels.find(r => r.id === selectedRobot)?.name || '')
    : []

  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#050505] to-[#050505]" />
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-gradient-to-br from-[#CCFF00]/10 to-transparent blur-[150px]" />
        <ParticleField count={20} color="cyan" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Model-Specific Sizing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight mt-4"
          >
            Perfect <span className="text-gradient-lime">Fit</span> Guaranteed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 font-body max-w-2xl mx-auto"
          >
            Model-specific sizing for every robot. Select yours below.
          </motion.p>
        </div>
      </section>

      {/* Robot Selection */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {robotModels.map((robot, i) => (
              <motion.button
                key={robot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedRobot(robot.id)}
                className={`relative p-8 rounded-xl text-left transition-all duration-300 ${
                  selectedRobot === robot.id
                    ? 'border-2 shadow-xl'
                    : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]'
                }`}
                style={selectedRobot === robot.id ? {
                  borderColor: `${robot.color}60`,
                  backgroundColor: `${robot.color}08`,
                  boxShadow: `0 0 40px ${robot.color}15`,
                } : {}}
              >
                {/* Selected indicator */}
                <AnimatePresence>
                  {selectedRobot === robot.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: robot.color }}
                    >
                      <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Robot silhouette */}
                <div className="mb-6">
                  <RobotIcon color={robot.color} isSelected={selectedRobot === robot.id} />
                </div>

                <h3 className="text-2xl font-display font-semibold text-white mb-1">{robot.name}</h3>
                <p className="text-sm text-zinc-500 font-body mb-6">{robot.manufacturer}</p>

                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Height', value: robot.height },
                    { label: 'Torso', value: robot.torso },
                    { label: 'Arms', value: robot.arms },
                  ].map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center">
                      <span className="text-zinc-600 font-body">{spec.label}</span>
                      <span className="text-white font-display font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-display font-bold uppercase tracking-[0.15em] ${
                    robot.statusColor === 'green'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
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
            className="py-16 relative"
          >
            <div className="absolute inset-0 bg-white/[0.01]" />
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
                Compatible with{' '}
                <span style={{ color: robotModels.find(r => r.id === selectedRobot)?.color }}>
                  {robotModels.find(r => r.id === selectedRobot)?.name}
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {compatibleProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <GlowCard>
                      <Link href={`/shop/${product.id}`} className="block group">
                        <div className="relative aspect-square bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex items-center justify-center overflow-hidden rounded-t-xl">
                          <div className="absolute inset-0 bg-grid-dots opacity-20" />
                          <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-[#CCFF00]/30 transition-colors" />
                            <div className="absolute inset-3 border border-white/5 rounded-full group-hover:border-[#CCFF00]/20 transition-colors" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#CCFF00]/50 group-hover:bg-[#CCFF00] transition-colors" />
                          </div>
                        </div>
                        <div className="p-5">
                          <span className="text-[10px] font-display font-bold uppercase tracking-[0.15em] text-[#CCFF00]">
                            {product.category}
                          </span>
                          <h3 className="text-white font-display font-semibold mt-2 mb-2 group-hover:text-[#CCFF00] transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-lg font-display font-bold text-white">${product.price}</p>
                        </div>
                      </Link>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Size Chart */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Sizing Reference</span>
            <h2 className="text-4xl font-display font-bold text-white mt-4">
              Universal Size <span className="text-gradient-purple">Chart</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <div className="min-w-[800px] border border-white/[0.06] bg-white/[0.02] rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/[0.03]">
                  <tr>
                    {['Size', 'Height', 'Torso', 'Arms', 'Models'].map((header) => (
                      <th key={header} className="px-6 py-4 text-left text-white font-display font-semibold text-sm">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
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
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-6 py-4 text-white font-display font-medium">{row.size}</td>
                      <td className="px-6 py-4 text-zinc-400 font-body">{row.height}</td>
                      <td className="px-6 py-4 text-zinc-400 font-body">{row.torso}</td>
                      <td className="px-6 py-4 text-zinc-400 font-body">{row.arms}</td>
                      <td className="px-6 py-4 text-zinc-400 font-body">{row.models}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-purple-950/5 to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[150px]" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60">Custom Support</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4 mt-4">
              Don&apos;t See Your Robot?
            </h2>
            <p className="text-xl text-zinc-400 font-body mb-8">
              Let us know which model you have and we&apos;ll prioritize it.
            </p>
            <a
              href="mailto:hello@botoutfit.com?subject=Robot Model Request"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-[0.15em] hover:shadow-2xl hover:shadow-[#CCFF00]/30 transition-all duration-300 hover:scale-105"
            >
              Request Support
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
