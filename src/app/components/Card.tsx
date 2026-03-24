'use client';
import { motion } from 'framer-motion';

export default function Card({ title, description, icon }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center shadow-lg"
    >
      <img src={icon} className="w-12 h-12 mx-auto mb-4 invert" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}