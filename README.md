# Firevy.co - Enterprise IT & Software Solutions Platform

A complete, production-grade MERN-stack company web platform for **Firevy.co**. Built with React 18, Vite, Tailwind CSS, Framer Motion, Express.js, and MongoDB.

## Architecture

- **`frontend/`**: React SPA (Vite) + Tailwind CSS + Framer Motion + React Router v6 + Axios
- **`backend/`**: Node.js + Express REST API + Mongoose ODM + JWT + Nodemailer

## Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB running locally (`mongodb://127.0.0.1:27017`) or MongoDB Atlas URI

### 1. Backend Setup & Seeding
```bash
cd backend
npm install
npm run seed     # Seeds demo services, portfolio, industries, technologies, jobs, testimonials
npm run dev      # Runs API server on http://localhost:5000
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev      # Runs dev server on http://localhost:5173
```

## Features
- **Dynamic MongoDB Synchronization**: All services, portfolio case studies, technologies, industries, careers, and testimonials are fetched dynamically from MongoDB.
- **Enterprise Design**: Custom dark-slate theme, smooth micro-interactions, custom glassmorphism mega-menus, and custom `firevy.logo.png` logo branding.
- **Dynamic Routing**: Full `/services/:slug` and `/portfolio/:slug` detail pages.
- **Interactive Application Forms**: Working contact & career application submission pipelines with email notifications.
- **SEO & Performance Ready**: `react-helmet-async`, structured schema tags, lazy loading, and semantic HTML5 layout.
