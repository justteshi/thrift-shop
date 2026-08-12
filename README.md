# Thrift Shop

A modern editorial storefront for a fictional second-hand fashion shop in Sofia, Bulgaria. This project modernizes an
older HTML/CSS site that previously used Ruby and Jekyll solely to publish to GitHub Pages.

## Technology

- Vite
- Vanilla JavaScript
- HTML5 & CSS
- GitHub Actions and GitHub Pages

## Local development

Node.js 20.19+ or 22.12+ is recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Development runs at `/`, while production builds use the GitHub Pages repository
path `/thrift-shop/`.

## Production build

```bash
npm run build
npm run preview
```

The build is written to `dist/`. Generated build files are ignored and should not be committed.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main`. It installs the locked npm dependencies with
`npm ci`, builds the Vite site, uploads `dist/` as a Pages artifact, and deploys it with the official GitHub Pages
Actions.
