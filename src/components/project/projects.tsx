import { SectionHeading } from '@/components/heading/section-heading';
import { Code } from '@/components/icons/code';
import { Project } from '@/components/project/project';
import { projectsData } from '@/lib/data';

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-[50rem] text-left
      scroll-mt-28 mb-28 flex flex-col gap-10"
    >
      <SectionHeading>
        <Code />
        My Projects
      </SectionHeading>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 tracking-wider">
        {projectsData.map((project) => (
          <Project 
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            imageUrlDark={project.imageUrl}
          />
        ))}
      </ul>
    </section>
  );
} 