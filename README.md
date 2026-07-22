# Arjun Gupta Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Scroll, React Type Animation, React Icons, and EmailJS.

## Features

- Animated dark glassmorphism interface with an optional light theme
- Sticky responsive navigation, loading screen, scroll progress, smooth scrolling, and back-to-top control
- Typed role animation, animated counters/skill indicators, project filtering, and scroll reveal effects
- Project, education, certificates, contact, and social sections
- EmailJS contact form with a graceful message when credentials are not configured
- Semantic HTML, keyboard-friendly controls, reduced-motion support, and SEO metadata

## Run locally

```bash
npm install
npm run dev
```

Create a `.env.local` file to enable the contact form:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Your EmailJS template should use the fields `from_name`, `reply_to`, `subject`, and `message`.

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Keep the build command as `npm run build` and output directory as `dist`.
4. Add the three `VITE_EMAILJS_*` environment variables under **Settings → Environment Variables**.
5. Deploy. Future pushes to the production branch will deploy automatically.

## Customisation

Update content, technology lists, social links, and project destinations in `src/data/portfolioData.js`. Replace `src/assets/hero.png` and `src/assets/resume.pdf` with final portfolio assets when available.

An ATS-friendly resume source is available in `src/assets/resume.md`. Review it, export it as a one-page PDF, and replace `src/assets/resume.pdf` before deploying.
