import { Router } from 'express';
import OrderController from '../controllers/ordersController';

const router = Router();

router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);
router.get('/orders/:id', OrderController.show);

export default router;