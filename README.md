# NCRTC Bus Management System (Frontend)

## Project Overview

This project is a frontend-based Bus Management System developed for NCRTC (National Capital Region Transport Corporation).

The system is designed to help manage and monitor bus operations such as:
- Live bus tracking
- Driver scheduling
- Incident management
- Notices and updates
- Driver-side interface

This project mainly focuses on the frontend development part using React JS.

---

# My Role in the Project

I developed the frontend part of this project individually.

Since my main area is frontend development, I focused on:
- UI design
- React component development
- Dashboard creation
- Routing
- Live tracking interface
- Responsive layouts
- Driver interface screens

Backend APIs and database integration are not fully implemented in this version because the primary goal of this project was to build the frontend workflow and user interface.

This is not a group project. I created the frontend structure, pages, and UI flow independently for learning and demonstration purposes.

---

# Tech Stack Used

## Frontend
- React JS
- Vite
- React Router DOM
- Tailwind CSS
- React Leaflet
- React Icons

---

# Main Modules

## 1. Login Module
Simple login screen for users.

Features:
- Username input
- Password input
- Responsive UI

---

## 2. Dashboard Module

The dashboard provides an overview of the transport system.

Features:
- Total vehicles count
- Running trips
- Driver information
- Incident summary
- Recent activity section

---

## 3. AVLS (Automatic Vehicle Location System)

This module is used for live bus tracking.

Features:
- Live bus locations on map
- Bus markers
- Depot filter
- Vehicle popup details
- OpenStreetMap integration

---

## 4. Scheduling Module

Used for managing driver schedules and route assignments.

Features:
- Weekly roster table
- Driver assignments
- Route information

---

## 5. Incident Management System (IMS)

Used for handling transport-related incidents.

Features:
- Incident cards
- Severity status
- Open/closed incidents

---

## 6. CMS Notice Module

This module is used for announcements and notices.

Features:
- Display notices
- Driver-related announcements
- Traffic updates

---

## 7. Driver Interface

Simple mobile-friendly interface for drivers.

Features:
- Duty details
- Route information
- Acknowledge button

---

# Project Flow

## Step 1
User opens the application and logs into the system.

↓

## Step 2
Dashboard loads overall transport information.

↓

## Step 3
Admin or operator can:
- Monitor buses
- Check schedules
- View incidents
- Publish notices

↓

## Step 4
Drivers can check assigned duties and route information.

↓

## Step 5
Live tracking module displays vehicle locations on the map.

---

# Folder Structure

```bash
src/
│
├── components/
├── pages/
├── routes/
├── api/
├── styles/
└── context/
