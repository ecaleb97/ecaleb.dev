import { Experience } from '@/components/experience/experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Learn about my experience as a developer.',
};

export default function ExperiencePage() {
  return (
    <main 
      className="flex justify-center items-center px-5"
    >
      <Experience />
    </main>
  );
}