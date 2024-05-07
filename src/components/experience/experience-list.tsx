import { ExperienceItem } from '@/components/experience/experience-item';

export function ExperienceList() {
  return (
    <ol
      className='relative space-y-6 border-s-2 border-neutral-300 
      dark:border-neutral-800'
    >
      <ExperienceItem />
      <ExperienceItem />
      <ExperienceItem />
    </ol>
  );
}