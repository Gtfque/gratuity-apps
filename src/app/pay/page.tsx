'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const presetAmount = searchParams.get('amount');
  const tipType = searchParams.get('type') || 'common';
  const employeeId = searchParams.get('employee');

  const [amount, setAmount] = useState(presetAmount || '');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const quickAmounts = [50, 100, 200, 500];

  const handlePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError('Укажите сумму');
      return;
    }

    setIsProcessing(true);
    setError('');

    // Имитация оплаты
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Card className="max-w-md w-full bg-gray-900/50 border-gray-800 text-center">
          <CardContent className="pt-12 pb-8">
            <div className="text-5xl mb-4">❤️</div>
            <CardTitle className="text-2xl mb-2 text-white">Спасибо!</CardTitle>
            <CardDescription className="text-gray-500">
              Ваши чаевые переданы
            </CardDescription>
            <Button 
              className="mt-6 bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = '/'}
            >
              На главную
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Card className="max-w-md w-full bg-gray-900/50 border-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">
            {tipType === 'personal' ? 'Персональная благодарность' : 'Общий фонд'}
          </CardTitle>
          <CardDescription className="text-gray-500">
            Выберите сумму
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <Label className="text-gray-400">Сумма</Label>
            <div className="grid grid-cols-4 gap-2 mt-2">
              {quickAmounts.map((sum) => (
                <Button
                  key={sum}
                  variant={selectedAmount === sum.toString() ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedAmount(sum.toString());
                    setAmount(sum.toString());
                  }}
                  className={selectedAmount === sum.toString() 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'border-gray-700 text-gray-400 hover:bg-gray-800'}
                >
                  {sum}₽
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="amount" className="text-gray-400">Другая сумма</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Введите сумму"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setSelectedAmount('');
              }}
              className="bg-gray-800 border-gray-700 text-white text-center py-6"
            />
          </div>

          <div>
            <Label className="text-gray-400">Способ оплаты</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2 space-y-2">
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-800">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="text-gray-300 flex-1 cursor-pointer">
                  Банковская карта
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-800">
                <RadioGroupItem value="sbp" id="sbp" />
                <Label htmlFor="sbp" className="text-gray-300 flex-1 cursor-pointer">
                  СБП
                </Label>
              </div>
            </RadioGroup>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <Button 
            className="w-full bg-white text-black hover:bg-gray-200 py-6 text-base"
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? 'Обработка...' : `Оставить ${amount ? `${amount}₽` : 'чаевые'}`}
          </Button>

          <p className="text-xs text-center text-gray-600">
            Средства поступают напрямую сотрудникам
          </p>
        </CardContent>
      </Card>
    </main>
  );
}