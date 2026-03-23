'use client'; // Клиентский компонент — разрешает onClick

export default function ButtonClient() {
  return (
    <button
      onClick={() => alert('Добро пожаловать в Gratuity!')}
      className="premium-button"
    >
      Начать использовать Gratuity
    </button>
  );
}