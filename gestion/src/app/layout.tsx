import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons :"/logo.png",
  title: "CDJ",
  description: "Gestion de talento humano",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
