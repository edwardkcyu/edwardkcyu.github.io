# GitHub Pages Deployment Guide

This guide explains how to deploy your React portfolio to GitHub Pages using GitHub Actions.

## Prerequisites

1. Your repository must be public or you need GitHub Pro for private repositories
2. GitHub Pages must be enabled in your repository settings

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Configuration

The deployment pipeline is already configured with:
- **Workflow file**: `.github/workflows/deploy.yml`
- **Build configuration**: `vite.config.ts` with proper base path
- **Deployment scripts**: Added to `package.json`

### 3. Automatic Deployment

The site will automatically deploy when you:
- Push to the `main` or `master` branch
- Create a pull request to `main` or `master`

### 4. Manual Deployment (Alternative)

If you prefer manual deployment, you can use:

```bash
npm run deploy
```

This requires installing `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

## Configuration Details

### Vite Configuration
- **Base path**: Set to `/edwardkcyu.github.io/` for GitHub Pages
- **Build output**: `dist` directory
- **Assets**: Organized in `assets` subdirectory

### GitHub Actions Workflow
- **Node.js version**: 20 (latest LTS)
- **Build process**: TypeScript compilation + Vite build
- **Deployment**: Uses GitHub Pages action
- **Permissions**: Configured for Pages deployment

## Troubleshooting

### Common Issues

1. **Build fails**: Check that all dependencies are in `package.json`
2. **404 errors**: Ensure base path in `vite.config.ts` matches your repository name
3. **Assets not loading**: Verify the `base` configuration in Vite config

### Checking Deployment Status

1. Go to **Actions** tab in your GitHub repository
2. Look for the "Deploy to GitHub Pages" workflow
3. Check the logs if deployment fails

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

## Local Testing

Test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the built files locally to verify everything works correctly.
