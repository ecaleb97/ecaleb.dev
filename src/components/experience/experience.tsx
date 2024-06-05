import { Path } from '@/components/breadcrumb/path';
import { ExperienceList } from '@/components/experience/experience-list';
import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';

export function Experience() {
  return (
    <SectionWrapper
      className='my-16'
    >
      {/* <Path name='Experience' /> */}
      <SectionHeading>
        Experience
      </SectionHeading>
      <ExperienceList />
    </SectionWrapper>
  );
}