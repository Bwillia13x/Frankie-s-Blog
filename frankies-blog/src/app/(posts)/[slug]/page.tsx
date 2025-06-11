import { getAllPostsMeta, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { source, frontMatter } = await getPostBySlug(params.slug);
  return (
    <article className="prose mx-auto py-8">
      <h1>{frontMatter.title}</h1>
      {source}
    </article>
  );
}
