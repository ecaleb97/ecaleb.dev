import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { useTranslations } from 'next-intl';
import { Path } from '../breadcrumb/path';

export function About() {
  const t = useTranslations('about');

  return (
    <SectionWrapper
      className='my-28 sm:my-40'
    >
      <Path name={t('title')} />
      <SectionHeading>
        {t('title')}
      </SectionHeading>
      <p
        className='tracking-wider text-pretty text-sm sm:text-base 
        leading-7 sm:leading-8'
      >
        {t('description')}
      </p>
    </SectionWrapper>
  );
}