
import { About } from '@/components/about/about';
import { Contact } from '@/components/contact/contact';
import { Experience } from '@/components/experience/experience';
import { Footer } from '@/components/footer/footer';
import { Intro } from '@/components/intro/intro';
import { Projects } from '@/components/project/projects';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('contact');

  return (
    <main className='flex flex-col items-center px-5'>
      <Intro />
      <Projects />
      <Experience />
      <About />
      <Contact
        title={t('title')}
        description={t('description')}
        labelEmail={t('labelEmail')}
        labelMessage={t('labelMessage')}
        labelSubmit={t('labelSubmit')}
      />
      <Footer />
    </main>
  );
}