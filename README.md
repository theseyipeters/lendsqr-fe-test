# Lendsqr Frontend Engineering Assessment

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [API Details](#api-details)
- [Deployment](#deployment)

## Project Overview

This project is a frontend assessment for the Lendsqr team, built using React, TypeScript, and SCSS. The goal was to create a web application that mirrors the provided Figma design, implementing four primary pages: Login, Dashboard, User page, and User Details page. The application features responsiveness, data fetching from a mock API, local storage for user details, and a range of best practices in terms of code quality and architecture.

## Tech Stack

- **React**: For building the user interface.
- **TypeScript**: As the programming language.
- **SCSS**: For styling the components.
- **Vite**: As the build tool for fast development.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/theseyipeters/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. **Install dependencies:**
   npm install

3. **Start the development server::**
   npm run dev

4. **Build the project for production:**
   npm run build

## Features

- Login Page: User authentication interface.
- Dashboard: Overview of key metrics and navigation.
- User Page: Displays a list of users with filters and pagination.
- User Details Page: Detailed view of individual user data, stored and retrieved from local storage.
- Responsive Design: Ensures usability across different devices.
- Mock API: Simulated backend using Mocky.io.
- Local Storage: Persists user details for offline access.
- Unit Testing: Comprehensive test coverage for components and utilities.

## Folder Structure

lendsqr-fe-test/
├── public/
├── src/
│ ├── assets/ # Images and static assets
│ ├── components/ # Reusable components
│ ├── pages/ # Application pages (Login, Dashboard, User, User Details)
│ ├── services/ # API calls and data services
│ ├── styles/ # SCSS styles
│ ├── utils/ # Utility functions
│ ├── App.tsx # Main application component
│ ├── main.tsx # Entry point for React
│ └── index.html # HTML template
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── vercel.json
└── vite.config.ts

## Usage

**Login Page:**

- Enter your credentials to log in.
- Redirects to the dashboard upon successful authentication.

**Dashboard:**

- Provides an overview and navigation to other pages.

**User Page**

- Displays a paginated list of users.
- Use the filter to search and narrow down user results.

**User Details Page**

- View detailed information about a specific user.
- Data is fetched from local storage for persistence.

## API Details

The application uses a mock API for user data, simulated using Mocky.io. The API returns 500 user records which are then displayed on the User Page.

Example Mock API URL: https://mocky.io/v2/5d8e2ba0300000a2612b3c5b

## Deployment

The application is deployed on Vercel and can be accessed at:

https://oluwaseyi-peter-ajiboye-lendsqr-fe-test.vercel.app

If you have any questions or need further clarification, please feel free to contact me at hellosagethedev@example.com.

---

This README provides a comprehensive guide to the project, ensuring that anyone reviewing it can understand the structure, setup, and features of the application. Feel free to adjust any specifics (like URLs, names, and emails) to match your actual project details.
