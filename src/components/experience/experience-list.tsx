import { ExperienceItem } from '@/components/experience/experience-item';

export function ExperienceList() {
  return (
    <ol
      className='relative space-y-6 border-s-2 border-neutral-400 
      dark:border-neutral-600'
    >
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
    </ol>
  );
}