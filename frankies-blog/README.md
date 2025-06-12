# 🚀 Frankie's Blog

A modern, fast, and SEO-friendly blog built with Next.js 14, MDX, and TailwindCSS.

![Project Snapshot](https://via.placeholder.com/800x400/4f46e5/ffffff?text=Frankie%27s+Blog+Screenshot)

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Development Setup

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/Bwillia13x/Frankie-s-Blog.git
   cd Frankie-s-Blog/frankies-blog
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view your blog.

3. **Create a new blog post**
   ```bash
   # Create a new .mdx file in content/posts/
   touch content/posts/my-new-post.mdx
   ```

   Add frontmatter and content:
   ```mdx
   ---
   title: "My New Post"
   date: "2024-01-15"
   summary: "A brief description of the post"
   tags:
     - react
     - nextjs
   ---

   # Your blog content here

   This is your **markdown** content with MDX support!
   ```

## 📁 Project Structure

```
frankies-blog/
├── .github/workflows/     # CI/CD pipelines
│   ├── ci.yml            # Test & lint on PRs
├── __tests__/            # Jest tests
├── content/posts/        # MDX blog posts
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── (posts)/[slug]/ # Dynamic post pages
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Homepage
│   ├── components/      # React components
│   │   ├── icons/       # SVG icon components
│   │   ├── Header.tsx   # Site header
│   │   ├── Footer.tsx   # Site footer
│   │   └── ...          # Other components
│   └── lib/             # Utilities & configs
│       ├── posts.ts     # Post fetching logic
│       └── siteMetadata.ts # Site configuration
├── jest.config.js       # Jest configuration
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies & scripts
└── tailwind.config.ts   # TailwindCSS config
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Jest tests
- `pnpm format` - Format code with Prettier

## 🎨 Customization

### Site Metadata

Edit `src/lib/siteMetadata.ts` to update:
- Site title and description
- Author information
- Navigation links
- Social media links

### Styling

- **Global styles**: `src/app/globals.css`
- **Component styles**: Using TailwindCSS classes
- **Theme colors**: `tailwind.config.ts`

### Hero Section

Modify `src/components/Hero.tsx` to customize the homepage hero section.

## 📝 Contributing

We follow [Conventional Commits](https://conventionalcommits.org/) for commit messages:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build process or auxiliary tool changes

### Pre-commit Hooks

The project uses Husky for pre-commit hooks that automatically:
- Run linting
- Format code
- Run tests

## ❓ FAQ

### How do I change the hero image?

Update the image in `public/` directory and modify the `Hero.tsx` component to reference it.

### How do I add new navigation links?

Edit the `nav` array in `src/lib/siteMetadata.ts`:

```typescript
nav: [
  { title: 'Home', href: '/' },
  { title: 'Blog', href: '/blog' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' }, // Add new link
],
```

### How do I add analytics?

Add your analytics script to `src/app/layout.tsx` in the `<head>` section.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have questions or need help:
- Open an [issue](https://github.com/Bwillia13x/Frankie-s-Blog/issues)
- Check existing [discussions](https://github.com/Bwillia13x/Frankie-s-Blog/discussions)

---

Built with ❤️ using [Next.js](https://nextjs.org/), [MDX](https://mdxjs.com/), and [TailwindCSS](https://tailwindcss.com/)
