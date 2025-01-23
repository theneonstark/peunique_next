import { WavyBackgroundDemo } from "@/components/weavyBackground";
import { TabsDemo } from "@/components/tabs";
import { AccordionDemo } from "@/components/accordian-faq";
import { Featurecards } from "@/components/featurecards";
import InfinitySlider from "@/components/infinite-slider";
import Image from "next/image";
import ApiFeature from "@/components/apifeature";
import {  ArrowRight } from "lucide-react";

import {AnimatedTestimonialsDemo} from "@/components/animatedTestimonials.jsx";

export default function Home() {
  return (
    <>
      <WavyBackgroundDemo/>
      <InfinitySlider/>
      
      <div className="my-16 flex items-center flex-col py-24 gap-10 bg-gray-50 ">
        <div>
        <h3 className="text-6xl mb-10 font-bold">Features of Our Payment Gateways</h3>
        </div>


      <Featurecards/>
      </div>

      <div className="pt-16"> 
      <TabsDemo/>
      </div>
      <ApiFeature/>
      
      <div className="">
      <div className=" flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 py-10 md:py-32">
        <div className="md:w-1/2 flex flex-col gap-6">
        <h2 className="text-6xl font-bold">Frequently Asked Questions</h2>
        <h3 className="text-lg">More Questions?</h3>
        <h2 className="text-md flex text-blue-600 underline">Help & Support <ArrowRight/> </h2>
        </div>
        <div className="md:w-1/2 h-full flex justify-center"><AccordionDemo/></div>
      </div>
      </div>

      <div className=" my-2 pt-24 bg-gray-50">
        <div className="flex items-center justify-between text-center mx-auto max-w-7xl">
          <h3 className="text-6xl font-bold">Be<span className="text-blue-600">Unique</span> With Pe<span className="text-green-600">Unique</span> </h3>
          <h3 className="text-xl font-medium"><span className="text-2xl font-semibold">200+</span> Happy Customers</h3>
        </div>
        <AnimatedTestimonialsDemo/>
      </div>


    </>
  );
}
