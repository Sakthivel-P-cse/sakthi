import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ThemeInitializer from "@/components/theme-initializer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M. Bhuvaneswar | Portfolio",
  description: "Computer Science Engineer & Developer specializing in full-stack development, AI, and problem-solving",
  keywords: ["developer", "portfolio", "react", "nextjs", "full-stack", "AI", "machine learning"],
  authors: [{ name: "M. Bhuvaneswar", url: "https://github.com/BHUVI-SHIP-IT" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhuvaneswar-portfolio.vercel.app",
    title: "M. Bhuvaneswar | Portfolio",
    description:
      "Computer Science Engineer & Developer specializing in full-stack development, AI, and problem-solving",
    siteName: "M. Bhuvaneswar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Bhuvaneswar | Portfolio",
    description:
      "Computer Science Engineer & Developer specializing in full-stack development, AI, and problem-solving",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
