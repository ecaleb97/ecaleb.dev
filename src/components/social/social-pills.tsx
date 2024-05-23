import { Github } from '@/components/icons/github';
import { Linkedin } from '@/components/icons/linkedin';
import { Mail } from '@/components/icons/mail';
import { Pill } from '@/components/pill/pill';

export function SocialPills() {
  return (
    <div className='flex flex-wrap gap-5 text-sm'>
      <Pill 
        href='https://www.linkedin.com/in/caleb-villanueva-zamalloa/'
        target='_blank'
      >
        <Linkedin className="size-7" />
        <span>Linkedin</span>
      </Pill>
      <Pill 
        href="https://github.com/ecaleb97"
        target='_blank'
      >
        <Github className="size-7" />
        <span>Github</span>
      </Pill>
      <Pill 
        href="/contact"
      >
        <Mail className="size-7" />
          ecaleb.vz@gmail.com
      </Pill>
    </div>
  );
}