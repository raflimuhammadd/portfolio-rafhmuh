# Neo-Brutalism Portfolio

A bold, unapologetic portfolio website built with **Astro** and **Tailwind CSS**, showcasing the neo-brutalism design aesthetic.

## Tech Stack

- **Astro 7.2.2** - Static site generator
- **Bun** - Fast JavaScript runtime & package manager
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Type safety

## Features

- ✅ **Neo-brutalism Design System** - Hard borders, high contrast, mechanical interactions
- ✅ **Single-page Portfolio** - Hero, About, Skills, Blog, Contact sections
- ✅ **Fully Responsive** - Mobile-first design approach
- ✅ **Performance Optimized** - Static site generation, ~56KB bundle
- ✅ **Type-safe** - Full TypeScript support
- ✅ **SEO Ready** - Meta tags, Open Graph, semantic HTML

## Design Philosophy

This portfolio embraces **neo-brutalism** aesthetic principles:

- **Hard borders** (`border-4 border-black`) on all elements
- **Offset shadows** (`shadow-[8px_8px_0px_0px_#000]`) with zero blur
- **High-saturation colors** (Hot Red `#FF6B6B`, Vivid Yellow `#FFD93D`, Soft Violet `#C4B5FD`)
- **Mechanical interactions** - Buttons push down on click, cards lift on hover
- **Bold typography** - Space Grotesk at 700-900 weights only
- **Sticker layering** - Elements rotated and overlapped like physical stickers

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type check
bun run typecheck

# Lint
bun run lint
```

## Project Structure

```
portfolio-2/
├── public/              # Static assets
│   ├── images/         # Project images
│   └── favicon.svg     # Site favicon
├── src/
│   ├── components/
│   │   ├── ui/        # Reusable UI primitives (Button, Card, Badge)
│   │   ├── site/      # Site-wide components (Header, Footer)
│   │   └── sections/  # Page sections (Hero, About, Skills, etc.)
│   ├── data/          # Site configuration and content
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   └── styles/        # Global styles
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## Color Palette

- **Background**: `#FFFDF5` (Cream)
- **Foreground**: `#000000` (Pure Black)
- **Accent**: `#FF6B6B` (Hot Red)
- **Secondary**: `#FFD93D` (Vivid Yellow)
- **Muted**: `#C4B5FD` (Soft Violet)

## Customization

1. **Personal Info**: Edit `src/data/site.ts` and `src/data/socials.ts`
2. **Skills**: Update `src/data/skills.ts`
3. **Colors**: Modify `tailwind.config.mjs` theme colors
4. **Content**: Edit section components in `src/components/sections/`

## Deployment

This site is ready to deploy to:

- **Vercel** (recommended)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

```bash
# Build
bun run build

# Deploy dist/ folder
```

## License

MIT

## Author

**Rafli Muhammad**

- LinkedIn: [@raflimuhammadd](https://www.linkedin.com/in/raflimuhammadd)
- GitHub: [@raflimuhammadd](https://github.com/raflimuhammadd)
- Medium: [@raflimuhammadd](https://medium.com/@raflimuhammadd)

---

Built with ❤️ and brutalist precision.
