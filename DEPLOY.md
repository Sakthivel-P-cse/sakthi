# Portfolio Website – Deployment to Vercel

This is a Next.js 15 portfolio site with theme switching, dark mode, and API routes for contact/chat.

## Prerequisites

- Node.js 18+ (or later)
- npm or pnpm
- A Vercel account (free: https://vercel.com)
- Git (for version control)

## Local Development

**1. Install dependencies:**
```bash
npm install
```

**2. Run the dev server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app auto-reloads on file changes.

**3. Build locally (optional):**
```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

**1. Install Vercel CLI:**
```bash
npm install -g vercel
```

**2. Deploy from the project root:**
```bash
vercel
```

Follow the prompts:
- Link to an existing Vercel project (or create a new one).
- Accept default build settings.
- Confirm the deployment.

Your site will be live at `https://<project-name>.vercel.app`.

### Option 2: Deploy via GitHub (Continuous Deployment)

**1. Push your code to GitHub:**
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

**2. Link your GitHub repo to Vercel:**
- Go to [https://vercel.com/new](https://vercel.com/new)
- Select "Import Git Repository"
- Connect your GitHub account and select this repository
- Accept default build settings and deploy

Vercel will auto-deploy on every push to `main` branch.

## Environment Variables (Optional)

If you use API keys for chat or contact features, add environment variables in Vercel dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables like `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, etc.
3. Re-deploy for changes to take effect

## Project Structure

- `app/` – Next.js App Router pages and API routes
- `components/` – React components (UI, sections)
- `lib/` – Utility functions
- `styles/` – Global and scoped styles
- `tailwind.config.ts` – Tailwind CSS configuration
- `next.config.mjs` – Next.js configuration

## Features

- ✨ Dynamic theme switching (Blue, Green, Purple, Orange, Red)
- 🌙 Dark mode toggle
- 📱 Responsive design with Tailwind CSS
- 🎨 Smooth animations and transitions
- 💬 Contact form (API route `/api/contact`)
- 🤖 AI chat integration (API route `/api/chat`)
- 🎯 SEO-friendly with metadata

## Troubleshooting

**Build fails with Tailwind errors:**
- Ensure `@tailwindcss/postcss` is installed: `npm install -D @tailwindcss/postcss`
- Clear cache: `rm -rf .next node_modules && npm install && npm run build`

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Vercel deployment fails:**
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct `build` script
- Verify environment variables are set if needed

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

**Ready to deploy?** Run `vercel` from the project root!
