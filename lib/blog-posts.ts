export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'why-robot-fashion-is-next-big-thing',
    title: 'Why Robot Fashion is the Next Big Thing',
    excerpt: 'Personal robots are coming to homes and workplaces worldwide. Here\'s why personalization will be just as important for robots as it is for smartphones.',
    date: '2026-02-09',
    author: 'BotOutfit Team',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: '/blog/robot-fashion.jpg'
  },
  {
    id: 'how-to-size-your-robot',
    title: 'How to Size Your Robot for Apparel',
    excerpt: 'A comprehensive guide to measuring your robot and finding the perfect fit. Learn about torso width, arm length, and more.',
    date: '2026-02-08',
    author: 'BotOutfit Team',
    category: 'Guides',
    readTime: '7 min read',
    image: '/blog/sizing-guide.jpg'
  },
  {
    id: 'tesla-optimus-style-guide',
    title: 'Tesla Optimus: A Complete Style Guide',
    excerpt: 'Everything you need to know about dressing your Tesla Optimus robot. From executive suits to casual wear.',
    date: '2026-02-07',
    author: 'BotOutfit Team',
    category: 'Style Guides',
    readTime: '6 min read',
    image: '/blog/optimus-style.jpg'
  },
  {
    id: 'history-of-robot-personalization',
    title: 'The History of Robot Personalization',
    excerpt: 'From industrial robots to personal companions - how customization has evolved in robotics.',
    date: '2026-02-06',
    author: 'BotOutfit Team',
    category: 'History',
    readTime: '8 min read',
    image: '/blog/robot-history.jpg'
  },
  {
    id: 'must-have-robot-accessories',
    title: '5 Must-Have Accessories for Every Robot Owner',
    excerpt: 'The essential accessories that every personal robot should have, from protective gear to stylish add-ons.',
    date: '2026-02-05',
    author: 'BotOutfit Team',
    category: 'Accessories',
    readTime: '4 min read',
    image: '/blog/accessories.jpg'
  },
]

export function getBlogPostById(id: string) {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string) {
  return blogPosts.filter(post => post.category === category)
}
