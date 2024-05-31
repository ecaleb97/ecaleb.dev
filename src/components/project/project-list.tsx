import { DefaultProjects } from '@/components/project/default-projects';
import { ProjectItem } from '@/components/project/project-item';
import { project1, project2 } from '@/lib/data';
import ecommerceDark from '@/static/images/ecommerceDark.webp';
import ecommerceLight from '@/static/images/ecommerceLight.webp';
import { ProjectProps } from '@/types/types';

export function ProjectList() {
  const projectsData = [
    {
      title: 'Hack4Good Telefonica 2024 (Winners)',
      description: 'This project consist of promoting tourism in Spain through a web application.',
      tags: project1,
      imageUrl: ecommerceDark,
    },
    {
      title: 'Auth template with Next.js and Authjs',
      description: 'A simple authemtication template using Next.js and Authjs.',
      tags: project2,
      imageUrl: ecommerceLight,
    },
  ] satisfies ProjectProps[];

  return (
    <>
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
      <DefaultProjects />
    </>
    
  );
}