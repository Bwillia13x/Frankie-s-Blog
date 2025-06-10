import Link from 'next/link';

export interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}

export default function PostCard({ title, excerpt, slug, date }: PostCardProps) {
  return (
    <article className="border rounded p-4">
      <h2 className="text-xl font-semibold">
        <Link href={slug}>{title}</Link>
      </h2>
      <time className="text-sm text-gray-500">{date}</time>
      <p className="mt-2 text-gray-700">{excerpt}</p>
    </article>
  );
}
