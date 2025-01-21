import { WavyBackgroundDemo } from "@/components/weavyBackground";
import { TabsDemo } from "@/components/tabs";
import { AccordionDemo } from "@/components/accordian-faq";
import { Featurecards } from "@/components/featurecards";
import InfinitySlider from "@/components/infinite-slider";
import Image from "next/image";
import ApiFeature from "@/components/apifeature";

export default function Home() {
  return (
    <>
      <WavyBackgroundDemo/>
      <InfinitySlider/>
      <Featurecards/>
      <div className="bg-gray-50 p-16"> 
      <TabsDemo/>
      </div>
      <ApiFeature/>
      <div className="flex h-[70vh] justify-center max-w-7xl mx-auto px-4 py-20">
        <div className="md:w-1/2 mt-24 flex flex-col gap-2 ">
        <h2 className="text-6xl">Frequently Asked Questions</h2>
        </div>
        <div className="md:w-1/2 h-full flex justify-center"><AccordionDemo/></div>
      </div>


    </>
  );
}
