'use client';

import React from 'react';

import {Button} from '@/components/ui/button';
import Stepper from '@/components/ui/stepper';

export default function DesignPage() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const size = 5;
  return (
    <div>
      <Stepper active={currentStep} size={size} />
      <Button
        type="submit"
        className="mx-auto"
        onClick={() => setCurrentStep(currentStep + 1)}>
        Siguiente
      </Button>
    </div>
  );
}
