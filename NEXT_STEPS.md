# Next Steps: Push to GitHub & Deploy to Vercel

Your portfolio is **committed locally** and ready to go live. Here's what to do next:

## Step 1: Create a GitHub Repository

1. Go to **https://github.com/new**
2. Create a new repository (e.g., `portfolio-website`)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL (SSH or HTTPS)

## Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd /home/sakthi/Desktop/portfolio-website

# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git

# Rename branch to 'main' (optional but recommended for Vercel)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username and update the repository name if different.

## Step 3: Deploy to Vercel

### Option A: Via GitHub Integration (Recommended)

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Connect your GitHub account
4. Select your `portfolio-website` repository
5. Accept default settings and click **"Deploy"**
6. Vercel will auto-build and deploy → get a live URL in ~1-2 minutes

### Option B: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to link and deploy.

## What You Get

✅ Live URL: `https://your-project.vercel.app`
✅ Auto-deploys on every push to `main` branch
✅ HTTPS, CDN, and edge functions included free
✅ Custom domain support (add in Vercel dashboard)

## After Deployment

1. Test your site at the Vercel URL
2. (Optional) Add a custom domain in **Vercel → Project Settings → Domains**
3. (Optional) Add environment variables for API keys in **Vercel → Settings → Environment Variables**

---

**Questions?** See `DEPLOY.md` for more details.

Ready? Start with Step 1 above! 🚀
