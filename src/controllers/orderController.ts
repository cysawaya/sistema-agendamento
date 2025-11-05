import { Request, Response } from 'express';
import Order from '../models/Order';

export default {
  async index(req: Request, res: Response) {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar pagamentos' });
    }
  },

  async store(req: Request, res: Response) {
    try {
      const { user_id, appointment_id, amount, payment_method } = req.body;

      const order = await Order.create({
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
      const order = await Order.findByPk(req.params.id);
      if (!order) return res.status(404).json({ error: 'Pagamento não encontrado' });
      res.json(order);
    } catch {
      res.status(500).json({ error: 'Erro ao buscar pagamento' });
    }
  },
};