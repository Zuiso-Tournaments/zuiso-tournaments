'use client';

import * as SliderPrimitive from '@radix-ui/react-slider';

import * as React from 'react';

import {cn} from '@/lib/cn';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}>
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-zuiso-100 dark:bg-zuiso-800">
      <SliderPrimitive.Range className="absolute h-full bg-zuiso-900 dark:bg-zuiso-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-zuiso-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zuiso-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-zuiso-50 dark:bg-zuiso-950 dark:ring-offset-zuiso-950 dark:focus-visible:ring-zuiso-300" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export {Slider};
