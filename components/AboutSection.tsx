'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-black font-inter text-center py-24 md:py-32 overflow-hidden relative min-h-[36rem]">
            {/* Background Logo - Subtle large logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.2] -z-0">
                <Image
                    src="/Logo-white.png"
                    alt="Chillcloud Background Logo"
                    width={600}
                    height={600}
                    className="object-contain"
                    priority
                />
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] animate-float"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs uppercase tracking-[0.4em] text-[#d4af37] font-semibold mb-6 px-6 py-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 z-10"
            >
                Since 2024 • The Gold Standard
            </motion.p>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl tracking-tight font-bold mb-8 text-white z-10 max-w-5xl px-4 leading-tight"
                style={{ fontFamily: 'Playfair Display' }}
            >
                Redefining <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">Lifestyle</span> Excellence
            </motion.h2>

            <div className="w-64 h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 z-10" />

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl px-6 space-y-8 z-10"
            >
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                    Chillcloud India LLP provides a premium platform for discerning connoisseurs who appreciate the intersection of tradition and modern luxury. Our strength lies in being quality-focused, artisan-driven, and experience-oriented — delivering world-class smoking accessories with maximum sophistication and care.
                </p>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    By combining centuries-old hand-rolling techniques with contemporary design aesthetics, we ensure every Ciga-roll and cone is a masterpiece of precision. Our commitment to excellence enhances every moment of relaxation, delivering reliable purity, superior craftsmanship, and the ultimate chill experience.
                </p>
            </motion.div>

            {/* Features/Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-12 mt-20 w-full z-10"
            >
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#d4af37] mb-1">100%</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Hand-Rolled</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#d4af37] mb-1">Premium</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Materials</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#d4af37] mb-1">Elite</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Artisans</span>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutSection
