import { Request, Response } from "express";
import mercadopago from "../config/mercadoPago";
import mercadoPago from "../config/mercadoPago";

export const criarPagamento = async (req: Request, res: Response) => {
  try {
    const { title, quantity, price } = req.body;

    if (!title || !quantity || !price) {
      return res.status(400).json({ error: "Campos obrigatórios: title, quantity, price" });
    }

    const preference = {
      items: [
        {
          title,
          quantity: Number(quantity),
          currency_id: "BRL",
          unit_price: Number(price),
        },
      ],
      back_urls: {
        success: "https://seusite.com/sucesso",
        failure: "https://seusite.com/falha",
        pending: "https://seusite.com/pendente",
      },
      auto_return: "approved",
    };

    const response = await (preference);

    return res.status(200).json({
      id: response.auto_return.at,
      init_point: response.auto_return.at,
    });
  } catch (error: any) {
    console.error("Erro ao criar pagamento:", error);
    return res.status(500).json({ error: "Erro ao criar pagamento" });
  }
};