# VexioHQ - Enterprise AI Consulting Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)

## 🚀 Overview

VexioHQ is a premium AI and data consulting firm specializing in enterprise AI transformation. Our platform rivals top-tier consulting firms like McKinsey, BCG, and Bain in the technology consulting space. Built with Next.js 14, TypeScript, and Tailwind CSS for optimal performance and scalability.

## 🌟 Current Status

**Environment**: Production-Ready  
**Total Pages**: 65+ pages  
**Components**: 41 custom components  
**Last Updated**: September 16, 2025  

### Key Metrics
- **Lighthouse Score**: 90+ across all metrics
- **Page Load**: < 2s average
- **SEO Score**: 100/100
- **Mobile Responsive**: Fully optimized

## ✨ Features

### Core Capabilities
- **🎯 AI Strategy Consulting** - Enterprise AI adoption planning
- **🤖 Agentic AI Systems** - Autonomous business operations
- **📊 Data Analytics** - Strategic insights from data
- **🚀 ML/AI Implementation** - End-to-end deployment
- **💼 Enterprise Transformation** - Complete digital evolution

### Website Features
- **📄 65+ Pages** - Comprehensive AI/ML content
- **🧮 Interactive Calculators** - AI ROI & Business Transformation tools
- **📝 Blog System** - Thought leadership articles
- **📚 Resource Library** - Whitepapers, guides, documentation
- **📧 Newsletter System** - Automated email subscriptions
- **🔍 SEO Optimized** - Schema markup, meta tags, sitemaps
- **📱 Responsive Design** - Mobile-first approach
- **🔐 Authentication Ready** - Clerk integration configured

## 🛠️ Tech Stack

### Frontend
```
├── Next.js 14.2.32 (App Router)
├── TypeScript 5.0+
├── Tailwind CSS 3.4
├── React 18
└── 41+ Custom Components
```

### Backend & Infrastructure
```
├── Next.js API Routes
├── Clerk Authentication
├── Docker & Docker Compose
├── GitHub Actions CI/CD
└── Analytics (GA, Clarity)
```

## 📁 Project Structure

```
comapny-website/
├── src/
│   ├── app/              # 65+ pages using App Router
│   │   ├── (main routes) # Public pages
│   │   ├── api/          # API endpoints
│   │   ├── blog/         # Blog system
│   │   ├── products/     # Product pages
│   │   ├── solutions/    # Solution pages
│   │   └── portal/       # Protected areas
│   ├── components/       # 41 React components
│   └── lib/             # Utilities & helpers
├── public/
│   ├── images/          # Optimized images
│   ├── calculators/     # Interactive tools
│   └── downloads/       # Resources
├── docs/                # Documentation
├── deployment/          # Docker configs
├── scripts/            # Build scripts
└── resources/          # Additional assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Quick Start

```bash
# Clone repository
git clone https://github.com/VexioHQ/comapny-website.git
cd comapny-website

# Install dependencies
npm install

# Configure environment
cp .env.local.example .env.local
# Edit .env.local with your values

# Start development
npm run dev
```

Open [http://localhost:3002](http://localhost:3002)

### Development Commands

```bash
npm run dev          # Development server (port 3002)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checks
npm run typecheck    # TypeScript validation
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxx

# API
NEXT_PUBLIC_API_URL=http://localhost:3002
```

## 📄 Pages & Routes

### Main Sections
| Section | Path | Description |
|---------|------|-------------|
| Home | `/` | Landing with hero, services |
| About | `/about` | Company & team info |
| Services | `/services` | Service offerings |
| Products | `/products` | AI products catalog |
| Solutions | `/solutions` | Industry solutions |
| Resources | `/resources` | Guides & tools |
| Blog | `/blog` | Articles & insights |
| Contact | `/contact` | Contact forms |

### Special Pages
- `/ai-roi-calculator` - Interactive ROI calculator
- `/agentic-ai-platform` - Platform overview
- `/case-studies` - Success stories
- `/enterprise-ai-transformation` - Enterprise guide

## 🧩 Component Library

### Key Components
- **StableMegaMenu** - Advanced navigation system
- **Footer** - Comprehensive footer
- **NewsletterSignup** - Email subscription
- **SchemaMarkup** - SEO schemas
- **OptimizedImage** - Image optimization
- **ReadingTime** - Reading time calculator
- **RelatedContent** - Content recommendations
- **SocialSharing** - Share buttons

## 🚀 Deployment

### Docker Deployment

```bash
# Build image
docker build -t vexiohq-website .

# Run container
docker-compose up -d
```

### Production Build

```bash
# Build application
npm run build

# Start server
npm run start
```

### GitHub Actions
Automatic deployment on `main` branch push

## 📊 Performance

| Metric | Score | Target |
|--------|-------|--------|
| Performance | 92 | 90+ |
| Accessibility | 95 | 90+ |
| Best Practices | 100 | 95+ |
| SEO | 100 | 100 |
| Page Load | 1.8s | <2s |

## 🔒 Security

- ✅ HTTPS enforced
- ✅ Security headers
- ✅ Input validation
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Rate limiting

## 📈 Analytics & Monitoring

- Google Analytics 4
- Microsoft Clarity
- Custom event tracking
- Performance monitoring
- Error tracking

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## 📝 Documentation

- [CLAUDE.md](./CLAUDE.md) - AI assistant guidelines
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [Deployment Guide](./deployment/DEPLOYMENT_GUIDE.md)
- [Component Docs](./docs/COMPONENTS_DOCUMENTATION.md)

## 🏢 About VexioHQ

**VexioHQ** is a leading AI consulting firm helping Fortune 500 companies navigate digital transformation through:
- Strategic AI implementation
- Data-driven decision making
- Autonomous AI systems
- Enterprise modernization

## 📞 Contact

- **Website**: [vexiohq.com](https://vexiohq.com)
- **Email**: hello@vexiohq.com
- **Phone**: +1 (415) 255-5501
- **Location**: San Francisco, CA

## 📄 License

© 2025 VexioHQ. All rights reserved. Proprietary and confidential.

---

Built with ❤️ by the VexioHQ Team