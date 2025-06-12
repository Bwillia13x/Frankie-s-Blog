import { getBlogPosts, getAllBlogSlugs } from '../mdx'
import fs from 'fs'
import path from 'path'

// Mock fs module
jest.mock('fs')
jest.mock('path')

const mockFs = fs as jest.Mocked<typeof fs>
const mockPath = path as jest.Mocked<typeof path>

describe('MDX utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockPath.join.mockImplementation((...args) => args.join('/'))
    mockPath.basename.mockImplementation((filePath, ext) => {
      const name = filePath.split('/').pop() || ''
      return ext ? name.replace(ext, '') : name
    })
  })

  describe('getBlogPosts', () => {
    it('returns empty array when content directory does not exist', () => {
      mockFs.existsSync.mockReturnValue(false)
      
      const posts = getBlogPosts()
      
      expect(posts).toEqual([])
    })

    it('processes MDX files correctly', () => {
      const mockMdxContent = `---
title: "Test Post"
excerpt: "Test excerpt"
publishedAt: "2024-01-01"
category: "Testing"
tags: ["test", "jest"]
featured: true
author: "Test Author"
views: 100
likes: 10
comments: 5
---

# Test Content

This is **bold** text and *italic* text.

\`\`\`javascript
console.log('hello world');
\`\`\`
`

      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['test-post.mdx'] as any)
      mockFs.readFileSync.mockReturnValue(mockMdxContent)

      const posts = getBlogPosts()

      expect(posts).toHaveLength(1)
      expect(posts[0]).toMatchObject({
        slug: 'test-post',
        title: 'Test Post',
        excerpt: 'Test excerpt',
        category: 'Testing',
        tags: ['test', 'jest'],
        featured: true,
        author: 'Test Author',
        views: 100,
        likes: 10,
        comments: 5,
      })
      expect(posts[0].content).toContain('<h1 id="test-content" class="heading-1">Test Content</h1>')
      expect(posts[0].content).toContain('<strong>bold</strong>')
      expect(posts[0].content).toContain('<em>italic</em>')
    })

    it('filters out non-MDX files', () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue([
        'test-post.mdx',
        'readme.md',
        'config.json',
        'another-post.mdx'
      ] as any)
      mockFs.readFileSync.mockReturnValue(`---
title: "Test"
excerpt: "Test"
publishedAt: "2024-01-01"
category: "Test"
---
Content`)

      const posts = getBlogPosts()

      expect(posts).toHaveLength(2)
      expect(mockFs.readFileSync).toHaveBeenCalledTimes(2)
    })

    it('sorts posts by publish date (newest first)', () => {
      const oldPost = `---
title: "Old Post"
excerpt: "Old"
publishedAt: "2024-01-01"
category: "Test"
---
Old content`

      const newPost = `---
title: "New Post"
excerpt: "New"
publishedAt: "2024-12-01"
category: "Test"
---
New content`

      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['old.mdx', 'new.mdx'] as any)
      mockFs.readFileSync
        .mockReturnValueOnce(oldPost)
        .mockReturnValueOnce(newPost)

      const posts = getBlogPosts()

      expect(posts[0].title).toBe('New Post')
      expect(posts[1].title).toBe('Old Post')
    })
  })

  describe('getAllBlogSlugs', () => {
    it('returns empty array when content directory does not exist', () => {
      mockFs.existsSync.mockReturnValue(false)
      
      const slugs = getAllBlogSlugs()
      
      expect(slugs).toEqual([])
    })

    it('returns slugs for MDX files only', () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue([
        'post-one.mdx',
        'post-two.mdx',
        'readme.md',
        'config.json'
      ] as any)

      const slugs = getAllBlogSlugs()

      expect(slugs).toEqual(['post-one', 'post-two'])
    })

    it('removes .mdx extension from slugs', () => {
      mockFs.existsSync.mockReturnValue(true)
      mockFs.readdirSync.mockReturnValue(['my-awesome-post.mdx'] as any)

      const slugs = getAllBlogSlugs()

      expect(slugs).toEqual(['my-awesome-post'])
    })
  })
}) 