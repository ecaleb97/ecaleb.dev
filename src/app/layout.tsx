import '@/app/globals.css';
import { ModeToggle } from '@/components/darkMode/mode-toogle';
import { Header } from '@/components/header/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Stars } from '@/components/stars/stars';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const inter = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Caleb | Personal Portfolio',
  description: `Caleb is a full-stack developer who 
  enjoys building websites and apps.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#F4EFF0] sm:bg-gray-100 text-gray-950 relative
        min-h-screen dark:bg-[#1A1E36] dark:text-white`}
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
          <div className='fixed bottom-4 right-4'>
            <ModeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
