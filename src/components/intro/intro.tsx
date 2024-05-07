import styles from '@/components/intro/intro.module.css';
import { SocialPills } from '@/components/social/social-pills';
import calebPortrait from '@/static/images/me.webp';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Intro() {
  const t = useTranslations('intro');

  return (
    <section 
      id='home'
      className='w-full max-w-[50rem] flex flex-col gap-5 my-28
      sm:mb-20 sm:mt-40'
    >
      <Image
        src={calebPortrait}
        alt="Caleb's profile picture"
        width={250}
        height={250}
        className='size-[6rem] sm:size-[8rem] object-cover rounded-full z-10'
      />
      <h1 
        className={`text-xl sm:text-3xl font-bold ${styles.textAnimate} 
        dark:bg-gradient-to-r from-[#fff08b] from-20% 
        via-[#00affa] via-30%
        to-[#fff08b] to-80%`}
      >
        {t('name')}
      </h1>
      <p className='text-lg tracking-wider leading-8 sm:leading-10 pb-3'>
        {t('description')}
        <br />
        {t('description2')}
      </p>
      <SocialPills />
    </section>
  );
}

// text-lg sm:text-xl font-light sm:font-normal !leading-[1.5] tracking-wider