import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";
import { TooltipProvider } from "@/components/ui/tooltip";

const instrumentSansHeading = Instrument_Sans({subsets:['latin'],variable:'--font-heading'});
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <Providers>
      <body className="min-h-full flex flex-col justify-center  text-white ">
         <TooltipProvider>{children}</TooltipProvider></body>
      </Providers>
    </html>
  );
}
