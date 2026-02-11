'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SLIDES = [
  {
    image: '/pre-rolles.png',
    title: 'CIGA-ROLLS',
    subtitle: 'PREMIUM SHOWCASE',
    description: 'CRAFTED FOR CONNOISSEURS. YOUR DAILY DOSE OF CHILL.',
    badge: 'LUXURY COLLECTION'
  },
  {
    image: '/bg-product.png',
    title: 'Your Daily Dose of ',
    highlight: 'Chill',
    subtitle: 'THE ULTIMATE CRAFTSMAN',
    description: 'Crafted for Pure Pleasure. Premium Handrolled Ciga-Rolls, Cones, and Rolling Papers designed for the modern connoisseur.',
    buttons: [
      { text: 'Explore Collection', primary: true },
      { text: 'Learn Our Process', primary: false }
    ]
  }
]

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, onSelect])

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative h-full min-w-full flex-[0_0_100%] overflow-hidden">
              {/* Background Image with Zoom Animation */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-[10000ms]",
                    selectedIndex === index ? "scale-110" : "scale-100"
                  )}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Slide Content */}
              <div className="relative z-10 flex h-full items-center px-6 md:px-16 lg:px-24">
                <div className="max-w-3xl">
                  {slide.subtitle && (
                    <p className={cn(
                      "mb-4 text-sm font-semibold tracking-[0.3em] text-primary uppercase transition-all duration-700 delay-300",
                      selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}>
                      {slide.subtitle}
                    </p>
                  )}

                  <h1 className={cn(
                    "mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl transition-all duration-700 delay-500",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    {slide.title}
                    {slide.highlight && (
                      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] animate-shimmer bg-[length:200%_auto]">
                        {slide.highlight}
                      </span>
                    )}
                  </h1>

                  <p className={cn(
                    "mb-10 max-w-xl text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-700",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    {slide.description}
                  </p>

                  <div className={cn(
                    "flex flex-wrap gap-4 transition-all duration-700 delay-1000",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    {slide.buttons ? slide.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className={cn(
                          "px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95",
                          btn.primary
                            ? "bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black shadow-lg shadow-primary/20"
                            : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
                        )}
                      >
                        {btn.text}
                      </button>
                    )) : (
                      <button className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black px-10 py-4 rounded-lg font-bold tracking-wider hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105">
                        EXPLORE NOW
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button
          onClick={scrollPrev}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:text-black"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-1" />
        </button>
        <button
          onClick={scrollNext}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:text-black"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:left-24 md:translate-x-0">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              selectedIndex === index ? "w-12 bg-primary" : "w-6 bg-white/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Overlays */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  )
}
