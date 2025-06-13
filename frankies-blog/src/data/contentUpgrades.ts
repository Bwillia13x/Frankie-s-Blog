// Central data module for content upgrades, imported by both server and client components.
export interface ContentUpgrade {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'checklist' | 'template' | 'guide' | 'toolkit' | 'course';
  value: string;
  benefits: string[];
  downloadUrl?: string;
  thumbnailUrl?: string;
  tags: string[];
}

export const contentUpgrades: ContentUpgrade[] = [
  {
    id: 'react-performance-checklist',
    title: 'React Performance Optimization Checklist',
    description: 'A comprehensive 15-point checklist to identify and fix React performance issues in your applications.',
    type: 'checklist',
    value: '$29',
    benefits: [
      'Identify performance bottlenecks in minutes',
      'Step-by-step optimization instructions',
      'Before/after code examples',
      'Tools and debugging techniques',
    ],
    tags: ['react', 'performance', 'optimization'],
    downloadUrl: '/downloads/react-performance-checklist.pdf',
  },
  {
    id: 'nextjs-deployment-guide',
    title: 'Next.js Production Deployment Guide',
    description: 'Complete guide to deploying Next.js applications to production with best practices and common pitfalls.',
    type: 'guide',
    value: '$39',
    benefits: [
      'Production-ready deployment strategies',
      'Environment configuration templates',
      'Performance monitoring setup',
      'Security best practices checklist',
    ],
    tags: ['nextjs', 'deployment', 'production'],
    downloadUrl: '/downloads/nextjs-deployment-guide.pdf',
  },
  {
    id: 'api-design-template',
    title: 'REST API Design Template',
    description: 'Professional API design template with documentation examples, error handling patterns, and testing strategies.',
    type: 'template',
    value: '$25',
    benefits: [
      'Ready-to-use API documentation template',
      'Error response standardization',
      'Authentication patterns',
      'Testing checklist and examples',
    ],
    tags: ['api', 'backend', 'documentation'],
    downloadUrl: '/downloads/api-design-template.zip',
  },
];
