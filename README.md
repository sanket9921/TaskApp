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

3. **Set up environment variables**
   Create a `.env` file in the `/backend` directory:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/tasktracker
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the server**
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

3. **Create `.env` file**
   Create a `.env` file in the `/frontend` directory:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Run the frontend**
   ```bash
   npm run dev
   ```

   The app should run on [http://localhost:5173](http://localhost:5173)

---

## 🔗 API Routes (Backend)

| Method | Route                  | Description           |
|--------|------------------------|-----------------------|
| POST   | `/api/users/register`  | Register new user     |
| POST   | `/api/users/login`     | Login user & get token|
| GET    | `/api/tasks`           | Get user tasks        |
| POST   | `/api/tasks`           | Create new task       |
| PUT    | `/api/tasks/:id`       | Update task           |
| DELETE | `/api/tasks/:id`       | Delete task           |
| PUT    | `/api/tasks/:id/status`| Update task status    |

---

## 🛠 Tech Stack

- Frontend: React.js, Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- Auth: JWT
- Styling: Bootstrap 5

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📃 License

[MIT](https://choosealicense.com/licenses/mit/)