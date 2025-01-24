"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

export function StickyScrollRevealDemo({ content }) {
  const formattedContent = content.map((step, index) => ({
    title: step.title,
    description: step.description,
    content: (
      <div key={index} className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={step.imageSrc}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt={`Step ${index + 1} Image`}
        />
      </div>
    ),
  }));

  return (
    <div className="p-10">
      <StickyScroll content={formattedContent} />
    </div>
  );
}
