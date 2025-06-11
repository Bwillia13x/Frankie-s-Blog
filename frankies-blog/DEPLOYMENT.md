# 🚀 Deployment Guide for Frankie's Blog

## Vercel Deployment (Recommended)

Vercel is the platform made by Next.js creators and offers the best experience for Next.js applications.

### Quick Deployment Steps

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended for auto-deployment)

2. **Connect GitHub Repository**
   - Click "New Project" on Vercel dashboard
   - Import `Bwillia13x/Frankie-s-Blog` repository
   - Vercel will auto-detect Next.js configuration

3. **Deploy Configuration**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `frankies-blog`
   - **Build Command**: `pnpm build` (auto-configured)
   - **Install Command**: `pnpm install` (auto-configured)

4. **Environment Variables** (Optional for now)
   ```bash
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   ```

5. **Deploy!**
   - Click "Deploy" and wait ~2 minutes
   - Your site will be live at `https://[project-name].vercel.app`

### 🌐 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `frankiesblog.com`)

2. **DNS Configuration**
   - **For Apex Domain** (`frankiesblog.com`):
     ```
     A Record: @ → 76.76.19.19
     ```
   - **For WWW Subdomain** (`www.frankiesblog.com`):
     ```
     CNAME: www → cname.vercel-dns.com
     ```

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Your site will be HTTPS by default

### 🔧 Post-Deployment Optimizations

1. **Enable Vercel Analytics** (Free)
   - Go to Project Settings → Analytics
   - Add to your `.env.local`:
     ```bash
     VERCEL_ANALYTICS_ID=your_analytics_id
     ```

2. **Performance Monitoring**
   - Vercel provides built-in Web Vitals monitoring
   - Check Project → Functions tab for performance insights

3. **Preview Deployments**
   - Every push to any branch creates a preview deployment
   - Perfect for testing before merging to main

### 🏗️ Build Information

**Current Build Stats:**
- ✅ Total bundle size: 87 kB (excellent!)
- ✅ 16 static pages generated
- ✅ All pages optimized for SEO
- ✅ RSS feed available at `/rss.xml`

**Performance Features Enabled:**
- ✅ Image optimization (Vercel handles this automatically)
- ✅ Automatic compression and caching
- ✅ Edge network distribution
- ✅ Security headers configured

## Alternative: Netlify Deployment

If you prefer Netlify:

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git" → Choose GitHub
   - Select `Bwillia13x/Frankie-s-Blog`

2. **Build Settings**
   ```bash
   Base directory: frankies-blog
   Build command: STATIC_EXPORT=true pnpm build
   Publish directory: frankies-blog/out
   ```

3. **Environment Variables**
   ```bash
   NODE_ENV=production
   STATIC_EXPORT=true
   ```

## Alternative: GitHub Pages (Already Configured)

Your project already has GitHub Pages deployment configured via GitHub Actions. To use it:

1. Go to repository Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: `gh-pages`
4. Every push to main triggers automatic deployment

## 📊 Next Steps After Deployment

1. **Test All Pages**: Visit each route to ensure everything works
2. **Check Performance**: Use PageSpeed Insights or Lighthouse
3. **Setup Analytics**: Add Google Analytics or Vercel Analytics
4. **Custom Domain**: Purchase and configure your domain
5. **SEO Optimization**: Submit sitemap to Google Search Console

## 🐛 Troubleshooting

**Build Errors:**
- Ensure all dependencies are installed: `pnpm install`
- Test build locally: `pnpm build`
- Check Node.js version: 18+ recommended

**Deployment Issues:**
- Verify GitHub repository access
- Check build logs in Vercel dashboard
- Ensure environment variables are set correctly

**Domain Issues:**
- DNS propagation can take 24-48 hours
- Use DNS checker tools to verify records
- Contact domain registrar if issues persist

---

**Ready to Deploy? 🚀**
Your blog is production-ready! Choose Vercel for the best Next.js experience, or use any alternative above. 