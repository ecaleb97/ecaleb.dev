import { Contact } from '@/components/contact/contact';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me through the contact form.',
};


export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className='flex justify-center items-center px-5'>
      <Contact
        title={t('title')}
        description={t('description')}
        labelEmail={t('labelEmail')}
        labelMessage={t('labelMessage')}
        labelSubmit={t('labelSubmit')}
      />
    </main>
  );
}