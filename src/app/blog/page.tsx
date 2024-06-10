import { Blog } from '@/components/blog/blog-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts and experiences in the tech industry.',
};

export default function BlogPage() {
  return (
    <main className='flex justify-center items-center px-5'>
      <Blog />
    </main>
  );
}