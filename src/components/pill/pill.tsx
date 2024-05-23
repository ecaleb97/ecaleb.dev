import { type PillProps } from '@/types/types';
import Link from 'next/link';

export function Pill({ target, href, children, className }: PillProps) {
  return (
    <Link 
      href={href}
      rel='noopener noreferrer'
      target={target}
      className={`flex cursor-pointer items-center gap-2
      rounded-lg border px-2 py-1 hover:scale-105
      hover:bg-black hover:bg-opacity-5 ${className}
      border border-black dark:border-[#fafafa] 
      dark:hover:bg-[#fafafa] dark:hover:bg-opacity-5
      tracking-wider`}
    >
      {children}
    </Link>
  );
}