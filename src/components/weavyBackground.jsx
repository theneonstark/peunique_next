import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"


export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-full mx-auto">
      <section className="max-w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-16">
            <div className="mt-16 flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-[#0870e7] mb-2">
                  Secure Payment Gateways
                </span>
                <span className="block">Integration for Every Business</span>
              </h1>
              <div className="flex flex-wrap gap-4 items-center mt-4">
                <h2>Simplify Online Payments</h2>
                  <Separator orientation="vertical" />
            
                <h2>Secure Transactions</h2>
                <Separator orientation="vertical" />
                <h2>Transparent Pricing</h2>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Button variant="outline" className="hidden lg:flex">
                  Sign in
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Create Account
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <h2 className="text-lg">
                <span className="text-2xl font-bold text-[#0870e7]">20+</span>{" "}
                Clients
              </h2>
              <h2 className="text-lg">
                <span className="text-2xl font-bold text-[#0870e7]">30+ </span>
                Countries
              </h2>
              <h2 className="text-lg">
                <span className="text-2xl font-bold text-[#0870e7]">Multiple </span>
                Resources
              </h2>
            </div>
          </div>

          {/* Right Content */}
          <div className="h-[60vh] md:h-[90vh]">
            <Image
              src="/RenderedTimenegaandjaladi-bgremove.gif"
              alt="Hero illustration"
              className="w-full h-full object-contain"
              width={100}
              height={100}
            />
            {/* <img
              src="paymentbutton.gif"
              alt="Payment button animation"
              className="absolute z-30 bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 md:w-24 md:h-24"
            /> */}
          </div>
        </div>
      </section>
    </WavyBackground>
  );
}

export default WavyBackgroundDemo;
