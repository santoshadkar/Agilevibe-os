'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface SensitiveSalaryMaskProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  className?: string;
  maskString?: string;
  defaultVisible?: boolean;
}

export const SensitiveSalaryMask: React.FC<SensitiveSalaryMaskProps> = ({
  value,
  prefix = '₹',
  suffix = '',
  className = '',
  maskString = '••••••',
  defaultVisible = false
}) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);

  const formattedValue = typeof value === 'number' 
    ? value.toLocaleString('en-IN') 
    : value;

  return (
    <span className={`inline-flex items-center gap-1.5 font-mono ${className}`}>
      <span className="tracking-wide">
        {isVisible ? `${prefix}${formattedValue}${suffix}` : `${prefix}${maskString}${suffix}`}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(prev => !prev);
        }}
        className="p-1 rounded-md bg-gray-800/90 text-gray-400 hover:text-cyan-300 hover:bg-gray-700 transition focus:outline-none shrink-0"
        title={isVisible ? 'Hide Sensitive Salary' : 'Show Sensitive Salary'}
      >
        {isVisible ? <EyeOff className="h-3.5 w-3.5 text-cyan-400" /> : <Eye className="h-3.5 w-3.5 text-gray-400" />}
      </button>
    </span>
  );
};
