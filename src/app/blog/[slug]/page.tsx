import { PathBlogPost } from '@/components/breadcrumb/path';
import { SectionWrapper } from '@/components/section/section-wrapper';
import { incrementViews } from '@/db/actions';
import { getBlogPosts } from '@/db/blog';
import { getBlogViews } from '@/db/queries';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: Props) {
  const blog = getBlogPosts().find((post) => post.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = blog.metadata;

  const ogImage = image 
    ? `https://ecaleb.dev/${image}`
    : `https://ecaleb.dev/api/og?title=${title}`;

  const metadata: Metadata = {
    metadataBase: new URL('https://ecaleb.dev/'),
    title: title,
    description: description,
    openGraph: {
      title: `${title} | Caleb Zamalloa`,
      description,
      type: 'article',
      publishedTime,
      url: `https://ecaleb.dev/blog/${blog.slug}`,
      images: [{ url: ogImage, alt: title }]
    }
  };

  return metadata;
}

export default function SinglePost({ params }: { params: { slug: string } }) {
  const blog = getBlogPosts().find((post) => post.slug === params.slug);
  console.log(blog);
  if (!blog) {
    notFound();
  }

  const postName = `${blog.slug.charAt(0).toUpperCase() + blog.slug.slice(1)}`;

  return (
    <main className='flex flex-col items-center px-5'>
      <SectionWrapper className='my-28'>
        <PathBlogPost post={postName} />
        <h1 className='text-2xl'>Post {blog.metadata.title}</h1>
        <MDXRemote source={blog.content} />
      </SectionWrapper>
      
    </main>
  );
}

async function Views({ slug }: { slug: string }) {
  let blogViews = await getBlogViews();
  const viewsForPost = blogViews.find((view) => view.slug === slug);

  incrementViews(slug);

  return (
    <span>

    </span>
  );
};