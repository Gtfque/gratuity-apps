'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  title: string;
  description: string;
  icon: 'money' | 'message' | 'payment';
  showArrow?: boolean;
}

export default function StepCard({
  title,
  description,
  icon,
  showArrow,
}: StepCardProps) {

  const renderIcon = () => {
    switch (icon) {
      case 'money':
        return (
          <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M12 8c-2 0-3 1-3 2s1 2 3 2 3 1 3 2-1 2-3 2m0-8v12" />
          </svg>
        );

      case 'message':
        return (
          <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M7 8h10M7 12h6m-6 4h4m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );

      case 'payment':
        return (
          <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M3 7h18M5 11h14M7 15h6" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center relative"
    >
      <div className="mb-4">
        {renderIcon()}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {showArrow && (
        <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 text-purple-500 text-2xl animate-pulse">
          →
        </div>
      )}
    </motion.div>
  );
}