"use client";

export default function StaffDashboard() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-8 py-12 flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Кабинет сотрудника</h1>
      <section className="bg-gray-800 p-4 rounded-md">
        <h2 className="text-2xl font-bold">Ваши чаевые</h2>
        <ul className="mt-2">
          <li>Иван — $5</li>
          <li>Вы — $8</li>
          <li>София — $3</li>
        </ul>
      </section>
    </main>
  );
}