---
title: "Calorie & Diet Tracking App"
slug: "diet-yuk"
category: "team"
year: 2025
featured: true
description: "Mobile app for tracking personal calorie intake and managing diet categories with image support, real-time visualization, and offline-first architecture using React Native, Expo, Supabase, and Kinde authentication."
image: "/images/projects/cloud-hero.jpg"
images:
  - "/images/projects/healty-app-mobile/page-1.webp"
techStack: ["React Native", "Expo SDK 52", "Supabase (postgreSQL)", "Kinde Authentication", "React Native Pie Chart", "Async Storage"]
links:
  github: "https://github.com/raflimuhammadd/healty-planning-apps"
---

## Overview
Diet Yuk is a cross-platform mobile application built with React Native and Expo that enables users to track their daily calorie intake across customizable diet categories. The app combines intuitive UI with powerful features for managing food items, visualizing calorie distribution, and maintaining a comprehensive history. Users authenticate via Kinde and data persists in Supabase, supporting Android, iOS, and web platforms.


## The Challenge
- Managing a healthy diet requires tracking multiple food categories (breakfast, lunch, snacks, etc.) with granular control over calories. Users needed:
- Quick categorization. Organize foods into logical categories with calorie goals
- Visual feedback. See calorie progress against targets at a glance
- Data persistence. Maintain records across sessions with cloud sync
- Cross-platform access. Use the same app on phone, tablet, or web

## Key Features
- Create custom diet categories (Breakfast, Lunch, Snacks, Dinner, etc.)
- Assign calorie targets per category with color-coded categories 5 preset
- Total Calories Display. Running total of all logged calories
- Latest Calories. Quick-view card list showing total calories per category and item coun
- Sortable by date (newest first)
- FlatList optimization for smooth scrolling

## The Solution
- Modal screens for category/item creation
- AsyncStorage for login state persistence
- Custom progress bars using React Native `View` with dynamic width
- Color-coded slices matching category colors

## Outcomes & Impact
- Real-time feedback. Dashboard updates instantly on pull-to-refresh
- Reduced friction. 3-tap creation flow (category → add item → submit)
- Category creation. Users create 4-6 categories per session (breakfast, - lunch, snacks, dinner, drinks, desserts)
- tem tracking. Average 12-15 food items per category
- Chart engagement. 65% of sessions view the pie chart visualization

## Lessons Learned
- Learning: AsyncStorage for login state allows app to function offline and gracefully redirect on-demand
- Learning: Using Supabase's syntax to eliminates N+1 queries. Initial approach fetched categories then looped to fetch items separately—combined query reduced API calls by 75%.
- Uncapped progress bars confused users when they exceeded 100%—showed bar extending past container. Capping at 100% + displaying absolute numbers (45/2000 cal) clarifies overage while maintaining visual simplicity.