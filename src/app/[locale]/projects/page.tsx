import { Path } from '@/components/breadcrumb/path';
import { SectionHeading } from '@/components/heading/section-heading';
import { ReposGithub, getGithubRepos } from '@/components/project/projects-github';
import { SectionWrapper } from '@/components/section/section-wrapper';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from '@tanstack/react-query';

export default async function ProjectsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['githubRepos'],
    queryFn: getGithubRepos,
  });

  return (
    <main className='flex flex-col items-center px-5'>
      
      <SectionWrapper id='/' className='my-24
      sm:mb-20 sm:mt-40'>
        <Path />
        <SectionHeading>
        Projects
        </SectionHeading>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ReposGithub />
        </HydrationBoundary>
      </SectionWrapper>
    </main> 
  );
}