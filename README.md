# 📝 Task Tracker (MERN Stack)

A simple Task Tracker web app built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring JWT authentication, task creation, status updates, and full CRUD operations.

---

## 📁 Project Structure

```
/backend    → Express.js + MongoDB + JWT API
/frontend   → React.js + Bootstrap frontend
```

---

## 🚀 Features

- User registration & login (JWT-based)
- Create, update, delete tasks
- Set task status: To Do, In Progress, Completed
- Responsive UI with modals for task actions

---

## ⚙️ Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- npm or yarn

---

## 📦 Backend Setup (Express + MongoDB)

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```


3. **Run the server**
   ```bash
   npm run dev
   ```

   The server should run on [http://localhost:5000](http://localhost:5000)

---

## 🌐 Frontend Setup (React)

1. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the frontend**
   ```bash
   npm run dev
   ```

   The app should run on [http://localhost:5173](http://localhost:5173)

---

## 🔗 API Routes (Backend)

| Method | Route                  | Description           |
|--------|------------------------|-----------------------|
| POST   | `/api/auth/signin`     | Register new user     |
| POST   | `/api/auth/login`      | Login user & get token|
| GET    | `/api/tasks`           | Get user tasks        |
| POST   | `/api/tasks`           | Create new task       |
| PUT    | `/api/tasks/:id`       | Update task           |
| DELETE | `/api/tasks/:id`       | Delete task           |
| PATCH  | `/api/tasks/:id`       | update task status    |

---

## 🛠 Tech Stack

- Frontend: React.js, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- Auth: JWT
- Styling: Bootstrap 5

---
