// app/components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow p-4">
      <nav className="flex items-center max-w-5xl mx-auto">
        {/* 로고 */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="http://thanyang02.cafe24.com/wp-content/uploads/2016/04/bebe_logo01.jpg"
            alt="Bebefood Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* 메뉴 */}
        <ul className="flex gap-6 ml-auto text-lg font-bold text-gray-700">
          <li>
            <Link href="/" className="hover:text-blue-500">
              홈
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              회사소개
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-500">
              제품소개
            </Link>
          </li>
          <li>
            <a
              href="https://shop.bebefood.co.kr"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              쇼핑몰
            </a>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
