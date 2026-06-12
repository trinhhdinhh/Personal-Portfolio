Personal Portfolio
A responsive, single-page portfolio website built with Next.js and React. Features dark mode, an interactive timeline, project showcase, and a working contact form — deployed automatically to GitHub Pages via GitHub Actions.

Live site: trinhhdinhh.github.io/Personal-Portfolio

Tech Stack
Category	Technology
Framework	Next.js 16 (App Router, static export)
UI Library	React 19
Styling	TailwindCSS 4
Icons	React Icons 5
Forms	Web3Forms API
Fonts	Google Fonts (Outfit, Ovo) via next/font
Deployment	GitHub Pages via GitHub Actions
Features
Dark mode — toggles via localStorage for persistence across sessions
Responsive layout — mobile-first design with a slide-out navigation menu
Scroll-aware navbar — backdrop blur and shadow on scroll
Experience timeline — alternating left/right layout for work and education history
Project cards — expandable descriptions with tech stack badges
Contact form — serverless email delivery via Web3Forms (no backend required)
Automated deploys — every push to main triggers a GitHub Actions build and deploy
Getting Started
Prerequisites
Node.js 18+
npm
Installation
# Clone the repository
git clone https://github.com/trinhhdinhh/Personal-Portfolio.git
cd Personal-Portfolio/portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
Open http://localhost:3000 in your browser.

Project Structure
portfolio/
├── app/
│   ├── layout.js         # Root layout, metadata, font setup
│   ├── page.js           # Home page (renders all sections)
│   └── globals.css       # Global styles and Tailwind config
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Experiences.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Project/
│       ├── Projects.jsx
│       └── ProjectCard.jsx
├── assets/
│   └── assets.js         # Static data (info cards, tools, icons)
├── public/               # Static files (resume PDF, images)
├── next.config.mjs       # Next.js config (static export, asset prefix)
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions CI/CD pipeline
Available Scripts
Command	Description
npm run dev	Start local development server at localhost:3000
npm run build	Build static output to /out
npm run lint	Run ESLint
Deployment
This project uses static site generation (output: 'export') and deploys to GitHub Pages automatically on every push to main.

To deploy manually:

npm run build
# The /out directory contains the static site
The GitHub Actions workflow handles basePath and assetPrefix configuration automatically for the /Personal-Portfolio subdirectory on GitHub Pages.

Customization
To use this as a template for your own portfolio:

Update personal info, experience, and project data in components/ and assets/assets.js
Replace images in public/ and assets/
Swap the Web3Forms API key in components/Contact.jsx with your own from web3forms.com
Update basePath and assetPrefix in next.config.mjs to match your GitHub repository name
Enable GitHub Pages in your repository settings (source: GitHub Actions)
License
This project is open source and available under the MIT License.
