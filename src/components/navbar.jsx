"use client";
import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";

export default function Navbar() {
  return (
    (<header className="sticky top-0 w-full border-b bg-white" style={{zIndex: 9000}}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          {/* <span className="text-xl font-bold text-[#0870e7]">Cashfree</span>
          <span className="text-lg font-semibold">Payments</span> */}
          <Image src={'/logo.png'} width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Payment Modes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-4 p-8 w-[700px]">
                 
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0870e7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <Link href="/paymentgateways"> <h3 className="font-medium">Payment Gateways</h3>     </Link>

                      <p className="text-sm text-gray-600">Fast and secure real-time payments.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0870e7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                    <Link href="/wallet">  <h3 className="font-medium">Wallets</h3> </Link>
                      <p className="text-sm text-gray-600">Popular digital wallets like Paytm, Amazon Pay, and Google Pay.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0870e7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    
                  
                    <div className="group">
                    <Link href="/paymentlink"> <h3 className="font-medium">Payment Links</h3>     </Link>
                      <p className="text-sm text-gray-600">Share links for instant payments, even without a website.</p>
                    </div>
                  </div>
             
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#0870e7]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                    <Link href="/payouts"><h3 className="font-medium">Payouts</h3></Link>
                      <p className="text-sm text-gray-600">Convenient direct bank transfers.</p>
                    </div>
                  </div>
                  
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-700">
                Identity & Risk Solutions
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-700">
                Developers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-700">
                Partner with us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-700">
                Support
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-50 hover:text-purple-700">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-lg font-medium">
                Payments
              </Link>
              <Link href="#" className="text-lg font-medium">
                Identity & Risk Solutions
              </Link>
              <Link href="#" className="text-lg font-medium">
                Developers
              </Link>
              <Link href="#" className="text-lg font-medium">
                Partner with us
              </Link>
              <Link href="#" className="text-lg font-medium">
                Support
              </Link>
              <Link href="#" className="text-lg font-medium">
                Pricing
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
         <Link href='/login'>
          <Button variant="ghost" className="hidden lg:flex">
            Sign in
          </Button></Link>
          <Link href='/signup'> <Button className="bg-[#0870e7] hover:bg-[#3b6fab]">Create Account</Button></Link>
        </div>
      </div>
    </header>)
  );
}

