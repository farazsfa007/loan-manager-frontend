# CreditSea Loan Manager Backend

A robust backend API for the CreditSea Loan Manager application, built with Node.js, Express, and MongoDB.  
This backend powers the [CreditSea Loan Manager dashboard](https://loan-app-creditsea.netlify.app/), enabling loan application management, borrower tracking, repayments, and more.

---

## 🌐 Live App

**Frontend:** [https://loan-app-creditsea.netlify.app/](https://loan-app-creditsea.netlify.app/)  
**Frontend Repo:** [farazsfa007/loan-manager-frontend](https://github.com/farazsfa007/loan-manager-frontend)

---

## Table of Contents

- [Features](#features)
- [API Overview](#api-overview)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 📦 **RESTful API** for all core loan management operations
- 📝 **Loan Applications:** Create, update, and retrieve loan applications
- 👤 **Borrowers:** Manage borrower data
- 💸 **Repayments:** Track and update repayments
- 📊 **Dashboard Stats:** Aggregate statistics for admin dashboard
- 🔒 **Authentication:** (Pluggable, if implemented)
- ⚙️ **Configurable:** Environment-based configuration

---

## API Overview

| Endpoint                        | Method | Description                              |
|----------------------------------|--------|------------------------------------------|
| `/api/applications`              | POST   | Submit a new loan application

> **Note:** See the codebase for detailed routes and controller logic.

---

## Getting Started

### 1. **Clone the repository**


### 2. **Install dependencies**


### 3. **Set up environment variables**

Create a `.env` file in the root directory (see [Environment Variables](#environment-variables)).

### 4. **Start the server**


The API will run by default on [http://localhost:5000](http://localhost:5000).

---

## Environment Variables

Create a `.env` file in the root directory with the following example content:


---

## Available Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with nodemon for development (if nodemon is installed)
- `npm test` - Run tests (if implemented)

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Other:** dotenv, cors, (optionally JWT for authentication)

---

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See `LICENSE` for details.

---

## Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

_Last updated: May 11, 2025_
