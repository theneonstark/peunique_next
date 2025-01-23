"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function InfinitySlider() {
  const logos = [
    { name: "CRED", url: "/BANKITLOGO.png" },
    { name: "Nykaa", url: "/ICICILOGO.png" },
    { name: "Delhivery", url: "/PayU-logo.png" },
    { name: "ACKO", url: "/SBMLOGO.png" },
    { name: "Shell", url: "/YESBANKLOGO.png" },
    { name: "Union Bank", url: "/UNIONBANK.png" },
    { name: "Kotak Bank", url: "/KOTAKLBANKLOGO.png" },
  ];

  // Duplicate logos for smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let start = 0;
    const speed = 1; // Adjust scroll speed
    let animationFrameId;

    const scrollLogos = () => {
      start -= speed;

      // Reset position for seamless scroll
      if (start <= -container.scrollWidth / 2) {
        start = 0;
      }

      container.style.transform = `translateX(${start}px)`;
      animationFrameId = requestAnimationFrame(scrollLogos);
    };

    scrollLogos();

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-12 mb-4">
      <div
        className="relative flex w-fit"
        ref={containerRef}
        style={{ willChange: "transform" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex w-[120px] items-center justify-center"
          >
            <div className="relative h-16 w-32">
              <Image
                src={logo.url || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
