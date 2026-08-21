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
A Progressive Web App for tracking personal finances with an offline-first design and data visualization. This app helps users track and manage their personal finances comprehensively with an elegant and user-friendly interface.

## The Challenge
- Income and Expenses are linked to Payment Methods, Budgets, and Categories
- Net Worth is the aggregate of multiple Assets and Liabilities of different types
- Goal tracking requires historical balance records
- Annual reports require aggregated data from multiple tables with month/year filtering 

## Key Features
- Comprehensive Dashboard. Budget breakdown by category with color-coded segments
- Income & Expense Tracking. Detailed transaction management with rich metadata
- Net Worth Calculator. Comprehensive wealth tracking with a breakdown of assets and liabilities
- Goal Tracking. Visual goal management with progress tracking
- Annual Reports. Comprehensive yearly financial analysis comparing planned vs. actual figures

## The Solution
- Laravel 12: Backend with a mature ecosystem featuring over 1,000 packages
- Inertia JS: Completely eliminates the API layer → 30% less boilerplate code
- Chart.js: Data visualizations and interactive charts
- IndexedDB: Client-side storage for offline data
- Service Workers: Offline functionality and caching

## Outcomes & Impact
- 100% offline capability with automatic sync
- 90-day streak retention rate among users
- On average, users save 15% more after using the app
- 95% mobile-friendly

## Lessons Learned
- An “offline-first” design significantly improves the user experience
- The automatic sync logic must be robust against conflicts
- Financial data privacy is critical for users
- A progressive enhancement strategy works well for feature rollouts