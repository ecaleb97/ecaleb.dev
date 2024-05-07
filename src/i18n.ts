import { locales, type Locale } from '@/lib/locales';
import { type AbstractIntlMessages } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import 'server-only';

const messagesImports = {
  en: () => import('../messages/en.json'),
  es: () => import('../messages/es.json')
} as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;
  // Validate that the incoming `locale` parameter is valid
  if (!isValidLocale(baseLocale)) notFound();

  return {
    messages: (await messagesImports[baseLocale]()).default,
  };
});