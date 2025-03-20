import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vallabh Kulkarni | Software Developer",
  description: "Vallabh Kulkarni is a software developer at Oracle specializing in VBCS, ADF, and Oracle SQL.",
  keywords: ["Vallabh Kulkarni", "Software Developer", "Oracle", "VBCS", "ADF", "Oracle SQL", "Portfolio"],
  authors: [{ name: "Vallabh Kulkarni" }],
  creator: "Vallabh Kulkarni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vallabhkulkarni.vercel.app",
    title: "Vallabh Kulkarni | Software Developer",
    description: "Vallabh Kulkarni is a software developer at Oracle specializing in VBCS, ADF, and Oracle SQL.",
    siteName: "Vallabh Kulkarni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vallabh Kulkarni | Software Developer",
    description: "Vallabh Kulkarni is a software developer at Oracle specializing in VBCS, ADF, and Oracle SQL.",
    creator: "@vallabhcoolkarni",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CustomCursor />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

