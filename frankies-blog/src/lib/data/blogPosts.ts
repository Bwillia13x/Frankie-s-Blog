// This file provides blog post data with MDX content support and fallback data
import type { BlogPost } from '../../types';
import { getBlogPosts as getMDXBlogPosts } from '../mdx';

// Fallback data for development/demo purposes
const fallbackBlogPosts: BlogPost[] = [
  {
    slug: "building-scalable-react-applications",
    title: "Building Scalable React Applications: Lessons from TaskFlow Pro",
    excerpt: "When TaskFlow Pro started experiencing performance issues at 50,000 users, I knew it was time for a complete architecture overhaul. Here's how I transformed a monolithic React app into a scalable, performant system...",
    category: "Case Study",
    publishedAt: "2025-01-10",
    readTime: "8 min read",
    featured: true,
    tags: ["React", "Performance", "Architecture", "Scaling"],
    image: "/blog/taskflow-architecture.jpg",
    views: 2847,
    comments: 34,
    likes: 156,
    content: `# Building Scalable React Applications: Lessons from TaskFlow Pro

When TaskFlow Pro started experiencing performance issues at 50,000 users, I knew it was time for a complete architecture overhaul. Here's how I transformed a monolithic React app into a scalable, performant system.

## The Problem

Our React application was built as a single-page application with all components rendered on the client. As our user base grew, we started experiencing:

- Slow initial page loads
- High memory usage
- Inconsistent performance across different devices
- Difficult maintenance and debugging

## The Solution

We implemented a multi-pronged approach:

### 1. Code Splitting and Lazy Loading

\`\`\`jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));
const Projects = lazy(() => import('./Projects'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

### 2. State Management Optimization

We moved from a single global Redux store to multiple smaller stores using Zustand:

\`\`\`jsx
import { create } from 'zustand';

const useProjectStore = create((set) => ({
  projects: [],
  addProject: (project) => set((state) => ({ 
    projects: [...state.projects, project] 
  })),
}));
\`\`\`

### 3. Performance Monitoring

We implemented real-time performance monitoring to catch issues early:

\`\`\`jsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
\`\`\`

## Results

After implementing these changes:

- **50% reduction** in initial load time
- **30% improvement** in Time to Interactive
- **Zero performance-related** user complaints
- **Easier maintenance** for the development team

## Key Takeaways

1. **Measure first**: Always establish baseline metrics before optimizing
2. **Incremental changes**: Make small, measurable improvements
3. **User-focused**: Optimize for real user experiences, not just metrics
4. **Monitor continuously**: Performance is an ongoing concern

The journey from a monolithic React app to a scalable architecture taught us that performance isn't just about code—it's about architecture, monitoring, and continuous improvement.`,
  },
  {
    slug: "api-design-best-practices",
    title: "The Art of API Design: Creating Developer-Friendly Interfaces",
    excerpt: "Great API design is like great UX design - it should be intuitive, consistent, and delightful to use. After designing APIs for multiple startups, here are the principles I swear by...",
    category: "Tutorial",
    publishedAt: "2025-01-05",
    readTime: "6 min read",
    featured: false,
    tags: ["API", "Backend", "Best Practices", "Developer Experience"],
    image: "/blog/api-design.jpg",
    views: 1923,
    comments: 28,
    likes: 89,
    content: `# The Art of API Design: Creating Developer-Friendly Interfaces

Great API design is like great UX design - it should be intuitive, consistent, and delightful to use. After designing APIs for multiple startups, here are the principles I swear by.

## 1. Consistency is King

Your API should follow predictable patterns:

\`\`\`json
// Good: Consistent resource naming
GET /api/users
GET /api/projects
GET /api/tasks

// Bad: Inconsistent naming
GET /api/users
GET /api/project-list
GET /api/getTasks
\`\`\`

## 2. Use HTTP Status Codes Properly

\`\`\`javascript
// 200: Success
res.status(200).json({ data: users });

// 201: Created
res.status(201).json({ data: newUser });

// 400: Bad Request
res.status(400).json({ error: "Invalid email format" });

// 404: Not Found
res.status(404).json({ error: "User not found" });

// 500: Server Error
res.status(500).json({ error: "Internal server error" });
\`\`\`

## 3. Design for Developer Experience

Include helpful metadata:

\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  },
  "meta": {
    "timestamp": "2025-01-05T10:00:00Z",
    "version": "1.0"
  }
}
\`\`\`

Remember: A well-designed API is a pleasure to work with and significantly reduces integration time for developers.`,
  },
  {
    slug: "startup-to-scale-journey",
    title: "From Startup to Scale: My Journey Building E-Commerce Platforms",
    excerpt: "Three years ago, I joined a startup with big dreams but a shaky technical foundation. Today, that platform processes over $2M in monthly transactions. Here's the complete story...",
    category: "Story",
    publishedAt: "2024-12-28",
    readTime: "12 min read",
    featured: true,
    tags: ["E-commerce", "Startups", "Career", "Leadership"],
    image: "/blog/startup-journey.jpg",
    views: 4156,
    comments: 67,
    likes: 234,
    content: `# From Startup to Scale: My Journey Building E-Commerce Platforms

Three years ago, I joined a startup with big dreams but a shaky technical foundation. Today, that platform processes over $2M in monthly transactions. Here's the complete story of how we built and scaled an e-commerce platform from the ground up.

## The Beginning: Chaos and Opportunity

When I joined ShopFlow as the second engineer, the "platform" was essentially a WordPress site with some custom plugins. We had:

- 100 merchants
- $50K monthly transaction volume
- A single server running everything
- No automated testing
- Manual deployment process
- 3-4 hours of downtime per week

## Phase 1: Stabilization (Months 1-6)

Our first priority was to stop the bleeding. We focused on:

### Infrastructure Improvements

\`\`\`yaml
# docker-compose.yml - Our first containerization
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=shopflow
\`\`\`

### Basic Monitoring

\`\`\`javascript
// Simple health check endpoint
app.get('/health', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    status: 'OK'
  };
  
  res.status(200).json(healthCheck);
});
\`\`\`

**Results:** Downtime reduced from 3-4 hours to 30 minutes per week.

## Phase 2: Growth (Months 7-18)

With stability achieved, we could focus on growth features:

### Payment System Redesign

\`\`\`javascript
class PaymentProcessor {
  async processPayment(paymentData) {
    // Implement retry logic
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const result = await this.stripe.charges.create(paymentData);
        await this.logTransaction(result);
        return result;
      } catch (error) {
        if (attempt === 3) throw error;
        await this.delay(1000 * attempt);
      }
    }
  }
}
\`\`\`

### Database Optimization

\`\`\`sql
-- Added strategic indexes
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_products_merchant_id ON products(merchant_id);
CREATE INDEX idx_transactions_status ON transactions(status);
\`\`\`

**Results:** 500 merchants, $500K monthly volume.

## Phase 3: Scale (Months 19-36)

This is where things got interesting:

### Microservices Architecture

\`\`\`javascript
// API Gateway
const gateway = express();

gateway.use('/auth', proxy('http://auth-service:3001'));
gateway.use('/payments', proxy('http://payment-service:3002'));
gateway.use('/inventory', proxy('http://inventory-service:3003'));
\`\`\`

### Event-Driven Architecture

\`\`\`javascript
// Event publisher
class EventBus {
  async publish(event, data) {
    await this.redis.publish(event, JSON.stringify(data));
  }
}

// Event subscriber
eventBus.subscribe('order.created', async (orderData) => {
  await inventoryService.reserveItems(orderData.items);
  await emailService.sendConfirmation(orderData.customer);
});
\`\`\`

### Performance Optimization

\`\`\`javascript
// Redis caching
const getProduct = async (id) => {
  const cached = await redis.get(\`product:\${id}\`);
  if (cached) return JSON.parse(cached);
  
  const product = await db.product.findById(id);
  await redis.setex(\`product:\${id}\`, 3600, JSON.stringify(product));
  return product;
};
\`\`\`

## Current State

Today, our platform handles:

- **2,000+ active merchants**
- **$2M+ monthly transaction volume**
- **99.9% uptime**
- **<200ms average response time**
- **Zero data breaches**

## Key Lessons Learned

### 1. Start Simple, Scale Smart
Don't over-engineer from day one. Build for your current scale, not your dream scale.

### 2. Monitoring is Non-Negotiable
You can't fix what you can't measure. Implement logging and monitoring from the beginning.

### 3. Database Design Matters
Poor database design decisions made early will haunt you at scale. Plan your schema carefully.

### 4. Team Growth is as Important as Technical Growth
As the platform scaled, so did our team. Hiring and mentoring became as crucial as coding.

### 5. Customer Feedback Drives Everything
The best features came from actually talking to merchants and understanding their pain points.

## What's Next?

We're currently working on:

- AI-powered inventory predictions
- Multi-currency support
- Advanced analytics dashboard
- Mobile app for merchants

The journey from startup chaos to scaled platform taught me that successful software isn't just about clean code—it's about solving real problems for real people, one user at a time.

---

*Want to know more about any specific aspect of this journey? Drop me a line!*`,
  }
];

