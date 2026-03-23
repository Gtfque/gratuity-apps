'use client';
import { useState } from 'react';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [employee, setEmployee] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <main className="container">
      <h1>Оставить чаевые</h1>
      {!success ? (
        <>
          <input className="premium-input" type="number" placeholder="Сумма" value={amount} onChange={e => setAmount(e.target.value)} />
          <input className="premium-input" type="text" placeholder="Сотрудник (необязательно)" value={employee} onChange={e => setEmployee(e.target.value)} />
          <button className="premium-button" onClick={() => setSuccess(true)}>Отправить чаевые</button>
        </>
      ) : <p>Спасибо за вашу щедрость! 💖</p>}
    </main>
  );
}