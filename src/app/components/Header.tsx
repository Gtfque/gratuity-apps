'use client';
import { useRouter } from 'next/navigation';
import Button from './Button';

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-end gap-4 p-6 border-b border-white/10 bg-black/30 backdrop-blur-xl sticky top-0 z-50">
      <Button gradient onClick={() => router.push('/employee/login')}>
        Личный кабинет
      </Button>

      <Button gradient onClick={() => router.push('/about')}>
        Информация
      </Button>
    </header>
  );
}