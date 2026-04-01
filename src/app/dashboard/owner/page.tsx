"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = Array.from({ length: 7 }, (_, i) => ({
  day: `День ${i + 1}`,
  tips: Math.floor(Math.random() * 500) + 100,
}));

export default function OwnerDashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-12 flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Кабинет владельца</h1>
      <section className="bg-gray-800 p-4 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Доход за неделю</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="day" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} itemStyle={{ color: "#fff" }} />
              <Line type="monotone" dataKey="tips" stroke="#22c55e" strokeWidth={3} dot={{ r: 6, stroke: "#fff", strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
      <section className="bg-gray-800 p-4 rounded-md">
        <h2 className="text-2xl font-bold">История транзакций</h2>
        <ul className="mt-2">
          <li>Иван — $5</li>
          <li>Мария — $10</li>
          <li>София — $3</li>
        </ul>
      </section>
    </main>
  );
}