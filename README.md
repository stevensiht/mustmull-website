## MustMull — Mobile Cocktail Bar

Playful and professional single-page site built with Next.js 15 and Tailwind CSS v4. The layout is mobile-first, showcases large-format imagery, and highlights each step of your service offering—from hero CTA through contact.

### Tech Stack
- Next.js App Router with TypeScript
- Tailwind CSS v4 (design tokens defined in `src/app/globals.css`)
- Google Fonts (`Sora` + `Inter`)
- Remote imagery from Unsplash (update when you have brand photography)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and adjust copy or imagery in real-time.

### Environment Variables
- `RESEND_API_KEY` — private API key from the Resend dashboard.
- `RESEND_FROM_EMAIL` — verified sender domain/email in Resend (e.g. `MustMull <hello@mustmull.ee>`).
- `RESEND_TO_EMAIL` — comma-separated list of inboxes that should receive form submissions.

## Customizing Content
- Hero, story, services, signature cocktail, gallery, testimonials, and contact sections live in `src/components/sections`.
- Update palette or typography tokens inside `src/app/globals.css`.
- Swap gallery/hero images by replacing the Unsplash URLs (or add files to `public/` and update the `Image` components).
- Contact details and footer links live in `src/components/sections/contact.tsx` and `src/components/footer.tsx`.

## Deploying to Vercel
1. Push this repo to GitHub (or your preferred git host).
2. In Vercel, “Add New Project” → import the repository.
3. Framework preset: **Next.js**. No extra build settings required (uses `npm run build`).
4. After the first deploy, configure a custom domain, environment variables (if needed), and analytics within the Vercel dashboard.

## Next Steps Ideas
- Integrate a booking form (e.g. Vercel Forms, Typeform embed, Airtable automation).
- Replace placeholder testimonials with real quotes and client logos.
- Capture analytics using Vercel Web Analytics or a privacy-friendly alternative.
