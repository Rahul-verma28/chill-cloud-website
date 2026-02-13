'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ContactContent() {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            label: 'Direct Concierge',
            value: '+91 8092-3238-05',
            desc: 'Mon-Sat, 10am - 7pm',
            href: 'tel:+918092323805'
        },
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email Inquiries',
            value: 'contact@chillcloud.in',
            desc: 'Response within 24 hours',
            href: 'mailto:contact@chillcloud.in'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: 'Corporate Gallery',
            value: 'G-247, Sector-63, Noida',
            desc: 'Uttar Pradesh - 201301',
            href: 'https://maps.google.com'
        }
    ]

    return (
        <div className="bg-[#12100E] text-white overflow-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
                            Contact Concierge
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Connect with <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">Excellence</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
                            Experience personalized luxury. Reach out for bespoke inquiries, wholesale partnerships, or artisanal consultations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-5 space-y-6"
                        >
                            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>Corporate Details</h2>
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.href}
                                    className="group flex items-start gap-6 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#D4AF37]/30 hover:bg-white/[0.08] transition-all duration-500"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold mb-2">{info.label}</p>
                                        <p className="text-xl font-bold mb-1 text-white group-hover:text-[#D4AF37] transition-colors">{info.value}</p>
                                        <p className="text-sm text-gray-500 mt-1">{info.desc}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="p-8 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/10 rounded-[2rem] mt-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-white">Office Hours</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                                    <div>
                                        <p className="text-white/60 mb-1">Mon - Sat</p>
                                        <p className="text-white font-medium">10:00 AM - 07:00 PM</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 mb-1">Sunday</p>
                                        <p className="text-white font-medium">By Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-7 bg-white/5 border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-bl-[100%] pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-10">
                                    <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>Send Message</h3>
                                    <p className="text-gray-500">Your vision is our priority. Share your thoughts with us.</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">Email Address</label>
                                            <input
                                                type="email"
                                                className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20"
                                            placeholder="+91"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-2">Inquiry Details</label>
                                        <textarea
                                            rows={5}
                                            className="w-full bg-[#1A1612] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-white/20 resize-none"
                                            placeholder="How can we assist you?"
                                        />
                                    </div>

                                    <button className="w-full bg-[#D4AF37] text-black font-bold py-5 rounded-2xl transition-all hover:shadow-[0_20px_40px_-5px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 group">
                                        PROCEED WITH INQUIRY
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Decorative Branding */}
            <section className="py-24 border-t border-white/5 opacity-30">
                <div className="flex overflow-hidden relative group">
                    <div className="flex animate-marquee whitespace-nowrap gap-20 py-10">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-20">
                                <span className="text-6xl md:text-8xl font-black text-transparent stroke-white/20" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>CHILLCLOUD</span>
                                <span className="text-[#D4AF37] text-6xl md:text-8xl font-black">EXCELLENCE</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
