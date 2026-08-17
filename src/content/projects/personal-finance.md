---
title: "Personal Finance Tracker"
slug: "personal-finance"
category: "personal"
year: 2024
featured: false
description: "Progressive Web App for tracking personal finances with offline-first design and rich data visualization."
image: "/images/projects/personal-hero.jpg"
techStack: ["Vue.js", "Firebase", "Chart.js", "PWA", "IndexedDB", "Service Workers"]
links:
  github: "https://github.com/raflimuhammadd/finance-tracker"
  demo: "https://finance.raflimuhammadd.dev"
---

# Personal Finance Tracker

## Overview
Progressive Web App untuk track personal finances dengan offline-first design dan data visualization.

## The Challenge
Membangun financial tracking app yang works offline, syncs automatically ketika online, dan provides insightful visualizations.

## Key Features
- **Offline First**: Works completely offline dengan IndexedDB
- **Data Sync**: Automatic sync ke Firebase ketika online kembali
- **Visualizations**: Interactive charts dengan Chart.js
- **PWA Features**: Installable, push notifications, home screen
- **Data Import**: CSV/Excel import untuk existing financial data

## The Solution
- **Vue.js**: Frontend framework dengan Vuex state management
- **Firebase**: Backend-as-a-service untuk authentication dan sync
- **Chart.js**: Data visualizations dan interactive charts
- **IndexedDB**: Client-side storage untuk offline data
- **Service Workers**: Offline functionality dan caching

## Outcomes & Impact
- 100% offline capability dengan automatic sync
- 90-day streak retention rate dari users
- Average user saves 15% more setelah menggunakan app
- PWA features improve user engagement
- Data import saves users hours of manual entry

## Lessons Learned
- Offline-first design improves user experience significantly
- Automatic sync logic harus robust terhadap conflicts
- Financial data privacy sangat critical untuk users
- Progressive enhancement strategy works well untuk feature rollout
