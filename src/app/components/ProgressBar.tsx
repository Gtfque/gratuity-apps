'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  percentage: number;
  label: string;
}

export default function ProgressBar({ percentage, label }: ProgressBarProps) {
  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-700 font-medium">{percentage}%</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2 }}
          className="h-4 bg-gradient-to-r from-purple-500 to-indigo-600"
        />
      </div>
    </div>
  );
}