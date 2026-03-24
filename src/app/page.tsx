'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Card from './components/Card';
import StepCard from './components/StepCard';
import QRGradient from './components/QRGradient';
import ProgressBar from './components/ProgressBar';
import GradientBG from './components/GradientBG';
import Button from './components/Button';

export default function Home() {
  const [tipsFlow] = useState([50, 30, 20, 60, 90]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <GradientBG />
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="text-center mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text"
          >
            Gratuity Apps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Новый уровень благодарности сотрудникам — быстро, красиво и без наличных
          </motion.p>

          <Button gradient onClick={() => window.location.href = '/donate'}>
            Оставить чаевые
          </Button>
        </section>

        {/* FEATURES */}
        <section className="grid md:grid-cols-3 gap-8 mb-28">
          <Card title="Онлайн оплата" description="QR и карты" icon="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/credit-card.svg" />
          <Card title="Прозрачность" description="Видно каждый перевод" icon="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/eye.svg" />
          <Card title="Рост дохода" description="Мотивация сотрудников" icon="https://cdn.jsdelivr.net/npm/heroicons@2.0.18/24/outline/fire.svg" />
        </section>

        {/* HOW */}
        <section className="mb-28">
          <h2 className="text-3xl text-center mb-12">Как это работает</h2>

          <div className="flex flex-col md:flex-row gap-10 justify-center">
            <StepCard title="Сумма" description="Выбираете сумму" icon="money" showArrow />
            <StepCard title="Сообщение" description="Добавляете текст" icon="message" showArrow />
            <StepCard title="Оплата" description="QR или карта" icon="payment" />
          </div>
        </section>

        {/* REVIEWS */}
        <section className="mb-28">
          <h2 className="text-3xl text-center mb-12">Отзывы</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {['Очень удобно', 'Доход вырос', 'Лучшее решение'].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10"
              >
                <p className="text-gray-300 mb-4">"{text}"</p>
                <span className="text-sm text-gray-500">Сотрудник</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROGRESS */}
        <section className="mb-28 max-w-xl mx-auto">
          <h2 className="text-2xl text-center mb-6">Прогресс команды</h2>
          <ProgressBar label="Иван" percentage={70} />
          <ProgressBar label="Мария" percentage={50} />
          <ProgressBar label="Алексей" percentage={90} />
        </section>

        {/* CTA */}
        <section className="text-center mb-28">
          <h2 className="text-3xl mb-6">Поддержите сотрудников</h2>
          <QRGradient value="https://donate.example.com" size={200} />

          <div className="mt-6">
            <Button gradient>Перейти к оплате</Button>
          </div>
        </section>
      </div>

      {/* FLOW */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        {tipsFlow.map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: -150 - i * 20, opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            className="w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]"
          />
        ))}
      </div>
    </main>
  );
}