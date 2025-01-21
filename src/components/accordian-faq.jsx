import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Payment Gateways API ?</AccordionTrigger>
          <AccordionContent>
          Our advanced Payment Gateways API simplifies the integration process for developers, making it easy to add secure payment options to your platform, be it a website, app, or custom solution.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Payment Gateway Solution</AccordionTrigger>
          <AccordionContent>
          Our payment gateway solutions are tailored to meet your business needs, ensuring smooth, reliable, and secure transactions for your customers, no matter the size of your operation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Cheapest Payment Gateway in India</AccordionTrigger>
          <AccordionContent>
          Looking for the cheapest payment gateway in India? We offer affordable yet robust solutions that guarantee the best value for businesses of all sizes, helping you save costs without compromising security or performance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Payment Gateway Companies in India</AccordionTrigger>
          <AccordionContent>
          Partner with one of the most trusted payment gateway companies in India, renowned for its reliability, security, and user-friendly integrations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Online Payment Gateway in India</AccordionTrigger>
          <AccordionContent>
          Empower your business with the most secure and efficient online payment gateway in India. We offer seamless transactions, enabling you to accept payments with confidence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Payment Platforms</AccordionTrigger>
          <AccordionContent>
          Experience a unified payment platform that brings together all your payment needs in one place, offering everything from UPI and wallet payments to debit/credit cards and net banking, all within a single integration.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  