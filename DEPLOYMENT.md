# GitHub Pages Deployment Guide

This project is configured to deploy to GitHub Pages. Follow the steps below to get your site live.

## 🚀 Automatic Deployment (Recommended)

### GitHub Repository Settings

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **That's it!** Every time you push to the `main` branch, your site will automatically build and deploy.

### URL Configuration

Your site will be available at:
- `https://t-montes.github.io/imagine-labs/`

If you're using a custom domain or the repository is at the root (t-montes.github.io), update the `base` configuration in `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/' : '/',
```

## 📦 Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

This will build your project and push it to the `gh-pages` branch.

### Manual Setup Requirements

If using manual deployment for the first time:
1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select the `gh-pages` branch and `/ (root)` folder
4. Save

## 🔧 Configuration Files

### Files Modified/Created:
- `vite.config.ts` - Added base URL configuration
- `src/App.tsx` - Added basename to BrowserRouter
- `package.json` - Added deployment scripts
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Prevents Jekyll processing on GitHub Pages

## 🐛 Troubleshooting

### 404 Errors
- Ensure the `base` path in `vite.config.ts` matches your repository structure
- Make sure GitHub Pages is enabled in repository settings
- Check that the GitHub Actions workflow completed successfully

### Build Failures
- Check the Actions tab in your GitHub repository for error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node version compatibility (using Node 20 in workflow)

### Asset Loading Issues
- Confirm `.nojekyll` file exists in the `public` folder
- Check browser console for 404 errors on assets
- Verify the base URL is correct for your deployment

## 📝 Notes

- The site uses `GITHUB_PAGES=true` environment variable to set the correct base path during build
- Local development (`npm run dev`) uses base path `/` for convenience
- Production builds for GitHub Pages use `/imagine-labs/` as the base path

