// app/logout/page.tsx
"use client";

import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase"; // 경로 확인 후 수정 필요

export default function LogoutPage() {
  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
      alert("로그아웃 되었습니다.");
    } catch (error: any) {
      alert("로그아웃 실패: " + error.message);
    }
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">로그아웃</h1>
      <p>버튼을 누르면 로그아웃됩니다.</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        로그아웃
      </button>
    </div>
  );
}
