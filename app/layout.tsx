// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Bebefood Renewal",
  description: "Next.js 15.1.6 - Bebefood Header Setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        {/*
          max-w-5xl, mx-auto 등의 제한을 없애고
          children을 그대로 렌더링
        */}
        {children}
      </body>
    </html>
  );
}
