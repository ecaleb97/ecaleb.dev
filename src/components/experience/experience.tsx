import { ExperienceList } from '@/components/experience/experience-list';
import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { useTranslations } from 'next-intl';


export function Experience() {
  const t = useTranslations('experience');

  return (
    <SectionWrapper
      id="experience"
      className='mb-20'
    >
      <SectionHeading>
        {t('title')}
      </SectionHeading>
      <ExperienceList />
    </SectionWrapper>
  );
}