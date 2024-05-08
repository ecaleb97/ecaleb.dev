import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-[#fafafa]/70 sm:bg-[#fafafa]/30 dark:bg-gray-800/30', className)}
      {...props}
    />
  );
}

export { Skeleton };
