'use client';

import { Stars } from '@/components/stars/stars';
import { LanguagePicker } from '@/components/switcher/language-switcher';
import { ThemeSwitcher } from '@/components/switcher/theme-switcher';
import { links } from '@/lib/constants';
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

  return (
    <header className='z-[999] relative'>
      <div className='hidden sm:block'>
        <div
          className='fixed top-0 left-1/2 h-[4.5rem]
          -translate-x-1/2 w-full rounded-none border border-white
          border-opacity-40 bg-white bg-opacity-80 shadow-lg
          shadow-black/[0.03] sm:top-6 sm:h-[3.25rem] sm:w-[37rem]
          sm:rounded-full'
        />
        <nav 
          className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
          py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'
        >
          <ul
            className='flex w-[22rem] items-center justify-center
            gap-y-1 text-[0.9rem] font-medium text-gray-500
            sm:w-[initial] sm:flex-nowrap sm:gap-5'
          >
            {links.map((link) => (
              <li 
                key={link.hash}
                className='h-3/4 flex items-center justify-center relative'
              >
                <Link 
                  href={link.hash}
                  className='flex w-full justify-center items-center p-3
                  text-gray-800
                  hover:text-gray-950 transition dark:text-gray-600
                  dark:hover:text-gray-500 hover:scale-105 tracking-wider'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='bg-transparent fixed w-screen h-[3rem] flex
        items-center justify-between px-4 py-8 sm:hidden'>
        <div 
          className='size-9 border border-gray-500 
          dark:border-none rounded-full'
        >
          <Image
            src={emojiCaleb}
            alt="Caleb's profile picture"
            className='rounded-full'
            width={36}
            height={36}
            priority
          />
        </div>
        <div className='flex gap-3 items-center'>
          <LanguagePicker variant='default' />
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
        <nav className='bg-[#F4EFF0] w-full min-h-screen fixed top-0
        bottom-0 sm:hidden dark:bg-customDark dark:text-[#fbfbfb] z-[999]'
        >
          <Stars />
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
                <Link href={link.hash}>
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

