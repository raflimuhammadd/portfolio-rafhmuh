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
Full-stack streaming platform yang dibangun selama Harisenin Fullstack Bootcamp 2026. Platform ini mendukung browsing konten, video player custom, sistem langganan dengan 3 tier (Individual/Berdua/Keluarga), payment gateway Midtrans, email verification, dan manajemen user profile.

## The Challenge
- Membangun platform streaming video yang fungsional layaknya Netflix dari nol dalam konteks bootcamp.
- Kontrol autentikasi yang aman, video player yang responsif dengan kontrol lengkap, sistem pembayaran berlangganan real-time via Midtrans.
- Manajemen konten film & series dengan episode, serta arsitektur kode yang bersih dan scalable dengan feature-first modular pattern.

## Key Features
- Auth System: Register/login dengan email verification via UUID token + Nodemailer, JWT + bcrypt hashing.
- Content Catalog: Movies & TV series dengan 14 genre, detail page dengan rekomendasi konten.
- Custom Video Player: Play/pause, volume, fullscreen, subtitle, playback speed, episode list menu, next episode overlay, premium gate modal.
- Subscription System: 3 tier (Individual Rp49,990 720p, Berdua Rp79,990 1080p, Keluarga Rp159,990 4K).
- Payment Integration: Midtrans Snap (bank transfer, save-card) dengan webhook notification handler.
- Search & Discovery: Filter-based search dengan debounced input, category pages (Trending, Top Rating, New Release).
- My List & History: Favorites tersimpan di localStorage (Zustand), watch history tersinkronisasi ke database (Redux Toolkit).
- Profile Management: Edit profil + avatar upload via multer

## The Solution
- Mengimplementasikan feature-first modular architecture dengan pemisahan state management Zustand untuk state ringan dan Redux Toolkit untuk state yang perlu sinkronisasi server (users, watch history). 
- Backend menggunakan layered architecture (Routes → Controller → Service → Database) dengan custom error class hierarchy dan centralized API response. Database MySQL dengan 11 tabel yang saling terhubung via foreign keys, didukung oleh connection pooling untuk performa optimal.

## Outcomes & Impact
- 12,158 lines of code (9,338 frontend + 2,820 backend)
- 68 React components dengan feature-based modular organization
- 31 Backend modules dengan clean layered architecture
- 7 API route groups dengan auth middleware yang terproteksi
- 11 database tables dengan relasi foreign key yang terstruktur
- 3 Pilihan payment method integrasi payment gateway Midtrans (Snap + bank transfer + save-card)

## Lessons Learned
- Feature-first architecture memudahkan navigasi kode dalam project skala menengah dibandingkan folder-based organization
- Layered backend (Routes → Controller → Service → DB) memisahkan concerns dengan baik dan memudahkan testing
- MySQL 8.4 dengan connection pooling memberikan performa konsisten untuk queries multi-table join (contents + episodes + genres + recommendations)
- Midtrans integration memerlukan pemahaman mendalam tentang webhook patterns dan payment verification flow