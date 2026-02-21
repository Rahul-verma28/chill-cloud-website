'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ShoppingBag, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function NotFound() {
    return (
        <div className="bg-[#12100E] min-h-screen text-white overflow-hidden flex flex-col">
            <Navigation />

            <main className="flex-grow flex flex-col items-center justify-center relative px-6 py-20">
                {/* Ambient Background Glows */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/20 rounded-full blur-[120px]"
                    />
                </div>

                <div className="relative z-10 text-center max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter opacity-10 select-none" style={{ fontFamily: 'var(--font-playfair)' }}>
                            404
                        </h1>

                        <div className="-mt-20 md:-mt-32">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Lost in the <span className="italic text-[#D4AF37]">Clouds?</span>
                            </h2>

                            <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-md mx-auto leading-relaxed">
                                The page you are looking for has vanished into the haze. Let&apos;s get you back to the experience.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link href="/">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 bg-[#D4AF37] text-black font-bold rounded-full flex items-center gap-3 transition-shadow hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.5)]"
                                    >
                                        <Home className="w-5 h-5" />
                                        RETURN HOME
                                    </motion.button>
                                </Link>

                                <Link href="/products">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-3 hover:bg-white/10 transition-all"
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                        BROWSE PRODUCTS
                                    </motion.button>
                                </Link>
                            </div>

                            <button
                                onClick={() => window.history.back()}
                                className="mt-12 text-gray-500 hover:text-[#D4AF37] transition-colors flex items-center gap-2 mx-auto text-sm font-bold tracking-widest uppercase"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Go Back
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Floating Elements */}
                {/* {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            x: Math.random() * 400 - 200,
                            y: Math.random() * 400 - 200
                        }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            y: [0, -40, 0],
                            x: [0, 20, 0]
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                        className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full blur-sm pointer-events-none hidden md:block"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + (i * 20) % 80}%`,
                        }}
                    />
                ))} */}
            </main>

            <Footer />
        </div>
    )
}
