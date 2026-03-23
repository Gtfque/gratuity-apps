// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* subtle noise texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* gradient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full" />

      {/* HERO */}
      <section className="relative px-6 py-28 text-center">
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-1 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Новый стандарт чаевых</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(251,191,36,0.25)]">
              ЧайПул
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl font-medium opacity-90">
              цифровые чаевые
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Быстро. Честно. Прозрачно.
            <br />
            Гости платят — команда получает.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/qr">
              <Button className="relative group h-14 px-8 text-lg rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 overflow-hidden">
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                <QrCode className="mr-2 h-5 w-5" />
                Создать QR
              </Button>
            </Link>

            <Button
              variant="outline"
              className="h-14 px-8 text-lg rounded-xl border-white/20 text-white hover:bg-white/10 backdrop-blur"
            >
              Демо
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Команда",
            desc: "Все получают чаевые автоматически",
          },
          {
            title: "Без налички",
            desc: "Оплата в 2 клика",
          },
          {
            title: "Прозрачность",
            desc: "Полный контроль и статистика",
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-amber-500/10 to-transparent" />

            <CardContent className="relative p-6">
              <h3 className="text-xl font-semibold mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="relative max-w-4xl mx-auto text-center rounded-2xl p-10 border border-white/10 backdrop-blur-xl bg-white/5 overflow-hidden">
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 opacity-50" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Начни принимать чаевые сегодня
            </h2>
            <p className="text-gray-400 mb-6">
              Без сложной настройки. Без терминалов.
            </p>

            <Link href="/register">
              <Button className="h-14 px-8 text-lg rounded-xl bg-white text-black hover:bg-gray-200 shadow-lg">
                Начать бесплатно
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
