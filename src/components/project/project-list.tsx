import { ProjectItem } from '@/components/project/project-item';
import { project1, project2 } from '@/lib/data';
import ecommerceLight from '@/static/images/ecommerceLight.webp';
import { ProjectProps } from '@/types/types';
import { useTranslations } from 'next-intl';

export function ProjectList() {
  const t = useTranslations('projects');
  const projectsData = [
    {
      title: t('projectsItems.project1.title'),
      description: t('projectsItems.project1.description'),
      tags: project1,
      imageUrl: ecommerceLight,
    },
    {
      title: t('projectsItems.project2.title'),
      description: t('projectsItems.project1.description'),
      tags: project2,
      imageUrl: ecommerceLight,
    },
  ] satisfies ProjectProps[];

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 tracking-wider">
      {projectsData.map((project) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          imageUrl={project.imageUrl}
        />
      ))}
    </ul>
  );
}