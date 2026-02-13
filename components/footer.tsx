'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'Products', href: '#products' },
      { name: 'About Us', href: '#about' },
      { name: 'Flavors', href: '#flavors' },
      { name: 'Infrastructure', href: '#infrastructure' }
    ],
    collection: [
      { name: 'Luxury Ciga-Rolls', href: '#' },
      { name: 'Artisan Cones', href: '#' },
      { name: 'Slim Series', href: '#' },
      { name: 'Gold Collection', href: '#' },
      { name: 'Elite Accessories', href: '#' }
    ]
  }

  return (
    <footer id="contact" className="relative text-white overflow-hidden border-t border-white/5 bg-[#0D0B09]">

      {/* Animated Brownish Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#12100E] via-[#0D0D0D] to-[black]" />

        {/* Shifting Animated Glows */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#D4AF37]/[0.05] rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[#8B4513]/[0.08] rounded-full blur-[150px] pointer-events-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <div className="relative w-20 h-20">
                <Image
                  src="/Logo-white.png"
                  alt="Chillcloud"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Playfair Display' }}>
                Chillcloud
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Crafting premium experiences for the modern connoisseur. Our dedication to artisanal excellence defines the gold standard of relaxation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase">Discovery</h4>
            <ul className="space-y-4">
              {links.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white hover:font-bold transition-colors text-sm font-light flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog */}
          <div className="space-y-8">
            <h4 className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase">Collections</h4>
            <ul className="space-y-4">
              {links.collection.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white hover:font-bold transition-colors text-sm font-light flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#d4af37] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase">Concierge</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37]/10 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Inquiries</p>
                  <p className="text-sm font-medium hover:text-[#d4af37] transition-colors">+91 8092-3238-05</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37]/10 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="text-sm font-medium hover:text-[#d4af37] transition-colors">contact@chillcloud.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37]/10 transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-sm font-medium leading-relaxed">G-247, Sector-63,<br />Noida, UP 201301</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
              © {currentYear} CHILLCLOUD INDIA LLP
            </p>
            <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold">
              <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Terms</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Artisan Certified</span>
            <div className="w-8 h-[1px] bg-[#d4af37]/30" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 rounded-full border border-[#d4af37]/40 border-t-[#d4af37]"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
