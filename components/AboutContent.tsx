'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Factory, Users, ShieldCheck, Landmark, Target, Sparkles, PackageCheck, Leaf } from 'lucide-react'
import StatsSection from './StatsSection'

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
}

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } },
    viewport: { once: true }
}

const staggerChild = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export default function AboutContent() {
    const stats = [
        { icon: <Factory className="w-5 h-5" />, label: 'Established', value: '2024' },
        { icon: <Users className="w-5 h-5" />, label: 'Artisan Team', value: '70-100' },
        { icon: <ShieldCheck className="w-5 h-5" />, label: 'Legal Status', value: 'LLP' },
        { icon: <Landmark className="w-5 h-5" />, label: 'Headquarters', value: 'Noida, UP' }
    ]

    const products = [
        {
            icon: <Sparkles className="w-5 h-5" />,
            title: 'Hand-Rolled Ciga-Rolls & Slims',
            description: 'Original, Paan Kiwi Mint, American Freezer, Dubai Class, Spring Water, Commissioner, Double Apple, Kesar Saffron.'
        },
        {
            icon: <PackageCheck className="w-5 h-5" />,
            title: 'Pre-Rolled Cones',
            description: 'Ultra-thin French paper cones for a slow, natural burn. Available in King Size – Brown & White, ready to use with protective straws.'
        },
        {
            icon: <Leaf className="w-5 h-5" />,
            title: 'Premium Rolling Papers',
            description: 'Crafted from organic, high-quality materials for a clean, even burn. Available in Twin Pack, Trio Pack, Four Pack, Booklet, and Pro Pack formats in White and Brown.'
        }
    ]

    return (
        <div className="bg-[#12100E] text-white overflow-hidden">

            {/* ═══════════════════════════════════════════ */}
            {/* HERO SECTION */}
            {/* ═══════════════════════════════════════════ */}
            <section className="relative pt-40 pb-20 border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.5em] uppercase mb-6 block">
                            Our Story
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            About{' '}
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">
                                Chillcloud
                            </span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                            India&apos;s leading manufacturer, wholesaler, and trader of premium smoking products — where traditional precision meets modern luxury.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* ABOUT US + IMAGE — Bongchie-style layout */}
            {/* ═══════════════════════════════════════════ */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left: Text Content */}
                        <motion.div {...fadeUp} className="space-y-8">
                            {/* <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
                                <Factory className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">Founded in 2024</span>
                            </div> */}

                            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                About <span className="italic text-[#D4AF37]">Chillcloud India LLP</span>
                            </h2>

                            <div className="space-y-6 text-gray-400 font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    Founded in 2024, <span className="text-white font-medium">Chillcloud India LLP</span> is India&apos;s leading manufacturer, wholesaler, and trader of premium smoking products, including hand-rolled Ciga-Rolls, Slims, pre-rolled cones, and premium rolling papers. As innovators in the industry, Chillcloud has become synonymous with quality, craftsmanship, and an elevated smoking experience.
                                </p>
                                <p>
                                    Our state-of-the-art manufacturing facility and skilled workforce ensure every product meets the highest standards. From the ultra-thin pre-rolled cones to our flavorful hand-rolled Ciga-Rolls, every item undergoes rigorous quality checks to guarantee consistent performance, aesthetic appeal, and unmatched taste.
                                </p>
                            </div>

                            {/* Signature tagline */}
                            <div className="pt-4 border-t border-white/10">
                                <p className="text-white font-semibold text-lg italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    &ldquo;Chillcloud makes it chill, so you can enjoy life to the fullest.&rdquo;
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/building.png"
                                    alt="Chillcloud India LLP"
                                    fill
                                // className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent opacity-50" />
                            </div>
                            {/* Floating stats overlay */}
                            {/* <div className="absolute -bottom-6 -left-6 p-6 bg-[#1A1612]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                                <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">Workforce</p>
                                <p className="text-white text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>70-100+</p>
                                <p className="text-gray-500 text-xs mt-1">Skilled Artisans</p>
                            </div> */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════ */}
            {/* STATS ROW */}
            {/* ═══════════════════════════════════════════ */}
            {/* <section className="py-16 border-y border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                                    {stat.icon}
                                </div>
                                <p className="text-white text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>{stat.value}</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* ═══════════════════════════════════════════ */}
            {/* OUR MISSION */}
            {/* ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div {...fadeUp}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full mb-8">
                                <Target className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase">Our Purpose</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Our <span className="italic text-[#D4AF37]">Mission</span>
                            </h2>
                            <div className="relative">
                                {/* Decorative line */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                                    At Chillcloud, our mission is to bring ease, comfort, and exceptional quality to every smoking experience. We simplify the process so you can focus on the moment — <span className="text-white font-medium">we make it chill, so you can enjoy life to the fullest.</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Stats Section */}
            {/* <StatsSection /> */}
        </div>
    )
}
