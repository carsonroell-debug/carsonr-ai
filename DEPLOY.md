# Deploying Portfolio to Vercel

This portfolio is in a separate `portfolio/` folder to keep it independent from the Big Flight Deals project.

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `carsonroell-debug/BFD-scout`
4. **IMPORTANT**: In the project settings, set **"Root Directory"** to `portfolio`
5. Click "Deploy"

This will deploy only the portfolio folder as a separate project from Big Flight Deals.

### Option 2: Vercel CLI

```bash
cd portfolio
vercel
```

Or from the root directory:
```bash
vercel --cwd portfolio
```

## Why a Separate Folder?

- Keeps portfolio separate from Big Flight Deals project
- Allows independent deployments
- Can have different Vercel projects for each
- Cleaner organization

## After Deployment

Update the Open Graph URLs in `index.html` with your actual Vercel domain.
