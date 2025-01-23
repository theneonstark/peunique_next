"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  // Conditionally render the Navbar
  if (isLoginPage) {
    return null; // Do not show Navbar on the login page
  }

  return <Navbar />;
}
