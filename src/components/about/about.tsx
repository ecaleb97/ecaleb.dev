import { BentoGrid } from '@/components/bento/bento-grid';
import { Path } from '@/components/breadcrumb/path';
import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';

export function About() {
  return (
    <SectionWrapper
      className='my-28'
    >
      <Path name='About' />
      <SectionHeading>
        About me
      </SectionHeading>
      <BentoGrid />
      <p
        className='tracking-wider text-pretty text-sm
        leading-8 font-light text-gray-500 dark:text-white'
      >
        I&apos;m a web developer based in Madrid, Spain. Focused on creating amazing user experiences using different technologies. Besides software, I love maths, reading and traveling (New York is my favorite city). I&apos;m always looking for new opportunities to learn and grow in all areas of my life.
      </p>
    </SectionWrapper>
  );
}