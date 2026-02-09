export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BotOutfit",
    "description": "Premium apparel and accessories designed specifically for personal robots",
    "url": "https://botoutfit.com",
    "logo": "https://botoutfit.com/logo.png",
    "sameAs": [
      "https://twitter.com/botoutfit",
      "https://instagram.com/botoutfit"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
