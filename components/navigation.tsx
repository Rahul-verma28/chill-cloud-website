// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { cn } from '@/lib/utils'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const menuItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'Discovery', href: '#about' },
//     { label: 'Products', href: '#products' },
//     { label: 'Flavors', href: '#flavors' },
//     { label: 'Infrastructure', href: '#infrastructure' },
//     { label: 'Contact', href: '#contact' },
//   ]

//   return (
//     <nav className={cn(
//       "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
//       scrolled
//         ? "bg-[#F9F7F2]/90 backdrop-blur-xl border-black/5 py-4"
//         : "bg-transparent border-transparent py-6"
//     )}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
// <div className="flex items-center gap-4 group cursor-pointer">
//   <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-110">
//     <Image
//       src={scrolled ? "/Logo.png" : "/Logo-white.png"}
//       alt="Chillcloud"
//       width={100}
//       height={100}
//       className="object-contain"
//       priority
//     />
//   </div>
//   <div className="flex flex-col">
//     <span className={cn(
//       "text-2xl font-bold tracking-tight transition-colors duration-500",
//       scrolled ? "text-[#1A1A1A]" : "text-white"
//     )} style={{ fontFamily: 'var(--font-playfair)' }}>
//       Chillcloud
//     </span>
//     <span className="text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] uppercase -mt-1">
//       Elite Standard
//     </span>
//   </div>
// </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex gap-10 items-center">
//             {menuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={cn(
//                   "relative text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 group",
//                   scrolled ? "text-[#1A1A1A]/70 hover:text-[#1A1A1A]" : "text-white/70 hover:text-white"
//                 )}
//               >
//                 {item.label}
//                 <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//             <button className={cn(
//               "ml-4 px-8 py-3 rounded-full text-[10px] font-bold tracking-widest transition-all transform hover:scale-105 uppercase",
//               scrolled
//                 ? "bg-[#1A1A1A] text-white hover:bg-[#D4AF37] hover:text-[#1A1A1A]"
//                 : "bg-white text-[#1A1A1A] hover:bg-[#D4AF37]"
//             )}>
//               Shop Now
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex flex-col gap-1.5 p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             <div className={cn("w-6 h-0.5 transition-all", scrolled ? "bg-[#1A1A1A]" : "bg-[#D4AF37]", isOpen ? "rotate-45 translate-y-2" : "")} />
//             <div className={cn("w-4 h-0.5 self-end transition-all", scrolled ? "bg-[#1A1A1A]" : "bg-[#D4AF37]", isOpen ? "opacity-0" : "")} />
//             <div className={cn("w-6 h-0.5 transition-all", scrolled ? "bg-[#1A1A1A]" : "bg-[#D4AF37]", isOpen ? "-rotate-45 -translate-y-2" : "")} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="lg:hidden absolute top-full left-0 right-0 bg-[#F9F7F2] backdrop-blur-2xl border-b border-black/5 pb-12 pt-8 px-6 flex flex-col items-center gap-8"
//           >
//             {menuItems.map((item, idx) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="text-xl font-bold tracking-widest text-[#1A1A1A]/80 hover:text-[#D4AF37] transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </motion.a>
//             ))}
//             <button className="mt-4 w-full px-10 py-4 bg-[#1A1A1A] text-white font-bold tracking-widest rounded-full uppercase text-xs">
//               Shop Now
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   )
// }







'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    // { label: 'Flavors', href: '/#flavors' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
      scrolled
        ? "bg-[#12100E]/90 backdrop-blur-xl border-white/5 py-4"
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="flex items-center group cursor-pointer">
              <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/Logo-white.png"
                  alt="Chillcloud"
                  width={100}
                  height={100}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "text-2xl font-bold tracking-tight transition-colors duration-500 text-white"
                )} style={{ fontFamily: 'var(--font-playfair)' }}>
                  Chillcloud India LLP
                </span>
                <span className="text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] uppercase -mt-1 px-1">
                  Elite Standard
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-10 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link href="/products" className="ml-4 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black text-[10px] font-bold tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105 uppercase">
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={cn("w-6 h-0.5 bg-[#d4af37] transition-all", isOpen ? "rotate-45 translate-y-2" : "")} />
            <div className={cn("w-4 h-0.5 bg-[#d4af37] self-end transition-all", isOpen ? "opacity-0" : "")} />
            <div className={cn("w-6 h-0.5 bg-[#d4af37] transition-all", isOpen ? "-rotate-45 -translate-y-2" : "")} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#12100E] backdrop-blur-2xl border-b border-white/5 pb-12 pt-8 px-6 flex flex-col items-center gap-8"
          >
            {menuItems.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xl font-bold tracking-widest text-white/80 hover:text-[#d4af37] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <Link href="/products" className="mt-4 w-full px-10 py-4 bg-[#d4af37] text-black font-bold tracking-widest rounded-full uppercase text-xs text-center" onClick={() => setIsOpen(false)}>
              Shop Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}




// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'
// import { cn } from '@/lib/utils'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const menuItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'Discovery', href: '#about' },
//     { label: 'Products', href: '#products' },
//     { label: 'Flavors', href: '#flavors' },
//     { label: 'Infrastructure', href: '#infrastructure' },
//     { label: 'Contact', href: '#contact' },
//   ]

//   return (
//     <nav className={cn(
//       "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
//       scrolled
//         ? "bg-black/80 backdrop-blur-xl border-white/5 py-2"
//         : "bg-transparent border-transparent py-4"
//     )}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo Section */}
//           <div className="flex items-center gap-4 group cursor-pointer">
//             <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
//               <Image
//                 src="/Logo-white.png"
//                 alt="Chillcloud"
//                 width={100}
//                 height={100}
//                 className="object-contain"
//                 priority
//               />
//             </div>
//             {/* <div className=""> */}
//             {/* <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display' }}>
//                 Chillcloud
//               </span>
//               <span className="text-[10px] tracking-[0.4em] font-bold text-[#d4af37] uppercase -mt-1">
//                 Elite Standard
//               </span> */}
//             <Image
//               src="/chill.png"
//               alt="Chillcloud"
//               width={200}
//               height={200}
//               className="object-contain"
//               priority
//             />
//             {/* </div> */}
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex gap-10 items-center">
//             {menuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
// className="relative text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300 group"
//               >
//                 {item.label}
//                 <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
//             <button className="ml-4 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black text-[10px] font-bold tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:scale-105 uppercase">
//               Shop Now
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden flex flex-col gap-1.5 p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             <div className={cn("w-6 h-0.5 bg-[#d4af37] transition-all", isOpen ? "rotate-45 translate-y-2" : "")} />
//             <div className={cn("w-4 h-0.5 bg-[#d4af37] self-end transition-all", isOpen ? "opacity-0" : "")} />
//             <div className={cn("w-6 h-0.5 bg-[#d4af37] transition-all", isOpen ? "-rotate-45 -translate-y-2" : "")} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 pb-12 pt-8 px-6 flex flex-col items-center gap-8"
//           >
//             {menuItems.map((item, idx) => (
//               <motion.a
//                 key={item.label}
//                 href={item.href}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="text-xl font-bold tracking-widest text-white/80 hover:text-[#d4af37] transition-colors"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </motion.a>
//             ))}
//             <button className="mt-4 w-full px-10 py-4 bg-[#d4af37] text-black font-bold tracking-widest rounded-full uppercase text-xs">
//               Shop Now
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   )
// }

