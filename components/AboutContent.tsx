'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Landmark, Users, Globe, ShieldCheck, Factory, Award, Target, Zap } from 'lucide-react'
import StatsSection from './StatsSection'

export default function AboutContent() {
    const stats = [
        { icon: <Factory className="w-6 h-6" />, label: 'Established', value: '2024' },
        { icon: <Users className="w-6 h-6" />, label: 'Artisan Team', value: '70-100' },
        { icon: <ShieldCheck className="w-6 h-6" />, label: 'Legal Status', value: 'LLP Partnership' },
        { icon: <Landmark className="w-6 h-6" />, label: 'Headquarters', value: 'Noida, UP' }
    ]

    const markets = ['Gujarat', 'Odisha', 'Delhi NCR', 'Chhattisgarh']

    return (
        <div className="bg-[#12100E] text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <span className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-6 block">
                            The Chillcloud Legacy
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Defining <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">Artisanal</span> Mastery
                        </h1>
                        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                            Established in 2024, Chillcloud India LLP stands as the definitive manufacturer and wholesaler of elite smoking accessories, where traditional precision meets modern luxury.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership & Legacy */}
            <section className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-4 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full">
                                < Award className="w-4 h-4 text-[#D4AF37]" />
                                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">Visionary Leadership</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Guided by <span className="italic text-[#D4AF37]">Innovation</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
                                <p>
                                    Under the stewardship of <span className="text-white font-medium">Mrs. Jyoti Kumari</span> and <span className="text-white font-medium">Nitin Sharma</span>, our authorized leaders, Chillcloud has attained outstanding success. Their commitment to innovative business ideas and excellent management skills ensures we remain at the forefront of the industry.
                                </p>
                                <p>
                                    We are more than a manufacturer; we are caretakers of a craft. Every roll, every cone, and every leaf is a testament to our dedication to purity and the ultimate chill experience.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                {stats.map((stat, i) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-[#D4AF37]/30 transition-all duration-500 group">
                                        <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                            {stat.icon}
                                        </div>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">{stat.label}</p>
                                        <p className="text-white font-bold text-lg">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/team.png"
                                alt="Infrastructure"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-10 left-10 p-8 backdrop-blur-xl bg-black/40 rounded-3xl border border-white/10 max-w-sm">
                                <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2">Our Foundation</h4>
                                <p className="text-white/80 text-sm italic">"Advanced infrastructure spread over wide land, ensuring impeccable finish for every piece."</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            {/* <section className="py-24 bg-black/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Our <span className="text-[#D4AF37]">Global</span> Reach
                        </h3>
                        <p className="text-gray-500 max-w-2xl mx-auto">Currently delivering the gold standard of relaxation across premium markets in India.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {markets.map((region, i) => (
                            <motion.div
                                key={region}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-[#1A1612] border border-white/5 rounded-[2rem] text-center hover:border-[#D4AF37]/40 hover:-translate-y-2 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mx-auto mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <p className="text-white font-bold text-xl mb-1">{region}</p>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Market Pillar</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Dynamic Stats Section */}
            <StatsSection />

            {/* Operational Details */}
            {/* <section className="py-24 bg-gradient-to-b from-[#1A1612]/90 to-[#1A1612]/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-6">Service Logistics</h4>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">Customized Packaging</p>
                                    <p className="text-gray-500 text-sm">Tailored solutions available to meet specific client requirements and brand standards.</p>
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg mb-1">Fast Shipment</p>
                                    <p className="text-gray-500 text-sm">Efficient distribution network via Road and Air to ensure nationwide reach.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4"
                        >
                            <h4 className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-6">Payment & Terms</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                                    Cash & Digital Transfers
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                                    Corporate Cheque
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                                    Credit & Debit Solutions
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-3xl"
                        >
                            <p className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-4">Statutory Profile</p>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-tighter mb-1">GSTIN Number</p>
                                    <p className="text-white font-mono text-xs">09AAUFC2629K1ZW</p>
                                </div>
                                <div>
                                    <p className="text-white/40 text-[10px] uppercase tracking-tighter mb-1">Banking Partner</p>
                                    <p className="text-white text-sm">Kotak Mahindra Bank</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
