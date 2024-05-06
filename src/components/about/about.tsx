import { SectionHeading } from '@/components/heading/section-heading';
import { User } from 'lucide-react';

export function About() {
  return (
    <section
      id='about'
      className='w-full max-w-[50rem] text-left
      scroll-mt-28 mb-28 flex flex-col gap-10'
    >
      <SectionHeading>
        <User size={30} />
        About Me
      </SectionHeading>
      <p
        className='tracking-wider leading-8'
      >
        My name is Caleb, I&apos;m started coding when I was 24 years old.
        I&apos;m currently working as a Indie Full-stack Developer. I&apos;
        also a student at 42 Madrid.
      </p>
    </section>
  );
}