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
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
