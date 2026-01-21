# Playwright API Automation Mini Project 🚀

This project is a **mini API automation framework** built using **Playwright with JavaScript**, focusing on **real-world API testing practices** such as authentication handling, service-client architecture, environment configuration, and proper HTTP method usage.

The goal of this project is **learning by building**, not just writing isolated API calls.

---

## 📌 Tech Stack

- **Playwright**
- **JavaScript (Node.js)**
- **Playwright Test Runner**
- **dotenv**
- **REST APIs (Restful Booker)**

---

## 📁 Project Structure

```text
playwright-api-miniProject/
├── api/
│   ├── clients/
│   │   └── apiClient.js
│   ├── services/
│   │   └── userServices.js
│   └── test-data/
│       ├── tokenData.json
│       └── createBooking.json
│
├── tests/
│   ├── authToken.spec.js
│   ├── createBooking.spec.js
│   ├── getBooking.spec.js
│   ├── updateBooking.spec.js
│   └── deleteBooking.spec.js
│
├── .env
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md

```

---

## 🧠 Framework Design Approach

### 🔹 Client Layer (`apiClient.js`)
- Wraps Playwright `APIRequestContext`
- Exposes reusable HTTP methods (`get`, `post`, `put`, `patch`, `delete`)
- Centralizes HTTP request handling

### 🔹 Service Layer (`userServices.js`)
- Contains business-level API logic
- Uses `ApiClient` internally
- Keeps API details out of test files

### 🔹 Test Layer (`tests/*.spec.js`)
- Focuses only on test flow and assertions
- Calls service-layer methods
- No raw HTTP calls inside test files

---

🌱 Environment Configuration
.env file
BASE_URL=https://restful-booker.herokuapp.com


Loaded using dotenv inside Playwright config:

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

📌 Key Learnings from This Project

Difference between request fixture and request.newContext()

Why APIRequestContext headers are immutable

Proper handling of DELETE APIs (status + text, not JSON)

Why 403 vs 405 errors occur

Importance of creating test data before deleting it

Why DELETE APIs may fail for resources not created in the same lifecycle

