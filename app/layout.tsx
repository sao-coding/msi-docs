import { Inter } from "next/font/google"
import { I18nProvider } from "fumadocs-ui/i18n"
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
        <I18nProvider
          locale='zh-TW'
          translations={{
            toc: "目錄",
            search: "搜尋文檔",
            lastUpdate: "最後更新於",
            searchNoResult: "沒有結果",
            previousPage: "上一頁",
            nextPage: "下一頁",
            chooseTheme: "選擇外觀主題",
            tocNoHeadings: "沒有子標題"
          }}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
