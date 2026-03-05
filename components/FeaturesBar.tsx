"use client";

import { useEffect, useRef, useState } from "react";
import { Leaf, Flame, ShieldCheck, HelpingHand } from "lucide-react";

export default function FeaturesBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Leaf,
      title: "100% ORGANIC",
      description: "Natural Ingredients",
    },
    {
      icon: Flame,
      title: "SLOW BURN",
      description: "Premium Experience",
    },
    {
      icon: ShieldCheck,
      title: "QUALITY ASSURED",
      description: "Certified Process",
    },
    {
      icon: HelpingHand,
      title: "HAND MADE",
      description: "Artisan Crafted",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#d4af37] via-[#f4d03f] to-[#d4af37] py-8 md:py-12 overflow-hidden relative"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delay = index * 150;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center text-center transition-all duration-500 hover:scale-105 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                }}
              >
                {/* Icon with animated background */}
                <div className="relative mb-3 md:mb-4">
                  {/* Pulsing background circle */}
                  {/* <div className="absolute inset-0 bg-black/10 rounded-full animate-ping opacity-20 group-hover:opacity-40" 
                                         style={{ animationDuration: '2s' }} /> */}

                  {/* Icon container */}
                  <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:rotate-12">
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12 text-black drop-shadow-md"
                      // strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Title with slide effect */}
                <h3 className="text-sm md:text-base font-bold text-black mb-1 md:mb-2 tracking-wide transition-all duration-300 group-hover:scale-105 group-hover:text-gray-900">
                  {feature.title}
                </h3>

                {/* Description with fade effect */}
                <p className="text-xs md:text-sm text-black/80 font-medium transition-all duration-300 group-hover:text-black">
                  {feature.description}
                </p>

                {/* Animated underline on hover */}
                <div className="h-0.5 w-0 bg-black/60 mt-2 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
