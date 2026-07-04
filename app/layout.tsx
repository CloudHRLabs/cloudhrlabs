import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CloudHRLabs",
  description: "Learn Workday Like a Real Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-slate-950 text-white">
          <Navbar />

          {children}

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}