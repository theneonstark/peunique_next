import { FlipWordsDemo } from "@/components/flip-words";
import {StickyScrollRevealDemo} from "@/components/sticky-scroll";
import { Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"



export default function PaymentLinkPage() {
  return (
    <div>

    <div className="grid lg:grid-cols-2">
      <div className="p-6 md:p-10 flex flex-col items-start justify-center w-[800px] mx-auto ">
       <FlipWordsDemo/>
       <div className="block mt-10 leading-loose  w-full" >
        <p className=" p-4 text-lg"> Create a payment link in just 3 clicks to sell online without a website, and get paid instantly.
            Share effortlessly with your customers to accept online payments. No code required.</p>
         
          <div className="flex flex-col gap-2 mt-10">
              <p className="text-sm text-slate-600 flex gap-3"> <span className="size-3 text-blue-600"><Navigation /></span>The all new powerful Payment Links with Reminders</p>   
              <p className="text-sm text-slate-600 flex gap-3"> <span className="size-3 text-blue-600"><Navigation /></span>Collect faster payments on UPI Payment Links with up to 50% lower fees</p>   
          </div>
       </div>
       <div className="flex justify-end gap-4 pt-10">
         <Link href='/login'>
          <Button variant="ghost" className="hidden lg:flex">
            Sign in
          </Button></Link>
          <Link href='/signup'> <Button className="bg-[#0870e7] hover:bg-[#3b6fab]">Create Account</Button></Link>
        </div>
      
     </div>

      <div className="size-5/6 mt-10 hidden lg:block">
        <img
      
      src="/paymentlink1.png"
      alt="Image"
      className="object-contain rounded-lg w-full h-full " />
      </div>

      </div>
      <div className="flex flex-col mx-auto items-center justify-center">
        <h3 className="text-bold text-4xl">3 simple steps to receive payments via Payment Links</h3>
        <StickyScrollRevealDemo/>
       </div>
      </div>
   
  );
}
