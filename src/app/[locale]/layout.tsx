import '@/app/globals.css';
import { Header } from '@/components/header/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Stars } from '@/components/stars/stars';
import { LanguagePicker } from '@/components/switcher/language-switcher';
import { ThemeSwitcher } from '@/components/switcher/theme-switcher';
import { Toaster } from '@/components/ui/sonner';
import { raleway } from '@/lib/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Caleb | Personal Portfolio',
  description: `Caleb is a full-stack developer who 
  enjoys building websites and apps.`,
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<
  Props
>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href='./static/images/emoji-caleb.webp' />
      </head>
      <body 
        className={`${raleway.className} antialiased bg-[#F4EFF0] 
        sm:bg-gray-100 text-gray-950 relative
        min-h-screen dark:bg-customDark dark:text-white`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]
            h-[31.25rem] w-[31-25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
            dark:bg-transparent' 
          />
          
          <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem]
            h-[31.25rem] w-[31-25rem] rounded-full blur-[10rem] sm:w-[68.75rem]
            md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
            dark:bg-transparent' 
          />
          <Stars />
          <Header />
          {children}
          <div className='hidden sm:block fixed bottom-4 right-4'>
            <ThemeSwitcher variant='outline' />
          </div>
          <div className='hidden sm:block fixed bottom-4 left-4'>
            <LanguagePicker variant='outline' />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
