// app/signup/page.tsx
"use client"; // 클라이언트 컴포넌트 선언

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase"; // 또는 "../firebase", "lib/firebase" 등 실제 경로 맞춰주세요.

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Firebase Auth - 이메일/비밀번호로 계정 생성
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("회원가입 성공! uid: " + userCredential.user.uid);
      // 가입 성공 후, 원하는 페이지로 이동하거나 메시지를 띄울 수 있음
    } catch (error: any) {
      alert("회원가입 실패: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <input
          type="email"
          className="border p-2"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="border p-2"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
