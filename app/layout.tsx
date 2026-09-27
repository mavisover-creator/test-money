import type { Metadata } from "next";
import { Chiron_GoRound_TC, Huninn } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

// 內文：標楷體，圓潤好讀
const goRound = Chiron_GoRound_TC({
  variable: "--font-goround",
  weight: "variable",
  subsets: ["latin"],
  preload: false,
});

// 標題：標楷體，可愛感
const huninn = Huninn({
  variable: "--font-huninn",
  weight: "400",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "金錢靈氣｜拉拉老師",
  description: "跟著拉拉老師學習金錢靈氣，療癒你與金錢的關係，讓豐盛自然流動。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${goRound.variable} ${huninn.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
