'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getProductBySlug, getRelatedProducts, getProductSlug, Product } from '@/lib/product-data'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'
import {
    ChevronLeft,
    ChevronRight,
    ArrowLeft,
    Wind,
    Layers,
    Droplets,
    Sparkles,
    Package,
    Check,
    Star
} from 'lucide-react'
import RecommendedProducts from '@/components/RecommendedProducts'

export default function ProductDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const [product, setProduct] = useState<Product | null>(null)
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
    const [currentImage, setCurrentImage] = useState(0)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const found = getProductBySlug(slug)
        if (found) {
            setProduct(found)
            setRelatedProducts(getRelatedProducts(found, 4))
            setCurrentImage(0)
            setImageLoaded(false)
            window.scrollTo(0, 0)
        }
    }, [slug])

    const nextImage = useCallback(() => {
        if (!product) return
        setCurrentImage((prev) => (prev + 1) % product.images.length)
    }, [product])

    const prevImage = useCallback(() => {
        if (!product) return
        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    }, [product])

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Cigrolls': return <Wind className="w-5 h-5" />
            case 'Cones': return <Layers className="w-5 h-5" />
            case 'Rolling Paper': return <Droplets className="w-5 h-5" />
            case 'Slims': return <Wind className="w-5 h-5" />
            default: return <Sparkles className="w-5 h-5" />
        }
    }

    if (!product) {
        return (
            <div className="bg-[#12100E] text-white min-h-screen">
                <Navigation />
                <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                            <Package className="w-10 h-10 text-[#D4AF37]" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Product Not Found
                        </h1>
                        <p className="text-white/50 mb-8 max-w-md mx-auto">
                            The product you&apos;re looking for doesn&apos;t exist or may have been removed.
                        </p>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#F4D03F] transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Products
                        </Link>
                    </motion.div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="bg-[#12100E] text-white min-h-screen overflow-hidden">
            <Navigation />

            {/* Breadcrumb */}
            <div className="pt-32 pb-4 max-w-7xl mx-auto px-4 md:px-6">
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-xs text-white/40"
                >
                    <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-[#D4AF37] transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-[#D4AF37]">{product.name}</span>
                </motion.nav>
            </div>

            {/* Product Detail Section */}
            <section className="pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                        {/* Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="relative"
                        >
                            {/* Main Image */}
                            <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-[#1A1612] border border-white/5">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImage}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={product.images[currentImage] || '/placeholder.svg'}
                                            alt={product.name}
                                            fill
                                            className={cn(
                                                "object-cover transition-all duration-700",
                                                imageLoaded ? "blur-0" : "blur-sm"
                                            )}
                                            priority
                                            onLoad={() => setImageLoaded(true)}
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Image Navigation */}
                                {product.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#D4AF37]"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 backdrop-blur-xl text-white flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#D4AF37]"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                {/* Tag Badge */}
                                {product.tag && (
                                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                        <span className="bg-black/50 backdrop-blur-xl border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
                                            {product.tag}
                                        </span>
                                    </div>
                                )}

                                {/* Image Counter */}
                                {product.images.length > 1 && (
                                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                                        <span className="bg-black/50 backdrop-blur-xl border border-white/10 text-white/80 text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full">
                                            {currentImage + 1} / {product.images.length}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Thumbnail Strip */}
                            {product.images.length > 1 && (
                                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                                    {product.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImage(idx)}
                                            className={cn(
                                                "relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300",
                                                currentImage === idx
                                                    ? "border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                                    : "border-white/10 opacity-50 hover:opacity-80"
                                            )}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} view ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                            className="flex flex-col"
                        >
                            {/* Category & Subcategory */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center gap-2 text-[#D4AF37]">
                                    {getCategoryIcon(product.category)}
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
                                        {product.category}
                                    </span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-white/20" />
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                                    {product.subcategory}
                                </span>
                            </div>

                            {/* Product Name */}
                            <h1
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                                style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                                {product.name}
                            </h1>

                            {/* Tagline */}
                            {product.tagline && (
                                <p className="text-[#D4AF37] text-lg md:text-xl italic font-light mb-6">
                                    &quot;{product.tagline}&quot;
                                </p>
                            )}

                            {/* Divider */}
                            <div className="w-full h-px bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent mb-6" />

                            {/* Description */}
                            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-6">
                                {product.longDescription || product.description}
                            </p>

                            {/* Flavor Info */}
                            {product.flavor && (
                                <div className="flex items-center gap-3 mb-6 px-5 py-3 rounded-2xl bg-[#D4AF37]/5 border border-[#D4AF37]/15">
                                    <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                                    <div>
                                        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 block">Flavor Profile</span>
                                        <span className="text-white font-semibold">{product.flavor}</span>
                                    </div>
                                </div>
                            )}

                            {/* Pack Size */}
                            {product.packSize && (
                                <div className="flex items-center gap-3 mb-6 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <Package className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                                    <div>
                                        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 block">Pack Size</span>
                                        <span className="text-white font-semibold">{product.packSize}</span>
                                    </div>
                                </div>
                            )}

                            {/* Highlights */}
                            {product.highlights && product.highlights.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/60 mb-4">
                                        Why You&apos;ll Love It
                                    </h3>
                                    <div className="space-y-3">
                                        {product.highlights.map((highlight, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-3 h-3 text-[#D4AF37]" />
                                                </div>
                                                <span className="text-white/70 text-sm leading-relaxed">{highlight}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Quality Assurance Bar */}
                            <div className="grid grid-cols-3 gap-3 mb-8">
                                {[
                                    { icon: <Star className="w-4 h-4" />, label: 'Premium Quality' },
                                    { icon: <Sparkles className="w-4 h-4" />, label: 'Hand Rolled' },
                                    { icon: <Package className="w-4 h-4" />, label: 'Artisan Made' },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                                        className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-white/[0.03] border border-white/5"
                                    >
                                        <div className="text-[#D4AF37]">{item.icon}</div>
                                        <span className="text-[8px] md:text-[9px] font-bold tracking-[0.15em] uppercase text-white/50 text-center">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                <Link
                                    href="/contact"
                                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-full text-center hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-[1.02]"
                                >
                                    Enquire Now
                                </Link>
                                <Link
                                    href="/products"
                                    className="flex-1 px-8 py-4 border border-white/15 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full text-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 bg-white/[0.02]"
                                >
                                    All Products
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recommended Products */}
            {relatedProducts.length > 0 && (
                <RecommendedProducts products={relatedProducts} />
            )}

            <Footer />
        </div>
    )
}
