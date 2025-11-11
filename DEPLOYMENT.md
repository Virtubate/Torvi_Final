# Deployment Guide for Torvi Landing Page

## Option 1: Deploy with Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
1. Create a new repository on GitHub: https://github.com/new
2. Name it `torvi-landing-page` (or any name you prefer)
3. In your terminal, run:
```bash
git init
git add .
git commit -m "Initial commit - Torvi landing page"
git remote add origin https://github.com/YOUR_USERNAME/torvi-landing-page.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy with Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click "New Project"
3. Import your `torvi-landing-page` repository
4. Vercel will auto-detect it's a Vite project
5. Click "Deploy"
6. Done! Your site will be live in ~1 minute

**Your site will be at:** `https://torvi-landing-page.vercel.app` (or custom domain)

---

## Option 2: Deploy with Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy with Netlify
1. Go to https://netlify.com and sign up with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

**Your site will be at:** `https://torvi-landing-page.netlify.app`

---

## Option 3: GitHub Pages

### Step 1: Update vite.config.js
Add base path:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/torvi-landing-page/',
})
```

### Step 2: Add deployment script to package.json
Add to "scripts" section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 3: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Deploy from branch `gh-pages`
4. Save

**Your site will be at:** `https://YOUR_USERNAME.github.io/torvi-landing-page/`

---

## Recommended: Use Vercel
✅ Automatic deployments on every git push
✅ Free SSL certificate
✅ Global CDN
✅ Preview URLs for pull requests
✅ No configuration needed
✅ Custom domain support


