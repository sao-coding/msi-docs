import { Inter } from "next/font/google"
import { RootProvider } from "fumadocs-ui/provider"
import type { ReactNode } from "react"

import "./global.css"

const inter = Inter({
  subsets: ["latin"]
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='zh-Hant-TW' className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
