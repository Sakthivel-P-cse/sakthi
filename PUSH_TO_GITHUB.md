# Push Your Portfolio to GitHub

The code is ready locally but the GitHub repository needs to be created manually. Follow these steps:

## Step 1: Create Repository on GitHub

1. Go to **https://github.com/new**
2. Enter repository name: `portfolio-website`
3. Set to **Public** (so Vercel can access it)
4. **Do NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

## Step 2: Copy the Repository URL

After creating the repo, GitHub shows you:
```
https://github.com/sakthivel-51/portfolio-website.git
```

Keep this URL handy.

## Step 3: Push Your Code

The remote is already configured. Just run:

```bash
cd /home/sakthi/Desktop/portfolio-website
git push -u origin main
```

GitHub may prompt you to authenticate:
- **Option A (Recommended):** Authenticate via browser (faster, more secure)
- **Option B:** Use GitHub Personal Access Token (if browser auth fails)

### If Browser Auth Doesn't Work (GitHub Personal Access Token):

1. Go to **https://github.com/settings/tokens**
2. Click **Generate new token (classic)**
3. Give it a name (e.g., `portfolio-push`)
4. Check **repo** scope
5. Click **Generate token**
6. Copy the token (you won't see it again)
7. When git asks for password, paste the token instead

Then push:
```bash
git push -u origin main
```

## Verify

After push completes, check:
- Go to **https://github.com/sakthivel-51/portfolio-website**
- You should see all your files (app/, components/, package.json, etc.)

## Next: Deploy to Vercel

Once your repo is on GitHub:

1. Go to **https://vercel.com/new**
2. Click **Import Git Repository**
3. Connect GitHub (if not already connected)
4. Select `portfolio-website`
5. Accept defaults and click **Deploy**

Your site will be live in 1-2 minutes! 🚀

---

**TL;DR:**
1. Create repo at https://github.com/new
2. Run `git push -u origin main` 
3. Authenticate when prompted
4. Deploy to Vercel at https://vercel.com/new
