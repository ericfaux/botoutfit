'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const robotModels = [
  {
    id: 'optimus',
    name: 'Tesla Optimus',
    gen: 'Gen 2',
    height: '5\'8"',
    weight: '56 kg',
    status: 'Q4 2026',
    description: 'Tesla\'s flagship humanoid robot. Full wardrobe compatibility with our Executive and Casual lines.',
    color: '#CCFF00',
    outfitCount: 12,
  },
  {
    id: 'figure',
    name: 'Figure 01',
    gen: 'Production',
    height: '5\'6"',
    weight: '60 kg',
    status: 'Available Now',
    description: 'Enterprise-focused humanoid. Compatible with our Workwear and Protection collections.',
    color: '#00D9FF',
    outfitCount: 8,
  },
  {
    id: 'unitree',
    name: 'Unitree G1',
    gen: 'Consumer',
    height: '4\'3"',
    weight: '35 kg',
    status: 'Available Now',
    description: 'Compact consumer robot. Custom-fit accessories and protective gear designed for its unique frame.',
    color: '#A855F7',
    outfitCount: 6,
  },
]

function RobotSilhouette({ model, isActive }: { model: typeof robotModels[0]; isActive: boolean }) {
  const scale = model.id === 'unitree' ? 0.7 : model.id === 'figure' ? 0.9 : 1

  return (
    <svg
      viewBox="0 0 120 220"
      className="w-full h-full transition-all duration-500"
      style={{
        filter: isActive ? `drop-shadow(0 0 20px ${model.color}40)` : 'none',
        transform: `scale(${scale})`,
        transformOrigin: 'bottom center',
      }}
    >
      {/* Head */}
      <rect
        x="38" y="10" width="44" height="35" rx="12"
        fill={isActive ? `${model.color}10` : 'rgba(255,255,255,0.02)'}
        stroke={isActive ? `${model.color}80` : 'rgba(255,255,255,0.1)'}
        strokeWidth="1"
      />
      {/* Eyes */}
      <circle cx="50" cy="27" r="4" fill={isActive ? `${model.color}90` : 'rgba(255,255,255,0.15)'} />
      <circle cx="70" cy="27" r="4" fill={isActive ? `${model.color}90` : 'rgba(255,255,255,0.15)'} />

      {/* Neck */}
      <line x1="60" y1="45" x2="60" y2="55" stroke={isActive ? `${model.color}40` : 'rgba(255,255,255,0.08)'} strokeWidth="2" />

      {/* Torso */}
      <path
        d="M35 55 Q35 50 45 50 L75 50 Q85 50 85 55 L85 130 Q85 140 75 140 L45 140 Q35 140 35 130 Z"
        fill={isActive ? `${model.color}08` : 'rgba(255,255,255,0.02)'}
        stroke={isActive ? `${model.color}50` : 'rgba(255,255,255,0.08)'}
        strokeWidth="1"
      />

      {/* Arms */}
      <path d="M35 60 L20 85 L18 130 Q18 135 22 135 L28 135" stroke={isActive ? `${model.color}30` : 'rgba(255,255,255,0.06)'} strokeWidth="1.5" fill="none" />
      <path d="M85 60 L100 85 L102 130 Q102 135 98 135 L92 135" stroke={isActive ? `${model.color}30` : 'rgba(255,255,255,0.06)'} strokeWidth="1.5" fill="none" />

      {/* Legs */}
      <path d="M48 140 L46 190 Q46 198 50 198 L58 198" stroke={isActive ? `${model.color}30` : 'rgba(255,255,255,0.06)'} strokeWidth="1.5" fill="none" />
      <path d="M72 140 L74 190 Q74 198 70 198 L62 198" stroke={isActive ? `${model.color}30` : 'rgba(255,255,255,0.06)'} strokeWidth="1.5" fill="none" />

      {/* Outfit suggestion lines on torso */}
      {isActive && (
        <>
          <line x1="40" y1="65" x2="80" y2="65" stroke={`${model.color}25`} strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="90" x2="80" y2="90" stroke={`${model.color}25`} strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="115" x2="80" y2="115" stroke={`${model.color}25`} strokeWidth="0.5" strokeDasharray="3 3" />
        </>
      )}
    </svg>
  )
}

export default function RobotModelShowcase() {
  const [activeModel, setActiveModel] = useState(0)

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block text-[10px] font-display uppercase tracking-[0.3em] text-[#CCFF00]/60 mb-4">
            Compatible Models
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Designed for Every <span className="text-gradient-lime">Robot</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Robot silhouettes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 flex items-end justify-center gap-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[100px]"
                style={{ backgroundColor: `${robotModels[activeModel].color}15` }}
              />
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {robotModels.map((model, i) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(i)}
                className={`relative h-full transition-all duration-500 cursor-pointer ${
                  i === activeModel ? 'w-32 md:w-40 opacity-100' : 'w-20 md:w-28 opacity-40 hover:opacity-60'
                }`}
              >
                <RobotSilhouette model={model} isActive={i === activeModel} />
                <div className={`text-center mt-2 text-xs font-display uppercase tracking-wider transition-colors ${
                  i === activeModel ? 'text-white' : 'text-zinc-600'
                }`}>
                  {model.name.split(' ')[0]}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Model details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-display font-bold text-white">
                    {robotModels[activeModel].name}
                  </h3>
                  <span
                    className="px-3 py-1 rounded-md text-[10px] font-display uppercase tracking-wider"
                    style={{
                      backgroundColor: `${robotModels[activeModel].color}15`,
                      color: robotModels[activeModel].color,
                      border: `1px solid ${robotModels[activeModel].color}30`,
                    }}
                  >
                    {robotModels[activeModel].gen}
                  </span>
                </div>

                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {robotModels[activeModel].description}
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: 'Height', value: robotModels[activeModel].height },
                    { label: 'Weight', value: robotModels[activeModel].weight },
                    { label: 'Status', value: robotModels[activeModel].status },
                    { label: 'Outfits', value: `${robotModels[activeModel].outfitCount} available` },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06]"
                    >
                      <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-display mb-1">{spec.label}</div>
                      <div className="text-lg font-display font-semibold text-white">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Model selector pills */}
                <div className="flex gap-2">
                  {robotModels.map((model, i) => (
                    <button
                      key={model.id}
                      onClick={() => setActiveModel(i)}
                      className={`flex-1 py-3 rounded-lg text-[11px] font-display font-medium uppercase tracking-[0.1em] transition-all ${
                        i === activeModel
                          ? 'text-black'
                          : 'bg-white/[0.03] text-zinc-500 border border-white/[0.06] hover:border-white/20 hover:text-white'
                      }`}
                      style={i === activeModel ? {
                        backgroundColor: model.color,
                      } : {}}
                    >
                      {model.name.split(' ').pop()}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
