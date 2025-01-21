import { WavyBackgroundDemo } from "@/components/weavyBackground";
import { FeaturesSectionDemo } from "@/components/featureBentoGrid";
import { TabsDemo } from "@/components/tabs";
import { AccordionDemo } from "@/components/accordian-faq";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <WavyBackgroundDemo/>
      <FeaturesSectionDemo/>
      <div className="bg-gray-50 p-16"> 
      <TabsDemo/>
      </div>
      <div className="flex h-[70vh] justify-center max-w-7xl mx-auto px-4 py-20">
        <div className="md:w-1/2 mt-24 flex flex-col gap-2 ">
        <h2 className="text-6xl">Frequently Asked Questions</h2>

        </div>
        <div className="md:w-1/2 h-full flex justify-center"><AccordionDemo/></div>
      </div>


    </>
  );
}
