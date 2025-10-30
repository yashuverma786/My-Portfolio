import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yash Verma - Web Developer Portfolio",
  description:
    "Portfolio of Yash Verma, a Full Stack Web Developer specializing in React, Node.js, PHP, Laravel, and WordPress.",
  keywords: [
    "Yash Verma",
    "Web Developer",
    "Full Stack",
    "React",
    "Node.js",
    "PHP",
    "Laravel",
    "WordPress",
    "Portfolio",
  ],
  openGraph: {
    title: "Yash Verma - Web Developer Portfolio",
    description:
      "Portfolio of Yash Verma, a Full Stack Web Developer specializing in React, Node.js, PHP, Laravel, and WordPress.",
    url: "https://yashverma.vercel.app", // Replace with your actual domain
    siteName: "Yash Verma Portfolio",
    images: [
      {
        url: "/images/yash-verma-profile.jpeg", // Use your profile image
        width: 800,
        height: 600,
        alt: "Yash Verma Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Verma - Web Developer Portfolio",
    description:
      "Portfolio of Yash Verma, a Full Stack Web Developer specializing in React, Node.js, PHP, Laravel, and WordPress.",
    images: ["/images/yash-verma-profile.jpeg"], // Use your profile image
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
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
