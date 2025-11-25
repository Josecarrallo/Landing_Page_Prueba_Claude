# Caroline Stanbury - Exclusive 1:1 Calls Landing Page

A premium landing page for Caroline Stanbury's exclusive 1:1 call booking service. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Cinematic Hero Section**: Full-screen hero with compelling headline and call-to-action
- **Responsive Navigation**: Sticky header with smooth scrolling and mobile hamburger menu
- **About Section**: Feature cards showcasing Caroline's expertise and background
- **Luxury Design**: Clean, professional aesthetic with serif headings and neutral/gold color palette
- **Accessible**: Semantic HTML with proper ARIA labels and keyboard navigation
- **Mobile-First**: Responsive design that works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)
- **Icons**: Heroicons (SVG)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation and Development

1. **Clone/Navigate to the project**
   ```bash
   cd carol-stanbury-calls
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind
└── components/
    ├── Navbar.tsx          # Responsive sticky navigation
    ├── Hero.tsx            # Cinematic hero section
    ├── FeatureCard.tsx     # Reusable feature card component
    └── Footer.tsx          # Footer with contact and social links
```

## Components

### Navbar
- Fixed sticky header with backdrop blur
- Responsive hamburger menu for mobile
- Smooth scroll navigation to sections
- Logo and navigation links

### Hero
- Full-screen cinematic design
- Compelling headline and subheadline
- Call-to-action buttons
- Trust indicators and scroll animation

### FeatureCard
- Reusable component for feature highlights
- Icon support with amber accent color
- Consistent spacing and typography
- Hover effects and shadows

### Footer
- Contact information
- Social media links
- Quick navigation links
- Legal links and copyright

## Customization

### Colors
The design uses a luxury color palette defined in Tailwind:
- Primary: Amber-600 (#D97706)
- Neutral: Gray-900 (#111827), Gray-600 (#4B5563)
- Background: White and Gray-50 (#F9FAFB)

### Typography
- **Headings**: Playfair Display (serif) for luxury feel
- **Body**: Inter (sans-serif) for readability
- **Font weights**: 400, 500, 600, 700

### Components
All components are designed to be easily customizable:
- Props-based components for flexibility
- Consistent spacing using Tailwind's design system
- Semantic HTML structure for accessibility

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Future Enhancements

This is a frontend-only version. Future backend integration could include:
- Stripe payment processing
- Supabase database integration
- Google Sheets API for booking management
- WhatsApp Cloud API for confirmations
- Email automation
- User authentication and booking management

## License

This project is created for Caroline Stanbury's exclusive 1:1 call booking service.

---

Built with ❤️ using Next.js and Tailwind CSS