# HNG Task – Profile Endpoint (Express.js)

This project is a simple RESTful API built with **Node.js** and **Express.js** that returns profile information and a random cat fact from the [Cat Facts API](https://catfact.ninja/fact).

---

## 🚀 Endpoint

**GET** `/me`

### ✅ Sample Response

```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Your Backend Stack"
  },
  "timestamp": "2025-10-15T14:20:45.123Z",
  "fact": "Cats sleep for around 70% of their lives."
}
```

### Response Details

| Field        | Type   | Description                          |
| ------------ | ------ | ------------------------------------ |
| `status`     | string | Always `"success"`                   |
| `user.email` | string | Your email address                   |
| `user.name`  | string | Your full name                       |
| `user.stack` | string | Backend technology stack             |
| `timestamp`  | string | Current UTC time in ISO 8601 format  |
| `fact`       | string | A random cat fact from Cat Facts API |

---

## ⚙️ Setup Instructions

### 🧩 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/hng-profile-endpoint.git
cd hng-profile-endpoint
```

---

### 🧩 2️⃣ Install Dependencies

Install all project dependencies using **npm**:

```bash
npm install
```

---

### 🧩 3️⃣ Create an Environment File

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
EMAIL=youremail@example.com
NAME=Your Full Name
STACK=Node.js/Express
```

---

### 🧩 4️⃣ Run the Project Locally

Start the development server:

```bash
node server.js
```

By default, it runs on port **3000** (or your custom port if specified in `.env`).

Visit:
👉 [http://localhost:3000/me](http://localhost:3000/me)

You should see a JSON response with your details and a random cat fact.

---

## 🧰 Dependencies

| Package     | Purpose                                      |
| ----------- | -------------------------------------------- |
| **express** | Web framework for creating API endpoints     |
| **axios**   | For fetching data from the Cat Facts API     |
| **cors**    | Enables CORS for external API requests       |
| **dotenv**  | Loads environment variables from `.env` file |

To install all dependencies:

```bash
npm install express axios cors dotenv
```

---

## 🌍 Environment Variables

| Variable | Description                     | Example                 |
| -------- | ------------------------------- | ----------------------- |
| `PORT`   | Port number where your app runs | `3000`                  |
| `EMAIL`  | Your email address              | `you@example.com`       |
| `NAME`   | Your full name                  | `Ikemdinachi Uzochukwu` |
| `STACK`  | Backend stack name              | `Node.js/Express`       |

---

## 🧪 Testing the Endpoint

You can test your API using:

### 🟩 Option 1: Browser

Visit:

```
http://localhost:3000/me
```

### 🟨 Option 2: cURL

```bash
curl http://localhost:3000/me
```

### 🟦 Option 3: Postman / Thunder Client

Make a `GET` request to `/me` and check the JSON response.

---

## ⚠️ Error Handling

If the Cat Facts API is unavailable, the endpoint still responds successfully with:

```json
{
  "status": "success",
  "fact": "Could not fetch cat fact at this time."
}
```

This ensures reliability and good user experience even when the third-party API fails.

---

## 🧱 Project Structure

```
hng-profile-endpoint/
│
├── controller.js      # Handles fetching cat facts and building JSON response
├── routes.js          # Defines the /me route
├── server.js          # App entry point
├── .env.example       # Example environment variable file
├── .env               # (Ignored) Actual environment file
├── package.json       # Dependencies and scripts
└── README.md          # Documentation
```

---

## 🌐 Deployment

You can deploy this API to any platform **except Vercel**, such as:

- [Railway.app](https://railway.app)
- [Heroku](https://www.heroku.com)
- [PXXL App](https://pxxl.app)
- [AWS EC2](https://aws.amazon.com/ec2/)

Make sure to set your `.env` variables on the hosting platform.

---

## 👨🏽‍💻 Author

**Ikemdinachi Uzochukwu**

- [GitHub](https://github.com/<your-username>)
- [LinkedIn](https://linkedin.com/in/<your-link>)

---
