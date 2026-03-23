// src/app/qr/page.tsx
'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Copy, Download } from "lucide-react";
import Link from "next/link";

export default function QRPage() {
  const [amount, setAmount] = useState('');
  const [tipType, setTipType] = useState<'common' | 'personal'>('common');
  const [employeeId, setEmployeeId] = useState('');
  const [showQR, setShowQR] = useState(false);

  const paymentUrl = `${window.location.origin}/pay?business=demo&type=${tipType}${tipType === 'personal' ? `&employee=${employeeId}` : ''}${amount ? `&amount=${amount}` : ''}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-amber-500 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          На главную
        </Link>

        <Card className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border-gray-800">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">Создать QR-код</CardTitle>
            <CardDescription className="text-gray-500">
              Сгенерируйте QR-код для сбора чаевых
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs 
              defaultValue="common" 
              onValueChange={(value: string) => setTipType(value as 'common' | 'personal')}
            >
              <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                <TabsTrigger value="common" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                  Общий фонд
                </TabsTrigger>
                <TabsTrigger value="personal" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                  Сотруднику
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="common" className="space-y-4 mt-6">
                <div>
                  <Label htmlFor="amount" className="text-gray-300">Сумма (опционально)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Например: 150"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-amber-500"
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    Если не указывать, гость выберет сам
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="personal" className="space-y-4 mt-6">
                <div>
                  <Label htmlFor="employee" className="text-gray-300">Сотрудник</Label>
                  <select
                    id="employee"
                    className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-amber-500"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                  >
                    <option value="">Выберите сотрудника</option>
                    <option value="1">Анна Константинова - бариста</option>
                    <option value="2">Михаил Соколов - повар</option>
                    <option value="3">Елена Волкова - администратор</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="personal-amount" className="text-gray-300">Сумма (опционально)</Label>
                  <Input
                    id="personal-amount"
                    type="number"
                    placeholder="Например: 150"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-amber-500"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <Button 
              className="w-full mt-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-6 h-auto rounded-xl text-lg"
              onClick={() => setShowQR(!showQR)}
            >
              {showQR ? 'Скрыть QR' : 'Создать QR'}
            </Button>

            {showQR && (
              <div className="mt-8 flex flex-col items-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <div className="bg-white p-4 rounded-xl mb-4 shadow-lg">
                  <QRCodeSVG value={paymentUrl} size={200} level="H" />
                </div>
                <p className="text-sm text-gray-500 text-center mb-3">
                  QR-код для оплаты
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800"
                  onClick={() => {
                    navigator.clipboard.writeText(paymentUrl);
                    alert('Ссылка скопирована');
                  }}
                >
                  <Copy className="mr-2 h-3 w-3" />
                  Скопировать ссылку
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}