# 🌐 Michael McMurray — Portfolio Website Handoff
> **Purpose:** Context document for Cursor AI to pick up the development of the personal portfolio website.

---

## 📁 Project Location
`C:\Users\detro\Documents\Job Search\portfolio\`

## 🛠️ Tech Stack & Architecture
- **HTML5:** Semantic structure, accessible layout. (`index.html`)
- **Vanilla CSS3:** Custom design system using CSS variables, no heavy frameworks. (`styles.css`)
- **Vanilla JavaScript:** Lightweight scroll-reveal animations. (`script.js`)

## 🎨 Design System (Defined in `styles.css`)
- **Theme:** Premium Dark Mode (`#0a0a0a` background, `#141414` cards).
- **Typography:** Google Fonts 'Inter' (Weights: 300, 400, 600, 800) for a modern, clean look.
- **Accent Colors:** 
  - Primary: Indigo (`#6366f1`)
  - Secondary: Pink (`#ec4899`)
- **Effects:** 
  - Glassmorphism on the navbar (`backdrop-filter: blur(10px)`).
  - Gradient text and buttons.
  - Subtle background blurred gradient spheres for depth.

## 📄 Page Structure (`index.html`)
1. **Navbar:** Fixed, glassmorphic top navigation linking to sections.
2. **Hero Section:** Intro title, subtitle highlighting Operations & Media expertise, and CTA buttons.
3. **Experience (Timeline):** A vertical timeline layout detailing:
   - Head of Customer Success at Edge
   - Freelance Media Production
   - Caseworker at CSDD
4. **Core Expertise (Grid):** 3-column card grid highlighting Technical Operations, Media Production, and Web3.
5. **Contact:** Email, LinkedIn, and placeholder for resume downloads.

## 🚀 Actionable Next Steps (To Do in Cursor)

### 1. Add Resume Download Links
In the `#contact` section of `index.html`, there is room to add buttons for your tailored resumes.
- **Task:** Link the generated HTML/PDF resumes (e.g., `Michael_McMurray_Resume.pdf` and `Michael_McMurray_Media_Resume.pdf`) to download buttons in the contact section.

### 2. Mobile Responsiveness Improvements
- **Task:** The navbar links are currently hidden on mobile screens (`max-width: 768px`). A mobile hamburger menu and drawer need to be implemented using JavaScript for better mobile navigation.

### 3. Add a Portfolio / Work Samples Section (Optional)
- **Task:** Since you have strong video production and media editing experience, creating a dedicated "Projects" or "Media Reel" section to embed YouTube/Vimeo links of your work would highly elevate the site.

### 4. Hosting & Deployment
- **Task:** Once the final tweaks are done, this needs to be deployed so you can link it on your job applications. You can use free hosting like **GitHub Pages**, **Vercel**, or **Netlify** and point your custom domain (`michaelallanmcmurray.com`) to it.

---
*Cursor AI: Read `index.html`, `styles.css`, and `script.js` to understand the current implementation before making changes.*
