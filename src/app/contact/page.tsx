import { Contact } from '@/components/contact/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me through the contact form.',
};


export default function ContactPage() {
  return (
    <main className='flex justify-center items-center px-5'>
      <Contact />
    </main>
  );
}