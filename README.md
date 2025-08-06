# 📊 Trade_Track

A full-stack MERN (MongoDB, Express, React, Node.js) trading platform inspired by Zerodha.  
Trade_Track offers a seamless user experience for managing holdings, placing buy/sell orders, viewing portfolios, and accessing detailed trading insights.

---


## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Screenshots](#-screenshots)
- [Author](#-author)
- [License](#-license)



## 🚀 Features

### 🔒 Authentication & Routing
- User login/signup functionality (coming soon)
- React Router-based navigation

### 📈 Dashboard Highlights
- Live Holdings Display with Quantity, Price, and P&L
- Fund Management Section
- Buy/Sell Order Windows
- Market Watchlist
- Positions Tracking
- Interactive Charts (e.g., Doughnut, Bar Graphs)

### 🌐 Landing Page
- Modern, responsive design
- Informational sections: Products, Pricing, Support, Team
- Hero sections and call-to-actions
- Font Awesome Icons and animated UI

---

## 🧰 Tech Stack

| Category      | Technologies                            |
|---------------|-----------------------------------------|
| Frontend      | React, HTML5, CSS3, JavaScript          |
| Styling       | CSS, Font Awesome, Flexbox              |
| Backend       | Node.js, Express.js                     |
| Database      | MongoDB (Mongoose ORM)                  |
| Charts        | Chart.js / Recharts (as applicable)     |
| Hosting       | GitHub (deployment steps optional)      |

---

## 📁 Folder Structure

```
Trade_Track/
│
├── backend/          # Node.js + Express API
│   ├── model/        # Mongoose Models
│   ├── schemas/      # MongoDB Schemas
│   └── index.js      # Backend entry point
│
├── dashboard/        # React dashboard for user trading
│   ├── src/components/  # Charts, Holdings, Orders, etc.
│   ├── public/
│   └── package.json
│
├── frontend/         # React landing page (Home, About, Pricing, etc.)
│   ├── src/landing_page/
│   ├── public/media/
│   └── package.json
```


## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Ashish-KumarGupta/Trade_Track.git
cd Trade_Track
```

### 2️⃣ Install dependencies

Install separately in all 3 folders:

```bash
cd backend
npm install

cd ../dashboard
npm install

cd ../frontend
npm install
```

### 3️⃣ Setup environment variables (backend)

Create a `.env` file inside the `backend` folder:

```
MONGO_URL=your_mongodb_connection_string
PORT=3002
```

### 4️⃣ Run servers

#### Run backend
```bash
cd backend
node index.js
```

#### Run dashboard
```bash
cd ../dashboard
npm start
```

#### Run landing page
```bash
cd ../frontend
npm start
```

---

## 🧑‍💻 Author

**Ashish Kumar Gupta**

💼 Developer of Trade_Track – A full-stack stock trading dashboard inspired by Zerodha.  
🎓 Final Year Project Published by IEEE: _Crime Pattern Detection Using Historical Data_  
🔗 [LinkedIn](https://www.linkedin.com/in/ashish-kumar-gupta/)  
📬 Feel free to connect or raise issues on GitHub.
