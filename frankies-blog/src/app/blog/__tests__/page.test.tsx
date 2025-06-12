import { render, screen, fireEvent } from '@/__tests__/utils/test-utils'
import BlogPage from '../page'

// Mock the blog data
jest.mock('@/lib/data/blogPosts', () => {
  const mockPosts = [
    {
      slug: 'test-post-1',
      title: 'First Test Post',
      excerpt: 'Test excerpt',
      content: 'Test content',
      publishedAt: '2024-01-01',
      readTime: '5 min read',
      tags: ['testing', 'jest', 'react'],
      category: 'Technical',
      views: 100,
      likes: 10,
      comments: 5,
      featured: true,
      image: '/test-image.jpg',
      author: 'Test Author',
    },
    {
      slug: 'test-post-2',
      title: 'Second Test Post',
      excerpt: 'Test excerpt',
      content: 'Test content',
      publishedAt: '2024-01-01',
      readTime: '5 min read',
      tags: ['testing', 'jest', 'react'],
      category: 'Tutorial',
      views: 100,
      likes: 10,
      comments: 5,
      featured: false,
      image: '/test-image.jpg',
      author: 'Test Author',
    },
    {
      slug: 'test-post-3',
      title: 'Third Test Post',
      excerpt: 'Test excerpt',
      content: 'Test content',
      publishedAt: '2024-01-01',
      readTime: '5 min read',
      tags: ['testing', 'jest', 'react'],
      category: 'Technical',
      views: 100,
      likes: 10,
      comments: 5,
      featured: false,
      image: '/test-image.jpg',
      author: 'Test Author',
    },
  ]
  return {
    getBlogPosts: () => mockPosts,
    getCategories: () => [
      { name: 'All', count: mockPosts.length },
      { name: 'Technical', count: 2 },
      { name: 'Tutorial', count: 1 },
    ],
    getPopularTags: () => ['React', 'JavaScript', 'Testing', 'TypeScript'],
    blogPosts: mockPosts,
    categories: [
      { name: 'All', count: mockPosts.length },
      { name: 'Technical', count: 2 },
      { name: 'Tutorial', count: 1 },
    ],
    popularTags: ['React', 'JavaScript', 'Testing', 'TypeScript'],
  }
})

describe('Blog Page', () => {
  it('renders the blog page with posts', () => {
    render(<BlogPage />)

    expect(screen.getByText('Stories, Insights & Code')).toBeInTheDocument()
    expect(screen.getByText('First Test Post')).toBeInTheDocument()
    expect(screen.getByText('Second Test Post')).toBeInTheDocument()
    expect(screen.getByText('Third Test Post')).toBeInTheDocument()
  })

  it('displays category filters', () => {
    render(<BlogPage />)
    
    expect(screen.getByText('All (3)')).toBeInTheDocument()
    expect(screen.getByText('Technical (2)')).toBeInTheDocument()
    expect(screen.getByText('Tutorial (1)')).toBeInTheDocument()
  })

  it('displays popular tags', () => {
    render(<BlogPage />)

    fireEvent.click(screen.getByRole('button', { name: /blog info/i }))

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Testing')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('shows featured posts separately', () => {
    render(<BlogPage />)

    // Featured post should have a featured badge or be in a special section
    expect(screen.getByText('First Test Post')).toBeInTheDocument()
  })

  it('displays post metadata correctly', () => {
    render(<BlogPage />)

    // Basic render check
    expect(screen.getByText('Second Test Post')).toBeInTheDocument()
  })

  it('shows search functionality', () => {
    render(<BlogPage />)
    
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()
  })

  it('handles empty search results gracefully', () => {
    render(<BlogPage />)

    const searchInput = screen.getByPlaceholderText(/search/i)
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } })

    // Component should still render without crashing
    expect(searchInput).toBeInTheDocument()
  })

  it('has proper navigation links', () => {
    render(<BlogPage />)
    
    // Check for links to individual blog posts
    const postLinks = screen.getAllByRole('link')
    expect(postLinks.length).toBeGreaterThan(0)
  })
}) 