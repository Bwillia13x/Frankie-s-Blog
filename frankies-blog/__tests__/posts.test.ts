// Using jest globals (describe, it, expect)
import { getAllPostsMeta, getPostBySlug } from '../src/lib/posts';

describe('posts helpers', () => {
  it('should list all post metadata', () => {
    const posts = getAllPostsMeta();
    expect(posts.length).toBe(3);
    expect(posts[0]).toHaveProperty('slug');
    expect(posts[0]).toHaveProperty('title');
  });

  it('should get post by slug', async () => {
    const { frontMatter } = await getPostBySlug('hello-world');
    expect(frontMatter.title).toBe('Hello World');
  });
});
