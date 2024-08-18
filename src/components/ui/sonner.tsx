'use client';

import {useTheme} from 'next-themes';
import {Toaster as Sonner} from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({...props}: ToasterProps) => {
  const {theme = 'system'} = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-zuiso-950 group-[.toaster]:border-zuiso-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-zuiso-950 dark:group-[.toaster]:text-zuiso-50 dark:group-[.toaster]:border-zuiso-800',
          description:
            'group-[.toast]:text-zuiso-500 dark:group-[.toast]:text-zuiso-400',
          actionButton:
            'group-[.toast]:bg-zuiso-900 group-[.toast]:text-zuiso-50 dark:group-[.toast]:bg-zuiso-50 dark:group-[.toast]:text-zuiso-900',
          cancelButton:
            'group-[.toast]:bg-zuiso-100 group-[.toast]:text-zuiso-500 dark:group-[.toast]:bg-zuiso-800 dark:group-[.toast]:text-zuiso-400',
        },
      }}
      {...props}
    />
  );
};

export {Toaster};
