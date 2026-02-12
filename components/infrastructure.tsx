'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4af37] text-sm md:text-base font-semibold tracking-[0.4em] uppercase mb-4 block">
              Operational Excellence
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display' }}>
              CORPORATE PROFILE & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">INFRASTRUCTURE</span>
            </h2>
            <div className="w-64 h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Company Brief */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide" style={{ fontFamily: 'Playfair Display' }}>
                The Artisanal Edge
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                Chillcloud India LLP is a premier manufacturer and wholesaler of luxury smoking accessories. Our facility in Noida is where traditional craftsmanship meets state-of-the-art production standards.
              </p>
            </div>

            {/* Company Details - Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Legal Status', val: 'LLP Partnership' },
                { label: 'GST Number', val: '09AAUFC2629K1ZW' },
                { label: 'Active Team', val: '70-100 Artisans' },
                { label: 'Global Standard', val: 'Quality Controlled' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#d4af37]/30 transition-all duration-300 group">
                  <p className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-1">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-[#f4d03f] transition-colors">{item.val}</p>
                </div>
              ))}
            </div>

            {/* Badge Group */}
            <div className="flex gap-4 flex-wrap pt-4">
              <div className="px-5 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase">
                Artisan Driven
              </div>
              <div className="px-5 py-2 bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] rounded-full text-xs font-bold tracking-widest uppercase">
                Premium Grade
              </div>
            </div>
          </motion.div>

          {/* Right - Interactive Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 h-64 rounded-3xl overflow-hidden border border-white/10 group">
                <Image
                  src="/images/files-9072929-2026-02-11t09-30-50-563z-image.png"
                  alt="Chillcloud Infrastructure"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-[#d4af37] font-bold text-xs uppercase tracking-widest mb-1">Production Hub</p>
                  <p className="text-white font-medium text-lg">World-Class Noida Facility</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-[#d4af37]/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-ping" />
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Rapid Logistics</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Advanced packaging and nationwide reach ensuring product integrity from factory to doorstep.
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-[#d4af37]/5 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4 text-[#d4af37] font-bold">
                  ★
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-tight">Quality Scale</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Capable of high-volume output without compromising our signature artisanal roll quality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Markets Section */}
        <div className="mt-24 pt-24 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-12 text-center text-white" style={{ fontFamily: 'Playfair Display' }}>
              OUR <span className="text-[#d4af37]">GLOBAL</span> MARKETS & REACH
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Gujarat', 'Odisha', 'Delhi NCR', 'Chhattisgarh'].map((region) => (
                <div key={region} className="group relative p-8 bg-white/5 rounded-2xl border border-white/5 text-center overflow-hidden transition-all duration-300 hover:border-[#d4af37]/30">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4af37]/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                  <p className="font-bold text-white text-lg tracking-wide group-hover:text-[#d4af37] transition-colors">{region}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Certified Market</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
