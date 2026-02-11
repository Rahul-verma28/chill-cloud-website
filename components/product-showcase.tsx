'use client'

import Image from 'next/image'

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-3xl blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            CIGA-ROLLS PREMIUM SHOWCASE
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          <p className="text-foreground/60 text-lg">
            Crafted for connoisseurs. Your daily dose of chill.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Display */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/files-9072929-2026-02-11t09-30-25-110z-image.png"
                alt="Chillcloud Ciga-Rolls Product Showcase"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="animate-slide-up relative z-10" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Hand-Rolled Excellence
                </h3>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Each Chillcloud ciga-roll is meticulously crafted by our team of 70-100 skilled artisans using premium materials. We blend traditional rolling techniques with modern quality control to deliver an unparalleled smoking experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Premium Hand-Rolled</h4>
                    <p className="text-foreground/60">Carefully crafted by master artisans</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Multiple Flavors</h4>
                    <p className="text-foreground/60">Mango, Berry, Strawberry, Paan & more</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Superior Quality</h4>
                    <p className="text-foreground/60">Premium materials and organic ingredients</p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 w-full">
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
