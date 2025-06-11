# Testing Pipeline Guide

## Overview

This document outlines the comprehensive testing pipeline implemented for Frankie's Blog, covering unit tests, integration tests, component tests, and end-to-end testing.

## Testing Stack

### Core Testing Framework
- **Jest**: Unit and integration testing framework
- **React Testing Library**: Component testing utilities
- **Playwright**: End-to-end browser testing
- **GitHub Actions**: Continuous Integration pipeline

### Dependencies
```json
{
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.1.0",
  "@playwright/test": "^1.48.2",
  "@types/jest": "^29.5.14",
  "jest": "^29.7.0",
  "jest-environment-jsdom": "^29.7.0",
  "eslint-plugin-testing-library": "^6.4.0"
}
```

## Project Structure

```
frankies-blog/
├── src/
│   ├── __tests__/
│   │   └── utils/
│   │       └── test-utils.tsx         # Testing utilities
│   ├── components/
│   │   └── common/
│   │       └── __tests__/
│   │           └── PageHeader.test.tsx # Component tests
│   ├── app/
│   │   └── blog/
│   │       └── __tests__/
│   │           └── page.test.tsx       # Page integration tests
│   └── lib/
│       └── __tests__/
│           └── mdx.test.ts             # Utility function tests
├── e2e/
│   ├── homepage.spec.ts                # E2E homepage tests
│   └── blog.spec.ts                    # E2E blog tests
├── jest.config.js                      # Jest configuration
├── jest.setup.js                       # Jest setup and mocks
├── playwright.config.ts                # Playwright configuration
└── .github/
    └── workflows/
        └── ci.yml                       # CI/CD pipeline
```

## Test Categories

### 1. Unit Tests
**Location**: `src/lib/__tests__/`
**Purpose**: Test individual utility functions and business logic
**Example**: MDX processing utilities

```bash
npm test src/lib/__tests__/mdx.test.ts
```

**Coverage**: 
- ✅ File parsing and validation
- ✅ Content processing
- ✅ Error handling
- ✅ Edge cases

### 2. Component Tests
**Location**: `src/components/**/__tests__/`
**Purpose**: Test React components in isolation
**Example**: PageHeader component

```bash
npm test src/components/common/__tests__/PageHeader.test.tsx
```

**Testing Approach**:
- Component rendering
- Props validation
- User interactions
- Accessibility testing

### 3. Integration Tests
**Location**: `src/app/**/__tests__/`
**Purpose**: Test complete page functionality
**Example**: Blog page with data integration

**Coverage**:
- Data fetching and display
- User interactions
- Search and filtering
- Navigation flows

### 4. End-to-End Tests
**Location**: `e2e/`
**Purpose**: Test complete user journeys across multiple pages
**Tool**: Playwright

```bash
npm run test:e2e
```

**Test Scenarios**:
- Homepage navigation
- Blog post browsing
- Search functionality
- Mobile responsiveness
- SEO elements

## Available Scripts

### Development Testing
```bash
npm test                    # Run all tests once
npm run test:watch          # Run tests in watch mode
npm run test:coverage       # Generate coverage report
```

### CI/CD Testing
```bash
npm run test:ci            # Run tests with coverage for CI
npm run test:e2e           # Run E2E tests
npm run test:all           # Run both unit and E2E tests
```

### E2E Testing Options
```bash
npm run test:e2e:ui        # Run E2E tests with UI
npm run test:e2e:debug     # Debug E2E tests
```

### Code Quality
```bash
npm run lint               # ESLint checking
npm run type-check         # TypeScript type checking
```

## Configuration Details

### Jest Configuration
- **Environment**: jsdom for DOM testing
- **Setup**: Automatic Next.js integration
- **Coverage**: 70% threshold for statements, branches, functions, lines
- **Mocks**: Next.js router, Image, Link components

### Playwright Configuration
- **Browsers**: Chromium, Mobile Chrome, Mobile Safari
- **Base URL**: http://localhost:3000
- **Features**: Screenshots, videos, traces on failure
- **Reports**: HTML and JSON output

## CI/CD Pipeline

### GitHub Actions Workflow
**File**: `.github/workflows/ci.yml`

**Pipeline Steps**:
1. **Setup**: Node.js 18.x and 20.x matrix
2. **Install**: Dependencies with npm ci
3. **Lint**: Code quality checks
4. **Type Check**: TypeScript validation
5. **Unit Tests**: Jest with coverage
6. **Build**: Production build verification
7. **E2E Tests**: Full browser testing

**Triggers**:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop`

## Testing Best Practices

### 1. Test Organization
```typescript
describe('Component/Feature', () => {
  beforeEach(() => {
    // Setup code
  })

  it('should handle specific scenario', () => {
    // Test implementation
  })
})
```

### 2. Mocking Strategy
- **External APIs**: Mock at the module level
- **Next.js features**: Use provided mocks in jest.setup.js
- **Complex components**: Create mock factories

### 3. Accessibility Testing
```typescript
expect(screen.getByRole('button')).toBeInTheDocument()
expect(screen.getByLabelText('Search')).toBeAccessible()
```

### 4. E2E Test Patterns
```typescript
test('user journey', async ({ page }) => {
  await page.goto('/blog')
  await page.getByRole('link', { name: /first post/i }).click()
  await expect(page).toHaveURL(/\/blog\/.*/)
})
```

## Coverage Goals

### Current Coverage (MDX Utilities)
- **Statements**: 69.84%
- **Branches**: 73.07% 
- **Functions**: 71.42%
- **Lines**: 70.96%

### Target Coverage
- **Statements**: 70%+
- **Branches**: 70%+
- **Functions**: 70%+
- **Lines**: 70%+

## Debugging Tests

### Jest Debugging
```bash
# Debug specific test
npm test -- --testNamePattern="specific test" --verbose

# Run single test file
npm test src/lib/__tests__/mdx.test.ts
```

### Playwright Debugging
```bash
# Visual debugging
npm run test:e2e:debug

# Generate traces
npm run test:e2e -- --trace on
```

## Performance Testing

### Bundle Analysis
```bash
npm run analyze
```

### Lighthouse CI (Future Enhancement)
- Performance metrics
- Accessibility scores
- SEO optimization
- Best practices compliance

## Maintenance

### Regular Tasks
1. **Update dependencies** monthly
2. **Review test coverage** weekly
3. **Clean up outdated tests** as features change
4. **Add tests for new features** during development

### Test Health Monitoring
- Monitor CI pipeline success rates
- Track test execution times
- Review coverage trends
- Identify flaky tests

## Conclusion

This testing pipeline provides comprehensive coverage for:
- ✅ **Unit Testing**: Core business logic
- ✅ **Component Testing**: UI component behavior  
- ✅ **Integration Testing**: Page-level functionality
- ✅ **E2E Testing**: Complete user journeys
- ✅ **CI/CD Integration**: Automated quality gates
- ✅ **Performance Monitoring**: Build and type safety

The pipeline ensures code quality, prevents regressions, and maintains confidence in deployments while supporting rapid development cycles. 