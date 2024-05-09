import { ExperienceItem } from '@/components/experience/experience-item';
import { useTranslations } from 'next-intl';

export function ExperienceList() {
  const t = useTranslations('experience.jobs');

  const data = [
    {
      title: t('job1.title'),
      company: t('job1.company'),
      date: t('job1.date'),
      description: t('job1.description')
    },
    {
      title: t('job2.title'),
      company: t('job2.company'),
      date: t('job2.date'),
      description: t('job2.description')
    },
    {
      title: t('job3.title'),
      company: t('job3.company'),
      date: t('job3.date'),
      description: t('job3.description')
    },
    {
      title: t('job4.title'),
      company: t('job4.company'),
      date: t('job4.date'),
      description: t('job4.description')
    }
  ];

  return (
    <ol
      className='relative space-y-6 border-s-2 border-neutral-400 
      dark:border-neutral-600'
    >
      {data.map((item) => (
        <ExperienceItem
          key={item.title}
          jobTitle={item.title}
          company={item.company}
          date={item.date}
          description={item.description}
        />
      ))}
    </ol>
  );
}