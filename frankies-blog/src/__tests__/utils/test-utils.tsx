import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Mock providers that might be needed
const MockProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: MockProviders, ...options })

// Test data factories
export const createMockBlogPost = (overrides = {}) => ({
  slug: 'test-blog-post',
  title: 'Test Blog Post',
  excerpt: 'This is a test blog post excerpt for testing purposes.',
  content: '<p>This is test content for the blog post.</p>',
  publishedAt: '2024-01-01',
  readTime: '5 min read',
  tags: ['testing', 'jest', 'react'],
  category: 'Testing',
  views: 100,
  likes: 10,
  comments: 5,
  featured: false,
  image: '/test-image.jpg',
  author: 'Test Author',
  ...overrides,
})

export const createMockProject = (overrides = {}) => ({
  id: '1',
  title: 'Test Project',
  description: 'This is a test project description.',
  longDescription: 'This is a longer test project description for testing purposes.',
  image: '/test-project-image.jpg',
  tags: ['React', 'TypeScript', 'Testing'],
  category: 'web-apps',
  featured: false,
  github: 'https://github.com/test/test-project',
  demo: 'https://test-project.demo.com',
  status: 'completed' as const,
  ...overrides,
})

export const createMockTestimonial = (overrides = {}) => ({
  id: '1',
  name: 'Test User',
  role: 'Test Role',
  company: 'Test Company',
  content: 'This is a test testimonial content.',
  rating: 5,
  avatar: '/test-avatar.jpg',
  ...overrides,
})

// Re-export everything
export * from '@testing-library/react'
export { customRender as render } 