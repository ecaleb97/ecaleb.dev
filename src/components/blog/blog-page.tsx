import { Path } from '@/components/breadcrumb/path';
import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';

export function Blog() {
  return (
    <SectionWrapper
      className='my-28'
    >
      <Path name='Blog' />
      <SectionHeading>
        Blog
      </SectionHeading>
    </SectionWrapper>
  );
}