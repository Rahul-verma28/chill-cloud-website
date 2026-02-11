'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/30">
              <span className="text-sm font-semibold text-primary">Premium Smoking Accessories</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-text-balance" style={{ fontFamily: 'Playfair Display' }}>
              Your Daily Dose of <span className="text-primary animate-glow">Chill</span>
            </h1>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-md">
              Crafted with precision by 70-100 skilled artisans. Premium hand-rolled ciga-rolls, pre-rolled cones, and finest rolling papers for the discerning connoisseur.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                Explore Products
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right image */}
          <div className="animate-slide-up relative" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/images/chatgpt-20image-20jan-204-2c-202026-2c-2010-09-26-20pm.png"
                alt="Premium Chillcloud Products"
                width={500}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
