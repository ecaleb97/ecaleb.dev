import { Github } from '@/components/icons/github';
import { Linkedin } from '@/components/icons/linkedin';
import { Mail } from '@/components/icons/mail';
import styles from '@/components/intro/intro.module.css';
import { Pill } from '@/components/pill/pill';
import Image from 'next/image';
import calebPortrait from '/public/me.webp';

export function Intro() {
  return (
    <section 
      id='home'
      className='w-full max-w-[50rem] flex flex-col gap-10 my-28
      sm:my-40'
    >
      <Image
        src={calebPortrait}
        alt="Caleb's profile picture"
        width={250}
        height={250}
        className='size-[6rem] sm:size-[10rem] object-cover rounded-full z-10'
      />
      <p
        className='text-2xl font-medium !leading-[1.5] sm:text-4xl tracking-wider'
      >
        <span 
          className={`font-bold ${styles.textAnimate} 
          dark:bg-gradient-to-r from-[#fff08b] from-20% 
          via-[#00affa] via-30%
          to-[#fff08b] to-80%`}
        >
          Hello, I&apos;m Caleb. {' '}
        </span>
        I&apos;m a full-stack developer. I enjoy building websites and apps.
      </p>
      <div className='flex flex-wrap gap-5'>
        <Pill 
          href="https://linkedin.com" 
          className=""
        >
          <Linkedin className="size-7" />
          Linkedin
        </Pill>
        <Pill 
          href="https://github.com" 
          className=""
        >
          <Github className="size-7" />
          Github
        </Pill>
        <Pill 
          href="#contact" 
          className=""
        >
          <Mail className="size-7" />
          ecaleb.vz@gmail.com
        </Pill>
      </div>
    </section>
  );
}