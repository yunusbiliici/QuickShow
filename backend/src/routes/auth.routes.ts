import { Router } from 'express';
import { login, getProfile } from '../controllers/auth.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', login);
router.get('/profile', authenticate, getProfile);

export default router; 