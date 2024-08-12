// import { Path } from '@/components/breadcrumb/path';
// import { SectionHeading } from '@/components/heading/section-heading';
// import { SectionWrapper } from '@/components/section/section-wrapper';
// import { getBlogPosts } from '@/db/blog';
// import Link from 'next/link';

// export function Blog() {
//   const allBlogs = getBlogPosts();

//   return (
//     <SectionWrapper
//       className='my-28'
//     >
//       <Path name='Blog' />
//       <SectionHeading>
//         Blog
//       </SectionHeading>
//       <ul>
//         {allBlogs.map((blog) => (
//           <li key={blog.slug}>
//             <Link
//               href={`/blog/${blog.slug}`}
//               className='text-xl hover:underline'
//             >
//               {blog.metadata.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </SectionWrapper>
//   );
// }
