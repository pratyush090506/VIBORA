# 🐍 VIBORA: Your Walls, Your Story (Full-Stack E-commerce)

Hey there! Welcome to the **VIBORA**. We're building a unique e-commerce platform dedicated to selling amazing, exclusive posters.  
Our core mission is to emotionally connect with students, making the discovery process of finding a new poster as exciting as the art itself.

This repository holds everything: a sleek **React Frontend** and a robust **Node.js/Express Backend** working together seamlessly.

---

## ✨ The Vibe & Features

We aimed for a design that feels **bold, not boring**. The site rocks a **dark theme** with custom, exciting fonts to reflect that unique poster culture.

### 🔐 Full Login Suite
- We've got standard registration, plus the frontend is fully ready for a smooth **"Login with Google"** experience.

### 🛒 Smart Shopping
- Your cart magically remembers your choices even after a refresh (thanks to persistent state).

### 📊 Real Data Flow
- The Dashboard dynamically loads products (and can filter them by category!) and shows real order history straight from the database.

### 💳 Seamless Checkout
- The cart leads to a functional checkout that creates a genuine order in the backend.

---

## 🛠️ Tech Stack: The Engines Under the Hood

### Frontend (`./frontend`)
- **Framework:** React (Vite)
- **Style:** Tailwind CSS for fast, flexible, utility-first design.
- **Data:** React Hooks (`useState`, `useEffect`)

### Backend (`./backend`)
- **Server:** Node.js + Express.js  
- **Database:** MongoDB (using Mongoose)  
- **Auth:** JWTs for secure sessions and Bcrypt for safe passwords  
- **Connectivity:** CORS setup for secure cross-origin communication

---

## 💻 Getting Started (Local Setup)

To get VIBORA running on your own machine, you'll need two terminals open—one for the backend and one for the frontend.

### ✅ Prerequisites
Make sure you have **Node.js (LTS)** installed.

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend` and add your credentials:

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING_HERE
JWT_SECRET=YOUR_SUPER_SECRET_TOKEN_KEY
```

Start the backend server:

```bash
node server.js
```

Server runs on: **http://localhost:5001**

---

### 2. Frontend Setup

```bash
cd ../frontend
npm install
```

To enable Google Login locally, add this inside `<head>` of `index.html`:

```html
<script src="https://accounts.google.com/gsi/client" async defer></script>
```

Run the frontend server:

```bash
npm run dev
```

Frontend opens at: **http://localhost:5173**

---

## 🚀 Going Live (Deployment)

This project uses the modern, easy route for deployment: **Render** (backend) and **Netlify** (frontend).

### 🌐 Connection Details

| Service | Platform | URL |
|----------|-----------|-----|
| Frontend | Netlify | https://vibora.netlify.app |
| Backend | Render | https://vibora-web.onrender.com |

---

## 🔗 Important API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/signup` | Create your account |
| POST | `/api/auth/login` | Log in and grab your session token |
| GET | `/api/auth/me` | Check if you're still logged in |
| GET | `/api/poster` | See all available posters (supports filtering by ?category=Name) |
| POST | `/api/orders` | Create a new order from your cart |
| GET | `/api/orders` | View your order history |

---

Made with ❤️ by the VIBORA Team 
> “Your walls tell your story — make it a bold one.”
