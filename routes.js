import express from 'express';
import { getDetails } from './controller.js';


const router = express.Router();
router.get('/me', (req, res) => getDetails(res));

export default router;
