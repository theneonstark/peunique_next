import { Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Airplay } from 'lucide-react';
import { AppleCardsCarouselDemo } from "@/components/apple-cards-carasoul";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { GoogleGeminiEffectDemo } from "@/components/google-gemini-effect";

export default function PaymentGatewayPage() {
  return (
    <TracingBeam className="px-6">
      <div>
        <div className="h-[90vh] relative">
          <div className="hidden lg:block absolute inset-0">
            <img
              src="/netbanking.webp"
              alt="Netbanking"
              className="w-full h-full"
            />
          </div>

          {/* Content over the image */}
          <div className="absolute inset-0 z-10 flex">
            <div className="flex flex-col items-start p-6 w-1/2 md:p-24 ">
              <div className="mt-10 leading-8 w-full">
                <p className="text-5xl text-white w-full">
                  Experience fast, secure, and hassle-free payments
                </p>
                <div className="flex flex-col gap-2 mt-10">
                  <p className="text-sm text-slate-200 w-5/6 leading-6 flex gap-3">
                    <span className="size-3 text-blue-600">
                      <Navigation />
                    </span>
                    PeUnique provides a vast range of products and capabilities, ensuring a high level of competence for all types of businesses.
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-4 pt-10">
                <Link href="/signup">
                  <Button className="bg-[#0870e7] hover:bg-[#3b6fab]">Create Account</Button>
                </Link>
              </div>
              <div className="flex gap-10 mt-10">
                <Airplay className="size-16 text-white"/>
                <Airplay className="size-16 text-white"/>
                <Airplay className="size-16 text-white"/>
                <Airplay className="size-16 text-white"/>
                <Airplay className="size-16 text-white"/>
              </div>
            </div>
            <div className="w-1/2">
              <GoogleGeminiEffectDemo /> {/* Add the scroll effect here */}
            </div>
          </div>
        </div>

        {/* card detail netbanking uses */}
        <div>
          <AppleCardsCarouselDemo />
        </div>
      </div>
    </TracingBeam>
  );
}
