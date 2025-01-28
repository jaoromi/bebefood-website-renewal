// app/components/Header.tsx
"use client"; // 클라이언트 컴포넌트

import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase"; // 실제 경로 맞춰 수정 필요

export default function Header() {
  const [user, loading] = useAuthState(auth);

  return (
    <header className="w-full bg-white shadow p-4">
      <nav className="flex gap-4 items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Bebefood</Link>
        </h1>
        <ul className="flex gap-4 ml-auto">
          {/* 로딩 중일 때 */}
          {loading && <li className="text-gray-500">Loading...</li>}

          {/* 로그인 안 된 상태 */}
          {!loading && !user && (
            <>
              <li>
                <Link href="/login" className="hover:text-blue-600">
                  로그인
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-600">
                  회원가입
                </Link>
              </li>
            </>
          )}

          {/* 로그인 된 상태 */}
          {!loading && user && (
            <>
              <li className="text-blue-600">안녕하세요, {user.email}</li>
              <li>
                <Link href="/logout" className="hover:text-blue-600">
                  로그아웃
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
