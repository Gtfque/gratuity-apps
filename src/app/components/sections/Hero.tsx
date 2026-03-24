"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-32">
      <h1 className="text-5xl font-bold mb-6">
        Увеличьте чаевые команды до +40%
      </h1>
      <p className="text-gray-400 mb-8">
        Без наличных. Без приложений.
      </p>
      <div className="flex justify-center gap-4">
        <Link href="/qr" className="bg-amber-500 px-6 py-3 rounded-xl">
          Создать QR
        </Link>
        <Link href="/pay" className="border px-6 py-3 rounded-xl">
          Демо
        </Link>
      </div>
    </section>
  );
}