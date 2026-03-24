'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import GradientBG from '../../components/GradientBG';

export default function EmployeeLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Вход выполнен: ${email}`);
  };

  return (
    <main className="relative min-h-screen px-8 py-16 bg-gray-50 flex items-center justify-center overflow-x-hidden">
      <GradientBG />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 text-center">Вход для сотрудников</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <Button gradient type="button" onClick={handleLogin}>
          Войти
        </Button>
      </motion.div>
    </main>
  );
}