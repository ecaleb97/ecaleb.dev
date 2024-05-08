import { GithubResultApi } from '@/components/project/projects-github';
import { ArrowUpRight, Star as StarIcon } from 'lucide-react';

export function DefaultProjects() {
  const data: Array<GithubResultApi>  = [
    {
      name: 'project-1',
      description: 'description-1',
      html_url: '',
      stargazers_count: 1,
      language: 'TypeScript',
      topics: ['react', 'typescript'],
    },
  ];

  return (
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
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="bg-customDark/10 dark:bg-[#fafafa]/10 
                rounded-lg px-2 py-1 hover:scale-105 transition 
                text-xs cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}