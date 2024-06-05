import { ProjectTag, type ProjectProps } from '@/types/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectItem({
  title,
  description,
  imageUrl,
  tags,
  href
}: ProjectProps) {
  return (
    <li 
      className='w-full rounded-lg border border-[#dbe5e5] dark:border-[#2e2e2e]
      hover:scale-105 transition cursor-pointer'>
      <div className='w-full rounded-lg'>
        <Image 
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          priority
          className='rounded-t-lg object-cover w-full'
        />
        <article 
          className='w-full px-4 py-6 rounded-b-lg flex flex-col gap-3
          dark:text-[#fafafa]'
        >
          <header>
            <Link href={href} target='_blank' rel='noopener noreferrer'>
              <h3 
                className='text-base font-thin tracking-[0.05rem] flex items-center gap-2
              hover:underline cursor-pointer transition'
              >
                {title}
                <ArrowUpRight className='text-gray-500' size={14} />
              </h3>
            </Link>
            
          </header>
          <p 
            className='text-sm text-neutral-500 dark:text-neutral-400'
          >
            {description}
          </p>
          <footer>
            <ul className='flex flex-wrap gap-4'>
              {tags.map((tag: ProjectTag) => (
                <li 
                  key={tag.framework} 
                  className='bg-customDark/10 dark:bg-[#fafafa]/10 
                  rounded-lg px-2 py-1 hover:scale-105 transition cursor-pointer'
                >
                  <div className='flex flex-wrap items-center gap-2'>
                    {tag.icon}
                    <a href={`${tag.link}`} target='_blank' className='text-sm font-extralight'>
                      {tag.framework}
                    </a>
                    <ArrowUpRight size={16} className='text-gray-500' />
                  </div>
                </li>
              ))}
            </ul>
          </footer>
          
        </article>
      </div>
    </li>
  );
}