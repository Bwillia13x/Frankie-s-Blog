import Hero from '@/components/Hero';
import PostCard from '@/components/PostCard';

const posts = [
  {
    title: 'My first post',
    excerpt: 'This is a sample post.',
    slug: '#',
    date: '2023-01-01',
  },
  {
    title: 'Another post',
    excerpt: 'More content here.',
    slug: '#',
    date: '2023-01-02',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </section>
    </main>
  );
}
