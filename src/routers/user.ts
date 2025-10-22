import { Router, Request, Response } from 'express';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.get('/profile', authMiddleware, (req: Request, res: Response) => {
  res.json({ user: "João da Silva", idade: 30 });
});

export default router;
