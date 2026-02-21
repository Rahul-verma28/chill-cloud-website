'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Product, getProductSlug } from '@/lib/product-data'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Wind, Layers, Droplets, ArrowUpRight } from 'lucide-react'

interface RecommendedProductsProps {
    products: Product[]
    title?: string
    subtitle?: string
}

function MiniProductCard({ product, index }: { product: Product; index: number }) {
    const [currentImage, setCurrentImage] = useState(0)

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImage((prev) => (prev + 1) % product.images.length)
    }

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    }

    const slug = getProductSlug(product)

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <Link href={`/products/${slug}`}>
                <div className="relative bg-[#1A1612] rounded-[1.5rem] overflow-hidden border border-white/5 h-full flex flex-col transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">

                    {/* Image Container */}
                    <div className="relative h-[220px] sm:h-[280px] overflow-hidden bg-[#241E18]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={product.images[currentImage] || '/placeholder.svg'}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Hover Arrows */}
                        {product.images.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={prevImage}
                                    className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
                                >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all"
                                >
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        )}

                        {/* Dots */}
                        {product.images.length > 1 && (
                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                                {product.images.map((_, dotIdx) => (
                                    <div
                                        key={dotIdx}
                                        className={cn(
                                            "w-1.5 h-1.5 rounded-full transition-all duration-300",
                                            currentImage === dotIdx ? "bg-[#D4AF37] w-3" : "bg-white/20"
                                        )}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Tag */}
                        <div className="absolute top-3 left-3">
                            <span className="bg-black/40 backdrop-blur-md border border-white/10 text-[#D4AF37] text-[7px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                                {product.tag}
                            </span>
                        </div>

                        {/* View Arrow */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                <ArrowUpRight className="w-4 h-4 text-black" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 flex flex-col flex-grow">
                        <span className="text-[#D4AF37]/95 text-[7px] font-bold tracking-[0.2em] uppercase block mb-1.5">
                            {product.subcategory}
                        </span>
                        <h3
                            className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            {product.name}
                        </h3>
                        <p className="text-white/50 text-[10px] leading-relaxed line-clamp-2 italic pb-3">
                            &quot;{product.description}&quot;
                        </p>

                        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                                    {product.category === 'Cigrolls' && <Wind className="w-2.5 h-2.5 text-[#D4AF37]" />}
                                    {product.category === 'Cones' && <Layers className="w-2.5 h-2.5 text-[#D4AF37]" />}
                                    {product.category === 'Rolling Paper' && <Droplets className="w-2.5 h-2.5 text-[#D4AF37]" />}
                                    {product.category === 'Slims' && <Wind className="w-2.5 h-2.5 text-[#D4AF37]" />}
                                </div>
                                <span className="text-[7px] font-bold text-white/50 uppercase tracking-widest">
                                    {product.flavor || product.packSize || 'Elite'}
                                </span>
                            </div>
                            <span className="text-[8px] text-[#D4AF37] font-bold tracking-wider uppercase group-hover:tracking-[0.2em] transition-all duration-300">
                                View →
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default function RecommendedProducts({ products, title, subtitle }: RecommendedProductsProps) {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#12100E] via-[#0D0B09] to-[#12100E] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.04),transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
                        {subtitle || 'You May Also Like'}
                    </span>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        {title || 'Recommended'}{' '}
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">
                            Products
                        </span>
                    </h2>
                    <div className="w-24 h-[0.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
                    {products.map((product, idx) => (
                        <MiniProductCard key={product.id} product={product} index={idx} />
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-xs tracking-[.2em] uppercase rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-500 group"
                    >
                        View All Products
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
