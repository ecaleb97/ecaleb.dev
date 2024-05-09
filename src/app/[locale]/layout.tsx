import '@/app/globals.css';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Providers } from '@/components/providers/providers';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { LanguagePicker } from '@/components/switcher/language-switcher';
import { ThemeSwitcher } from '@/components/switcher/theme-switcher';
import { Toaster } from '@/components/ui/sonner';
import { raleway } from '@/lib/fonts';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecaleb.dev'),
  alternates: {
    canonical: 'https://ecaleb.dev',
    languages: {
      en: 'https://ecaleb.dev/en',
      es: 'https://ecaleb.dev/es',
    }
  },
  title: {
    template: '%s | Caleb Zamalloa',
    default: 'Caleb Zamalloa',
  },
  description: 'Developer with experience in multiple technologies and frameworks.',
  openGraph: {
    title: 'Caleb Zamalloa',
    description: 'Developer with experience in multiple technologies and frameworks.',
    url: 'https://ecaleb.dev',
    siteName: 'Caleb Zamalloa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ecaleb.dev/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Caleb Zamalloa',
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  },
  twitter: {
    title: 'Caleb Zamalloa',
    card: 'summary_large_image',
  },
  icons: {
    icon: {
      url: '/favicon.ico',
    }
  }
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
  const t = useTranslations('nav');

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-[#F4EFF0] 
        sm:bg-gray-100 text-gray-950 relative
        min-h-screen dark:bg-customDark dark:text-white`}
      >
        <Providers>
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
            <Header
              home={t('home')}
              projects={t('projects')}
              experience={t('experience')}
              about={t('about')}
              contact={t('contact')}  
            />
            {children}
            <div className='hidden sm:block fixed bottom-4 right-4'>
              <ThemeSwitcher variant='outline' />
            </div>
            <div className='hidden sm:block fixed bottom-4 left-4'>
              <LanguagePicker variant='outline' />
            </div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
