'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const SLIDES = [
  {
    image: '/hero/hero-05.png',
    title: 'ELITE ',
    highlight: 'PACKAGING',
    subtitle: 'THE GOLD STANDARD',
    description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
    buttons: [
      { text: 'Explore Now', primary: true },
      { text: 'Process', primary: false }
    ]
  },
  {
    image: '/hero/hero-06.png',
    title: 'ELITE ',
    highlight: 'PACKAGING',
    subtitle: 'THE GOLD STANDARD',
    description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
    buttons: [
      { text: 'Explore Now', primary: true },
      { text: 'Process', primary: false }
    ]
  },
  {
    image: '/hero/hero-04.png',
    title: 'ELITE ',
    highlight: 'PACKAGING',
    subtitle: 'THE GOLD STANDARD',
    description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
    buttons: [
      { text: 'Explore Now', primary: true },
      { text: 'Process', primary: false }
    ]
  },
  // {
  //   image: '/hero/hero-03.png',
  //   title: 'ELITE ',
  //   highlight: 'PACKAGING',
  //   subtitle: 'THE GOLD STANDARD',
  //   description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
  //   buttons: [
  //     { text: 'Explore Now', primary: true },
  //     { text: 'Process', primary: false }
  //   ]
  // },
  {
    image: '/hero/hero-07.jpeg',
    title: 'CIGA-ROLLS',
    subtitle: 'THE GOLD STANDARD',
    description: 'CRAFTED FOR CONNOISSEURS. YOUR DAILY DOSE OF CHILL.',
    badge: 'LUXURY COLLECTION'
  },
  {
    image: '/hero/hero-08.jpeg',
    title: 'ELITE ',
    highlight: 'CHILL',
    subtitle: 'PREMIUM SHOWCASE',
    description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
    buttons: [
      { text: 'Explore Now', primary: true },
      { text: 'Concierge', primary: false }
    ]
  },
  {
    image: '/hero/hero-05.png',
    title: 'ELITE ',
    highlight: 'PACKAGING',
    subtitle: 'THE GOLD STANDARD',
    description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
    buttons: [
      { text: 'Explore Now', primary: true },
      { text: 'Process', primary: false }
    ]
  },
  {
    image: '/hero/hero-10.png',
    title: 'ELITE ',
    highlight: 'PACKAGING',
    subtitle: 'THE GOLD STANDARD',
    description: 'Experience the pinnacle of luxury with our handrolled masterpieces, delivered in artisan-certified packaging.',
    buttons: [
      { text: 'Explore Now', primary: true },
      { text: 'Process', primary: false }
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
    }, 3000)

    return () => clearInterval(interval)
  }, [emblaApi, onSelect])

  return (
    <section id="home" className="relative h-[60vh] min-h-[480px] md:min-h-[550px] lg:h-screen lg:min-h-[700px] w-full bg-[#0D0B09]">
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide, index) => (
            <div key={index} className="relative min-w-full flex-[0_0_100%] overflow-hidden">
              {/* Background Image with Slow Cinematic Zoom */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  quality={100}
                  sizes="100vw"
                  className={cn(
                    "object-cover object-center transition-transform duration-[20000ms] ease-out",
                    selectedIndex === index ? "scale-110 md:scale-105" : "scale-100"
                  )}
                  priority
                />
                {/* Sophisticated Vignette Gradient - Enhanced for mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent md:from-black md:via-black/10 md:to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 md:from-black md:via-transparent md:to-black/10" />
              </div>

              {/* Slide Content - Centered Layout for Wide Look */}
              {/* <div className="relative max-w-7xl mx-auto z-10 flex h-full items-center px-6">
                <div className="max-w-4xl">
                  {slide.subtitle && (
                    <p className={cn(
                      "mb-6 text-sm font-black tracking-[0.5em] text-[#D4AF37] uppercase transition-all duration-1000 delay-300",
                      selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}>
                      {slide.subtitle}
                    </p>
                  )}

                  <h1 className={cn(
                    "mb-8 text-6xl font-bold tracking-tight text-white md:text-8xl transition-all duration-1000 delay-500",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )} style={{ fontFamily: 'var(--font-playfair)' }}>
                    <span className="block mb-2">{slide.title}</span>
                    {slide.highlight && (
                      <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] animate-shimmer bg-[length:200%_auto]">
                        {slide.highlight}
                      </span>
                    )}
                  </h1>

                  <p className={cn(
                    "mb-12 max-w-2xl text-xl text-gray-200/90 leading-[1.8] font-light tracking-wide transition-all duration-1000 delay-700",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    {slide.description}
                  </p>

                  <div className={cn(
                    "flex flex-wrap gap-6 transition-all duration-1000 delay-1000",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  )}>
                    {slide.buttons ? slide.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className={cn(
                          "px-10 py-4 rounded-full font-bold tracking-[0.2em] transition-all duration-500 transform hover:scale-105 active:scale-95 uppercase text-[10px]",
                          btn.primary
                            ? "bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black shadow-[0_10px_40px_-10px_rgba(212,175,55,0.4)]"
                            : "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
                        )}
                      >
                        {btn.text}
                      </button>
                    )) : (
                      <button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-12 py-5 rounded-full font-black tracking-[0.3em] shadow-[0_20px_50px_-10px_rgba(212,175,55,0.5)] transition-all transform hover:scale-105 uppercase text-xs">
                        EXPLORE NOW
                      </button>
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls - Responsive sizing */}
      <div className="absolute bottom-6 right-4 z-20 flex gap-2 md:bottom-10 md:right-10 md:gap-4">
        <button
          onClick={scrollPrev}
          className="group flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:text-black"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:-translate-x-1" />
        </button>
        <button
          onClick={scrollNext}
          className="group flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:text-black"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Slide Indicators - Responsive */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-12 md:left-24 md:translate-x-0 md:gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={cn(
              "h-1 md:h-1.5 transition-all duration-500 rounded-full",
              selectedIndex === index ? "w-8 md:w-12 bg-primary" : "w-4 md:w-6 bg-white/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Overlays */}
      <div className="absolute bottom-0 left-0 h-20 md:h-32 w-full bg-gradient-to-t from-black to-transparent z-0" />
    </section>
  )
}
