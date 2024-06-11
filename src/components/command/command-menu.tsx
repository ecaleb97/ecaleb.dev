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

import { Button } from '@/components/ui/button';
import {
  Laptop,
  Moon,
  Sun
} from 'lucide-react';

import { commandLinks, suggestions } from '@/lib/data';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();

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
        className='text-sm text-muted-foreground hover:bg-gray-200
        flex gap-6 px-2 py-1 dark:hover:bg-black/10'
      >
        Search...{' '}
        <kbd 
          className='pointer-events-none inline-flex h-5 select-none 
          text-gray-600 border-gray-200 dark:border-gray-700
          items-center gap-1 rounded border px-1.5 font-mono
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
            {commandLinks.map((link) => (
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
