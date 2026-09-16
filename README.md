This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Bayon and Inter are bundled in `src/fonts` and loaded through `src/lib/fonts.ts` using `next/font/local`. Builds do not download fonts from Google.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

Cloudflare Pages automatically builds and deploys pushes to `main` through its Git integration.
The build command is `npm run build`; the static output directory is `out`.
`next.config.js` already enables static export, so no separate `next export` command is needed.
The `functions` directory supplies the Cloudflare Pages booking backend, configured in `wrangler.toml`.

GitHub Actions validates the build and booking tests only. It does not deploy to GitHub Pages
or modify the Next.js configuration.
