import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';

export function About() {
  return (
    <SectionWrapper
      id='about'
      className='mb-20'
    >
      <SectionHeading>
        About Me
      </SectionHeading>
      <p
        className='tracking-wider text-sm sm:text-base leading-7'
      >
        My name is Caleb, I&apos;m started coding when I was 24 years old.
        I&apos;m currently working as a Indie Full-stack Developer. I&apos;
        also a student at 42 Madrid.
      </p>
    </SectionWrapper>
  );
}