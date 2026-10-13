# AI Solutions

Official website for AI Solutions – [ai-solutions.dev](https://ai-solutions.dev).

## 🚀 Deployment

Deployment runs automatically via GitHub Actions and GitHub Pages (source: `gh-pages` branch, `/ (root)`).

- **Production:** every push to `main` builds the site and publishes `dist/` to the `gh-pages` branch (`.github/workflows/deploy.yml`).
- **PR previews:** every pull request is built and published to `https://ai-solutions.dev/pr-preview/pr-<number>/` (`.github/workflows/preview.yml`). The workflow posts the link as a PR comment and removes the preview when the PR is closed. Previews are marked `noindex`.

The base path is controlled by the `BASE_PATH` env var (defaults to `/`). Use `href()` from `src/components/home/site.ts` for internal links so they also work in previews.

### DNS Configuration

DNS records for `ai-solutions.dev` point to GitHub Pages:
- A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

The CNAME file in the `public/` directory ensures the custom domain is used.

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🌐 Tech Stack

- [Astro](https://astro.build) – static site generator
- Landing page: Astro components in `src/components/home/`, styles in `src/styles/home.css`
- Self-hosted fonts via Fontsource (no requests to Google Fonts on the landing page)
- Deployed via GitHub Pages
