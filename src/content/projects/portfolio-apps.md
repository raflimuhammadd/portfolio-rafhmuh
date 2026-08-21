---
title: "Portfolio Web"
slug: "portfolio-app"
category: "web"
year: 2025
featured: true
description: Portfolio website untuk agensi digital dengan showcase proyek, sistem booking order, dan admin dashboard untuk mengelola konten."
image: "/images/projects/cloud-hero.jpg"
images:
  - "/images/projects/portfolio-cms/page-1.png"
  - "/images/projects/portfolio-cms/page-2.png"
  - "/images/projects/portfolio-cms/page-3.png"
  - "/images/projects/portfolio-cms/page-4.png"
  - "/images/projects/portfolio-cms/page-5.png"
  - "/images/projects/portfolio-cms/page-6.png"
  - "/images/projects/portfolio-cms/page-7.png"
  - "/images/projects/portfolio-cms/page-8.png"
  - "/images/projects/portfolio-cms/page-9.png"
  - "/images/projects/portfolio-cms/page-10.png"
  - "/images/projects/portfolio-cms/page-11.png"
  - "/images/projects/portfolio-cms/page-12.png"
techStack: ["Laravel 12", "Blade", "Alpine JS", "Tailwind CSS", "MySQL", "Docker"]
links:
  github: "https://github.com/raflimuhammadd/portfolio-web"
---

## Overview
Website portofolio untuk agensi/freelancer digital yang menampilkan proyek secara publik sekaligus menyediakan alur booking jasa — klien isi brief, masuk ke database, dikelola lewat admin dashboard.

## The Challenge
- Konten portofolio harus bisa diupdate tanpa deploy ulang → butuh CMS, bukan halaman statis
- Satu codebase untuk dua pengalaman berbeda: landing page publik yang cepat dan panel admin yang fungsional
- Order dari klien butuh integritas data (relasi proyek–tool–screenshot) → rawan data yatim jika insert parsial

## Key Features
- Showcase proyek. listing + halaman detail per slug, lengkap dengan cover, screenshots, dan tools yang dipakai
- Booking order. form brief (nama, email, kategori layanan, budget, deskripsi) dengan validasi server-side
- Admin dashboard (auth via Breeze). CRUD Projects, Tools, relasi Project↔Tool, Screenshots, kelola Testimonials, dan lihat daftar order masuk
- Environment dev terkontainerisasi via Docker Compose.
- Soft delete di semua entitas utama — data tidak hilang permanen

## The Solution
- Monolith Laravel dengan Blade template — tanpa SPA, sehingga cepat & sederhana
- Interaktivitas ringan (dropdown, modal) pakai Alpine.js, styling Tailwind CSS
- Route model binding (Project $project via slug) untuk URL detail yang bersih
- Alur simpan order dibungkus DB Transaction/commit/rollback supaya atomik

## Outcomes & Impact
- Setup dev reproducible satu perintah (docker-compose up) berkat Sail + Compose
- Portofolio bisa dikelola penuh non-developer -> tambah proyek, screenshot, tool, testimoni tanpa sentuh kode
- Setiap order masuk terekam terstruktur di database — tidak lagi tersebar di email/DM.

## Lessons Learned
- Transaksi DB wajib begitu satu aksi menulis ke lebih dari satu tabel
- Blade + Alpine cukup untuk situs konten SPA hanya menambah kompleksitas tanpa nilai di sini
- Soft delete + filter pivot sejak awal menghemat migrasi data di kemudian hari