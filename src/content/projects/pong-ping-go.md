---
title: "Pong Ping Go"
slug: "pong-ping-go"
category: "fun"
year: 2025
featured: false
description: "Fun Project Pong Ping Go Play"
image: "/images/projects/cloud-hero.jpg"
images:
  - "/images/projects/pong-ping-go/page-1.webp"
  - "/images/projects/pong-ping-go/page-2.webp"
techStack: ["HTML5", "Vanilla Javascript", "Bulma CSS", "Canvas Confetty"]
links:
  github: "https://github.com/raflimuhammadd/score-keeper"
  demo: "https://pong-ping-go.netlify.app/"
---

## Overview
Real-time score tracking application for ping pong matches with support for configurable match formats, automatic round management, and celebratory animations.

## The Challenge
- Manual score tracking during competitive ping pong matches can be error-prone and distracting from gameplay. 
- Players need a quick, intuitive interface to increment scores without mental overhead, plus support for different match formats (Best of 3, Best of 5, etc.) with varying winning point thresholds.

## Key Features
- Dual-Player Score Tracking. Dedicated increment buttons for each
- Flexible Win Conditions. "Playing To" dropdown (3-11 points) sets the score threshold per game
- Visual Feedback. Win/loss colors applied to scores + celebratory confetti animation on match completion

## The Solution
- Built with vanilla JavaScript and Bulma CSS for simplicity and zero dependencies
- State management uses plain objects for each player (p1, p2) tracking game score, match score, and DOM references

## Outcomes & Impact
- Instant visual feedback keeps players focused on gameplay
- Eliminates manual scorekeeping friction during matches
- Responsive design works on phones, tablets, and desktops for casual or venue use

## Lessons Learned
- Simple state objects suffice for small, scoped applications without framework overhead
- Auto-reset timing (1.5s) balances celebration visibility with rapid gameplay flow
- CDN-hosted libraries (Bulma, confetti) keep deployment frictionless