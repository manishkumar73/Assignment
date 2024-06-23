import express from 'express';
import { signin, signup } from '../controllers/userController.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
// router.post('/forgot-password', resetPassword);

export default router;
