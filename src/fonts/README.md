# Bundled fonts

Bayon (regular, 400) and Inter (variable, 100–900) are bundled locally to avoid
Google Fonts downloads during builds. These Latin WOFF2 files are the same files
previously served by the site's successful `next/font/google` build.

Upstream projects and licences:
- Bayon: https://github.com/google/fonts/tree/main/ofl/bayon — `Bayon-OFL.txt`
- Inter: https://github.com/google/fonts/tree/main/ofl/inter — `Inter-OFL.txt`

`src/lib/fonts.ts` defines both fonts with `next/font/local`. Import its `bayon`
and `inter` exports instead of creating separate font loaders in each component.
