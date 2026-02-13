'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function UnderConstruction() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email notification logic here
    console.log('Email submitted:', email)
    alert('Thank you! We will notify you when we launch.')
    setEmail('')
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a]">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0">
        <Image
          src="/bg-product.png"
          alt="Background"
          fill
          className="object-cover animate-slow-zoom"
          priority
          quality={100}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>


      {/* Main Content Container */}
      <div className={`relative z-10 flex flex-col min-h-screen transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

        {/* Top Section - Logo */}
        <div className={`flex justify-center pt-12 md:pt-16 transition-all duration-700 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 to-[#f4d03f]/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative p-4 rounded-2xl border border-[#d4af37]/20 backdrop-blur-sm">
              <Image
                src="/Logo-white.png"
                alt="Chillcloud Logo"
                width={100}
                height={100}
                className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* Middle Section - Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">

          {/* Coming Soon Badge */}
          <div className={`mb-8 md:mb-6 transition-all duration-700 delay-300 ${isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-md animate-pulse"></div>
              <div className="relative px-4 py-2 border border-[#d4af37] rounded-full hover:bg-[#d4af37]/10 transition-all duration-300">
                <span className="text-[#d4af37] text-sm tracking-[0.1em] uppercase">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 md:mb-8 max-w-5xl leading-tight transition-all duration-700 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="text-white">Our New Experience is</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] italic bg-[length:200%_auto] animate-shimmer">
              Rolling Out
            </span>
            <span className="text-white"> Soon</span>
          </h1>

          {/* Description */}
          <p className={`text-base md:text-lg text-gray-400 max-w-2xl text-center mb-10 md:mb-12 leading-relaxed px-4 transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We are currently crafting a premium digital experience to match our world-class{' '}
            <span className="text-[#d4af37] font-semibold hover:text-[#f4d03f] transition-colors duration-300">Ciga-Rolls and Cones</span>. Stay tuned for the ultimate chill.
          </p>

          {/* Email Notification Form */}
          {/* <form onSubmit={handleNotify} className="w-full max-w-md px-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative flex-1 w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-3.5 bg-[#1a1a1a] border border-[#333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative px-8 py-3.5 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg font-semibold text-black hover:shadow-2xl transition-all duration-300">
                  Notify Me
                </div>
              </button>
            </div>
          </form> */}
        </div>

        {/* Footer Section */}
        <footer className="relative z-10 border-t border-[#333]/50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

              {/* Contact Info */}
              {/* <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>G-247, Sector-63, Noida - 201301 U.P.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91-8092-3238-05</span>
                </div>
              </div> */}

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d4af37] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d4af37] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#d4af37] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-sm text-gray-500 tracking-wider">
                © 2026 CHILLCLOUD. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
