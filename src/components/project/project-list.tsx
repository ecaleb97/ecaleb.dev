import { DefaultProjects } from '@/components/project/default-projects';
import { ProjectItem } from '@/components/project/project-item';
import { project1, project2 } from '@/lib/data';
// import ecommerceDark from '@/static/images/ecommerceDark.webp';
import ecommerceLight from '@/static/images/ecommerceLight.webp';
import hack4good from '@/static/images/hack4good.webp';
import { ProjectProps } from '@/types/types';

export function ProjectList() {
  const projectsData = [
    {
      title: 'Hack4Good Telefonica 2024 (Winners). 🚧',
      description: 'Promoting tourism in Spain through a web application.',
      tags: project1,
      imageUrl: hack4good,
      href: 'https://hack4good-xi.vercel.app/',
    },
    {
      title: 'Ecommerce using React and Redux Toolkit. 🚧',
      description: 'A simple ecommerce template using Tailwind CSS and React',
      tags: project2,
      imageUrl: ecommerceLight,
      href: 'https://fanciful-semifreddo-854c15.netlify.app'
    },
  ] satisfies ProjectProps[];

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            href={project.href}
          />
        ))}
      </div>
      <DefaultProjects />
    </>
  );
}