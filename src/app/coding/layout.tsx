// src/app/layout.tsx（原RootLayout）
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
// 引入抽离后的MainLayout组件
import { cn } from "@/lib/utils";

// 全局字体配置保留
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// 全局元数据保留
export const metadata: Metadata = {
  title: "Online Judge",
  description: "在线编程测评平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.className,
          "h-screen bg-background text-foreground m-0 p-0",
        )}
      >
        {children}
      </body>
    </html>
  );
}
