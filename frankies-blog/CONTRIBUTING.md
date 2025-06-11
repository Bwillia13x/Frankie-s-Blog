# 🤝 Contributing to Frankie's Blog

Thank you for your interest in contributing! This guide will help you get started with contributing to the blog.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pre-commit Hooks](#pre-commit-hooks)
- [Pull Request Process](#pull-request-process)
- [Writing Blog Posts](#writing-blog-posts)

## 📜 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please read and follow our Code of Conduct.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Frankie-s-Blog.git
   cd Frankie-s-Blog/frankies-blog
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Workflow

### Running the Development Server

```bash
pnpm dev
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch

# Run tests with coverage
pnpm test --coverage
```

### Linting and Formatting

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues automatically
pnpm lint --fix

# Format code with Prettier
pnpm format
```

## 📝 Commit Guidelines

We follow [Conventional Commits](https://conventionalcommits.org/) specification. This leads to more readable messages that are easy to follow when looking through the project history.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

### Examples

```bash
feat: add dark mode toggle
fix: resolve mobile navigation issue
docs: update installation instructions
style: format code with prettier
refactor: simplify post fetching logic
test: add tests for Hero component
chore: update dependencies
```

## 🪝 Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) to run pre-commit hooks that ensure code quality:

### What happens on commit:

1. **Lint-staged** runs ESLint on staged files
2. **Prettier** formats staged files
3. **Jest** runs relevant tests
4. **Type checking** with TypeScript

### Setup Pre-commit Hooks

Hooks are automatically installed when you run `pnpm install`. If you need to reinstall them:

```bash
pnpm run prepare
```

### Bypassing Hooks (Not Recommended)

If you need to bypass hooks temporarily:

```bash
git commit --no-verify -m "your message"
```

**Note**: This should only be used in exceptional circumstances.

## 🔀 Pull Request Process

1. **Update your branch** with the latest changes from `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push your changes**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** on GitHub with:
   - Clear title following conventional commit format
   - Detailed description of changes
   - Screenshots for UI changes
   - Link to any related issues

4. **Wait for review** - maintainers will review your PR
5. **Address feedback** if requested
6. **Merge** - once approved, your PR will be merged

### PR Checklist

- [ ] Code follows the project's coding standards
- [ ] Tests pass locally
- [ ] Code is properly documented
- [ ] Commit messages follow conventional commits
- [ ] No console.log statements in production code
- [ ] All TypeScript errors are resolved

## ✍️ Writing Blog Posts

### Creating a New Post

1. Create a new `.mdx` file in `content/posts/`:
   ```bash
   touch content/posts/my-awesome-post.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   title: "My Awesome Post"
   date: "2024-01-15"
   summary: "A brief description of what this post covers"
   tags:
     - javascript
     - react
     - tutorial
   ---

   # Your Post Title

   Your content goes here...
   ```

### Frontmatter Guidelines

Required fields:
- `title`: Post title (string)
- `date`: Publication date in YYYY-MM-DD format
- `summary`: Brief description for SEO and post cards

Optional fields:
- `tags`: Array of relevant tags
- `author`: Author name (defaults to site author)
- `featured`: Boolean to feature the post

### Content Guidelines

- Use proper Markdown/MDX syntax
- Include code examples where relevant
- Add alt text to images
- Use semantic HTML when needed
- Keep paragraphs concise and readable

### Images and Assets

- Place images in `public/images/posts/`
- Use descriptive file names
- Optimize images for web (WebP format preferred)
- Always include alt text

## 🐛 Reporting Issues

When reporting issues, please include:

1. **Environment details** (OS, Node.js version, browser)
2. **Steps to reproduce** the issue
3. **Expected behavior**
4. **Actual behavior**
5. **Screenshots** if applicable
6. **Console errors** if any

## 💡 Feature Requests

Before submitting a feature request:

1. Check if the feature already exists
2. Look through existing issues
3. Provide a clear use case
4. Explain the expected behavior

## 📞 Getting Help

- 📧 **Questions**: Open a [GitHub Discussion](https://github.com/Bwillia13x/Frankie-s-Blog/discussions)
- 🐛 **Bugs**: Open a [GitHub Issue](https://github.com/Bwillia13x/Frankie-s-Blog/issues)
- 💬 **Chat**: Reach out to maintainers

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Annual contributor acknowledgments
- Special mentions in release notes

---

Thank you for contributing to Frankie's Blog! 🎉 