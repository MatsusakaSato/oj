"use client";
// src/components/layout/MainLayout.tsx
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { SessionProvider } from "next-auth/react";

// 接收子元素作为props，类型为ReactNode
interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SessionProvider>
      <div className="grid grid-cols-[200px_1fr] grid-rows-[64px_1fr] h-screen w-full overflow-hidden">
        {/* 顶部导航栏：跨2列，高度64px */}
        <header className="col-span-2 row-span-1 bg-card border-b z-10">
          <Header />
        </header>

        {/* 侧边栏：仅占第一列，纵向跨2行 */}
        <aside className="col-span-1 row-span-2 bg-card border-r z-10 overflow-y-auto scrollbar-hide">
          <Sidebar />
        </aside>

        {/* 主内容区：仅占第二列，纵向跨2行，包含页脚自适应逻辑 */}
        <main className="col-span-1 row-span-2 bg-muted/20 relative z-20 flex flex-col">
          <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
            <div className="min-h-full flex flex-col">
              <div className="flex-1">{children}</div>
              <footer className="py-4 border-t bg-card mt-4">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                  © 2026 Online Judge | Built with Next.js
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </SessionProvider>
  );
}
