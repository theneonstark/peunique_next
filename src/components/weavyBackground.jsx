import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Button } from "@/components/ui/button"


export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-full mx-auto">
      <section className="max-w-full mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center ">
           <div className="flex flex-col gap-20">
            <div className="mt-24 flex flex-col gap-2 ">
              <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-[#0870e7] mb-2">
              Secure Payment Gateways
              </span>
              <span className="block">
              Integration for Every Business
              </span>
            </h1>
            <div className="flex m-4 items-center">
            <h2>Simplify Online Payments</h2>
            <span className="m-2 ">|</span>
            <h2>Secure Transactions</h2>
            <span className="m-2">|</span>
            <h2>Transparent Pricing</h2>
            </div>
            <div>
               <div className="flex items-center gap-4">
                        <Button variant="outline" className="hidden lg:flex">
                          Sign in
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">Create Account</Button>
                      </div>
          </div>
            </div>
            <div className="flex gap-10">
              <h2 className="text-lg"><span className="text-2xl font-bold text-[#0870e7]">20+</span> Clients
              </h2>
              <h2 className="text-lg  "><span className="text-2xl font-bold text-[#0870e7]">Across 30+ </span>Countries</h2>
              <h2 className="text-lg  "><span className="text-2xl font-bold text-[#0870e7]">Multiple </span>Resources</h2>
            </div>
          </div>
          
          <div className="md:w-1/2 relative h-[90vh]">
            <img 
              src="pemnoe.png" 
              alt="Hero illustration" 
              className="w-full h-[90vh] object-contain"
            />
            <img src="paymentbutton.gif" className="absolute z-30 bottom-6 left-32 size-60"/>
          </div>
        </div>
      </section>
    </WavyBackground>
  );
}

export default WavyBackgroundDemo;