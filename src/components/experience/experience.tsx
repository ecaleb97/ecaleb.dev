import { ExperienceList } from '@/components/experience/experience-list';
import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';


export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      className='mb-20'
    >
      <SectionHeading>
        Experience
      </SectionHeading>
      <ExperienceList />
    </SectionWrapper>
  );
}