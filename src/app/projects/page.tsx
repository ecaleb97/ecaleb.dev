import { Path } from '@/components/breadcrumb/path';
import { SectionHeading } from '@/components/heading/section-heading';
import { Projects } from '@/components/project/projects';
import { SectionWrapper } from '@/components/section/section-wrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View my projects and contributions to open-source.',
};

export default async function ProjectsPage() {

  return (
    <main className='flex flex-col items-center px-5'>
      <SectionWrapper className='my-28'>
        <Path name='Projects' />
        <SectionHeading>
          Projects
        </SectionHeading>
        <Projects />
      </SectionWrapper>
    </main> 
  );
}