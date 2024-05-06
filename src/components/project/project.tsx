'use client';

import { type ProjectProps } from '@/types/types';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function Project({
  title,
  description,
  tags,
  imageUrl,
  imageUrlDark,
}: ProjectProps) {
  const isDarkMode = useTheme().theme;
  
  return (
    <li 
      className='w-full rounded-lg border border-[#dbe5e5]
      hover:scale-105 transition cursor-pointer'>
      <div className='w-full rounded-lg'>
        <Image
          src={isDarkMode === 'dark' ? imageUrlDark : imageUrl}
          alt={title}
          className='rounded-t-lg w-full object-cover'
          width={800}
          height={400}
        />
        <article 
          className='w-full px-4 py-6 rounded-b-lg flex flex-col gap-6
          bg-gray-100 dark:bg-[#1A1E36] dark:text-[#fafafa]'
        >
          <header>
            <h3 className='text-xl tracking-[0.05rem]'>{title}</h3>
          </header>
          <p className='font-light'>{description}</p>
          <footer className='flex gap-5'>

          </footer>
        </article>
      </div>
    </li>
  );
}