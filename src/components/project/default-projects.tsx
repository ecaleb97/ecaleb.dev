import { GithubResultApi } from '@/types/types';
import { ArrowUpRight, Star as StarIcon } from 'lucide-react';
import { Github } from '../icons/github';

export function DefaultProjects() {
  const data: Array<GithubResultApi>  = [
    {
      name: 'ecaleb.dev',
      description: '🚀 My personal website / blog / portfolio built using Next.js, TypeScript, Tailwind CSS, shadcn/ui and Github API.',
      html_url: 'https://github.com/ecaleb97/ecaleb.dev',
      homepage: 'https://ecaleb.dev',
      topics: ['react', 'typescript', 'nextjs', 'tailwindcss', 'shadcn/ui'],
    },
    {
      name: 'get_next_line',
      description: '📚 A program that reads a file line by line.',
      html_url: 'https://github.com/ecaleb97/get_next_line',
      homepage: 'https://github.com/ecaleb97/get_next_line',
      topics: ['c', '42school', 'get_next_line'],
    },
    {
      name: 'hack4good',
      description: '👨‍💻 Hack4good Telefonica 2024 (winners)',
      html_url: 'https://github.com/ecaleb97/hack4good',
      homepage: 'https://hack4good-xi.vercel.app/',
      topics: ['typescript', '42school', 'nextjs', 'tailwindcss', 'hack4good',
        'prisma-orm', 'authjs', 'shadcn/ui'
      ],
    },
    {
      name: 'libft',
      description: '📚 My very first own library in C.',
      html_url: 'https://github.com/ecaleb97/libft',
      homepage: 'https://github.com/ecaleb97/libft',
      topics: ['c', '42school', 'makefile', 'libft'],
    },
    {
      name: 'cv',
      description: '📙 My professional (minimalist) CV page.',
      html_url: 'https://github.com/ecaleb97/cv',
      homepage: 'https://cv.ecaleb.dev',
      topics: ['typescript', 'nextjs', 'shadcn/ui', 'tailwindcss'],
    }
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
              href={repo.homepage}
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
              className="group flex cursor-default items-center space-x-2 text-neutral-600 dark:text-neutral-400 rounded-md duration-100 hover:opacity-80"
            >
              <a 
                href={repo.html_url} 
                target='_blank' 
                rel='noreferrer noopener' 
                className='text-sm flex items-center gap-2'
              >
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