"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import WorldMap from "./ui/world-map";
import { motion } from "motion/react";

export function Featurecards() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2  h-full bg-pink-800 min-h-[200px] lg:min-h-[300px]"
        className="">
          <div className="flex items-center text-center justify-between">
            
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         150+ Payment Modes
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Our platform offers over 150+ payment modes, including UPI, wallets, debit/credit cards, net banking, and more, giving your customers multiple convenient payment options.
          </p> 
        </div>
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
             Customizable Payment Pages
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
              We enable businesses to customize payment pages to align with branding, improving user experience and increasing conversion rates.
          </p> 
        </div>
              </div>
      </WobbleCard>
     
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Multi-Business Support
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Whether you're in e-commerce, education, retail, B2B services, or any other sector, our solution is built to support all business types. We provide tailored payment gateway integration that fits seamlessly with any business model.
        </p>
       
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-800 min-h-[200px] lg:min-h-[300px]"
        className="">
            <div className="flex items-center text-center justify-between">
            
             <div className="max-w-xs">
           <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Secure Transactions
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We prioritize security with advanced encryption and fraud prevention measures, ensuring your transactions are safe and secure from start to finish.

          </p>
          </div>
           
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Instant Settlements
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We provide instant settlements, ensuring that you receive funds quickly, which is perfect for businesses needing cash flow flexibility.

          </p>
          </div>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
    
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
         Seamless Integration
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        We offer easy API integration, with well-documented resources and a flexible system for developers to integrate our gateway into any platform—website, app, or custom solution.

        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white">
          Remote{" "}
          <span className="text-white">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-white max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
        <WorldMap dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}/>
        </div>
      </WobbleCard>
    </div>)
  );
}
