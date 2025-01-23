import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Why Choose Our Payment Gateway Services?</AccordionTrigger>
        <AccordionContent>
          We are one of India’s most trusted names in payment solutions, empowering countless businesses across e-commerce, education,
          retail, and more to manage payments effortlessly. From accepting payments to processing vendor payouts, employee wages,
          bulk refunds, wallets, and payment links, we cater to diverse use cases with precision and ease.
        </AccordionContent>
        <AccordionContent>
          Our comprehensive payment solutions include a cutting-edge API platform for seamless payouts. Businesses can instantly
          transfer funds 24/7 to any bank account, UPI ID, card, or wallet using simple API integration, eliminating the need for
          tedious uploads on corporate banking portals.
        </AccordionContent>
        <AccordionContent>
          Additionally, our platform integrates seamlessly with leading names like Shopify, PayPal, Amazon Pay, Google Pay, and more,
          ensuring flexibility and scalability for your business.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is a Payment Gateway?</AccordionTrigger>
        <AccordionContent>
          A payment gateway is a tool that helps businesses accept payments online. It securely sends payment details from your
          website or app to the bank and then confirms if the payment is approved.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How does a Payment Gateway work?</AccordionTrigger>
        <AccordionContent>
          A payment gateway works by safely sending payment details from the customer to the payment processor, getting approval, and
          then sending a confirmation back to the website to complete the transaction. Our payment gateway solutions are tailored to
          meet your business needs, ensuring smooth, reliable, and secure transactions for your customers, no matter the size of your
          operation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How to Add a Payment Gateway to Your Website?</AccordionTrigger>
        <AccordionContent>
          To add a payment gateway to your website, choose a payment provider, sign up for an account, use a plugin or API to
          integrate it, and then test to make sure everything works smoothly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How to Create a Payment Gateway?</AccordionTrigger>
        <AccordionContent>
          To create a payment gateway, you need to build a system that allows payments, connect it to different payment methods, add
          security to protect customer data, and test everything to ensure it works properly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Online Payment Gateway in India</AccordionTrigger>
        <AccordionContent>
          Empower your business with the most secure and efficient online payment gateway in India. We offer seamless transactions,
          enabling you to accept payments with confidence.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Payment Platforms</AccordionTrigger>
        <AccordionContent>
          Experience a unified payment platform that brings together all your payment needs in one place, offering everything from
          UPI and wallet payments to debit/credit cards and net banking, all within a single integration.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
