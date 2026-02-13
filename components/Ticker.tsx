import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type TickerProps = {
  title: string;
  bgColor?: string;
};

const Ticker = ({ title, bgColor = "bg-[#ECF6FF]" }: TickerProps) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 60,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);
  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-40  py-1 rounded mb-6 ${bgColor}`}
    >
      <div
        ref={tickerRef}
        className="flex gap-4 text-xs tracking-wider text-gray-700 uppercase whitespace-nowrap"
      >
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <span key={i + 1}>{title}</span>
          ))}
      </div>
    </div>
  );
};

export default Ticker;
