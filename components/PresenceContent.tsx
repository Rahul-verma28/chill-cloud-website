"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function PresenceContent() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/presence/our-presence.webp"
              alt="Global Presence"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-slide-down tracking-tight">
            OUR GLOBAL PRESENCE
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-5xl mx-auto animate-fade-in">
            The company&apos;s range of products is available across the world
            through global network of agents and distributors
          </p>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent" />
      </section>

      {/* World Map Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <Image
          src="/presence/global-presence.webp"
          alt="World Map"
          width={1200}
          height={800}
          className="mx-auto animate-fade-in"
        />
      </section>
    </div>
  );
}
