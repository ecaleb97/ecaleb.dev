'use client';

import { Github } from '@/components/icons/github';
import { DefaultProjects } from '@/components/project/default-projects';
import { SkeletonCard } from '@/components/project/skeleton-card';
import { GithubResultApi } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, Star } from 'lucide-react';

export async function getGithubRepos() {
  const githubUrl = 'https://api.github.com/users/ecaleb97/repos?type=owner&sort=updated';
  const response = await fetch(githubUrl);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const projects: Array<GithubResultApi> = data.map((project: GithubResultApi) => (
    {
      name: project.name,
      description: project.description,
      html_url: project.html_url,
      homepage: project.homepage,
      topics: project.topics,
    }
  ));

  return projects;
}

export function ReposGithub() {
  const { data, isError, isLoading } = useQuery<Array<GithubResultApi>>({
    queryKey: ['githubRepos'],
    queryFn: async () => await getGithubRepos(),
  });

  if (isLoading) {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    );
  }

  if (isError) {
    return (
      <DefaultProjects />
    );
  }
  
  return (
    <>
      {/* <DefaultProjects /> */}
      <ul className="flex flex-col space-y-3">
        {data?.map((repo: GithubResultApi) => (
          <li
            key={repo.html_url}
            className="flex flex-col space-y-2 rounded-md border 
          border-neutral-300 p-3 dark:border-neutral-800 dark:bg-[#0a0a0a]"
          >
            <div className="flex w-full items-center justify-between">
              <a
                href={repo.homepage ? repo.homepage : repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 font-medium duration-100 hover:opacity-80"
              >
                <span className='hover:underline'>{repo.name}</span>
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
                />
              </a>
              <span
                className="group flex cursor-default items-center space-x-2 text-neutral-600 dark:text-neutral-400"
              >
                <a href={repo.html_url} className='text-xs flex items-center gap-2'>
                  Source Code
                  <Github className='size-5' />
                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.5}
                    className="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
                  />
                </a>
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{repo.description}</p>
            <ul 
              className="flex flex-wrap items-center gap-2 overflow-y-auto text-xs"
            >
              {repo.topics.map((topic, index) => (
                <li 
                  key={index} 
                  className='border border-neutral-300 dark:border-neutral-800 py-1 px-2 rounded-md'
                >
                  {topic}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
    
  );
}