# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for Stanbury Retreats - a React-based promotional page featuring embedded Wistia video, retreat registration CTA, and newsletter signup form.

## Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

**Stack**: React 18 + Vite + JavaScript (JSX)

**Structure**:
- `src/App.jsx` - Single-file React application containing all UI components
- `src/main.jsx` - React entry point
- `src/muelle.jpg` - Hero image asset
- `vite.config.js` - Vite configuration with React plugin, server on port 8080

**Deployment**: Configured for Vercel (`.vercel/` folder present)

## Code Patterns

- All styling uses inline React style objects (no CSS files)
- Wistia video embed loaded via dynamic script injection in useEffect
- Single-component architecture - entire page in App.jsx
- No routing - single page application

## Subdirectory Note

The `Carol-Landing-Retreats-claude-fullscreen-display-01Ac9zGwtS1Knbg3r2AaxZ1E/` folder contains a separate Next.js/TypeScript/Tailwind project variant. That project uses:
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS v4
- Different component architecture (Navbar, Hero, FeatureCard, Footer components)
