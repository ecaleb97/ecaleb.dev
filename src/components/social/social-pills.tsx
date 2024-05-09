import { Github } from '@/components/icons/github';
import { Linkedin } from '@/components/icons/linkedin';
import { Mail } from '@/components/icons/mail';
import { Pill } from '@/components/pill/pill';

export function SocialPills() {
  return (
    <div className='flex flex-wrap gap-5 text-sm'>
      <Pill 
        href="https://linkedin.com" 
      >
        <Linkedin className="size-7" />
        <span>Linkedin</span>
      </Pill>
      <Pill 
        href="https://github.com" 
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