#!/bin/bash

# Production Deployment Script for Frankie's Blog
# This script handles optimization, building, and deployment

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Install dependencies
print_status "Installing dependencies..."
pnpm install --frozen-lockfile

# Type checking
print_status "Running TypeScript type checking..."
if pnpm run type-check; then
    print_success "Type checking passed"
else
    print_error "Type checking failed"
    exit 1
fi

# Linting
print_status "Running ESLint..."
if pnpm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting issues found, but continuing..."
fi

# Testing (if tests exist)
if [ -f "jest.config.js" ] || [ -f "vitest.config.ts" ]; then
    print_status "Running tests..."
    if pnpm run test; then
        print_success "Tests passed"
    else
        print_error "Tests failed"
        exit 1
    fi
fi

# Build optimization checks
print_status "Running pre-build optimizations..."

# Check bundle size (if analyzer is available)
print_status "Analyzing bundle size..."
ANALYZE=true pnpm run build:analyze > /dev/null 2>&1 || print_warning "Bundle analysis skipped"

# Security audit
print_status "Running security audit..."
pnpm audit --audit-level moderate || print_warning "Security audit found issues"

# Build the application
print_status "Building application for production..."
if pnpm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check build output
BUILD_SIZE=$(du -sh .next/ | cut -f1)
print_status "Build size: $BUILD_SIZE"

# Performance validation
print_status "Running performance checks..."

# Check if critical files exist
CRITICAL_FILES=(".next/static" ".next/server" "public")
for file in "${CRITICAL_FILES[@]}"; do
    if [ -e "$file" ]; then
        print_success "✓ $file exists"
    else
        print_error "✗ $file missing"
        exit 1
    fi
done

# Environment-specific deployment
if [ "$1" = "production" ]; then
    print_status "Deploying to PRODUCTION environment..."
    
    # Additional production checks
    if [ -z "$NEXT_PUBLIC_SITE_URL" ]; then
        print_warning "NEXT_PUBLIC_SITE_URL not set"
    fi
    
    # Example: Deploy to Vercel
    if command -v vercel &> /dev/null; then
        print_status "Deploying with Vercel..."
        vercel --prod
        print_success "Deployed to production!"
    else
        print_warning "Vercel CLI not found. Manual deployment required."
        print_status "Build is ready in .next/ directory"
    fi
    
elif [ "$1" = "staging" ]; then
    print_status "Deploying to STAGING environment..."
    
    # Deploy to staging
    if command -v vercel &> /dev/null; then
        vercel
        print_success "Deployed to staging!"
    else
        print_warning "Vercel CLI not found. Manual deployment required."
    fi
    
else
    print_status "Build completed. Ready for deployment."
    print_status "Usage: ./scripts/deploy.sh [production|staging]"
fi

# Cleanup
print_status "Cleaning up temporary files..."
rm -rf .next/cache/webpack || true

# Performance metrics
print_status "Deployment Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Build Size: $BUILD_SIZE"
echo "🚀 Node.js: $NODE_VERSION"
echo "📦 Package Manager: pnpm"
echo "🔧 Environment: ${1:-local}"
echo "⏰ Deployment Time: $(date)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

print_success "🎉 Deployment process completed!"

# Optional: Open the deployed site
if [ "$1" = "production" ] && command -v open &> /dev/null; then
    echo ""
    read -p "Open the deployed site? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        open "https://frankies-blog.vercel.app" # Replace with your actual URL
    fi
fi 