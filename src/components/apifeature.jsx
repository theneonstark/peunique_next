import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MacbookScroll } from "./ui/macbook-scroll"

export default function ApiFeature() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-1">
          <div className="space-y-2">
            <div className="overflow-hidden">
            <MacbookScroll src={'/screenshot.png'} badge={
          <Link href="https://peerlist.io/manuarora">
            <Image src={'/favicon.png'} width={100} height={100} className="h-10 w-10 transform -rotate-12" />
          </Link>
        }/>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        {/* Languages Section */}
        <div className="space-y-4">
              <h2 className="text-xl">Languages</h2>
              <div className="flex flex-wrap gap-6 items-center">
                <Image
                  src="/"
                  alt="Curl"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/"
                  alt="Java"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/"
                  alt="Python"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/"
                  alt="PHP"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
                <Image
                  src="/"
                  alt="Node.js"
                  width={40}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
        <div className="grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-[#3B2864] p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-pink-500 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Integrations</h3>
            <p className="text-gray-300">Discover the range of integrations supported by our platform.</p>
          </div>

          <div className="rounded-xl bg-[#3B2864] p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-green-500 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">API Reference</h3>
            <p className="text-gray-300">Detailed documentation to help you integrate quickly.</p>
          </div>

          <div className="rounded-xl bg-[#3B2864] p-6 space-y-4">
            <div className="h-12 w-12 rounded-lg bg-yellow-500 flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Dev Studio</h3>
            <p className="text-gray-300">
              Test out your integrations and SDKs on our interactive developer playground.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

