---
title: "Pharmacy E-Commerce Platform"
slug: "ecommerce-pharmacy"
category: "web"
year: 2024
featured: true
description: "Full-stack e-commerce platform dengan integrasi Midtrans payment gateway, admin dashboard dan customer-facing storefront untuk mengelola penjualan farmasi dengan relational database design dan API-first architecture."
image: "/images/projects/ecommerce-hero.jpg"
images:
  -  "/images/projects/ecommerce-pharmacy/page-1.png"
  -  "/images/projects/ecommerce-pharmacy/page-2.png"
  -  "/images/projects/ecommerce-pharmacy/page-3.png"
  -  "/images/projects/ecommerce-pharmacy/page-4.png"
  -  "/images/projects/ecommerce-pharmacy/page-5.png"
  -  "/images/projects/ecommerce-pharmacy/page-6.png"
  -  "/images/projects/ecommerce-pharmacy/page-7.png"
  -  "/images/projects/ecommerce-pharmacy/page-8.png"
techStack: [ "Laravel 10", "MySQL 8", "Redis", "Bootstrap 5", "Blade", "Sanctum API", "Midtrans Payment Gateway", "Maatwebsite/Excel", "DOMPDF"]
links:
  github: "https://github.com/raflimuhammadd/ecommerce-pharmacy"
---

# E-Commerce Platform

## Overview
Built a complete e-commerce solution for pharmaceutical retail with two separate user interfaces (admin dashboard + customer storefront), real payment processing via Midtrans, and a RESTful API layer. The platform manages the full transaction lifecycle = product inventory → shopping cart → order processing → payment confirmation → transaction reconciliation.

## The Challenge
- Integrating Real Payment Processing
- Dual Interface Architecture
- Relational Data Integrity
- Performance at Scale
- Session vs. Token Authentication

## Key Features
- Product Browsing: Dynamic product catalog organized by category with image galleries
- Shopping Cart: Session-based persistence allowing customers to browse and modify cart before checkout
- Payment Processing: Integrated Midtrans payment gateway with 3DS security support
- Order History: Customers can view past transactions and order status
- Caching: Redis for session management and performance optimization
- Background Processing: Queue-ready architecture for async operations
- Transaction Analytics: Export transaction data to Excel, generate PDF reports for reconciliation
- User Administration: Manage admin accounts and access levels

## The Solution
- Redis Sessions: Distributing session state allows horizontal scaling
- Query Optimization: Strategic use of `select()` and `join()` to minimize N+1 queries
- Caching Layer: Redis for frequently accessed product catalogs and reports
- Status Updates: Webhook from Midtrans updates transaction status ("lunas"/paid or "tidak"/pending)
- Reconciliation: Admin dashboard shows real-time payment status

## Outcomes & Impact
- Successfully delivered 25+ controllers managing complete business workflows
- Implemented 18 database migrations with zero referential integrity issues
- Created 58 admin views covering all operational needs
- Built 104 web routes + 9 API endpoints, all tested and functional
- Achieved clean separation between 2 type sites admin and customer interfaces

## Lessons Learned
- Payment Gateway Integration is More Than API Calls: Midtrans taught me that integrating external payment processors requires careful state management, secure credential handling, webhook validation, and reconciliation logic. 
- Dual Interface Complexity. Supporting admin and customer interfaces from the same codebase forced me to think carefully about middleware, route organization, and authorization
- Session vs. Token Trade-offs. Sessions are simpler for web browsers but don't scale across multiple servers. Tokens are stateless and scalable but require more careful handling.
