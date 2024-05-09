
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
    </main>
  );
}