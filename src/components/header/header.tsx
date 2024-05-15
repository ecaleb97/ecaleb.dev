'use client';

import { CommandMenu } from '@/components/command/command';
import { ThemeSwitcher } from '@/components/switcher/theme-switcher';
import emojiCaleb from '@/static/images/emoji-caleb.webp';
import { Equal, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Header () {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMobileMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const links = [
    {
      name: 'Home',
      hash: '/',
    },
    {
      name: 'Projects',
      hash: '/projects',
    },
    {
      name: 'Experience',
      hash: '/experience',
    },
    {
      name: 'About',
      hash: '/about',
    },
    {
      name: 'Contact',
      hash: '/contact',
    },
  ];

  return (
    <header className='z-[999] relative w-screen flex justify-center md:pt-8'>
      <div className='hidden fixed md:flex gap-4 items-center justify-evenly px-4'>
        {/* <div
          className='fixed top-0 left-1/2 h-[4.5rem]
          -translate-x-1/2 w-full rounded-none border border-white
          border-opacity-40 bg-white bg-opacity-80 shadow-lg
          shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[37rem]
          sm:rounded-full'
        /> */}
        <nav 
          className='flex h-12
          py-2 md:py-0 bg-[#fafafa]/90
          dark:bg-black/90 rounded-full px-4'
        >
          <ul
            className='flex w-[22rem] items-center justify-center
            gap-y-1 text-[0.9rem] font-medium
            sm:w-[initial] md:flex-nowrap md:gap-3'
          >
            {links.map((link) => (
              <li 
                key={link.hash}
                className='h-3/4 flex items-center justify-center relative'
              >
                <Link 
                  href={link.hash}
                  className='capitalize flex w-full justify-center items-center p-3
                  hover:scale-105 tracking-wider text-base'
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeSwitcher variant='default' />
            </li>
          </ul>
        </nav>
        <CommandMenu />
      </div>
      <div className='bg-transparent fixed w-screen h-[3rem] flex
        items-center justify-between px-4 py-8 md:hidden'>
        <div 
          className='size-9 border border-gray-500 
          dark:border-none rounded-full'
        >
          <Link href='/'>
            <Image
              src={emojiCaleb}
              alt="Caleb's profile picture"
              className='rounded-full'
              width={36}
              height={36}
              priority
            />
          </Link>
        </div>
        <div className='flex gap-2 items-center'>
          <CommandMenu />
          <ThemeSwitcher variant='default' />
          <button 
            className='size-6 dark:text-white' 
            onClick={toogleMobileMenu}
            aria-label='Toggle mobile menu'
          >
            {isOpen ? <X /> : <Equal />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav 
          className='bg-[#F4EFF0] w-full min-h-screen fixed top-0
          bottom-0 md:hidden dark:bg-customDark dark:text-[#fbfbfb] z-[999]'
        >
          <div className='h-[3rem] flex justify-end items-center pr-4 py-8'>
            <button 
              className='size-6 text-[#333336] dark:text-[#fbfbfb]' 
              onClick={toogleMobileMenu}
            >
              <X />
            </button>
          </div>
          <ul className='text-[#333336] dark:text-[#fbfbfb] text-3xl pl-10 font-semibold
          mt-10 flex flex-col gap-8'
          >
            {links.map((link) => (
              <li 
                key={link.hash} 
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                <Link className='capitalize' href={link.hash}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

