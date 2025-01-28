import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello Next.js 15.1.6 with Tailwind!
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Tailwind is working if this text is styled.
      </p>
    </main>
  );
}
