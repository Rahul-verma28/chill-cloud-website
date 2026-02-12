'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#d4af37]/5 rounded-full blur-[120px] animate-float" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display' }}>
              CIGA-ROLLS <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">PREMIUM</span> SHOWCASE
            </h2>
            <div className="w-64 h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8" />
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Crafted for connoisseurs. Your daily dose of chill.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Product Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-[#d4af37]/20 group">
              <Image
                src="/images/files-9072929-2026-02-11t09-30-25-110z-image.png"
                alt="Chillcloud Ciga-Rolls Product Showcase"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

              {/* Inner Glow */}
              <div className="absolute inset-0 border-[10px] border-black/20 pointer-events-none" />
            </div>
            {/* Absolute Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl animate-pulse" />
          </motion.div>

          {/* Right - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display' }}>
                  Hand-Rolled Excellence
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  Each Chillcloud ciga-roll is meticulously crafted by our team of 70-100 skilled artisans using premium materials. We blend traditional rolling techniques with modern quality control to deliver an unparalleled smoking experience.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Premium Hand-Rolled', desc: 'Carefully crafted by master artisans' },
                  { title: 'Multiple Flavors', desc: 'Mango, Berry, Paan & more' },
                  { title: 'Superior Quality', desc: 'Premium materials and organic ingredients' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-all duration-300">
                      <span className="text-[#d4af37] font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-[#d4af37] transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black font-bold rounded-xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto">
                VIEW ALL PRODUCTS
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
