'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProductCatalog from '@/components/ProductCatalog'
import { Metadata } from 'next'
import { motion } from 'framer-motion'


// export const metadata: Metadata = {
//     title: 'Our Collections | Chillcloud',
//     description: 'Explore our full range of hand-rolled cigrolls, premium cones, artisanal rolling papers, and slims.',
// }

export default function ProductsPage() {
    return (
        <div className="bg-[#12100E] text-white overflow-hidden">
            <Navigation />

            {/* Hero for Products Page */}
            {/* <section className="relative pt-32 pb-20 bg-[#12100E] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,175,55,0.1),transparent_80%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">Collections</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-4xl mx-auto">
                        Discover the pinnacle of artisanal craftsmanship. Each piece is a testament to our dedication to quality, flavor, and the elite lifestyle.
                    </p>
                </div>
            </section> */}

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
                            Collections
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">Collections</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light">
                            Discover the pinnacle of artisanal craftsmanship. Each piece is a testament to our dedication to quality, flavor, and the elite lifestyle.
                        </p>
                    </motion.div>
                </div>
            </section>

            <ProductCatalog />

            <Footer />
        </div>
    )
}
