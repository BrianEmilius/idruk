"use client"
import { Inter } from "next/font/google"
import "./globals.css"
import PrimaryMenu from "@/components/primary-navigation"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="da" className="h-screen overflow-y-hidden">
      <body className={inter.className}>
        <main className="px-4 [height:100vh - calc(60px)] overflow-y-hidden">
          {children}
        </main>
        <PrimaryMenu />
      </body>
    </html>
  )
}
