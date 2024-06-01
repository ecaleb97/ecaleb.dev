import { cn } from '@/lib/utils';
import { type PillProps } from '@/types/types';
import Link from 'next/link';

type TColorProp = `#${string}` | `#${string}`[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
  target?: string;
  href: string;
}

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

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = '#fff',
  className,
  children,
  target,
  href
}: ShineBorderProps) {
  return (
    <Link 
      href={href}
      target={target}
      rel='noopener noreferrer'
      style={
        {
          '--border-radius': `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        `relative grid place-items-center rounded-[--border-radius]  
        bg-transparent px-3 py-2 text-black dark:text-white hover:scale-105`,
        className,
      )}
    >
      <div
        style={
          {
            '--border-width': `${borderWidth}px`,
            '--border-radius': `${borderRadius}px`,
            '--border-radius-child': `${borderRadius * 0.2}px`,
            '--shine-pulse-duration': `${duration}s`,
            '--mask-linear-gradient': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '--background-radial-gradient': `radial-gradient(transparent,transparent, ${!(color instanceof Array) ? color : color.join(',')},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-[0] 
        before:aspect-square before:h-full before:w-full 
        before:rounded-[--border-radius] before:p-[--border-width] 
        before:will-change-[background-position] before:content-[""] 
        before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] 
        before:[background-image:var(--background-radial-gradient)] 
        before:[background-size:300%_300%] 
        before:[mask:var(--mask-linear-gradient)] 
        motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      <div 
        className={`z-[1] h-full w-full rounded-[--border-radius-child]
        flex items-center gap-2`}
      >
        {children}
      </div>
    </Link>
  );
}