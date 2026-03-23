'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Users, CreditCard, QrCode } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Добро пожаловать, Иван Петров!
            </h1>
            <p className="text-gray-500 mt-1">
              Владелец
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </div>

        {/* Статистика */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Сотрудники
              </CardTitle>
              <Users className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-gray-500">активных сотрудника</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                Транзакции
              </CardTitle>
              <CreditCard className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3</div>
              <p className="text-xs text-gray-500">за всё время</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                QR-коды
              </CardTitle>
              <QrCode className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-500">создано</p>
            </CardContent>
          </Card>
        </div>

        {/* Действия */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Быстрые действия</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full bg-white text-black hover:bg-gray-200"
                onClick={() => router.push('/qr')}
              >
                <QrCode className="mr-2 h-4 w-4" />
                Создать QR-код
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                <Users className="mr-2 h-4 w-4" />
                Управление сотрудниками
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Последние транзакции</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <div>
                    <p className="text-white font-medium">150 ₽</p>
                    <p className="text-xs text-gray-500">Дмитрий · карта</p>
                  </div>
                  <span className="text-green-500 text-sm">Завершено</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-800">
                  <div>
                    <p className="text-white font-medium">300 ₽</p>
                    <p className="text-xs text-gray-500">Мария · СБП</p>
                  </div>
                  <span className="text-green-500 text-sm">Завершено</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="text-white font-medium">200 ₽</p>
                    <p className="text-xs text-gray-500">Алексей · карта</p>
                  </div>
                  <span className="text-green-500 text-sm">Завершено</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}