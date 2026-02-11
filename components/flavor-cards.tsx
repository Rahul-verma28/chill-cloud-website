'use client'

import { useState } from 'react'

const flavors = [
  {
    name: 'Mango',
    emoji: '🥭',
    description: 'Sweet and tropical essence',
    color: 'from-orange-400 to-yellow-600'
  },
  {
    name: 'Berry',
    emoji: '🫐',
    description: 'Deep berry and blueberry notes',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Strawberry',
    emoji: '🍓',
    description: 'Sweet berries and strawberry',
    color: 'from-red-400 to-pink-600'
  },
  {
    name: 'Paan',
    emoji: '🍃',
    description: 'Green paan and fresh essence',
    color: 'from-green-400 to-emerald-600'
  },
  {
    name: 'Kiwi Mint',
    emoji: '🥝',
    description: 'Sweet kiwi and cool mint',
    color: 'from-lime-400 to-green-500'
  },
  {
    name: 'Blueberry Ice',
    emoji: '❄️',
    description: 'Crisp blueberry and icy cool',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Mint',
    emoji: '🌿',
    description: 'Refreshing cool mint essence',
    color: 'from-teal-400 to-green-600'
  },
  {
    name: 'Chocolate',
    emoji: '🍫',
    description: 'Rich chocolate essence',
    color: 'from-amber-700 to-brown-800'
  }
]

export default function FlavorCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="flavors" className="py-20 bg-secondary/20 relative">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-3xl blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            OUR CURATED FLAVORS
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Our product flavors is harmoniously blending art and innovation to unlock genuine and the exotic curated flavors.
          </p>
        </div>

        {/* Flavor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className="animate-slide-up group"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 rounded-xl overflow-hidden border border-secondary/30 hover:border-primary/50 transition-all duration-300">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${flavor.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                
                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {flavor.emoji}
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                      {flavor.name}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {flavor.description}
                    </p>
                  </div>
                </div>

                {/* Hover highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
