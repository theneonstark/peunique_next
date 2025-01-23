import { FlipWordsDemo } from "@/components/flip-words";
import {StickyScrollRevealDemo} from "@/components/sticky-scroll";
import { Navigation } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"



export default function PaymentLinkPage() {
  return (
<>
<div className=" flex flex-col gap-16">


    <div className="grid lg:grid-cols-2" >
    <div className="size-2/3 ">
          <img
            src="/qrcode.png"
            alt="Image"
            className=" rounded-lg " />
      </div>

      <div className="p-6 md:p-10 flex flex-col items-start justify-center w-[800px] mx-auto ">
            <h3 className="text-3xl">Multiple Platform Uses with QR Code</h3> 
       <div className="block mt-10 leading-loose  w-full" >
        <p className=" p-4 text-lg"> Hassle Free. Quick Payment. Happy Customer</p>
         
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

     </div>
     <div className="flex flex-col gap-4 mx-auto">
        <h3 className="text-3xl">Support all UPI Apps</h3>
        <div className="flex gap-4 ">
            <img src="/3004573.jpg" alt="paytm" className="size-24 rounded-lg" />
            <img src="/b2b.jpg" alt="phonepay" className="size-24 rounded-lg" />
            <img src="/contactless.jpg" alt="gpay" className="size-24 rounded-lg" />
            <img src="/payment-mode.jpg" alt="rupay" className="size-24 rounded-lg" />
            <img src="/paymentlink1.png" alt="visa" className="size-24 rounded-lg" />
            </div>
     </div>
      </div>
      


      <div className="flex flex-col mx-auto items-center justify-center mt-16   ">
        <h3 className="text-bold text-4xl">3 simple steps to receive payments via Payment Links</h3>
        <StickyScrollRevealDemo/>
       </div>
      </>
   
  );
}
