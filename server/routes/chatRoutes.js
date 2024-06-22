import express from 'express';
import { getChats, createChat } from '../controllers/chatController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/history', authMiddleware, getChats);
router.post('/message', authMiddleware, createChat);

export default router;
