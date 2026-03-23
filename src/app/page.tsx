'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-offset', `${window.scrollY * 0.05}px`);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Для всей команды',
      description: 'Чаевые распределяются равномерно между всеми сотрудниками. Никто не останется без внимания.',
      icon: '👥',
    },
    {
      title: 'Без наличных',
      description: 'Оплата картой или через СБП — быстро, удобно и безопасно. Нет очередей к терминалу.',
      icon: '💳',
    },
    {
      title: 'Прозрачно и честно',
      description: 'Каждый сотрудник видит все транзакции. Полная отчетность и никаких скрытых комиссий.',
      icon: '🔒',
    },
  ];

  return (
    <main className="container">

      {/* Hero-блок */}
      <section style={{ padding: '2rem 1rem', marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#ffa500' }}>✨ Новый способ благодарить</div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffa500' }}>
          Gratuity — чаевые для всей команды
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Простой и прозрачный способ благодарить за отличный сервис. Чаевые распределяются справедливо между всеми сотрудниками.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="premium-button" onClick={() => router.push('/donate')}>Создать QR</button>
          <button className="premium-button" onClick={() => router.push('/about')}>Как это работает</button>
        </div>
      </section>

      {/* Блок преимуществ */}
      <section style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap' }}>
        {features.map((f, i) => (
          <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.2}s`, minWidth: '220px' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{f.icon}</div>
            <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>{f.title}</h3>
            <p style={{ color: '#ccc', fontSize: '0.95rem' }}>{f.description}</p>
          </div>
        ))}
      </section>

      {/* Вход в кабинеты */}
      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem', color: '#fff' }}>Войти в кабинет</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="premium-button" onClick={() => router.push('/employee/login')}>Вход сотрудника</button>
          <button className="premium-button" onClick={() => router.push('/owner/login')}>Вход владельца</button>
        </div>
      </section>
    </main>
  );
}