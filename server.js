import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes.js';

// Initialize Express app
const app = express();

// Use environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from any origin
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS with credentials support
app.use(cors({ credentials: true }));

// Basic test route to confirm API is working
app.get('/', (req, res) => res.send("API working"));

// Use the imported router for handling routes
app.use('/', router)

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
