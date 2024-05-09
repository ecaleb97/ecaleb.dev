import { SectionHeading } from '@/components/heading/section-heading';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');

  return (
    <SectionWrapper
      id='about'
      className='mb-20'
    >
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