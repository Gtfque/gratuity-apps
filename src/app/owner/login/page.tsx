'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OwnerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Демоверсия: сразу переходим на Dashboard
    router.push('/owner/dashboard');
  };

  return (
    <main className="container">
      <h1>Вход владельца</h1>
      <input className="premium-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="premium-input" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="premium-button" onClick={handleLogin}>Войти</button>
    </main>
  );
}