// Main export function that tries MDX first, falls back to static data
export function getBlogPosts(): BlogPost[] {
  try {
    const mdxPosts = getMDXBlogPosts();
    if (mdxPosts.length > 0) {
      return mdxPosts;
    }
  } catch (error) {
    console.warn('Error loading MDX posts, using fallback data:', error);
  }
  
  return fallbackBlogPosts;
}

// Export individual post lookup
export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Export categories and tags (generated from posts)
export interface BlogCategory {
  name: string;
  count: number;
}

export function getCategories(): BlogCategory[] {
  const posts = getBlogPosts();
  const categoryMap = new Map<string, number>();
  
  // Count posts per category
  posts.forEach(post => {
    categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
  });
  
  // Convert to array and add "All" category
  const categories: BlogCategory[] = [
    { name: "All", count: posts.length }
  ];
  
  categoryMap.forEach((count, name) => {
    categories.push({ name, count });
  });
  
  return categories;
}

export function getPopularTags(): string[] {
  const posts = getBlogPosts();
  const tagMap = new Map<string, number>();
  
  // Count tag usage
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });
  
  // Return tags sorted by usage
  return Array.from(tagMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tag]) => tag)
    .slice(0, 12); // Top 12 tags
}

// Legacy exports for backward compatibility
export const categories = getCategories();
export const popularTags = getPopularTags();
export const blogPosts = getBlogPosts();
