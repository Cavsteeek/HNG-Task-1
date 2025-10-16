# HNG Task – Profile Endpoint (Express.js)

This project is a simple RESTful API built with **Node.js** and **Express.js** that returns profile information and a random cat fact from the [Cat Facts API](https://catfact.ninja/fact).

---

## 🚀 Endpoint
### `GET /me`

**Response format:**
```json
{
  "status": "success",
  "user": {
    "email": "<your email>",
    "name": "<your full name>",
    "stack": "<your backend stack>"
  },
  "timestamp": "<current UTC time in ISO 8601 format>",
  "fact": "<random cat fact>"
}
