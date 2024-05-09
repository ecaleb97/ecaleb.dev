import { Path } from '@/components/breadcrumb/path';
import { ExperienceList } from '@/components/experience/experience-list';
import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { useTranslations } from 'next-intl';


export function Experience() {
  const t = useTranslations('experience');

  return (
    <SectionWrapper
      className='my-28 sm:my-40'
    >
      <Path name={t('title')} />
      <SectionHeading>
        {t('title')}
      </SectionHeading>
      <ExperienceList />
    </SectionWrapper>
  );
}