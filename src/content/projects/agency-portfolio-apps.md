---
title: "Portfolio for Agency"
slug: "portfolio-app"
category: "web"
year: 2025
featured: true
description: "A website portfolio for a digital agency showcasing projects, a booking system, and an admin dashboard for managing content."
image: "/images/projects/cloud-hero.jpg"
images:
  - "/images/projects/agency-portfolio-app/page-1.webp"
  - "/images/projects/agency-portfolio-app/page-2.webp"
  - "/images/projects/agency-portfolio-app/page-3.webp"
  - "/images/projects/agency-portfolio-app/page-4.webp"
  - "/images/projects/agency-portfolio-app/page-5.webp"
  - "/images/projects/agency-portfolio-app/page-6.webp"
  - "/images/projects/agency-portfolio-app/page-7.webp"
  - "/images/projects/agency-portfolio-app/page-8.webp"
  - "/images/projects/agency-portfolio-app/page-9.webp"
  - "/images/projects/agency-portfolio-app/page-10.webp"
  - "/images/projects/agency-portfolio-app/page-11.webp"
  - "/images/projects/agency-portfolio-app/page-12.webp"
techStack: ["Laravel 12", "Blade", "Alpine JS", "Tailwind CSS", "MySQL", "Docker"]
links:
  github: "https://github.com/raflimuhammadd/portfolio-web"
---

## Overview
A portfolio website for digital agencies and freelancers that publicly showcases projects while also providing a service booking process—clients fill out a brief, which is added to the database and managed through the admin dashboard.

## The Challenge
- Portfolio content must be updatable without redeployment → requires a CMS, not static pages
- A single codebase for two distinct experiences: a fast public landing page and a functional admin panel
- Client orders require data integrity (project–tool–screenshot relationships) → prone to orphaned data in case of partial inserts

## Key Features
- Project showcase: listings + detail pages per slug, complete with cover images, screenshots, and tools used
- Booking orders: brief form (name, email, service category, budget, description) with server-side validation
- Admin dashboard (authentication via Breeze). CRUD operations for Projects, Tools, Project↔Tool relationships, Screenshots, manage Testimonials, and view the list of incoming orders
- Containerized development environment via Docker Compose.
- Soft delete on all primary entities — data is not permanently lost

## The Solution
- Laravel monolith with Blade templates — no SPA, so it’s fast and simple
- Lightweight interactivity (dropdowns, modals) using Alpine.js, styled with Tailwind CSS
- Route-model binding (Project $project via slug) for clean detail URLs
- The order-saving workflow is wrapped in a database transaction (commit/rollback) to ensure atomicity

## Outcomes & Impact
- A single-command, reproducible dev setup (docker-compose up) thanks to Sail + Compose
- Non-developers can fully manage the portfolio -> add projects, screenshots, tools, and testimonials without touching any code
- Every incoming order is recorded in a structured format in the database — no longer scattered across emails or DMs.

## Lessons Learned
- Database transactions are required whenever a single write operation affects more than one table
- Blade + Alpine is sufficient for a content-based SPA; adding more would only increase complexity without providing any value here
- Using soft deletes and pivot filters from the start saves on data migration later on