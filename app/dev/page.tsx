'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import StatsSection from '@/components/StatsSection'
import ProductShowcase from '@/components/product-showcase'
import ProductCatalog from '@/components/ProductCatalog'
import FlavorCards from '@/components/flavor-cards'
import UpcomingProducts from '@/components/UpcomingProducts'
import Footer from '@/components/footer'
import AboutSection from '@/components/AboutSection'
import Branding from '@/components/branding'

export default function DevHome() {
    // const [isLoaded, setIsLoaded] = useState(false)

    // useEffect(() => {
    //     setIsLoaded(true)
    // }, [])

    return (
        <div className="bg-[#12100E] text-foreground overflow-hidden">
            <Navigation />
            {/* {isLoaded && (
                <> */}
            <Hero />
            <AboutSection />
            {/* <ProductShowcase /> */}
            <ProductCatalog isHomePage={true} />
            <FlavorCards />
            <UpcomingProducts />
            <Branding />
            <Footer />
            {/* </>
            )} */}
        </div>
    )
}
