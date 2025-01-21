"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { AnimatedTooltipPreview } from "./animated-tooltip";

export function TabsDemo() {
  const tabs = [
    {
      title: "Payment Links",
      value: "Payment Links",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Payment Links</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "B2B Services",
      value: "B2B Services",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>B2B Services</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Wallets",
      value: "Wallets",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Wallets</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Payouts",
      value: "Payouts",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Payouts</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Offline Payments",
      value: "Offline Payments",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Offline Payments</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    (<div
    
      className="h-[20rem]  md:h-[45rem] [perspective:1000px] relative b flex flex-col max-w-6xl mx-auto w-full  items-start justify-start mb-40">
    <div className=" flex gap-52">
        <div>

        <h1 className="text-6xl block font-semibold ">Powering Every Modes.</h1>
        <h1 className="text-6xl block mb-10 font-semibold">Powering all disruptors.</h1>
        </div>
        <div>
       < AnimatedTooltipPreview/>
        </div>
    </div>
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<Image
      src="/retail.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
