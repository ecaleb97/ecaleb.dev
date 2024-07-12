import { Blog } from '@/components/blog/blog-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'I write about web development, other topics and occasionally life updates!',
  openGraph: {
    title: 'Blog',
    description: 'I write about web development, other topics and occasionally life updates!',
    type: 'website',
    url: 'https://ecaleb.dev/blog'
  }
};

export default function BlogPage() {

  return (
    <main className='flex justify-center items-center px-5'>
      {/* <Blog /> */}
    </main>
  );
}

