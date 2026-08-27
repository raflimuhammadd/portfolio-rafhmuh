---
title: "Chatbot AI Infrastructure"
slug: "chat-infra"
category: "team"
year: 2023
featured: true
description: "Backend infrastructure optimization for AI chatbot system using Google Cloud Platform, Cloud Storage, and Cloud Run. Built scalable, containerized deployment with 88-92% intent classification accuracy and 99.5% uptime."
image: "/images/projects/cloud-hero.jpg"
images:
  - "/images/projects/chatbot-infra/page-1.webp"
techStack: ["Python 3.11", "Flask", "Keras", "NLTK", "Google Cloud Platform", "Cloud Run", "Cloud Storage", "Docker", "Gunicord", "Cloud Build", "Cloud Logging", "Artifact Registry"]
links:
  github: "https://github.com/My-UMKM/MyUmkmApps"
---

## Overview
A backend infrastructure system optimized for a production-grade AI chatbot service using Google Cloud Platform. This project focuses on building a scalable, reliable, and cost-efficient infrastructure to provide 24/7 customer support for SMEs with low latency and high availability.


## The Challenge
- Long Cold Start Time - New instances take 8+ seconds to become ready
- Manual Scaling - Cannot automatically handle traffic spikes
- Large Container Image - The initial Dockerfile generates a 1.2GB image
- Cost Inefficiency - Servers must run 24/7 even when traffic is low
- Configuration Drift - Environment variables are inconsistent across deployments

## Key Features
- Cloud Run
  - Serverless Container Deployment - Deploy without managing infrastructure
  - Auto-scaling - Automatically scale from 0 to 1,000+ instances
  - Pay-per-use Pricing - Pay only for processed requests
  - Built-in Load Balancing - Automatic traffic distribution
  - Revision Management - Easy rollback to previous versions
- Cloud Storage
  - Model Versioning - Keep multiple model versions (chatbot_v1.h5, chatbot_v2.h5)
  - Access Control - IAM-based permissions for security
  - Cost-Efficient - Lower cost compared to storing models in container images
  - Smart Caching - Local caching after the first download
- Cloud Build
  - Automated CI/CD - Trigger builds and deployments on a Git push
  - Multi-stage Docker Builds - Optimize image layers
  - Artifact Registry - Private container image registry
  - Build Caching - Speed up subsequent builds
- Logging
  - Cloud Logging - Centralized logging for all requests
  - Cloud Trace - Distributed tracing for performance analysis
  - Cloud Monitoring - Metrics & alerting
  - Error Reporting - Automatic error detection & notification

## The Solution
- Cloud Storage Integration
- Environment Configuration
- Structured Logging

## Outcomes & Impact
- 99% Uptime - 99.5%+ with automatic failover
- 24/7 Availability - No maintenance windows
- Instant Scaling - Handle 10x traffic spike automatically
- 0% Zero Manual Deployment - Fully automated CI/CD
- Production Ready - Enterprise-grade infrastructure
- Cost Efficient - 68% operational cost reduction

## Lessons Learned
- Multi-stage Docker Builds Are a Game-Changer: Using multi-stage builds reduces image size from 1.2 GB to 650 MB (a 46% reduction) by
- Cloud Storage Caching Strategy Is Crucial for Cold Starts
- Cloud Run Auto-scaling Eliminates the Need for Capacity Planning
- Environment Management Prevents Configuration Drift
- Automated CI/CD Reduces Human Error
- Regional Deployment for Low Latency
- Cost Visibility with Cloud Billing