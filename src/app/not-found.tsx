import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import notFound from './404.png';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className='flex flex-col gap-4 flex-wrap justify-center items-center w-fit'>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn&apos;t exist.
        </h1>
        <Image 
          src={notFound} 
          alt='404 Not found'
          width={400}
          height={400}
          className='aspect-video'
        />
        <p>
        If you expected to see something here, 
        let me know (ecaleb.vz@gmail.com)
        </p>
        <p>
          Artwork by {' '}
          <Button asChild variant='link' className='p-0'>
            <Link 
              href='https://github.com/SAWARATSUKI' 
              target='_blank'
              rel='noreferrer noopener'
            >
              SAWARATSUKI
            </Link>
          </Button>
        </p>
        <Button asChild variant='link'>
          <Link href='/'>Return Home</Link>
        </Button>
      </section>
    </main>
  );
}