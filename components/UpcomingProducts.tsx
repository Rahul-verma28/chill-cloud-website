'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface UpcomingProduct {
    title: string;
    description: string;
    image: string;
    releaseDate: string;
}

const UPCOMING_PRODUCTS: UpcomingProduct[] = [
    {
        title: 'Luxury Lighter Series',
        description: 'Precision engineering meets opulent design. A masterpiece of functionality and style.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTD0NslLQuIYgpkck1H4lzyQ9XXXhnPqN8XtptBPj4-WslwZvAlYlyzu7Tf4_HoaSBgGdDB5WcKpGzJ68vkJ9UAvndv5gMgweDz6_KihmXqmDyoHDUbtiFhFtw7bZgpfZdXeBHdOJWfLRBLSF9Z2evozeuKL4phhvwIC-EKvbr_fO6rGHubN5d5rNZTS4MH5xI5vm95swlObDN2iGdcQWqP3vQDLZD_NP_n5-7t-AIY8J0ITml2ZW4Ra50ikh3liH-dEpm1Ud4wys',
        releaseDate: 'Late 2024',
    },
    {
        title: 'Premium Mouth Fresheners',
        description: 'Exquisite flavors for the discerning. Crafted with natural essences for lasting freshness.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5XsOdH7cUQMQdC5tfVSciPLzMwDuakkRYYRcU8S9fqrWsVOit1XLnN4KsI8jGd1dx9JP-hx9JpUSlyqWXQ6Rcx7Tnj_Soo_bc3vzA4vtrDhovjZOLDIj1JxlXk2jH5KO0tx5WIJw2oN6n5rznTmeFmJhGX-qITQ0RrtfeHIHsaEB5cNjwOyXeqamH7i1OyUd5Qn20e2LN0zME28devqqMYE6CdGH3o14mxRIeknJveLvPFXac-BB9XMO-HJFhSZeWr0lJngFtTXg',
        releaseDate: 'Winter 2024',
    },
    {
        title: 'Handcrafted Ciga-Boxes',
        description: 'Timeless elegance for your collection. Hand-finished mahogany with gold-leaf inlay.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVNFEmyv7L7hy0HeTi-gLa5DXrG_qb5NkiWEh9979aZUk71FMU0AXRozxR9hwfcOmN9HVsz8jl_ph-LRirGL7nmIYIgVPP9XcB5FmjbkOVj-Ea5xh6G1UmlvAGI-6Np8PTgLM8Poiq8XcNt7m_KYFnHIT-myQG1S5ys7OkrXWyarLslpso9yYGzkMXgiRC2t2jtmVT9h8zMgrtp7RbrjCqQKzRMlbrXKNEfQirB7Wny_5fvEY1Lld_99iKnma9eXuB5ZppOHiY6ig',
        releaseDate: 'Spring 2025',
    },
];

export default function UpcomingProducts() {
    return (
        <section id="upcoming" className="relative py-24 md:py-32 overflow-hidden bg-black">
            {/* Background Texture/Mist */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] animate-float" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#d4af37] text-sm md:text-base font-semibold tracking-[0.4em] uppercase mb-4 block">
                            Next Generation
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
                            UPCOMING LUXURY <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">
                                COLLECTION
                            </span>
                        </h2>
                        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
                    </motion.div>
                </div>

                {/* Product cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {UPCOMING_PRODUCTS.map((product, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className="group relative"
                            >
                                {/* Card Container */}
                                <div className="relative h-full bg-[#111] p-8 rounded-3xl border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#d4af37]/40 hover:bg-[#151515] hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                                    {/* Glass shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Image Container (Circular) with Glow Animation */}
                                    <div className="relative w-56 h-56 mx-auto mb-10 rounded-full overflow-hidden border-2 border-[#d4af37]/50 backdrop-blur-xs animate-border-glow transition-all duration-700 group-hover:scale-105">
                                        <motion.div
                                            className="h-full w-full"
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                                            />
                                        </motion.div>

                                        {/* Coming Soon Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[0.2px]" style={{ fontFamily: 'Playfair Display' }}>
                                            <div className="text-center transform transition-transform duration-700 group-hover:scale-110">
                                                <p className="text-4xl font-semibold tracking-[0.1em] text-[#d4af37] drop-shadow-lg">Coming SOON</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center relative z-10 transition-transform duration-700 group-hover:translate-y-[-4px]">
                                        <h3 className="text-xl font-bold text-[#d4af37] mb-4 tracking-widest uppercase" style={{ fontFamily: 'Playfair Display' }}>
                                            {product.title}
                                        </h3>
                                        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto mb-6 transition-all duration-700 group-hover:w-60 group-hover:via-[#d4af37]" />

                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light px-2">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Bottom corner decoration */}
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d4af37]/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
