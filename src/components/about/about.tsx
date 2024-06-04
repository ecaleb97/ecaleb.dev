import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';
import aboutPhoto from '@/static/images/portfolio-photo.webp';
import Image from 'next/image';
import { Path } from '../breadcrumb/path';

export function About() {
  return (
    <SectionWrapper
      className='my-28'
    >
      <Path name='About' />
      <SectionHeading>
        About me
      </SectionHeading>
      <div className='flex flex-col gap-6 sm:flex-row-reverse'>
        <Image 
          src={aboutPhoto} 
          alt="Caleb's in Brooklyn's Bridge"
          className='rounded-md shadow-md'
          width={250}
          height={200}
        />
        <p
          className='tracking-wider text-pretty text-sm
        leading-6 sm:leading-8 font-light text-gray-500 dark:text-white'
        >
        I&apos;m a web developer based in Madrid, Spain. Focused on creating amazing user experiences using different technologies. Besides software, I love maths, reading and traveling (New York is my favorite city). I&apos;m always looking for new opportunities to learn and grow in all areas of my life.
        </p>
      </div>
    </SectionWrapper>
  );
}