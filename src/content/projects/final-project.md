---
title: "Final Project: Streaming Platform"
slug: "streaming-platform"
category: "academic"
year: 2026
featured: true
description: Full-stack streaming platform with Netflix-style UI, custom video player, Midtrans payment gateway, and subscription tier system."
image: "/images/projects/capstone-hero.jpg"
images:
  - "/images/projects/streaming-plat/login-page.jpeg"
  - "/images/projects/streaming-plat/page-1.jpeg"
  - "/images/projects/streaming-plat/page-2.jpeg"
  - "/images/projects/streaming-plat/page-3.jpeg"
  - "/images/projects/streaming-plat/page-4.jpeg"
  - "/images/projects/streaming-plat/page-5.jpeg"
techStack: ["React 19", "Vite 8", "Tailwind CSS 4", "Zustand 5", "Redux Toolkit 2", "Node.js", "Express 5", "MySQL 8.4", "Midtrans", "Nodemailer", "Multer"]
links:
  github: "https://github.com/raflimuhammadd/smart-attendance"
  demo: "https://attendance.raflimuhammadd.dev"
---

# Capstone Project: Smart Attendance System

## Overview
A full-stack streaming platform built during the Harisenin Fullstack Bootcamp 2026. The platform supports content browsing, a custom video player, a three-tier subscription system (Individual/Couple/Family), the Midtrans payment gateway, email verification, and user profile management.

## The Challenge
- Build a fully functional video streaming platform similar to Netflix from scratch as part of a bootcamp.
- Secure authentication, a responsive video player with full controls, and a real-time subscription payment system via Midtrans.
- Manage movies and TV series by episode, and implement a clean, scalable code architecture using a feature-first modular approach.

## Key Features
- Authentication System: Sign up/log in with email verification via UUID token + Nodemailer, JWT + bcrypt hashing.
- Content Catalog: Movies and TV series across 14 genres, with detail pages featuring content recommendations.
- Custom Video Player: Play/pause, volume, full screen, subtitles, playback speed, episode list menu, next episode overlay, and premium gate modal.
- Subscription System: 3 tiers (Individual: Rp49,990 for 720p; Couple: Rp79,990 for 1080p; Family: Rp159,990 for 4K).
- Payment Integration: Midtrans Snap (bank transfer, save-card) with a webhook notification handler.
- Search & Discovery: Filter-based search with debounced input, category pages (Trending, Top Rated, New Releases).
- My List & History: Favorites stored in localStorage (Zustand), watch history synchronized to the database (Redux Toolkit).
- Profile Management: Edit profile + upload avatar via multer

## The Solution
- Implemented a feature-first modular architecture with separate state management: Zustand for lightweight state and Redux Toolkit for state requiring server synchronization (users, watch history).
- The backend uses a layered architecture (Routes → Controller → Service → Database) with a custom error class hierarchy and centralized API responses. The MySQL database consists of 11 tables interconnected via foreign keys, supported by connection pooling for optimal performance.

## Outcomes & Impact
- 12,158 lines of code (9,338 frontend + 2,820 backend)
- 68 React components with a feature-based modular organization
- 31 backend modules with a clean, layered architecture
- 7 API route groups with protected auth middleware
- 11 database tables with structured foreign key relationships
- 3 payment method options integrated with the Midtrans payment gateway (Snap + bank transfer + save-card)

## Lessons Learned
- Feature-first architecture makes it easier to navigate the code in a medium-sized project compared to folder-based organization
- A layered backend (Routes → Controller → Service → DB) effectively separates concerns and simplifies testing
- MySQL 8.4 with connection pooling delivers consistent performance for multi-table join queries (contents + episodes + genres + recommendations)
- Midtrans integration requires a deep understanding of webhook patterns and the payment verification flow