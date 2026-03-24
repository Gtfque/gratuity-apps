'use client';
import React from 'react';

import Header from '../components/Header';
import StepCard from '../components/StepCard';
import GradientBG from '../components/GradientBG';

export default function About() {
  return (
    <main className="relative min-h-screen bg-gray-50 overflow-x-hidden">
      <GradientBG />
      <Header />

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Заголовок */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Как это работает
          </h1>
          <p className="text-gray-600 text-lg">
            Простой процесс оставления чаевых
          </p>
        </section>

        {/* Шаги */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-10">

          <StepCard
            title="Выбираете сумму"
            description="Определяете размер чаевых"
            showArrow
            icon="money"
          />

          <StepCard
            title="Пишите сообщение"
            description="Можно оставить комментарий"
            showArrow
            icon="message"
          />

          <StepCard
            title="Оплачиваете"
            description="Через QR или карту"
            icon="payment"
          />

        </section>

      </div>
    </main>
  );
}