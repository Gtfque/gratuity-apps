'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GradientBG() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute w-[120%] h-[120%] bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 blur-3xl opacity-50 -top-10 -left-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute w-[100%] h-[100%] bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-400 blur-2xl opacity-30 -top-10 -left-10"
      />
    </div>
  );
}