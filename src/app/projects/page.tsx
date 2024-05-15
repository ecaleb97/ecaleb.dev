import { Path } from '@/components/breadcrumb/path';
import { SectionHeading } from '@/components/heading/section-heading';
import { Projects } from '@/components/project/projects';
import { ReposGithub, getGithubRepos } from '@/components/project/projects-github';
import { SectionWrapper } from '@/components/section/section-wrapper';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'View my projects and contributions to open-source.',
};

export default async function ProjectsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['githubRepos'],
    queryFn: getGithubRepos,
  });

  return (
    <main className='flex flex-col items-center px-5'>
      <SectionWrapper className='my-24
      sm:mb-20 sm:mt-40'>
        <Path name='Projects' />
        <SectionHeading>
          Projects
        </SectionHeading>
        <Projects />
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ReposGithub />
        </HydrationBoundary>
      </SectionWrapper>
    </main> 
  );
}