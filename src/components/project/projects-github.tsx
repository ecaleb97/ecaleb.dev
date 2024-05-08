'use client';

import { DefaultProjects } from '@/components/project/default-projects';
import { SkeletonCard } from '@/components/project/skeleton-card';
import { Input } from '@/components/ui/input';
import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, Star as StarIcon } from 'lucide-react';

export interface GithubResultApi {
  name: string;
  description: string;
  topics: Array<string>;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export async function getGithubRepos() {
  // const githubUrl = 'https://api.github.com/users/ecaleb97/repos?type=owner&sort=updated';
  const githubUrl = '';
  const response = await fetch(githubUrl);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const projects: Array<GithubResultApi> = data.map((project: GithubResultApi) => (
    {
      name: project.name,
      description: project.description,
      topics: project.topics,
      html_url: project.html_url,
      stargazers_count: project.stargazers_count,
      language: project.language,
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
      <ul className="flex flex-col space-y-3">
        {data?.map((repo: GithubResultApi) => (
          <li
            key={repo.html_url}
            className="flex flex-col space-y-2 rounded-md border 
          border-neutral-300 p-3 dark:border-neutral-800"
          >
            <div className="flex w-full items-center justify-between">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 font-medium duration-100 hover:opacity-80"
              >
                <span>{repo.name}</span>
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="opacity-70 duration-200 group-hover:translate-x-[1.3px] group-hover:opacity-100"
                />
              </a>
              <span
                className="group flex cursor-default items-center space-x-2 text-neutral-600 dark:text-neutral-400"
              >
                <StarIcon
                  size={14}
                  strokeWidth={1.5}
                  className="duration-200 group-hover:text-yellow-600"
                />
                <p className="font-mono text-xs">{repo.stargazers_count}</p>
              </span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{repo.description}</p>
            <div className="flex items-center space-x-2 overflow-y-auto">
          
            </div>
          </li>
        ))}
      </ul>
    </>
    
  );
}