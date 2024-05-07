'use client';

import { Spain } from '@/components/icons/spain';
import { US } from '@/components/icons/united-states';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { type Locale } from '@/lib/locales';
import { type Variant } from '@/types/types';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export function LanguagePicker({ variant }: Variant) {
  const locale = useLocale() as Locale;
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale): void => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.push(`/${newLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          type='button'
          variant={variant}
          size='icon' 
          className='dark:border-gray-300 dark:bg-customDark bg-transparent dark:text-white'
        >
          {locale === 'es' ? <Spain /> : <US />}
          <span className='sr-only'>Language picker</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark:bg-customDark border border-gray-300'>
        <DropdownMenuItem 
          onClick={() => handleLocaleChange('es')}
          className='dark:hover:bg-gray-600 gap-4'
        >
          Spanish <Spain />
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLocaleChange('en')}
          className='dark:hover:bg-gray-600 gap-4'
        >
          English <US />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
