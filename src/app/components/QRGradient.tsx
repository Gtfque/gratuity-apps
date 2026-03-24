'use client';
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRGradientProps {
  value: string;
  size?: number;
}

export default function QRGradient({ value, size = 128 }: QRGradientProps) {
  return (
    <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 inline-block">
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
      />
    </div>
  );
}