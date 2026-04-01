"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const fakeNames = ["Иван", "Мария", "Алексей", "София", "Михаил"];
const getRandomTip = () => ({
  name: fakeNames[Math.floor(Math.random() * fakeNames.length)],
  amount: (Math.random() * 20 + 1).toFixed(2),
});
const chartData = Array.from({ length: 7 }, (_, i) => ({
  day: `День ${i + 1}`,
  tips: Math.floor(Math.random() * 200) + 50,
}));

export default function HomePage() {
  const [tipsFeed, setTipsFeed] = useState<{ name: string; amount: string }[]>(
    []
  );
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const recommendedTip = 5;
  const tipOptions = [3, recommendedTip, 10];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipsFeed((prev) => [{ ...getRandomTip() }, ...prev.slice(0, 4)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-12 flex flex-col gap-16">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Gratuity App</h1>
        <p className="text-lg text-gray-300">
          Оставляйте чаевые мгновенно. Смотрите активность в реальном времени. Отслеживайте доход.
        </p>
      </section>

      {/* Flow UX */}
      <section className="relative w-full h-64 flex justify-between items-center">
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
            1
          </div>
          <span>Выбрать сумму</span>
        </div>
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
            2
          </div>
          <span>Отправить</span>
        </div>
        <div className="flex flex-col items-center gap-4 z-10">
          <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
            3
          </div>
          <span>Отслеживать</span>
        </div>
        <svg className="absolute top-1/2 left-0 w-full h-full z-0">
          <motion.line
            x1="72"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="#8b5cf6"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.line
            x1="50%"
            y1="50%"
            x2="calc(100% - 72px)"
            y2="50%"
            stroke="#8b5cf6"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </section>

      {/* AI Recommendations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Рекомендация по чаевым</h2>
        <p className="text-gray-300">
          Обычно оставляют: <strong>${recommendedTip}</strong>
        </p>
        <div className="flex gap-4 mt-2">
          {tipOptions.map((tip) => (
            <motion.button
              key={tip}
              onClick={() => setSelectedTip(tip)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-6 py-2 rounded-md font-semibold
                ${tip === recommendedTip ? "bg-green-500 text-black shadow-[0_0_15px_#22c55e]" : "bg-gray-700 text-white"}
                ${selectedTip === tip ? "ring-2 ring-green-400" : ""}
                transition-all duration-300
              `}
            >
              ${tip}
            </motion.button>
          ))}
        </div>
        {selectedTip && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2 text-green-400 font-semibold"
          >
            Вы выбрали чаевые: ${selectedTip}
          </motion.p>
        )}
      </section>

      {/* Live Tips Feed */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Живой поток чаевых</h2>
        <div className="bg-gray-800 p-4 rounded-md h-48 overflow-y-auto space-y-2">
          {tipsFeed.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-between px-4 py-2 bg-gray-700 rounded-md"
            >
              <span>🔥 {tip.name}</span>
              <span>💸 ${tip.amount}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Revenue Graph */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Доход за неделю</h2>
        <div className="bg-gray-800 p-4 rounded-md h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="day" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                itemStyle={{ color: "#fff" }}
              />
              <Line
                type="monotone"
                dataKey="tips"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 6, stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="flex gap-4 justify-center mt-6">
        <a href="/dashboard/owner" className="px-6 py-3 bg-blue-600 rounded-md font-semibold hover:bg-blue-500 transition">
          Кабинет владельца
        </a>
        <a href="/dashboard/staff" className="px-6 py-3 bg-purple-600 rounded-md font-semibold hover:bg-purple-500 transition">
          Кабинет сотрудника
        </a>
        <a href="/tip" className="px-6 py-3 bg-green-500 rounded-md font-semibold hover:bg-green-400 transition">
          Оставить чаевые
        </a>
      </section>
    </main>
  );
}