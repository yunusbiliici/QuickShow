# 🚀 Frontend Architecture Documentation

Welcome to the official frontend documentation. This document provides a comprehensive overview of the project's architecture, file structure, conventions, and key technologies. It is intended to help developers, especially our backend team, understand how the frontend is built and how to integrate with it seamlessly.

---

## 🧠 Application Overview

This application is a frontend for a **Cinema Booking System**, where users can:

* Browse available movies and their details
* View available showtimes
* Reserve seats for a movie
* Authenticate with login credentials
* View their profile information

The frontend communicates with a RESTful API backend to perform data operations such as user authentication, movie listings, seat selection, and more.

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [File & Component Conventions](#4-file--component-conventions)
5. [Styling with Goober](#5-styling-with-goober-css-in-js)
6. [API Communication](#6-api-communication)
7. [Environment Configuration](#7-environment-configuration)
8. [Build & Deployment](#8-build--deployment)
9. [Expected API Endpoints](#9-expected-api-endpoints)
10. [Data Types](#10-data-types)
11. [Frontend Route Map](#11-frontend-route-map)
12. [Authentication Mechanism](#12-authentication-mechanism)

---

## 1. Quick Start

Follow these steps to get the frontend application running locally.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
* [Yarn](https://yarnpkg.com/) or `npm`

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate to the client directory
cd client

# 3. Install dependencies
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## 2. Technology Stack

| Category        | Technology     | Rationale                                                                           |
| --------------- | -------------- | ----------------------------------------------------------------------------------- |
| **Framework**   | React / Preact | Component-based architecture. Preact is used in production for smaller bundle size. |
| **Language**    | TypeScript     | Type safety, autocompletion, and maintainability.                                   |
| **Styling**     | Goober         | Tiny, performant CSS-in-JS library.                                                 |
| **Bundler**     | Vite           | Fast development and optimized builds.                                              |
| **Linting**     | ESLint         | Consistent code style and error detection.                                          |
| **File Search** | fast-glob      | Efficient file system globbing.                                                     |
| **Config**      | JSON5          | More readable configs.                                                              |

---

## 3. Project Structure

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   └── layout/
│   ├── config/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── .env.*
├── package.json
├── tsconfig.json
└── vite.config.ts
```

See original document for component explanations.

---

## 4. File & Component Conventions

See original document for file naming and structure best practices.

---

## 5. Styling with Goober (CSS-in-JS)

See original document for theming and global styles.

---

## 6. API Communication

All API logic is centralized in `src/services/apiService.ts`. Fetch/axios is configured with headers, interceptors, and token handling.

---

## 7. Environment Configuration

Variables are defined in `.env` files. Use `VITE_` prefix to expose to client.

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

Access with `import.meta.env.VITE_API_BASE_URL`.

---

## 8. Build & Deployment

Use `npm run build` to create a production build. Host the `/dist` folder statically or via backend like Express.

---

## 9. 🔌 Expected API Endpoints

| Method | Endpoint          | Description           | Auth Required | Payload / Params          |
| ------ | ----------------- | --------------------- | ------------- | ------------------------- |
| GET    | `/movies`         | List all movies       | ❌             |                           |
| GET    | `/movies/:id`     | Movie details         | ❌             | `id` param                |
| GET    | `/shows/:movieId` | Showtimes for a movie | ❌             | `movieId`                 |
| POST   | `/reservation`    | Reserve seats         | ✅             | `userId, showId, seats[]` |
| GET    | `/users/profile`  | Logged-in user info   | ✅             | JWT Token                 |
| POST   | `/auth/login`     | Login user            | ❌             | `email, password`         |

---

## 10. 🗂️ Data Types

### `User`

```ts
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}
```

### `Movie`

```ts
interface Movie {
  id: string;
  title: string;
  description: string;
  duration: string;
  trailerUrl: string;
  coverImage: string;
  genres: string[];
}
```

### `Showtime`

```ts
interface Showtime {
  id: string;
  movieId: string;
  date: string;
  time: string;
  availableSeats: number;
  price: number;
}
```

### `Reservation`

```ts
interface Reservation {
  userId: string;
  showId: string;
  seats: string[];
}
```

---

## 11. 🧱 Frontend Route Map

| Path         | Component           | Backend Dependency    |
| ------------ | ------------------- | --------------------- |
| `/`          | `HomePage`          | GET `/movies`         |
| `/movie/:id` | `MovieDetailPage`   | GET `/movies/:id`     |
| `/shows/:id` | `ShowtimeSelection` | GET `/shows/:movieId` |
| `/login`     | `LoginPage`         | POST `/auth/login`    |
| `/profile`   | `UserProfilePage`   | GET `/users/profile`  |

---

## 12. 🔐 Authentication Mechanism

* On login, a JWT is returned by the backend.
* It is stored in `localStorage` as `authToken`.
* All authenticated requests include:

```http
Authorization: Bearer <token>
```

In code, it’s handled in `apiService.ts` automatically.

