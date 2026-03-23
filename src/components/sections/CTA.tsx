import Link from "next/link";

export default function CTA() {
  return (
    <section className="text-center py-20">
      <h2 className="text-3xl mb-4">Начните за 2 минуты</h2>
      <Link href="/qr" className="bg-white text-black px-6 py-3 rounded-xl">
        Начать
      </Link>
    </section>
  );
}