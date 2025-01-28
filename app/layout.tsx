// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bebefood Renewal",
  description: "Powered by Next.js 15.1.6",
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
          <h1 className="text-xl font-bold">Bebefood</h1>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        <footer className="w-full bg-gray-200 py-2 text-center">
          <p>© 2025 Bebefood All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
