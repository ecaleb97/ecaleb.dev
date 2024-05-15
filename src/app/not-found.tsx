import Image from 'next/image';
import notFound from './404.png';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <section className='flex flex-col flex-wrap justify-normal items-center w-fit'>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn&apos;t exist.
        </h1>
        <Image 
          src={notFound} 
          alt='404 Not found'
          width={400}
          height={400}
        />
        <p>
        If you expected to see something here, 
        let me know (ecaleb.vz@gmail.com)
        </p>
      </section>
    </main>
  );
}