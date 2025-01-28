// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header"; // 경로 확인

export const metadata: Metadata = {
  title: "Bebefood Renewal",
  description: "Next.js 15.1.6 with Firebase Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header /> {/* 공통 헤더 */}
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="w-full bg-gray-200 py-2 text-center">
          <p>© 2025 Bebefood All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
