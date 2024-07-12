'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getBlogViews() {
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  noStore();
  const views = await sql`
    SELECT slug, count FROM blog_views
  `;

  return views.rows as { slug: string; count: number }[];
}