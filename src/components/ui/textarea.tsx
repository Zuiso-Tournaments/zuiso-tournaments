import * as React from 'react';

import {cn} from '@/lib/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-zuiso-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-zuiso-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zuiso-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zuiso-800 dark:bg-zuiso-950 dark:ring-offset-zuiso-950 dark:placeholder:text-zuiso-400 dark:focus-visible:ring-zuiso-300',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
