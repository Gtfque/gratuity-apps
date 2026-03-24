'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Header from '../../components/Header';
import ProgressBar from '../../components/ProgressBar';
import GradientBG from '../../components/GradientBG';

interface Tip {
  date: string;
  amount: number;
}

export default function EmployeeDashboard() {
  const [tips] = useState<Tip[]>([
    { date: '01 Марта', amount: 200 },
    { date: '05 Марта', amount: 150 },
    { date: '10 Марта', amount: 300 },
    { date: '15 Марта', amount: 400 },
    { date: '20 Марта', amount: 250 },
  ]);

  const employees = [
    { name: 'Иван', progress: 70 },
    { name: 'Мария', progress: 50 },
    { name: 'Алексей', progress: 80 },
  ];

  const totalTips = tips.reduce((sum, tip) => sum + tip.amount, 0);

  return (
    <main className="relative min-h-screen px-8 py-16 bg-gray-50 overflow-x-hidden">
      <GradientBG />
      <Header />

      {/* Заголовок */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Панель сотрудника
        </h1>
        <p className="text-gray-700 text-lg">
          Ваши чаевые и статистика
        </p>
      </section>

      {/* Общая сумма */}
      <section className="max-w-xl mx-auto mb-12 bg-white p-8 rounded-xl shadow-xl text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Общие чаевые
        </h2>
        <p className="text-4xl font-bold text-purple-600">
          {totalTips} ₽
        </p>
      </section>

      {/* Прогресс команды */}
      <section className="max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
          Прогресс команды
        </h2>

        {employees.map((emp) => (
          <ProgressBar
            key={emp.name}
            label={emp.name}
            percentage={emp.progress}
          />
        ))}
      </section>

      {/* История чаевых */}
      <section className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          История чаевых
        </h2>

        <div className="flex flex-col gap-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex justify-between bg-gray-100 p-3 rounded-lg"
            >
              <span>{tip.date}</span>
              <span className="font-semibold text-purple-600">
                {tip.amount} ₽
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Анимация чаевых */}
      <section className="absolute bottom-8 right-8 flex flex-col gap-2">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: Math.random() * 20 - 10,
              y: -100 - index * 10,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.3,
            }}
            className="w-3 h-3 rounded-full bg-purple-500 shadow-lg"
          />
        ))}
      </section>
    </main>
  );
}