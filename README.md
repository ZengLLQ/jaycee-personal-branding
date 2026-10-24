# JAYCEE — Personal Branding & Portfolio

> Modern, high-performance developer portfolio and personal branding platform built with **Next.js 14**, **React**, **Tailwind CSS**, and **Framer Motion**.

---

## ✦ Overview

This repository contains the source code for **JAYCEE's personal portfolio website**. It showcases software engineering projects, technical expertise, work experience, education, and interactive GitHub repository integration via Octokit REST API.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API Integration:** [@octokit/rest](https://github.com/octokit/rest.js) (GitHub REST API)

## ✨ Key Features

- **Dynamic GitHub Repositories:** Server-side route handler (`/api/repos`) that queries GitHub API for live repository metrics, languages, and star counts.
- **Scroll & Reveal Animations:** Smooth transitions and viewport entrance effects using Framer Motion.
- **Editorial Typography & Dark Aesthetics:** Clean, developer-centric UI with interactive marquee banners.
- **Component Architecture:** Modular structure with distinct components for Hero, About, Skills, Tech Stack, Experience, Education, Projects, and Footer.

## 📁 Project Structure

```
├── app/
│   ├── api/repos/route.js   # GitHub API integration route
│   ├── globals.css          # Tailwind CSS global styles
│   ├── layout.js            # Root layout & metadata
│   └── page.js              # Main single-page portfolio layout
├── components/
│   ├── About.jsx            # Bio and summary
│   ├── Education.jsx        # Academic background
│   ├── Experience.jsx       # Career and project milestones
│   ├── Hero.jsx             # Headline and call-to-action
│   ├── Marquee.jsx          # Infinite scrolling ticker
│   ├── Nav.jsx              # Navigation bar
│   ├── Projects.jsx         # Featured repositories and projects
│   ├── Reveal.jsx           # Framer motion wrapper component
│   ├── Skills.jsx           # Technical skills matrix
│   └── TechStack.jsx        # Technology icon showcase
├── lib/
│   └── github.js            # Octokit client and helper functions
├── public/                  # Static assets and images
└── tailwind.config.js       # Design system configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ZengLLQ/jaycee-personal-branding.git
   cd jaycee-personal-branding
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and add your GitHub Personal Access Token (optional for higher rate limits):
   ```env
   GITHUB_TOKEN=your_github_token_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
