
import { About } from '@/components/about/about';
import { BentoGrid } from '@/components/bento/bento-grid';
import { Contact } from '@/components/contact/contact';
import { Experience } from '@/components/experience/experience';
import { Footer } from '@/components/footer/footer';
import { Intro } from '@/components/intro/intro';
import { Projects } from '@/components/project/projects';
import { ThemeSwitcher } from '@/components/switcher/theme-switcher';
import portfolioPhoto from '@/static/images/portfolio-photo.webp';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5'>
      <div className='max-w-[42rem]'>
        <Intro />
        <BentoGrid />
      </div>
    </main>
  );
}