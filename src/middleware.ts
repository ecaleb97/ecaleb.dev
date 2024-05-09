import { locales, type Locale } from '@/lib/locales';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales,
  defaultLocale: 'en' satisfies Locale,
  localePrefix: 'always',
  localeDetection: true,
});

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(es|en)/:path*']
// };

export const config = {
  // match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/', '/(es|en)/:path*'
  ],
};
