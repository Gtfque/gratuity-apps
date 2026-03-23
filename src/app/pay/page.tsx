"use client";
import { useRouter } from "next/navigation";

export default function PayPage() {
  const router = useRouter();

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl mb-4">Оплата</h1>
      <button
        onClick={() => router.push("/pay/success")}
        className="bg-green-500 px-6 py-3 rounded-xl"
      >
        Оплатить
      </button>
    </div>
  );
}