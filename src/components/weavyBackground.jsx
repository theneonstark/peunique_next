"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-full mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold inter-var">
          Empower Your Payments
        </h1>
        <p className="text-base md:text-lg mt-4 font-medium inter-var">
          Experience seamless transactions with advanced payment solutions.
        </p>
        <button className="mt-6 px-6 py-3 bg-gray-100 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Feature 1"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold">Fast Payments</h3>
            <p className="mt-2 text-sm">
              Process payments in real-time with unmatched reliability.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Feature 2"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold">Secure Transactions</h3>
            <p className="mt-2 text-sm">
              Your payments are protected with top-notch encryption.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Feature 3"
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-bold">Global Reach</h3>
            <p className="mt-2 text-sm">
              Accept payments from customers worldwide with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-20 px-6 lg:px-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Ready to Simplify Your Payments?
        </h2>
        <p className="mt-4 text-sm md:text-lg">
          Join thousands of businesses using our platform for a seamless
          payment experience.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
          <button className="px-6 py-3 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-20 px-6 lg:px-16">
        <h2 className="text-center text-2xl md:text-4xl font-bold">
          What Our Clients Say
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
              <p className="text-sm">
                "The platform is incredibly easy to use and has significantly
                improved our payment processes."
              </p>
              <h4 className="mt-4 font-bold">John Doe</h4>
              <p className="text-sm">CEO, Example Co.</p>
            </div>
          ))}
        </div>
      </section>
    </WavyBackground>
  );
}
