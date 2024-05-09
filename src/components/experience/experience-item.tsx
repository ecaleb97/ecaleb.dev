import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceItemProps {
  jobTitle: string;
  company: string;
  date: string;
  description: string;
  companyUrl: string;
}

export function ExperienceItem({ 
  jobTitle, 
  company, 
  date, 
  description,
  companyUrl
}: ExperienceItemProps) {
  return (
    <li className="ms-5 mt-1">
      <div
        className={cn(
          `absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full 
              border border-neutral-400 bg-neutral-200 dark:border-neutral-600 
              dark:bg-neutral-800`
        )}
      ></div>
      <time
        className="mb-2 font-mono text-sm font-normal leading-none 
            text-neutral-600 dark:text-neutral-400"
      >
        {date}
      </time>
      <div className="mt-2 flex flex-col space-y-0.5">
        <h3 
          className="text-lg font-semibold tracking-tight 
              text-gray-900 dark:text-white"
        >
          {jobTitle}
        </h3>
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener"
          className="group flex w-max items-center text-pretty text-sm 
              text-neutral-600 transition-colors duration-150 hover:text-black 
              dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white"
        >
          <span>{company}</span>
          <ArrowUpRight
            className="ml-1 duration-150 group-hover:translate-x-[1.5px]"
            size={12}
            strokeWidth={1.5}
          />
        </a>
      </div>
      <p 
        className="mt-3 text-pretty text-sm sm:text-base dark:text-neutral-400 
            tracking-wider leading-7"
      >
        {description}
      </p>
    </li>
  );
}