import '@/app/globals.css';
import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Providers } from '@/components/providers/providers';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { raleway } from '@/lib/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecaleb.dev'),
  alternates: {
    canonical: 'https://ecaleb.dev',
  },
  keywords: ['developer', 'web', 'front-end', 'back-end', 'full-stack', 
    'Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Portfolio',
    'Caleb Zamalloa', 'Caleb', 'Zamalloa', 'ecaleb', 'ecaleb.dev', 'web developer',
    'developer portfolio', 'web developer portfolio', 'full-stack developer',
    'full-stack developer portfolio', 'web developer portfolio', 'web developer',
  ],
  generator: 'Caleb Zamalloa Portfolio', 
  applicationName: 'Caleb Zamalloa Portfolio',
  creator: 'Caleb Zamalloa',
  publisher: 'Caleb Zamalloa',
  authors: [{ name: 'Caleb Zamalloa', url: 'https://ecaleb.dev' }],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
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
    siteName: 'Caleb Zamalloa Portfolio',
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
  manifest: 'https://ecaleb.dev/manifest.json',
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
    icon: [
      { url: '/favicon.ico' },
      new URL('/favicon.ico', 'https://ecaleb.dev'),
    ],
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<
  Props
>) {
  return (
    <html lang='en' suppressHydrationWarning>
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
            
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
