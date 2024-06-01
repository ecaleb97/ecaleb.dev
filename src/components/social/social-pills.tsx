import { Github } from '@/components/icons/github';
import { Linkedin } from '@/components/icons/linkedin';
import { Mail } from '@/components/icons/mail';
import { ShineBorder } from '@/components/pill/pill';

export function SocialPills() {
  return (
    <div className='flex flex-wrap gap-5 text-sm'>
      <ShineBorder
        target='_blank'
        className=''
        href='https://www.linkedin.com/in/caleb-villanueva-zamalloa/'
        color={['#ffffff']}
      >
        <Linkedin className="size-7" />
        <span>Linkedin</span>
      </ShineBorder>
      <ShineBorder
        target='_blank'
        className=''
        href='https://github.com/ecaleb97'
        color={['#ffffff']}
      >
        <Github className="size-7" />
        <span>Github</span>
      </ShineBorder>
      <ShineBorder
        className=''
        href='/contact'
        color={['#ffffff']}
      >
        <Mail className="size-7" />
        <span>ecaleb.vz@gmail.com</span>
      </ShineBorder>
    </div>
  );
}