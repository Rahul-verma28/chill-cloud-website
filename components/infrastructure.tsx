'use client'

import Image from 'next/image'

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-r-3xl blur-3xl transform -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            CORPORATE PROFILE & INFRASTRUCTURE
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up space-y-8" style={{ animationDelay: '0.1s' }}>
            {/* Company Brief */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display' }}>
                COMPANY BRIEF
              </h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Chillcloud India LLP is a premier manufacturer and wholesaler of luxury smoking accessories, committed to delivering excellence and sophistication. Our journey is driven by a passion for quality and a dedication to crafting the finest hand-rolled ciga-rolls and accessories.
              </p>
            </div>

            {/* Company Details */}
            <div className="space-y-3 bg-secondary/30 rounded-lg p-6 border border-secondary/30">
              <div className="flex justify-between items-start pb-3 border-b border-secondary/20">
                <span className="font-semibold text-primary uppercase text-sm">Legal Status</span>
                <span className="text-foreground/70">Limited Liability Partnership (LLP)</span>
              </div>
              <div className="flex justify-between items-start pb-3 border-b border-secondary/20">
                <span className="font-semibold text-primary uppercase text-sm">GST Information</span>
                <span className="text-foreground/70">09AAUFC2629K1ZW</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="font-semibold text-primary uppercase text-sm">Location</span>
                <span className="text-foreground/70">Noida, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Team */}
            <div>
              <h4 className="text-xl font-bold mb-3 text-primary" style={{ fontFamily: 'Playfair Display' }}>
                Our Skilled Team
              </h4>
              <p className="text-foreground/70 mb-3">
                With 70-100 dedicated artisans, our state-of-the-art production facility ensures high-volume, quality-controlled manufacturing.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">70-100 Artisans</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">Premium Quality</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">Expert Craftsmanship</span>
              </div>
            </div>
          </div>

          {/* Right - Images Grid */}
          <div className="animate-slide-up relative" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Large image */}
              <div className="sm:col-span-2 h-48 rounded-xl overflow-hidden border-2 border-secondary/30 hover:border-primary/50 transition-colors duration-300">
                <Image
                  src="/images/files-9072929-2026-02-11t09-30-50-563z-image.png"
                  alt="Chillcloud Factory Floor"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Company info box */}
              <div className="bg-secondary/30 rounded-xl p-6 border-2 border-secondary/30 hover:border-primary/50 transition-colors duration-300">
                <h4 className="text-sm font-bold text-primary mb-2 uppercase">Infrastructure</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  State-of-the-art production facility equipped with modern machinery and quality control systems.
                </p>
              </div>

              {/* Services box */}
              <div className="bg-secondary/30 rounded-xl p-6 border-2 border-secondary/30 hover:border-primary/50 transition-colors duration-300">
                <h4 className="text-sm font-bold text-primary mb-2 uppercase">Services</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Customized packaging, multiple payment modes, and nationwide shipping available.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Markets Section */}
        <div className="mt-16 pt-16 border-t border-secondary/30 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display' }}>
            OUR MARKETS & REACH
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Gujarat', 'Odisha', 'Delhi NCR', 'Chhattisgarh'].map((region) => (
              <div key={region} className="p-6 bg-secondary/20 rounded-lg border border-secondary/30 text-center hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300">
                <p className="font-semibold text-foreground">{region}</p>
                <p className="text-sm text-foreground/60 mt-1">Active Market</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
