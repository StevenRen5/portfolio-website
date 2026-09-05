import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"


export const metadata: Metadata = {
  title: "Steven Ren - Frontend Developer", // browser tab title 
  description: "Frontend Developer Portfolio", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        {children} {/* main page content */}
        <Footer />
      </body> 
    </html>
  );
}
