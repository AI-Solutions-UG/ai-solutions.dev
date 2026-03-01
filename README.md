# AI Solutions

Official website for AI Solutions.

## 🚀 Deployment

This site is deployed to GitHub Pages using the `gh-pages` npm package.

### Initial Setup

1. Make sure you have a GitHub repository for this project
2. Push your code to the repository
3. Run the deploy command (see below)

### Deploy to GitHub Pages

Simply run:

```bash
npm run deploy
```

This will:
1. Build the site (`npm run build`)
2. Deploy the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve your site from that branch

### GitHub Pages Settings

After your first deployment:
1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**: Select **Deploy from a branch**
4. Under **Branch**: Select `gh-pages` and `/ (root)`
5. Your site will be live at `https://ai-solutions.dev`

### DNS Configuration

Make sure your DNS records for `ai-solutions.dev` are configured:
- Add an A record pointing to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Or add a CNAME record pointing to `<your-github-username>.github.io`

The CNAME file in the `public/` directory ensures your custom domain is used.

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
| `npm run deploy`  | Build and deploy to GitHub Pages             |

## 🌐 Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- Custom CSS with animations and gradients
- Deployed via GitHub Pages
