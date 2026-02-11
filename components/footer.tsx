'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display' }}>
              Chillcloud
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Premium smoking accessories manufacturer crafting excellence since 2024.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-300">
                <Facebook size={16} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-300">
                <Twitter size={16} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-300">
                <Instagram size={16} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Products', 'About Us', 'Infrastructure', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-4 text-foreground">Our Products</h4>
            <ul className="space-y-2">
              {['Ciga-Rolls', 'Pre-Rolled Cones', 'Rolling Papers', 'Slim Ciga-Rolls', 'Accessories'].map((product) => (
                <li key={product}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold mb-4 text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm">+91 8092-3238-05</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm">G-247, Sector-63, Noida, UP 201301</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground/70 text-sm">contact@chillcloud.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-foreground/60 text-sm">
              © 2024 Chillcloud India LLP. All rights reserved.
            </p>
            <div className="flex gap-6 justify-end text-sm">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
