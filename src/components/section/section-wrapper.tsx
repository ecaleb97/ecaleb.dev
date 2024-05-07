import { SectionWrapperProps } from '@/types/types';

export function SectionWrapper({ 
  children, className, id
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full max-w-[50rem] text-left
      scroll-mt-28 ${className} flex flex-col gap-6`}
    >
      {children}
    </section>
  );
}