import express from 'express';
import { submitFeedback, getAllFeedback } from '../controllers/fc.js';
const router = express.Router();

router.get('/getall', getAllFeedback);
router.post('/submit', submitFeedback);

export default router;
