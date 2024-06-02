import hack4goodWinners from '@/static/images/hack4good-winners.webp';
import philadelphia from '@/static/images/philadelphia.webp';
import brooklyn from '@/static/images/portfolio-photo.webp';
import segovia from '@/static/images/segovia.webp';
import team from '@/static/images/teamHack4good.webp';
import Image from 'next/image';

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div className='relative h-40'>
        <Image 
          src={hack4goodWinners} 
          alt='' 
          fill
          sizes='(max-width: 768px) 213px, 33vw'
          priority
          className='rounded-lg object-cover'
        />
      </div>
      <div className='relative sm:row-span-2 row-span-1'>
        <Image 
          src={brooklyn} 
          alt='Me at Brooklyn Bridge in New York City'
          fill
          sizes='(max-width: 768px) 213px, 33vw'
          className='rounded-lg object-cover object-top sm:object-center'
          priority
        />
      </div>
      <div className='relative'>
        <Image 
          src={philadelphia} 
          alt='' 
          fill
          sizes='(max-width: 768px) 213px, 33vw'
          className='rounded-lg object-cover'
          priority
        />
      </div>
      <div className='relative row-span-2'>
        <Image 
          src={segovia} 
          alt='' 
          fill
          sizes='(max-width: 768px) 213px, 33vw'
          className='rounded-lg object-cover sm:object-center'
          priority
        />
      </div>
      <div className='relative row-span-2'>
        <Image 
          src={brooklyn} 
          alt='' 
          fill
          sizes='(max-width: 768px) 213px, 33vw'
          className='rounded-lg object-cover'
          priority
        />
      </div>
      <div className='relative h-40'>
        <Image 
          src={team} 
          alt='' 
          fill
          sizes='(max-width: 768px) 213px, 33vw'
          className='rounded-lg object-cover'
          priority
        />
      </div>
    </div>
  );
}