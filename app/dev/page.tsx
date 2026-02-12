'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import AboutSection from '@/components/AboutSection'
import ProductShowcase from '@/components/product-showcase'
import ProductCatalog from '@/components/ProductCatalog'
import FlavorCards from '@/components/flavor-cards'
import UpcomingProducts from '@/components/UpcomingProducts'
import Infrastructure from '@/components/infrastructure'
import Footer from '@/components/footer'

export default function DevHome() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <div className="bg-background text-foreground overflow-hidden">
            <Navigation />
            {isLoaded && (
                <>
                    <Hero />
                    <AboutSection />
                    <ProductShowcase />
                    <ProductCatalog isHomePage={true} />
                    <FlavorCards />
                    <UpcomingProducts />
                    <Infrastructure />
                    <Footer />
                </>
            )}
        </div>
    )
}
