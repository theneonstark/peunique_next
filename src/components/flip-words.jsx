import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Minutes", "Seconds", "MiliSeconds", "NanoSeconds"];

  return (
    (
      <div
        className="text-4xl flex flex-col gap-5 items-center  text-neutral-600 dark:text-neutral-400">
            <div className="font-bold"> Recieve Your Payment In 
            <FlipWords words={words} /> <br /></div>
            <div className="font-bold"> Easy <span className="text-blue-600">Payment Link</span> Creation Process</div>
       
       
 
    </div>)
  );
}
