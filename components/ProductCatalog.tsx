'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { products, CATEGORIES, Product } from '@/lib/product-data'
import { cn } from '@/lib/utils'
import { Layers, Wind, Droplets, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

interface ProductCatalogProps {
    isHomePage?: boolean
}

export default function ProductCatalog({ isHomePage = false }: ProductCatalogProps) {
    const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('All')

    const filteredProducts = useMemo(() => {
        let list = products
        if (activeCategory !== 'All') {
            list = products.filter(p => p.category === activeCategory)
        }
        return isHomePage ? list.slice(0, 8) : list
    }, [activeCategory, isHomePage])

    const categoryContent: Record<typeof CATEGORIES[number], { label: string; title: string; highlight: string; description: string }> = {
        'All': {
            label: '',
            title: 'Flavours are vibes',
            highlight: 'Choose yours',
            description: 'Explore the full range of our hand-crafted luxury products — from Cigrolls and Cones to Rolling Papers and Slims.'
        },
        'Cigrolls': {
            label: 'Handrolled Excellence',
            title: 'Flavored',
            highlight: 'Ciga-Rolls',
            description: 'Every cigroll is designed for balance, smoothness, and a satisfying finish — elevating every moment with effortless cool.'
        },
        'Cones': {
            label: 'Pre-Rolled Perfection',
            title: 'Pre-Rolled',
            highlight: 'Cones',
            description: 'Precision-crafted pre-rolled cones in Brown, White, and Flavored Jar variants. Ready for the perfect session.'
        },
        'Rolling Paper': {
            label: 'Ultra-Thin Craftsmanship',
            title: 'Rolling',
            highlight: 'Papers',
            description: 'Crafted with precision and care, every sheet enhances your smoking experience with elegance and consistency.'
        },
        'Slims': {
            label: 'Refined & Elegant',
            title: 'Flavored',
            highlight: 'Slims',
            description: 'Each Slim is designed for perfect balance, smoothness, and a satisfying finish — elevating every moment with effortless cool.'
        }
    }

    const currentContent = categoryContent[activeCategory]

    return (
        <section className="py-24 bg-gradient-to-t from-[#12100E] via-[#0D0D0D] to-[black]" id="catalog">
            <div className="max-w-7xl mx-auto px-6">
                {/* Dynamic Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                                    {currentContent.label}
                                </span>
                                <h2
                                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                                    style={{ fontFamily: 'var(--font-playfair)' }}
                                >
                                    {currentContent.title}{' '}
                                    <span className="italic text-[#D4AF37]">{currentContent.highlight}</span>
                                </h2>
                                <p className="mt-4 text-white/50 text-sm md:text-base font-light leading-relaxed max-w-xl">
                                    {currentContent.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border",
                                    activeCategory === cat
                                        ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                                        : "bg-white/5 text-white/60 border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid - Smaller Cards (4 columns on large screens) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} index={idx} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Home Page "View All" Button */}
                {isHomePage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-16 text-center"
                    >
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold text-xs tracking-[.2em] uppercase rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-500 group"
                        >
                            View All Products <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </motion.div>
                )}

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="py-32 text-center">
                        <p className="text-white/70 italic">No pieces found in this exclusive collection.</p>
                    </div>
                )}
            </div>
        </section>
    )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    const [currentImage, setCurrentImage] = useState(0)

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImage((prev) => (prev + 1) % product.images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group"
        >
            <div className="relative bg-[#1A1612] rounded-[1.5rem] overflow-hidden border border-white/5 h-full flex flex-col transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">

                {/* Image Container with Slider */}
                <div className="relative h-[320px] overflow-hidden bg-[#241E18]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="absolute inset-0 w-400"
                        >
                            <Image
                                src={product.images[currentImage] || '/placeholder.svg'}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows (Only if multiple images) */}
                    {product.images.length > 1 && (
                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={prevImage}
                                className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    {/* Slider Dots */}
                    {product.images.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                            {product.images.map((_, dotIdx) => (
                                <div
                                    key={dotIdx}
                                    className={cn(
                                        "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                        currentImage === dotIdx ? "bg-[#D4AF37] w-4" : "bg-white/20"
                                    )}
                                />
                            ))}
                        </div>
                    )}

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="bg-black/40 backdrop-blur-md border border-white/10 text-[#D4AF37] text-[8px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                            {product.tag}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                        <span className="text-[#D4AF37]/95 text-[8px] font-bold tracking-[0.2em] uppercase block mb-2">
                            {product.subcategory}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {product.name}
                        </h3>
                        <p className="text-white/70 text-[11px] leading-relaxed line-clamp-2 italic">
                            "{product.description}"
                        </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                                {product.category === 'Cigrolls' && <Wind className="w-3 h-3 text-[#D4AF37]" />}
                                {product.category === 'Cones' && <Layers className="w-3 h-3 text-[#D4AF37]" />}
                                {product.category === 'Rolling Paper' && <Droplets className="w-3 h-3 text-[#D4AF37]" />}
                                {product.category === 'Slims' && <Wind className="w-3 h-3 text-[#D4AF37]" />}
                            </div>
                            <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest">
                                {product.packSize || 'Elite Piece'}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-[8px] text-[#D4AF37] font-bold tracking-tighter uppercase">Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
