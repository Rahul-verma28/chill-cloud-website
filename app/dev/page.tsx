'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ProductShowcase from '@/components/product-showcase'
import FlavorCards from '@/components/flavor-cards'
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
                    <ProductShowcase />
                    <FlavorCards />
                    <Infrastructure />
                    <Footer />
                </>
            )}
        </div>
    )
}
