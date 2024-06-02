import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import calebPortrait from '@/static/images/me.webp';

export function AvatarIntro() {
  return (
    <Avatar 
      className='size-[6rem] object-cover rounded-full z-10 border'
    >
      <AvatarImage 
        src={calebPortrait.src} 
        alt="Caleb's profile picture"
      />
      <AvatarFallback className='text-xl bg-transparent'>CZ</AvatarFallback>
    </Avatar>
  );
}