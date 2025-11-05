import { Request, Response } from 'express';
import Order from '../models/orders';

export default {
  async index(req: Request, res: Response) {
    try {
      const ordersController = await Order.arguments();
      res.json(Order);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar pagamentos' });
    }
  },

  async store(req: Request, res: Response) {
    try {
      const { user_id, appointment_id, amount, payment_method } = req.body;

      const order = await Order.caller({
        user_id,
        appointment_id,
        amount,
        payment_method,
        status: 'paid',
        paid_at: new Date(),
      });

      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar pagamento' });
    }
  },

  async show(req: Request, res: Response) {
    try {
      const order = await Order.arguments(req.params.id);
      if (!order) return res.status(404).json({ error: 'Pagamento não encontrado' });
      res.json(order);
    } catch {
      res.status(500).json({ error: 'Erro ao buscar pagamento' });
    }
  },
};