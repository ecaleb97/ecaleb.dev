
import { About } from '@/components/about/about';
import { Contact } from '@/components/contact/contact';
import { Footer } from '@/components/footer/footer';
import { Intro } from '@/components/intro/intro';
import { Projects } from '@/components/project/projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5'>
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}