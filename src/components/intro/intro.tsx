import styles from '@/components/intro/intro.module.css';
import { SocialPills } from '@/components/social/social-pills';
import calebPortrait from '@/static/images/me.webp';
import Image from 'next/image';

export function Intro() {
  return (
    <section 
      id='home'
      className='w-full max-w-[50rem] flex flex-col gap-5 my-28
      sm:mb-20 '
    >
      <Image
        src={calebPortrait}
        alt="Caleb's profile picture"
        width={250}
        height={250}
        className='size-[6rem] sm:size-[8rem] object-cover rounded-full z-10'
      />
      <h1 
        className={`text-2xl sm:text-3xl font-bold ${styles.textAnimate} 
        dark:bg-gradient-to-r from-[#fff08b] from-20% 
        via-[#00affa] via-30%
        to-[#fff08b] to-80%`}
      >
        Hey, I&apos;m Caleb
      </h1>
      <p className='text-base tracking-wider leading-8 pb-3 text-pretty'>
      Welcome to my portfolio. I&apos;m a web developer with a passion for creating amazing user experiences.
        <br />
        And here, I share what I&apos;ve been working on recently and things I learned along the way.
        <br />
        Besides software, another of my passions are mathematics and reading. I love teaching and learning new things every day.
      </p>
      <SocialPills />
    </section>
  );
}