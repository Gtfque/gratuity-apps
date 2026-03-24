'use client';

export default function Button({ children, onClick, gradient }: any) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition ${
        gradient
          ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:scale-105 shadow-lg'
          : 'bg-white/10 text-white'
      }`}
    >
      {children}
    </button>
  );
}