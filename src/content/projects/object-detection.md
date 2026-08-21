---
title: "APD Detection System"
slug: "apd-detection-system"
category: "ml"
year: 2025
featured: true
description: "Real-time workplace safety system that automatically monitors worker PPE compliance using computer vision, sending instant alerts when safety gear is missing."
image: "/images/projects/apd/hero.jpg"
images:
  - "/images/projects/object-detection/page-1.png"
  - "/images/projects/object-detection/page-2.png"
  - "/images/projects/object-detection/page-3.png"
  - "/images/projects/object-detection/page-4.png"
techStack: ["Python", "Streamlit", "YOLOv11", "SQLite", "Telegram API"]
links:
  github: "https://github.com/raflimuhammadd/object-detection"
---

# APD Detection System
### Otomasi Monitoring Keselamatan Kerja dengan AI

## Overview
The PPE Detection System is an intelligent application that monitors workplace safety in real time using computer vision technology. The system automatically detects when workers are not wearing personal protective equipment (PPE) such as helmets, safety vests, or masks—and immediately sends an alert to the supervisor.

## The Challenge
- Time-consuming. Supervisors must conduct continuous patrols
- Inconsistent. Depends on human presence and attention
- Reactive. Incidents are only detected after they occur
- Hard to track. It is difficult to generate accurate compliance reports

## Key Features
- Real-time Detection
- Smart Alert System
- Interactive Dashboard
- Multi-Source Support
- Intelligent Tracking

## The Solution
- Detects violations instantly
- Alerts supervisors in real time
- Stores data for audits and compliance
- Provides insights into violation patterns

## Outcomes & Impact
- 95% PPE detection rate
- 3.5-second alert response time
- 98% database reliability uptime
- 40–60% improvement in compliance rate
- 30–50% reduction in incidents: Estimated fewer violations

## Lessons Learned
- Model accuracy is greatly affected by lighting conditions
- The model needs to be fine-tuned for each different location
- Indoor and outdoor environments require different adjustments
- Too sensitive → many false alerts → alert fatigue
- Too lenient → missed violations → safety risk
- Database growth needs to be planned for from the start