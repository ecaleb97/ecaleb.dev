import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';

export default function ProjectsPage() {
  return (
    <main className='flex flex-col items-center px-5'>
      <SectionWrapper id='/' className='my-28
      sm:mb-20 sm:mt-40'>
        <SectionHeading>
        Projects
        </SectionHeading>
      </SectionWrapper>
    </main> 
  );
}