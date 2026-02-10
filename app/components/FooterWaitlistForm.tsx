'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function FooterWaitlistForm() {
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
        setMessage('Successfully subscribed!')
        setEmail('')
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5000)
      } else {
        setStatus('error')
        setMessage(data.error)
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 3000)
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          disabled={status === 'loading'}
          className="flex-1 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#CCFF00]/30 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-5 py-3 rounded-lg bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#d4ff33] transition-all whitespace-nowrap disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </form>

      {message && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-3 text-xs ${
            status === 'success' ? 'text-[#CCFF00]' : 'text-red-400'
          }`}
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  )
}
