# Playwright API Automation Mini Project 🚀

    This project is a **mini API automation framework** built using **Playwright with JavaScript**, focusing on **real-world API testing practices** such as authentication handling, service-client architecture, environment configuration, and proper HTTP method usage.

    The goal of this project is **learning by building**, not just writing isolated API calls.

---

## 📌 Tech Stack

- **Playwright**
- **JavaScript (Node.js)**
- **Playwright Test Runner**
- **dotenv** (for environment variables)
- **REST APIs** (Restful Booker)

---

## 📁 Project Structure

```text
playwright-api-miniProject/
│
├── api/
│ ├── clients/
│ │ └── apiClient.js # Low-level HTTP client wrapper
│ │
│ ├── services/
│ │ └── userServices.js # Business logic / API services
│ │
│ └── test-data/
│ ├── tokenData.json # Auth payload
│ └── createBooking.json # Booking payload
│
├── tests/
│ ├── authToken.spec.js # Auth token generation
│ ├── createBooking.spec.js # Create booking API
│ ├── getBooking.spec.js # Get booking API
│ ├── updateBooking.spec.js # Update booking API
│ └── deleteBooking.spec.js # Delete booking API
│
├── .env # Environment variables
├── playwright.config.js # Playwright configuration
├── package.json
├── .gitignore
└── README.md
```

---

## 🧠 Framework Design Approach

### 🔹 Client Layer (`apiClient.js`)
- Wraps Playwright `APIRequestContext`
- Exposes generic HTTP methods:
  - `get()`
  - `post()`
  - `put()`
  - `patch()`
  - `delete()`
- Keeps HTTP logic centralized

---

### 🔹 Service Layer (`userServices.js`)
- Contains **business-level API methods**
- Uses `ApiClient` internally
- Example:
  - `getAuthToken()`
  - `createBooking()`
  - `getBooking(id)`
  - `updateBooking(id)`
  - `deleteBooking(id)`

---

### 🔹 Test Layer (`tests/*.spec.js`)
- Focuses only on:
  - Calling service methods
  - Assertions
  - Logging responses
- No raw HTTP calls inside tests

---

## 🔐 Authentication Handling

- Token is generated using `/auth` API
- Token is passed using **Cookie-based authentication**
- A **new APIRequestContext** is created after token generation
- Contexts are disposed after use to avoid leaks

```md
extraHTTPHeaders: {
  Cookie: `token=${token}`
}
🌱 Environment Configuration
```js
.env file
BASE_URL=https://restful-booker.herokuapp.com
Loaded using dotenv in Playwright config
require('dotenv').config();
▶️ How to Run Tests
Install dependencies
npm install
Run all tests
npx playwright test
Run a single test
npx playwright test tests/deleteBooking.spec.js
View HTML report
npx playwright show-report
🧪 Key Learnings from This Project
Difference between request fixture and request.newContext()

Why APIRequestContext headers are immutable

Proper handling of DELETE APIs (status + text, not JSON)

Why 403 vs 405 errors occur

Importance of creating test data before deleting it

Separation of concerns using Client–Service architecture

Real-world API behavior does not always match documentation

⚠️ Important Notes (Real API Behavior)
DELETE APIs may fail if:

Booking does not exist

Booking was not created in the same test lifecycle

Token does not own the resource

Some APIs return 405 instead of 404 (backend limitation)

This project intentionally handles such cases to reflect real-world automation challenges.

🎯 Purpose of This Project
Learning Playwright API automation

Understanding framework design

Preparing for API automation interviews

Building confidence with real backend behavior

