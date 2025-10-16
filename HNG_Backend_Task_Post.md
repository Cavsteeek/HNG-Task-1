# 🚀 Building My HNG Stage 0 Backend Task: Profile Endpoint with Express.js

### 💡 Introduction
For my HNG Stage 0 backend task, I was asked to build a simple **Express.js API** that returns profile details (name, email, and GitHub URL) along with a fun **cat fact** fetched from an external API.  

This project helped me strengthen my understanding of **Express.js routing**, **asynchronous API calls**, and the importance of clean documentation and environment setup.

---

## 🧱 Project Structure
```
├── controller.js
├── routes.js
├── server.js
├── .env.example
└── README.md
```

### Main Files:
- **server.js** – Starts the Express server and applies middleware.
- **routes.js** – Handles routing to `/me`.
- **controller.js** – Contains logic to fetch and send user data with a cat fact.

---

## ⚙️ My Work Process

### Step 1: Setting Up the Server
I began by installing **Express**, **CORS**, and **dotenv**, then initialized my server file (`server.js`).  
I ensured the server runs on the port specified in the `.env` file or defaults to 3000.

### Step 2: Creating Routes and Controllers
I created a `/me` route that returns:
- My **name**
- My **email**
- My **GitHub repository link**
- A **cat fact** fetched from `https://catfact.ninja/fact`

This helped me understand how to structure small, modular Express.js applications using routes and controllers.

### Step 3: Environment Variables
Even though this project is simple, I added an `.env` file for flexibility and to demonstrate good practices.  

Example:
```env
PORT=3000
```

### Step 4: Writing a Clean README
A good project must be easy to understand for others.  
So, I created a **README.md** with:
- Setup instructions  
- Local run guide  
- List of dependencies  
- `.env` configuration example  
- Example API response  

---

## 🧪 Testing the API
Once everything was set up, I tested the `/me` endpoint using **Postman** and **browser**.

**Example Response:**
```json
{
  "success": true,
  "data": {
    "name": "Ikemdinachi Uzochukwu",
    "email": "ikem@example.com",
    "github_url": "https://github.com/ikemdinachi/hng-profile-endpoint",
    "cat_fact": "Cats sleep for 70% of their lives."
  }
}
```

---

## 🧠 What I Learned
- How to structure a simple backend project using Express.js.
- Importance of modular code (controllers, routes, and server separation).
- Using `.env` for environment variables.
- Writing clean and developer-friendly documentation.
- Testing endpoints efficiently using Postman.

---

## 🖼️ Supporting Snapshots
*(Insert screenshots here)*  
- Postman test result for `/me`
- Folder structure in VS Code
- Console showing “Server running on port 3000”

---

## 🧩 Repository Link
🔗 [GitHub Repository](#) — *(Replace with your actual repo link once uploaded)*

---

## ✨ Final Thoughts
This task was more than just writing code — it was about building a maintainable project and learning the workflow of real-world backend development.  
I’m excited for the next stages of the HNG internship and looking forward to more challenging projects!
