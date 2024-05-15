import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { Path } from '../breadcrumb/path';

export function About() {
  return (
    <SectionWrapper
      className='my-28 sm:my-40'
    >
      <Path name='About' />
      <SectionHeading>
        About me
      </SectionHeading>
      <p
        className='tracking-wider text-pretty text-sm sm:text-base 
        leading-7 sm:leading-8'
      >
        I&apos;m a web developer based in Madrid, Spain. Focused on creating amazing user experiences using different technologies. Besides software, I love maths, reading and traveling (New York is my favorite city). I&apos;m always looking for new opportunities to learn and grow in all areas of my life.
      </p>
    </SectionWrapper>
  );
}