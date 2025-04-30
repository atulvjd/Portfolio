import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Atul Sahu | CEO, AI Builder & Content Creator",
  description:
    "Portfolio of Atul Sahu, an 18-year-old entrepreneur, AI builder, and content creator from Raipur, India.",
  openGraph: {
    title: "Atul Sahu | CEO, AI Builder & Content Creator",
    description:
      "Portfolio of Atul Sahu, an 18-year-old entrepreneur, AI builder, and content creator from Raipur, India.",
    url: "https://atulsahu.com",
    siteName: "Atul Sahu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://atulsahu.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atul Sahu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Sahu | CEO, AI Builder & Content Creator",
    description:
      "Portfolio of Atul Sahu, an 18-year-old entrepreneur, AI builder, and content creator from Raipur, India.",
    images: ["https://atulsahu.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen bg-[#0F0F0F] text-[#F1F1F1]">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
