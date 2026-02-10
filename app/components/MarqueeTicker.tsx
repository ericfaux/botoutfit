'use client'

interface MarqueeTickerProps {
  text?: string
  speed?: 'normal' | 'fast'
  className?: string
  separator?: string
}

export default function MarqueeTicker({
  text = 'DRESS THE FUTURE • ROBOT FASHION • EST. 2026 • PREMIUM APPAREL • DESIGNED FOR MACHINES •',
  speed = 'normal',
  className = '',
  separator = '',
}: MarqueeTickerProps) {
  const animationClass = speed === 'fast' ? 'animate-marquee-fast' : 'animate-marquee'
  const content = separator ? `${text} ${separator} ` : `${text} `

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animationClass}`}>
        <span className="inline-block pr-8">{content}</span>
        <span className="inline-block pr-8">{content}</span>
        <span className="inline-block pr-8">{content}</span>
        <span className="inline-block pr-8">{content}</span>
      </div>
    </div>
  )
}
