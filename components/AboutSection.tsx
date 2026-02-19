'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-black font-inter text-center pt-24 overflow-hidden relative min-h-[36rem]">
            {/* Background Logo - Subtle large logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.1] -z-0">
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
                Founded in 2024 • India's Leading Brand
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
                Crafted for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">Quality</span>, Built for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">Experience</span>
            </motion.h2>

            <div className="w-80 h-[0.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-12 z-10" />

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-5xl px-6 space-y-5 z-10"
            >
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-light">
                    Chillcloud India LLP is India&apos;s leading manufacturer, wholesaler, and trader of premium smoking products — including hand-rolled Ciga-Rolls, Slims, pre-rolled cones, and premium rolling papers. As innovators in the industry, Chillcloud has become synonymous with quality, craftsmanship, and an elevated smoking experience.
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light px-10">
                    Our state-of-the-art manufacturing facility and skilled workforce ensure every product meets the highest standards. We simplify the process so you can focus on the moment — we make it chill, so you can enjoy life to the fullest.
                </p>
            </motion.div>

            {/* Features/Stats Section */}
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-20 mt-10 w-full z-10"
                style={{ fontFamily: 'Playfair Display' }}
            >
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#d4af37] mb-1">8+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-300">Signature Flavors</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#d4af37] mb-1">100%</span>
                    <span className="text-xs uppercase tracking-widest text-gray-300">Quality Checked</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-[#d4af37] mb-1">70-100+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-300">Skilled Artisans</span>
                </div>
            </motion.div> */}
        </div>
    )
}

export default AboutSection
