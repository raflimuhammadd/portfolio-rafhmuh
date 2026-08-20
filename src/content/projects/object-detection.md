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
APD Detection System adalah aplikasi intelligent yang memantau keselamatan kerja secara real-time menggunakan teknologi computer vision. Sistem ini otomatis mendeteksi ketika pekerja tidak memakai alat pelindung diri (APD) seperti helm, rompi keselamatan, atau masker — dan langsung mengirim alert ke supervisor.

**Masalah yang Dipecahkan:**
- ❌ Manual inspeksi memakan waktu dan tidak konsisten
- ❌ Pelanggaran keselamatan sering terlewatkan
- ❌ Tidak ada data real-time tentang compliance
- ❌ Sulit membuktikan pelanggaran untuk dokumentasi

## The Challenge
- Time-consuming: Supervisor harus patroli berkelanjutan
- Inconsistent: Tergantung kehadiran dan perhatian manusia
- Reactive: Baru terdeteksi kalau terjadi insiden
- Hard to track: Sulit membuat laporan compliance yang akurat

## Key Features
- Deteksi Real-time
- Smart Alert System
- Interactive Dashboard
- Multi-Source Support
- Intelligent Tracking

## The Solution
- Mendeteksi pelanggaran instant
- Alert supervisor secara real-time
- Menyimpan data untuk audit & compliance
- Memberikan insights tentang pola pelanggaran

## Outcomes & Impact
- 95% untuk APD terdeteksi
- 3.5 detik Response time alert
- 98% Database reliability uptime
- 40-60% Compliance rate dapat ditingkatkan
- 30-50% Incident reduction: Estimasi fewer violations

## Lessons Learned
- Akurasi model sangat terpengaruh oleh kondisi pencahayaan
- Perlu fine-tuning model untuk setiap lokasi yang berbeda
- Indoor vs outdoor memerlukan adjustment yang berbeda
- Too sensitive → banyak alert palsu → alert fatigue
- Too loose → missed violations → safety risk
- Database growth perlu direncanakan sejak awal