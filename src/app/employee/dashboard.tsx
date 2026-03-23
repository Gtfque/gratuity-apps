'use client';
import { useState } from 'react';

export default function EmployeeDashboard() {
  const [balance, setBalance] = useState(0);
  const [history, setHistory] = useState([
    { from: 'Гость', amount: 100 },
    { from: 'Гость', amount: 50 },
  ]);

  return (
    <main className="container">
      <h1>Личный кабинет сотрудника</h1>
      <p>Баланс: {balance}₽</p>
      <button className="premium-button" onClick={() => alert('Вывод на карту пока демо')}>Вывести на карту</button>
      <h2>История чаевых</h2>
      {history.map((h,i) => <div key={i} className="feature-card">{h.from} → {h.amount}₽</div>)}
    </main>
  );
}