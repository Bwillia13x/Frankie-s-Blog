import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MDXFrontmatter {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  author?: string;
}

export interface ProcessedMDX {
  frontmatter: MDXFrontmatter;
  content: string;
  slug: string;
  readTime: string;
}

// Simple markdown to HTML processor
function processMarkdownContent(content: string): string {
  // Basic markdown processing that works reliably
  return content
    .split('\n')
    .map(line => {
      // Headers
      if (line.startsWith('### ')) {
        return `<h3 class="heading-3">${line.substring(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="heading-2">${line.substring(3)}</h2>`;
      }
      if (line.startsWith('# ')) {
        return `<h1 class="heading-1">${line.substring(2)}</h1>`;
      }
      
      // Code blocks
      if (line.startsWith('```')) {
        return line; // Will be processed later
      }
      
      // Lists
      if (line.startsWith('- ')) {
        return `<li>${line.substring(2)}</li>`;
      }
      if (line.match(/^\d+\. /)) {
        return `<li>${line.replace(/^\d+\. /, '')}</li>`;
      }
      
      // Empty lines
      if (line.trim() === '') {
        return '<br />';
      }
      
      // Regular paragraphs
      if (line.trim() && !line.startsWith('<')) {
        // Process inline formatting
        let processed = line
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="link">$1</a>');
        
        return `<p>${processed}</p>`;
      }
      
      return line;
    })
    .join('\n')
    // Process code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
      return `<pre class="code-block"><code class="hljs${lang ? ` language-${lang}` : ''}">${code.trim()}</code></pre>`;
    })
    // Fix list wrapping
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      return `<ul>${match}</ul>`;
    })
    // Clean up extra breaks
    .replace(/<br \/>\n?<br \/>/g, '<br />')
    .replace(/\n/g, '');
}

export function getBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDirectory)) {
    console.warn('Blog content directory does not exist, using fallback data');
    return [];
  }

  const filenames = fs.readdirSync(blogDirectory);
  const posts = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => {
      const filePath = path.join(blogDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = name.replace(/\.mdx$/, '');
      
      const readTime = readingTime(content);
      
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        content: processMarkdownContent(content),
        publishedAt: data.publishedAt,
        readTime: readTime.text,
        tags: data.tags || [],
        category: data.category,
        views: data.views || 0,
        likes: data.likes || 0,
        comments: data.comments || 0,
        featured: data.featured || false,
        image: data.image,
        author: data.author,
      } as BlogPost;
    })
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getAllBlogSlugs(): string[] {
  const blogDirectory = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(blogDirectory);
  return filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''));
}

export function getProcessedMDX(filePath: string): ProcessedMDX | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const slug = path.basename(filePath, '.mdx');
    const readTime = readingTime(content);
    
    return {
      frontmatter: data as MDXFrontmatter,
      content: processMarkdownContent(content),
      slug,
      readTime: readTime.text,
    };
  } catch (error) {
    console.error(`Error processing MDX file ${filePath}:`, error);
    return null;
  }
} 