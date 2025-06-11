export const compileMDX = jest.fn().mockResolvedValue({
  content: 'mocked content',
  frontmatter: { title: 'Hello World', date: '2024-01-01' }
}); 