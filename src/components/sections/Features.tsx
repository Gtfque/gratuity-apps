export default function Features() {
  const items = [
    "Для всей команды",
    "Без наличных",
    "Прозрачно",
  ];

  return (
    <section className="py-20 grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item} className="p-6 border border-gray-800 rounded-xl">
          {item}
        </div>
      ))}
    </section>
  );
}