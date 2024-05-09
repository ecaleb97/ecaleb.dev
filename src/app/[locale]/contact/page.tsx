import { Contact } from '@/components/contact/contact';
import { useTranslations } from 'next-intl';

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