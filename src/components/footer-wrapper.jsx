"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  // Conditionally render the Footer
  if (isLoginPage) {
    return null; // Do not show Footer on the login page
  }

  return <Footer />;
}
