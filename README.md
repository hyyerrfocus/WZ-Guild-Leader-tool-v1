# Guild Tracker (Vite + React + TypeScript)

A lightweight, fast, and modern guild tracking web app built for **World Zero**, a game within **Roblox**, using **Vite**, **React**, **TypeScript**, **TailwindCSS**, and **Recharts**.

This project was designed to make it extremely easy to:

* Track guild members and their progress
* Visualize growth and performance over time
* Import/export data
* Deploy instantly with Vercel

---

## 🚀 Features

### **📊 Dashboard Overview**

* Line charts showing current vs projected performance
* Auto‑calculated points and progression metrics
* Fully responsive, clean UI

### **👤 Member Breakdown**

* Individual member cards with:

  * Current floor
  * Speed (floors/day)
  * Days active
  * Total points
  * Projected performance

### **📥 Import Panel**

* Paste raw JSON
* Update member data instantly
* Future support for file upload

---

## 📂 Project Structure

```
root/
│ package.json
│ vite.config.ts
│ tsconfig.json
│ tailwind.config.js
│ index.html
│
└─ src/
   │ App.tsx
   │ main.tsx
   │ index.css
```

---

## 🛠️ Installation & Setup

### **1. Install Dependencies**

```sh
npm install
```

### **2. Run Development Server**

```sh
npm run dev
```

Your app will be live at:

```
http://localhost:5173
```

### **3. Build for Production**

```sh
npm run build
```

### **4. Preview Build Locally**

```sh
npm run preview
```

---

## ☁️ Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [https://vercel.com](https://vercel.com)
3. Click **Add New Project** and select your repo
4. Vercel will auto-detect Vite and deploy instantly

No configuration required.

---

## 🔧 Customization

You can easily modify:

* Member data structure
* Formula used to calculate points
* UI styling via Tailwind
* Chart types / colors / datasets

If you want modular components, persistent storage, or expanded analytics — just ask.

---

## 💬 Support

If you need help customizing, optimizing, or adding new features, feel free to ask!

Enjoy your new guild tracker 🎉
