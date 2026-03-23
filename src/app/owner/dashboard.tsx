'use client';
export default function OwnerDashboard() {
  const employees = [
    { name: 'Иван', balance: 150 },
    { name: 'Мария', balance: 200 }
  ];
  return (
    <main className="container">
      <h1>Кабинет владельца</h1>
      <h2>Сотрудники и балансы</h2>
      {employees.map((e,i) => (
        <div key={i} className="feature-card">
          {e.name} → {e.balance}₽
        </div>
      ))}
      <button className="premium-button" onClick={() => alert('Создание нового счета демо')}>Создать счет</button>
    </main>
  );
}