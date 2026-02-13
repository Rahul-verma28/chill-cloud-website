'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Zap, Flame, Crown, CheckCircle2 } from 'lucide-react';

// Register plugin outside component to avoid re-registration
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
  {
    value: 8,
    suffix: '+',
    label: 'PREMIUM FLAVORS',
    icon: <Flame className="w-5 h-5 text-[#D4AF37]" />,
    desc: 'EXOTIC CURATED PROFILES'
  },
  {
    value: 4,
    suffix: '+',
    label: 'CATEGORIES',
    icon: <Zap className="w-5 h-5 text-[#D4AF37]" />,
    desc: 'VERSATILE COLLECTIONS'
  },
  {
    value: 100,
    suffix: '%',
    label: 'QUALITY STANDARD',
    icon: <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />,
    desc: 'ARTISANAL PRECISION'
  },
  {
    value: 2024,
    suffix: '+',
    label: 'YEARS TRUSTED',
    icon: <Crown className="w-5 h-5 text-[#D4AF37]" />,
    desc: 'SINCE INCEPTION'
  },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const animationsInitialized = useRef(false);

  useEffect(() => {
    // Ensure we're in browser environment
    if (typeof window === 'undefined' || !containerRef.current) return;

    // Use IntersectionObserver to detect when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationsInitialized.current) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView || animationsInitialized.current || !containerRef.current) return;

    animationsInitialized.current = true;

    const ctx = gsap.context(() => {
      // Counter Animation with improved trigger
      const counters = containerRef.current?.querySelectorAll('.stat-counter');
      counters?.forEach((counter) => {
        const targetValue = parseInt(counter.getAttribute('data-target') || '0');

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2.5,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate: function () {
              counter.textContent = Math.ceil(this.targets()[0].innerText);
            }
          }
        );
      });

      // Card staggered entrance
      gsap.fromTo(
        '.stat-card',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-24 bg-[#0D0B09] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative p-10 rounded-[2.5rem] bg-[#141210] border border-white/[0.03] transition-all duration-500 hover:border-[#D4AF37]/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
              style={{ opacity: 0 }}
            >
              {/* Decorative Background Shapes from Image */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#D4AF37]/3 rounded-full blur-2xl" />

              {/* Icon Container - Squared with rounded corners and border */}
              <div className="relative w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center mb-10 group-hover:border-[#D4AF37]/40 transition-colors duration-500">
                {stat.icon}
              </div>

              {/* Data Section */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <span
                    className="stat-counter text-6xl md:text-7xl font-bold text-white tracking-tighter"
                    data-target={stat.value}
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    0
                  </span>
                  <span className="text-3xl font-bold text-[#D4AF37] mt-2 ml-1">{stat.suffix}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-[#D4AF37] text-[11px] font-black tracking-[0.2em] uppercase">
                    {stat.label}
                  </h3>
                  <p className="text-white/30 text-[9px] font-bold tracking-[0.15em] uppercase">
                    {stat.desc}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}