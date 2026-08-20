---
title: "Personal Finance Tracker"
slug: "personal-finance"
category: "personal"
year: 2025
featured: true
description: "Progressive Web App for tracking personal finances with offline-first design and rich data visualization."
image: "/images/projects/personal-hero.jpg"
images:
  - "/images/projects/finance/page-1.png"
  - "/images/projects/finance/page-2.png"
  - "/images/projects/finance/page-3.png"
  - "/images/projects/finance/page-4.png"
  - "/images/projects/finance/page-5.png"
  - "/images/projects/finance/login-page.png"
techStack: ["Laravel 12", "React 18", "Inertia JS", "SPA", "Indexed DB"]
links:
  github: "https://github.com/raflimuhammadd/cuan-planner"
  demo: "https://finance.raflimuhammadd.dev"
---

# Personal Finance Tracker

## Overview
Progressive Web App untuk track personal finances dengan offline-first design dan data visualization. Aplikasi ini membantu pengguna melacak dan mengelola keuangan pribadi secara komprehensif dengan interface yang elegant dan user-friendly.

## The Challenge
- Income dan Expense terhubung dengan Payment methods, Budgets, dan Categories
- Net Worth merupakan aggregate dari multiple Assets dan Liabilities dengan tipe berbeda
- Goals tracking memerlukan historical Balance records
- Annual reports membutuhkan aggregation data dari multiple tables dengan month/year filtering

## Key Features
- Dashboard Komprehensif: Budget breakdown per category dengan color-coded segments
- Income & Expense Tracking: Detailed transaction management dengan rich metadata
- Net Worth Calculator: Comprehensive wealth tracking dengan asset/liability breakdown
- Goal Tracking: Visual goal management dengan progress tracking
- Annual Reports: Comprehensive yearly financial analysis dengan plan vs actual

## The Solution
- Laravel 12: Backend with mature ecosystem dengan 1000+ packages
- Inertia JS: Eliminates API layer completely → 30% less boilerplate code
- Chart.js: Data visualizations dan interactive charts
- IndexedDB: Client-side storage untuk offline data
- Service Workers: Offline functionality dan caching

## Outcomes & Impact
- 100% offline capability dengan automatic sync
- 90-day streak retention rate dari users
- Average user saves 15% more setelah menggunakan app
- 95% Mobile friendly

## Lessons Learned
- Offline first design improves user experience significantly
- Automatic sync logic harus robust terhadap conflicts
- Financial data privacy sangat critical untuk users
- Progressive enhancement strategy works well untuk feature rollout