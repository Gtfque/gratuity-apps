"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TipPage() {
  const [selectedTip, setSelectedTip] = useState<number | null>(null);
  const tipOptions = [1, 5, 10, 20];

  const handleTip = (tip: number) => {
    setSelectedTip(tip);
    // Здесь можно вызвать API для сохранения
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-12 flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold">Оставить чаевые</h1>
      <p className="text-gray-300">Выберите сумму для отправки</p>
      <div className="flex gap-4 flex-wrap justify-center mt-4">
        {tipOptions.map((tip) => (
          <motion.button
            key={tip}
            onClick={() => handleTip(tip)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-md font-semibold
              ${selectedTip === tip ? "bg-green-500 text-black shadow-[0_0_15px_#22c55e]" : "bg-gray-700 text-white"}
              transition-all duration-300`}
          >
            ${tip}
          </motion.button>
        ))}
      </div>
      {selectedTip && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-green-400 font-semibold"
        >
          Вы выбрали чаевые: ${selectedTip}
        </motion.p>
      )}
    </main>
  );
}