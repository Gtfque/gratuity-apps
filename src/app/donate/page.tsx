'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GradientBG from '../components/GradientBG';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';
import QRGradient from '../components/QRGradient';
import Header from '../components/Header';

export default function Donate() {
  const [amount, setAmount] = useState(500);
  const [success, setSuccess] = useState(false);
  const [tipsFlow, setTipsFlow] = useState<number[]>([30, 50, 20]);

  const handleDonate = () => {
    setSuccess(true);
    setTipsFlow([...tipsFlow, amount]);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <main className="relative min-h-screen px-8 py-16 bg-gray-50 overflow-x-hidden">
      <GradientBG />
      <Header />

      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Поддержите сотрудников</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">Выберите сумму чаевых и оставьте сообщение</p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
        {[100, 250, 500, 1000].map((amt) => (
          <motion.div
            key={amt}
            whileHover={{ scale: 1.05 }}
            onClick={() => setAmount(amt)}
            className={`cursor-pointer rounded-xl p-6 shadow-xl transition-transform text-lg font-semibold ${
              amount === amt ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {amt} ₽
          </motion.div>
        ))}
      </section>

      <section className="text-center mb-16">
        <Button gradient type="button" onClick={handleDonate}>
          Оплатить {amount} ₽
        </Button>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Оплата успешна!
          </motion.div>
        )}
      </section>

      <section className="max-w-xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Прогресс команды</h2>
        <ProgressBar label="Иван" percentage={70} />
        <ProgressBar label="Мария" percentage={50} />
        <ProgressBar label="Алексей" percentage={80} />
      </section>

      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Интерактивный QR-код</h2>
        <QRGradient value={`https://donate.example.com/?sum=${amount}`} size={200} />
      </section>

      <section className="absolute bottom-8 right-8 flex flex-col gap-2">
        {tipsFlow.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: Math.random() * 20 - 10, y: -100 - index * 10, opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', delay: index * 0.3 }}
            className="w-3 h-3 rounded-full bg-purple-500 shadow-lg"
          />
        ))}
      </section>
    </main>
  );
}