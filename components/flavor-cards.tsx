'use client'

import { motion } from 'framer-motion'

const flavors = [
  {
    name: 'Exotic Mango',
    type: 'Tropical Essence',
    description: 'The pure, sun-ripened depth of tropical paired with artisanal rolling.',
    tag: 'Popular'
  },
  {
    name: 'Wild Berry',
    type: 'Forest Blend',
    description: 'A deep, mysterious fusion of mountain berries and indigo notes.',
    tag: 'Classic'
  },
  {
    name: 'Sweet Paan',
    type: 'Heritage Spice',
    description: 'A traditional masterpiece blending fresh green leaves with exotic sweetness.',
    tag: 'Signature'
  },
  {
    name: 'Cool Mint',
    type: 'Pure Refreshment',
    description: 'Triple-distilled mint essence for a crisp, elevated finishing note.',
    tag: 'Essential'
  },
  {
    name: 'Strawberry',
    type: 'Summer Fresh',
    description: 'Vibrant, hand-picked strawberry notes for a sophisticated sweet profile.',
    tag: 'Fruity'
  },
  {
    name: 'Kiwi Mint',
    type: 'Exotic Fusion',
    description: 'A complex balance of tart kiwi zest and refreshing menthol.',
    tag: 'Modern'
  },
  {
    name: 'Royal Paan',
    type: 'Premium Blend',
    description: 'The gold standard of paan, featuring our most exclusive spice selection.',
    tag: 'Luxury'
  },
  {
    name: 'Dark Choco',
    type: 'Rich Velvet',
    description: 'Decadent cocoa undertones for a smooth, dessert-inspired experience.',
    tag: 'Indulgent'
  }
]

export default function FlavorCards() {
  return (
    <section id="flavors" className="py-24 md:py-32 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background radial glow - Warm Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 block">
              Sensory Experience
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#F9F7F2]" style={{ fontFamily: 'var(--font-playfair)' }}>
              OUR <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">CURATED</span> FLAVORS
            </h2>
            <div className="w-64 h-[0.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Harmoniously blending tradition and innovation to unlock the most exquisite and exotic curated profiles.
            </p>
          </motion.div>
        </div>

        {/* Flavor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-72 rounded-[2rem] p-8 overflow-hidden bg-[#151515] border border-white/[0.1] transition-all duration-700 hover:border-[#D4AF37]/80 hover:-translate-y-2">
                {/* Glow behind card */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] blur-sm" />

                {/* Card Content Interior */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                        {flavor.tag}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#F9F7F2] group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {flavor.name}
                    </h3>
                    <p className="text-[#D4AF37]/95 text-xs font-semibold tracking-widest uppercase">
                      {flavor.type}
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                    {flavor.description}
                  </p>
                </div>

                {/* Subtle light sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
