import {type VariantProps, cva} from 'class-variance-authority';

import * as React from 'react';

import {cn} from '@/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-zuiso-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zuiso-950 focus:ring-offset-2 dark:border-zuiso-800 dark:focus:ring-zuiso-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-zuiso-900 text-zuiso-50 hover:bg-zuiso-900/80 dark:bg-zuiso-50 dark:text-zuiso-900 dark:hover:bg-zuiso-50/80',
        secondary:
          'border-transparent bg-zuiso-100 text-zuiso-900 hover:bg-zuiso-100/80 dark:bg-zuiso-800 dark:text-zuiso-50 dark:hover:bg-zuiso-800/80',
        destructive:
          'border-transparent bg-red-500 text-zuiso-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-zuiso-50 dark:hover:bg-red-900/80',
        outline: 'text-zuiso-950 dark:text-zuiso-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({className, variant, ...props}: BadgeProps) {
  return <div className={cn(badgeVariants({variant}), className)} {...props} />;
}

export {Badge, badgeVariants};
