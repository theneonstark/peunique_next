"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  // Lock the page scroll when scrolling inside the effect container
  useEffect(() => {
    const onScroll = () => {
      if (ref.current && ref.current.scrollTop > 0) {
        document.body.style.overflow = "hidden"; // Disable page scroll
      } else {
        document.body.style.overflow = "auto"; // Enable page scroll
      }
    };

    ref.current?.addEventListener("scroll", onScroll);

    return () => {
      ref.current?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="h-full bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-y-scroll" // Make the div scrollable
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}
