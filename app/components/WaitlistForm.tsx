'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error)
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/20">
          <svg className="w-5 h-5 text-[#CCFF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-[#CCFF00] font-display font-medium text-sm">{message || "You're on the list. Welcome to the future."}</span>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto" id="waitlist">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-5 py-3.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-600 text-sm font-body focus:outline-none focus:border-[#CCFF00]/40 focus:bg-white/[0.06] transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3.5 rounded-lg bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#d4ff33] transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? '...' : 'Join'}
        </button>
      </div>

      {status === 'error' && (
        <p className="mt-3 text-red-400 text-xs">{message}</p>
      )}
    </form>
  )
}
