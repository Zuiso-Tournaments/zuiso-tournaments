import React from 'react';

import {cn} from '@/lib/cn';

interface StepperProps {
  active: number;
  size: number;
}
export default function Stepper({active, size}: StepperProps) {
  const steps = Array(size).fill(null);

  return (
    <div className="flex gap-2">
      {steps.map((_, index) => (
        <div
          key={index}
          className={cn('h-8 w-8 rounded-full transition', {
            ' bg-blue-500 ': active === index,
            ' bg-gray-300 ': active !== index,
          })}
        />
      ))}
    </div>
  );
}
