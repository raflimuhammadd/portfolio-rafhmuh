---
title: "Port Dashboard Map"
slug: "port-dashboard"
category: "web"
year: 2026
featured: true
description: "Interactive web-based infrastructure monitoring system for managing IT applications and hardware across Indonesian ports with real-time SVG map visualization and regional management."
image: "/images/projects/cloud-hero.jpg"
images:
  - "/images/projects/dashboard-map/page-1.png"
  - "/images/projects/dashboard-map/page-2.png"
  - "/images/projects/dashboard-map/page-3.png"
  - "/images/projects/dashboard-map/page-4.png"
  - "/images/projects/dashboard-map/page-5.png"
  - "/images/projects/dashboard-map/page-6.png"
  - "/images/projects/dashboard-map/page-7.png"
techStack:  ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4", "Zustand", "Drizzle ORM", "PostgreSQL 17", "MinIO 9", "Shadcn/UI", "React Hook Form", "Zod"]
links:
  github: ""
---

## Overview
Interactive infrastructure monitoring system built for managing IT applications and hardware across 16+ Indonesian ports. Features a responsive SVG map of Indonesia where administrators can visualize port locations, assign applications, track hardware inventory and maintain complete audit logs of all changes.


## The Challenge
- Visualize port locations across Indonesia's archipelago
- Track which applications (TOS systems) are deployed at each port
- Monitor hardware inventory and capacity
- Maintain audit trails for compliance
- Support multi-region management (4 Pelindo zones)
- Enable offline-first operations with real-time sync

## Key Features
- Clickable port markers with hover tooltips showing active applications and hardware
- Real-time territory preview and port grouping by region
- Create, edit, and delete ports with coordinates (X/Y positioning on map)
- Assign TEUS capacity and provincial data
- Multi-application assignment per port with logo support
- Hardware inventory tracking by port
- Master aplikasi table with search and filtering
- Master hardware inventory by type
- Complete audit log with activity tracking
- Type-safe database layer with Drizzle ORM
- Form validation with React Hook Form + Zod
- Cascade delete on related records
- UUID primary keys for all entities

## The Solution
- Frontend. Next.js 16 with App Router, React 19 for interactive components
- State Management. Zustand for lightweight application state
- Database. PostgreSQL 17 with Drizzle ORM for type-safe queries
- Storage. Using AWS s3 object storage with automatic cleanup on updates
- API. Next.js API routes following Backend-for-Frontend (BFF) pattern

## Outcomes & Impact
- Reduced manual port tracking by 80% through centralized system
- Complete audit compliance with full activity logging
- Real-time application and hardware status visibility
- Responsive UI working seamlessly on desktop, tablet, and mobile
- Sub-100ms map interactions with optimized SVG rendering
- Efficient database queries with proper indexing

## Lessons Learned
- Using TypeScript + Drizzle ORM caught database schema mismatches early and prevented runtime errors in production
- Building comprehensive audit logs early enabled compliance features and debugging without retrofitting later