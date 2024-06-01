'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { useCallback, useEffect, useState } from 'react';

import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import { Button } from '@/components/ui/button';
import {
  BookUser,
  CircleUser,
  Code,
  Laptop,
  Moon,
  Notebook,
  Sun
} from 'lucide-react';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();

  const links = [
    {
      name: 'Projects',
      icon: Code,
      hash: '/projects',
    },
    {
      name: 'Experience',
      icon: Notebook,
      hash: '/experience',
    },
    {
      name: 'About',
      icon: CircleUser,
      hash: '/about',
    },
    {
      name: 'Contact',
      icon: Laptop,
      hash: '/contact',
    }
  ];

  const suggestions = [
    {
      name: 'Github',
      icon: Github,
      hash: 'https://github.com/ecaleb97'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      hash: 'https://www.linkedin.com/in/caleb-villanueva-zamalloa/'
    },
    {
      name: 'Resume',
      icon: BookUser,
      hash: 'https://cv.ecaleb.dev/'
    }
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button 
        onClick={() => setOpen((open) => !open)} 
        className='text-sm text-muted-foreground border 
        dark:border-s flex gap-6 px-2 py-1 border-gray-600 dark:border-gray-400'
      >
        Search...{' '}
        <kbd 
          className='pointer-events-none inline-flex h-5 select-none 
          text-gray-600 border-gray-600 dark:bg-black
          items-center gap-1 rounded border dark:border-gray-400 px-1.5 font-mono
          text-[10px] font-medium dark:text-gray-400 opacity-100'
        >
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            {suggestions.map((suggestion) => (
              <CommandItem key={suggestion.hash} 
                onSelect={() => {
                  runCommand(() => {
                    window.open(suggestion.hash, '_blank', 'noopener noreferrer');
                  } );
                }}>
                <suggestion.icon className='mr-2 size-4' />
                <span>{suggestion.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Links'>
            {links.map((link) => (
              <CommandItem key={link.hash} onSelect={() => {
                runCommand(() => router.push(link.hash));
              }}>
                <link.icon className='mr-2 size-4' />
                <span>{link.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Theme'>
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <Sun className='mr-2 size-4' />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <Moon className='mr-2 size-4' />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <Laptop className='mr-2 size-4' />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
    
  );
}
