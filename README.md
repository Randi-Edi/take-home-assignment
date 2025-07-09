## ✅ Project Description

This project is a simple Node.js REST API.
It fetches posts from a public API ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)),  
stores them in a local **SQLite** database using **raw SQL** (no ORM),  
and serves them through a RESTful API.

When you request a post:
- If it exists in the local database → it’s returned directly.
- If it does not exist → it’s fetched from the 3rd-party API, saved to the local database, and returned.

---

## ✅ Main Features

- 📂 Uses **Clean Architecture**: clear separation of controllers, services, repositories, and database setup.
- ⚡ Uses **SQLite** with **raw SQL**, not an ORM.
- 🌐 Uses `fetch` (via `node-fetch` if your Node.js version is older than 18).
- 🔒 Uses environment variables for configuration.

---

## ✅ Technologies & Libraries Used

| Package | Why it is used |
| ------- | --------------- |
| [**Express**](https://expressjs.com/) | A minimal, flexible Node.js web framework to handle HTTP routes and middleware easily. |
| [**sqlite3**](https://www.npmjs.com/package/sqlite3) | Provides a lightweight, embedded relational database for local storage, using **raw SQL** only. |
| [**dotenv**](https://www.npmjs.com/package/dotenv) | Loads environment variables from a `.env` file, so you can configure the API URL without changing the code. |

---

## 📌 Requirements

- **Node.js** version **18+** (for native `fetch` support)  
  If you use Node.js below version 18, the `node-fetch` package is included

---

## 📌 Environment Variables

This app requires **one** environment variable:

| Variable       | Description                                      | Example                             |
|----------------|--------------------------------------------------|-------------------------------------|
| `API_BASE_URL` | The base URL of the 3rd-party API to fetch posts | `https://jsonplaceholder.typicode.com` |

Create a `.env` file in your project root:

```env
API_BASE_URL=https://jsonplaceholder.typicode.com

📌 Installation

git clone <your-repo-url>
cd <your-project-folder>
npm install

📌 Running the Application
npm start

📌 API Endpoints

http://localhost:3000/api/posts

http://localhost:3000/api/posts/1