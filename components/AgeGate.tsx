// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// export default function AgeGate() {
//     const [showGate, setShowGate] = useState(false)

//     useEffect(() => {
//         // Check if the user has already verified their age in this session or locally
//         const isVerified = localStorage.getItem('age-verified')
//         if (!isVerified) {
//             setShowGate(true)
//             // Prevent scrolling when age gate is visible
//             document.body.style.overflow = 'hidden'
//         }
//     }, [])

//     const handleVerify = () => {
//         localStorage.setItem('age-verified', 'true')
//         setShowGate(false)
//         document.body.style.overflow = 'unset'
//     }

//     const handleUnderage = () => {
//         window.location.href = 'https://www.google.com'
//     }

//     return (
//         <AnimatePresence>
//             {showGate && (
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0B09] overflow-hidden"
//                 >
//                     {/* Background Layer with Tilt/Parallax effect potential */}
//                     <div className="absolute inset-0">
//                         {/* 
//                             Note: Replacing the background with the cinematic mood image provided.
//                             Assuming the file is named 'age-gate-mood.jpg' in public/
//                         */}
//                         <Image
//                             src="/age-gate.png"
//                             alt="Chillcloud Atmosphere"
//                             fill
//                             className="object-cover opacity-50"
//                             priority
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/20" />
//                     </div>

//                     {/* Central Verification Card */}
//                     <div className="relative z-10 w-full max-w-2xl px-6">
//                         <motion.div
//                             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//                             animate={{ scale: 1, opacity: 1, y: 0 }}
//                             transition={{
//                                 type: "spring",
//                                 damping: 25,
//                                 stiffness: 120,
//                                 delay: 0.2
//                             }}
//                             className="relative overflow-hidden backdrop-blur-md border border-white/10 p-10 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] text-center"
//                         >
//                             {/* Decorative Gold Glow */}
//                             <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-[80px]" />
//                             <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[80px]" />

//                             <div className="relative z-10">
//                                 {/* Branding */}
//                                 <div className="flex justify-center mb-10">
//                                     <div className="relative w-32 h-32">
//                                         <Image
//                                             src="/Logo-white.png"
//                                             alt="Chillcloud"
//                                             fill
//                                             className="object-contain"
//                                         />
//                                     </div>
//                                 </div>

//                                 <span className="text-[#D4AF37] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">
//                                     Elite Standard
//                                 </span>

//                                 <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
//                                     Welcome to <span className="italic block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]">Chillcloud</span>
//                                 </h1>

//                                 <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
//                                     The products on this site are intended for tobacco consumers <span className="text-white font-medium">21 years of age or older</span>. Please verify your age.
//                                 </p>

//                                 {/* Action Buttons */}
//                                 <div className="flex flex-col sm:flex-row gap-5 justify-center">
//                                     <button
//                                         onClick={handleVerify}
//                                         className="flex-1 px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-black rounded-2xl hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_15px_40px_rgba(212,175,55,0.3)] uppercase tracking-[0.2em] text-[10px]"
//                                     >
//                                         I am 21+
//                                     </button>
//                                     <button
//                                         onClick={handleUnderage}
//                                         className="flex-1 px-8 py-5 border border-white/10 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all uppercase tracking-[0.2em] text-[10px]"
//                                     >
//                                         I am under 21
//                                     </button>
//                                 </div>

//                                 {/* Legal Disclaimer */}
//                                 <p className="mt-10 text-[9px] text-gray-500 uppercase tracking-[0.3em] font-medium max-w-[280px] mx-auto leading-loose">
//                                     By entering the website you are agreeing to the <a href="#" className="text-white/40 hover:text-[#D4AF37] underline decoration-dotted transition-colors">Terms of Use</a> and <a href="#" className="text-white/40 hover:text-[#D4AF37] underline decoration-dotted transition-colors">Privacy Policy</a>.
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>
//     )
// }




'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function AgeGate() {
    const [showGate, setShowGate] = useState(false)

    useEffect(() => {
        // Check if the user has already verified their age in this session or locally
        const isVerified = localStorage.getItem('age-verified')
        if (!isVerified) {
            setShowGate(true)
            // Prevent scrolling when age gate is visible
            document.body.style.overflow = 'hidden'
        }
    }, [])

    const handleVerify = () => {
        localStorage.setItem('age-verified', 'true')
        setShowGate(false)
        document.body.style.overflow = 'unset'
    }

    const handleUnderage = () => {
        window.location.href = 'https://www.google.com'
    }

    return (
        <AnimatePresence>
            {showGate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0B09] overflow-hidden"
                >
                    {/* Background Layer with Tilt/Parallax effect potential */}
                    <div className="absolute inset-0">
                        {/* 
                            Note: Replacing the background with the cinematic mood image provided.
                            Assuming the file is named 'age-gate-mood.jpg' in public/
                        */}
                        <Image
                            src="/age-gate-02.png"
                            alt="Chillcloud Atmosphere"
                            fill
                            className="object-cover opacity-50"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/20" />
                    </div>

                    {/* Central Verification Card */}
                    <div className="relative z-10 w-full max-w-3xl px-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 120,
                                delay: 0.2
                            }}
                            className="relative overflow-hidden backdrop-blur-md border border-white/10 p-10 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] text-center"
                        >
                            {/* Decorative Gold Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[80px]" />

                            <div className="relative z-10">
                                {/* Branding */}
                                {/* <div className="flex justify-center">
                                    <div className="relative w-80 h-60">
                                        <Image
                                            src="/Logo-white.png"
                                            alt="Chillcloud"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div> */}

                                <div className="flex justify-center">
                                    <div className="relative w-96 h-40">
                                        <Image
                                            src="/chill-cloud-gate-02.png"
                                            alt="Chillcloud"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <span className="text-[#D4AF37] mb-4 text-xs font-bold tracking-[0.5em] uppercase block">
                                    Join the Chill
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 px-2 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    Welcome
                                    {/* <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]">Chillcloud</span> */}
                                </h1>

                                <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
                                    {/* The products on this site are intended for tobacco consumers <span className="text-white font-medium">21 years of age or older</span>. Please verify your age. */}
                                    Chillcloud products are crafted exclusively for adults 21 and over. This site is intended for legal-age tobacco consumers (21+). Please verify your age to continue.
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                    <button
                                        onClick={handleVerify}
                                        className="flex-1 px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-black rounded-2xl hover:scale-[1.03] active:scale-[0.98] transition-all shadow-[0_15px_40px_rgba(212,175,55,0.3)] uppercase tracking-[0.2em] text-[10px]"
                                    >
                                        I am 21+
                                    </button>
                                    <button
                                        onClick={handleUnderage}
                                        className="flex-1 px-8 py-5 border border-white/10 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all uppercase tracking-[0.2em] text-[10px]"
                                    >
                                        I am under 21
                                    </button>
                                </div>

                                {/* Legal Disclaimer */}
                                <p className="mt-10 text-[9px] text-gray-200 uppercase tracking-[0.3em] font-medium max-w-[80%] mx-auto leading-loose">
                                    By entering, you confirm that you are at least 21 years old and agree to our Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
