# Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

- [x] All HTML, CSS, and JS files are in the root directory
- [x] All asset paths updated to absolute paths (starting with `/`)
- [x] `vercel.json` configuration file created
- [x] Resume PDF file included
- [x] Open Graph URLs updated (will need to update after deployment with actual domain)

## 📁 Files to Deploy

These files will be deployed to Vercel:
- `index.html`
- `styles.css`
- `script.js`
- `Carson_Roell_Resume.pdf`
- `vercel.json`
- `assets/` folder (if you add images)

## 🚀 Deployment Steps

### Method 1: Vercel CLI (Fastest)

```bash
# Install Vercel CLI (if needed)
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag the project folder
3. Deploy!

## 🔧 Post-Deployment

After deployment, update these in `index.html`:

1. **Update Open Graph URLs** (lines 11, 18):
   - Replace `https://carsonroell.vercel.app/` with your actual Vercel domain
   - Or use your custom domain if you set one up

2. **Add Missing Assets** (optional):
   - Add `favicon.svg` to root directory
   - Add `og_image.png` to root directory (for social media previews)

## ✨ Your Site Will Be Live At:

After deployment, Vercel will provide you with a URL like:
- `https://your-project-name.vercel.app`
- Or your custom domain if configured

## 📝 Notes

- All paths use absolute paths (`/`) which work on Vercel
- The site is fully static - no build process needed
- Resume PDF will be accessible at `/Carson_Roell_Resume.pdf`
- LinkedIn and email links are already configured

