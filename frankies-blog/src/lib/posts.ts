import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

const POSTS_PATH = path.join(process.cwd(), 'content', 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
};

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_PATH)) return [];
  return fs
    .readdirSync(POSTS_PATH)
    .filter((f) => /\.mdx?$/.test(f))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const { data } = matter(
        fs.readFileSync(path.join(POSTS_PATH, file), 'utf8')
      );
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.summary || data.excerpt,
      } as PostMeta;
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });
  return { source: content, frontMatter: frontmatter };
}
