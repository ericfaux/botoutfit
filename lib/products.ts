export interface Product {
  id: string
  name: string
  category: 'outfits' | 'accessories' | 'protective' | 'care'
  price: number
  description: string
  compatibility: string[]
  image: string // placeholder for now
  features: string[]
  inStock: boolean
}

export const products: Product[] = [
  // OUTFITS
  {
    id: 'executive-suit-optimus',
    name: 'The Executive Suit - Tesla Optimus Edition',
    category: 'outfits',
    price: 199,
    description: 'Premium business attire for your robot. Perfect for office environments, client meetings, and professional settings.',
    compatibility: ['Tesla Optimus Gen 1', 'Tesla Optimus Gen 2'],
    image: '/products/executive-suit.jpg',
    features: [
      'Weather-resistant fabric',
      'Reinforced stitching at joints',
      'Easy-access charging ports',
      'Professional tailored fit',
      'Available in Navy, Charcoal, Black'
    ],
    inStock: false
  },
  {
    id: 'casual-weekend-set',
    name: 'Casual Weekend Set',
    category: 'outfits',
    price: 89,
    description: 'Comfortable everyday wear for home and leisure activities. Breathable, durable, and stylish.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01', 'Unitree G1'],
    image: '/products/casual-set.jpg',
    features: [
      'Soft cotton-poly blend',
      'Machine washable',
      'Adjustable fit system',
      'Available in multiple colors',
      'Universal compatibility'
    ],
    inStock: false
  },
  {
    id: 'athletic-gear-pro',
    name: 'Athletic Gear Pro',
    category: 'outfits',
    price: 119,
    description: 'Performance apparel for robots engaging in physical activities or outdoor work.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01'],
    image: '/products/athletic-gear.jpg',
    features: [
      'Moisture-wicking fabric',
      'High flexibility at joints',
      'Reflective safety strips',
      'UV protection (UPF 50+)',
      'Quick-dry material'
    ],
    inStock: false
  },
  {
    id: 'formal-evening-wear',
    name: 'Formal Evening Wear',
    category: 'outfits',
    price: 249,
    description: 'Elegant formal attire for special occasions, galas, and high-end events.',
    compatibility: ['Tesla Optimus Gen 1'],
    image: '/products/formal-wear.jpg',
    features: [
      'Premium wool blend',
      'Hand-tailored construction',
      'Includes bow tie and cummerbund',
      'Dry clean only',
      'Limited edition'
    ],
    inStock: false
  },
  {
    id: 'workwear-utility-set',
    name: 'Workwear Utility Set',
    category: 'outfits',
    price: 139,
    description: 'Heavy-duty work apparel with multiple pockets and reinforced panels for industrial environments.',
    compatibility: ['All Models'],
    image: '/products/workwear.jpg',
    features: [
      'Ripstop fabric',
      'Multiple tool pockets',
      'Reinforced elbow and knee panels',
      'High-visibility options available',
      'Oil and stain resistant'
    ],
    inStock: false
  },
  {
    id: 'winter-collection',
    name: 'Winter Collection - Insulated Jacket',
    category: 'outfits',
    price: 159,
    description: 'Thermal protection for cold weather operation. Keeps sensors clear and prevents frost buildup.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01'],
    image: '/products/winter-jacket.jpg',
    features: [
      'Insulated lining',
      'Water-resistant outer shell',
      'Adjustable hood',
      'Thermal rating to -20°F',
      'Sensor-friendly design'
    ],
    inStock: false
  },
  {
    id: 'summer-linen-set',
    name: 'Summer Linen Set',
    category: 'outfits',
    price: 99,
    description: 'Lightweight breathable apparel for hot weather. Optimal heat dissipation for robot cooling systems.',
    compatibility: ['All Models'],
    image: '/products/summer-linen.jpg',
    features: [
      '100% linen fabric',
      'Maximum breathability',
      'Light colors reduce heat absorption',
      'Easy to clean',
      'Elegant casual style'
    ],
    inStock: false
  },
  {
    id: 'holiday-special',
    name: 'Holiday Special - Festive Attire',
    category: 'outfits',
    price: 129,
    description: 'Seasonal outfit for holidays and celebrations. Make your robot part of the festivities!',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01', 'Unitree G1'],
    image: '/products/holiday-attire.jpg',
    features: [
      'Festive design options',
      'Comfortable fit',
      'Photo-ready styling',
      'Seasonal themes available',
      'Limited time offering'
    ],
    inStock: false
  },

  // ACCESSORIES
  {
    id: 'baseball-cap',
    name: 'Baseball Cap - Adjustable',
    category: 'accessories',
    price: 29,
    description: 'Classic baseball cap with adjustable strap. Protects head sensors from sun and debris.',
    compatibility: ['All Models'],
    image: '/products/baseball-cap.jpg',
    features: [
      'One size fits most',
      'Adjustable rear strap',
      'UV protection',
      'Embroidery customization available',
      'Multiple colors'
    ],
    inStock: false
  },
  {
    id: 'beanie-winter',
    name: 'Beanie - Winter Warmth',
    category: 'accessories',
    price: 24,
    description: 'Thermal head covering for cold weather. Sensor-friendly design.',
    compatibility: ['All Models'],
    image: '/products/beanie.jpg',
    features: [
      'Acrylic knit fabric',
      'Stretchy fit',
      'Thermal insulation',
      'Sensor cutouts',
      'Available in 8 colors'
    ],
    inStock: false
  },
  {
    id: 'scarf-knit',
    name: 'Scarf - Knit Wool Blend',
    category: 'accessories',
    price: 34,
    description: 'Elegant neck scarf. Functional and fashionable.',
    compatibility: ['All Models'],
    image: '/products/scarf.jpg',
    features: [
      '60" length',
      'Soft wool blend',
      'Multiple wrap styles',
      'Neutral colors',
      'Machine washable'
    ],
    inStock: false
  },
  {
    id: 'backpack-10l',
    name: 'Backpack - 10L Capacity',
    category: 'accessories',
    price: 79,
    description: 'Functional backpack designed for robot proportions. Carry tools, supplies, or personal items.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01'],
    image: '/products/backpack.jpg',
    features: [
      '10-liter capacity',
      'Padded shoulder straps',
      'Water-resistant material',
      'Multiple compartments',
      'Reflective strips'
    ],
    inStock: false
  },
  {
    id: 'messenger-bag',
    name: 'Messenger Bag - Professional',
    category: 'accessories',
    price: 89,
    description: 'Stylish crossbody bag for business environments. Perfect for carrying documents and devices.',
    compatibility: ['All Models'],
    image: '/products/messenger-bag.jpg',
    features: [
      'Premium canvas',
      'Adjustable strap',
      'Padded laptop compartment',
      'Professional appearance',
      'Quick-release buckle'
    ],
    inStock: false
  },
  {
    id: 'wrist-band-set',
    name: 'Wrist Band Set (3-pack)',
    category: 'accessories',
    price: 19,
    description: 'Colorful wrist bands for personalization. Mix and match colors.',
    compatibility: ['All Models'],
    image: '/products/wrist-bands.jpg',
    features: [
      'Set of 3 bands',
      'Silicone material',
      'Stretchy fit',
      '12 color options',
      'Easy on/off'
    ],
    inStock: false
  },
  {
    id: 'led-accent-strips',
    name: 'LED Accent Strips - RGB',
    category: 'accessories',
    price: 49,
    description: 'Programmable LED light strips for customization. Stand out at night.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01'],
    image: '/products/led-strips.jpg',
    features: [
      'RGB color changing',
      'App-controlled',
      'Battery powered',
      'Easy attachment',
      '16 million color options'
    ],
    inStock: false
  },
  {
    id: 'badge-collection',
    name: 'Badge Collection - 5 Pins',
    category: 'accessories',
    price: 12,
    description: 'Collectible pin badges. Show personality and interests.',
    compatibility: ['All Models'],
    image: '/products/badges.jpg',
    features: [
      'Set of 5 unique designs',
      'Magnetic backing',
      'Limited edition series',
      'Collectible packaging',
      'New designs monthly'
    ],
    inStock: false
  },
  {
    id: 'sunglasses-uv',
    name: 'Sunglasses - UV Protection',
    category: 'accessories',
    price: 39,
    description: 'Protective eyewear for optical sensors. Reduces glare and UV damage.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01'],
    image: '/products/sunglasses.jpg',
    features: [
      'UV400 protection',
      'Scratch-resistant lenses',
      'Lightweight frame',
      'Multiple styles',
      'Sensor-friendly design'
    ],
    inStock: false
  },
  {
    id: 'watch-strap-leather',
    name: 'Watch Strap - Leather',
    category: 'accessories',
    price: 29,
    description: 'Premium leather watch strap. Adds sophistication to your robot\'s wrist.',
    compatibility: ['All Models'],
    image: '/products/watch-strap.jpg',
    features: [
      'Genuine leather',
      'Adjustable sizing',
      'Multiple colors',
      'Stainless steel buckle',
      'Compatible with standard watches'
    ],
    inStock: false
  },

  // PROTECTIVE GEAR
  {
    id: 'rain-cover',
    name: 'Rain Cover - Full Body',
    category: 'protective',
    price: 69,
    description: 'Complete weather protection for rain and moisture. Essential for outdoor operation.',
    compatibility: ['All Models'],
    image: '/products/rain-cover.jpg',
    features: [
      'Fully waterproof',
      'Breathable fabric',
      'Easy on/off design',
      'Transparent face panel',
      'Compact storage pouch'
    ],
    inStock: false
  },
  {
    id: 'snow-jacket',
    name: 'Snow Jacket - Insulated',
    category: 'protective',
    price: 89,
    description: 'Heavy-duty winter protection. Prevents snow and ice buildup on sensors and joints.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01'],
    image: '/products/snow-jacket.jpg',
    features: [
      'Thermal insulation',
      'Water-resistant shell',
      'Reinforced seams',
      'Hood with visor',
      'Temperature rated to -30°F'
    ],
    inStock: false
  },
  {
    id: 'uv-protection-sleeves',
    name: 'UV Protection Sleeves',
    category: 'protective',
    price: 34,
    description: 'Arm sleeves with UPF 50+ sun protection. Extends lifespan of exterior components.',
    compatibility: ['All Models'],
    image: '/products/uv-sleeves.jpg',
    features: [
      'UPF 50+ protection',
      'Stretchy fit',
      'Moisture-wicking',
      'Sold as pair',
      'Multiple sizes'
    ],
    inStock: false
  },
  {
    id: 'charging-port-covers',
    name: 'Charging Port Cover Set',
    category: 'protective',
    price: 19,
    description: 'Waterproof covers for charging ports. Prevents dust, debris, and moisture damage.',
    compatibility: ['Tesla Optimus Gen 1', 'Figure 01', 'Unitree G1'],
    image: '/products/port-covers.jpg',
    features: [
      'Silicone construction',
      'Perfect fit seals',
      'Set of 4 covers',
      'Easy to install',
      'Model-specific sizing'
    ],
    inStock: false
  },
  {
    id: 'scratch-resistant-panels',
    name: 'Scratch-Resistant Panels',
    category: 'protective',
    price: 59,
    description: 'Transparent protective panels for high-wear areas. Maintains pristine appearance.',
    compatibility: ['Tesla Optimus Gen 1'],
    image: '/products/protective-panels.jpg',
    features: [
      'Clear polycarbonate',
      'Self-healing technology',
      'Easy adhesive application',
      'Covers chest, arms, legs',
      'Removes without residue'
    ],
    inStock: false
  },

  // CARE PRODUCTS
  {
    id: 'cleaning-kit',
    name: 'Complete Cleaning Kit',
    category: 'care',
    price: 29,
    description: 'Everything needed to keep robot apparel looking new. Specialized cleaning solutions.',
    compatibility: ['All Products'],
    image: '/products/cleaning-kit.jpg',
    features: [
      'Fabric cleaner spray',
      'Microfiber cloths (3x)',
      'Brush for stubborn stains',
      'Storage case',
      'Safe for all materials'
    ],
    inStock: false
  },
  {
    id: 'fabric-care-spray',
    name: 'Fabric Care Spray - 8oz',
    category: 'care',
    price: 15,
    description: 'Protective spray that repels water, stains, and dirt. Extends garment life.',
    compatibility: ['All Products'],
    image: '/products/fabric-spray.jpg',
    features: [
      '8oz bottle',
      'Water and stain repellent',
      'UV protectant included',
      'Eco-friendly formula',
      'Lasts 30+ applications'
    ],
    inStock: false
  },
]

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category)
}

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getCompatibleProducts(robotModel: string) {
  return products.filter(p => 
    p.compatibility.includes(robotModel) || 
    p.compatibility.includes('All Models') ||
    p.compatibility.includes('All Products')
  )
}
