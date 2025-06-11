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
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <article className="prose prose-invert max-w-none px-4 py-8">
          <header className="mb-8">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
              {frontMatter.title}
            </h1>
            {frontMatter.date && (
              <time className="text-[#93b3c8] text-sm">
                {new Date(frontMatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </header>
          <div className="prose prose-invert prose-lg max-w-none">
            {source}
          </div>
        </article>
      </div>
    </div>
  );
}
