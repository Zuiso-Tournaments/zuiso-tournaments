import {cn} from '@/lib/cn';

function Skeleton({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-zuiso-100 dark:bg-zuiso-800',
        className
      )}
      {...props}
    />
  );
}

export {Skeleton};
