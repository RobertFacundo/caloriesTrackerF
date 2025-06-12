# 🥗 Calories Tracker Frontend

This is the **frontend** of the **Calories Tracker** application, built with **React + Vite**. It connects to a Ruby on Rails backend API and allows users to track their meals, calorie intake, weight changes, and overall health progress over time.

---

## 🔗 Live Demo

👉 [Visit the deployed app](https://calories-tracker-f.vercel.app/)

---

## 🛠️ Stack

- ⚛️ React 18
- ⚡ Vite
- 🎨 Styled Components
- 📈 Chart.js (`react-chartjs-2`)
- 🧭 React Router
- 🌐 Axios  
- 🔐 JWT Authentication (via API)

---

## 📦 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/calories-tracker-frontend.git
cd calories-tracker-frontend
```

### 2. Install dependencies

npm install

### 3. Start the development server

npm run dev

Make sure the backend is running at the correct API base URL

------

## 🚀 Features
🔐 User Authentication (Login/Signup via JWT)

📅 Daily Logs: View and manage daily meals

🍽️ Add Meals & Ingredients to a log

📊 Statistics:

Weekly / Monthly / Yearly calories

Weight progression

Calorie deficit overview

🧭 Guided Tour with React Joyride

📈 Chart.js Visualizations for calories and weight

⚖️ Weight Logging and updates

💡 Responsive Design for mobile/desktop

## 📁 Project Structure

```bash
src/
├── api/             # Axios config and API calls
├── components/      # Reusable UI components
├── views/           # Route-level views
├── context/         # AuthContext, ThemeContext, etc.
├── hooks/           # Custom React hooks
├── services/        # Calls to backend
├── styles/          # CSS or styled-components
└── main.jsx         # Entry point
```

## 📡 Communication with Backend
The frontend consumes the following backend API endpoints:

POST /login — Authenticate and get JWT

POST /signup — Register new user

GET /daily_logs — Fetch logs

POST /meals / POST /ingredients — Add food data

GET /stats/weekly, /monthly, /annually

GET /weight_entries / POST /weight_entries

All requests are authenticated with a Bearer JWT token stored in localStorage.

## ✅ Deployment

This app was delpoyed using Vercel(FrontEnd) and Render(BackEnd)

----

## 📬 Contact

Created by **Facundo Robert** – [GitHub](https://github.com/RobertFacundo)  

Feel free to reach out for collaboration or feedback!!

----
