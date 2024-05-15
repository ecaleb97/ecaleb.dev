import { ExperienceItem } from '@/components/experience/experience-item';
import { experienceData } from '@/lib/data';

export function ExperienceList() {
  return (
    <ol
      className='relative space-y-6 border-s-2 border-neutral-400 
      dark:border-neutral-600'
    >
      {experienceData.map((item) => (
        <ExperienceItem
          key={item.title}
          jobTitle={item.title}
          company={item.company}
          date={item.date}
          description={item.description}
          companyUrl={item.companyUrl}
        />
      ))}
    </ol>
  );
}