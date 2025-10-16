import express from 'express';
import { getDetails } from './controller.js';

// Create a new Express router instance
const router = express.Router();

// Define the /me route that uses the getDetails controller function
// This route will respond with user details when accessed
router.get('/me', (req, res) => getDetails(res));

// Export the router to be used in server.js
export default router;
