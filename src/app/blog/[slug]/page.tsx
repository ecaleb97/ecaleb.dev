export default function SinglePost({ params }: { params: { slug: string } }) {
  return (
    <main>
      Post {params.slug}
    </main>
  );
}