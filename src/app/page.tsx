// src/app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  QrCode,
  Users,
  Heart,
  Shield,
  Sparkles,
  ArrowRight,
  Coffee,
} from "lucide-react";
import { motion } from "framer-motion";

// =========================
// Animations
// =========================

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// =========================
// Reusable Components
// =========================

const Section = ({ children, className = "" }: any) => (
  <section className={`container mx-auto px-4 ${className}`}>{children}</section>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div variants={fadeUp}>
    <Card className="group bg-gradient-to-br from-gray-900/70 to-gray-950/80 border-gray-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10">
      <CardHeader>
        <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-all group-hover:scale-110">
          <Icon className="w-6 h-6 text-amber-500" />
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  </motion.div>
);

const Step = ({ number, title, description }: any) => (
  <motion.div variants={fadeUp} className="text-center group">
    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-500/20 group-hover:scale-110 transition">
      <span className="text-2xl font-bold text-amber-500">{number}</span>
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

// =========================
// Main Page
// =========================

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="container mx-auto px-4 py-24 md:py-32 text-center max-w-4xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 mb-6 border border-amber-500/20">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-amber-400">Новый способ благодарить</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              ЧайПул
            </span>
            <span className="block text-gray-200 text-3xl md:text-4xl mt-2">
              чаевые для всей команды
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Простой способ благодарить за сервис. Быстро, честно и удобно.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/qr">
              <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-6 rounded-xl text-lg shadow-lg">
                <QrCode className="mr-2 h-5 w-5" />
                Создать QR
              </Button>
            </Link>

            <Button variant="outline" className="hover:bg-gray-800 hover:text-white px-8 py-6 rounded-xl">
              Как это работает
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <Section className="py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard icon={Users} title="Для всей команды" description="Распределение чаевых между всеми сотрудниками." />
          <FeatureCard icon={Heart} title="Без наличных" description="Оплата картой или СБП за секунды." />
          <FeatureCard icon={Shield} title="Прозрачно" description="Полная отчетность и контроль." />
        </motion.div>
      </Section>

      {/* STATS */}
      <Section className="py-20 border-t border-gray-800">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["500+", "50,000+", "₽10M+"].map((value, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold text-amber-500 mb-2">{value}</div>
              <div className="text-gray-400">
                {["заведений", "гостей", "чаевых"][i]}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Как это <span className="text-amber-500">работает</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-12"
        >
          <Step number="1" title="Создать QR" description="За 1 минуту" />
          <Step number="2" title="Сканирование" description="Без приложений" />
          <Step number="3" title="Получение" description="Автоматически" />
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="py-24">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-12 text-center border border-amber-500/20"
        >
          <Coffee className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Начните за 2 минуты
          </h3>
          <p className="text-gray-400 mb-6">
            Без сложной настройки
          </p>
          <Link href="/register">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-xl">
              Начать бесплатно
            </Button>
          </Link>
        </motion.div>
      </Section>

      {/* FOOTER */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <Coffee className="w-4 h-4 text-amber-500" />
          © 2026 ЧайПул
        </div>
        <div className="flex gap-6 text-sm">
          {[
            "О нас",
            "Контакты",
            "Политика",
          ].map((item) => (
            <a key={item} href="#" className="hover:text-amber-500">
              {item}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}