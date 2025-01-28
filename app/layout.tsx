// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Link from "next/link"; // 추가

export const metadata: Metadata = {
  title: "Bebefood Renewal",
  description: "Next.js 15.1.6 with App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="w-full bg-white shadow p-4">
          <nav className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">
              <Link href="/">Bebefood</Link>
            </h1>
            <ul className="flex gap-4 ml-auto">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-600">
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="w-full bg-gray-200 py-2 text-center">
          <p>© 2025 Bebefood All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
