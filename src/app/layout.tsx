import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Little Lemon Restaurant",
  description: "Welcome to Little Lemon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-white'>
        <Navbar />
        <main className='pt-14 md:pt-16 lg:pt-24'>{children}</main>{" "}
        {/* Offset fixed navbar */}
        <Footer />
      </body>
    </html>
  );
}
