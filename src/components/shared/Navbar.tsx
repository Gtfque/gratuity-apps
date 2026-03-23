"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">ЧайПул</Link>
        <div className="flex gap-6 items-center">
          <Link href="/qr">Создать QR</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login" className="text-gray-400">Войти</Link>
        </div>
      </div>
    </header>
  );
}