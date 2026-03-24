'use client';

import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Вход владельца</h1>
        <form className="flex flex-col space-y-4">
          <div className="relative">
            <input type="text" placeholder="Логин" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div className="relative">
            <input type="password" placeholder="Пароль" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform mt-4">Войти</button>
        </form>
      </motion.div>
    </div>
  );
}