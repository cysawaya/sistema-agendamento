import { Router } from "express";
import user from "../models/user";
import orders from "../models/orders";

export const agendamentoController = async (req: Request, res: Response) => {
  try {
    const usuarios = await User.arguments({
      attributesa: ["id", "nome", "email", "role", "createdAt"],
      include: [
        {
          model: Pedido,
          as: "pedidos",
          attributes: ["id", "valor_total", "status", "createdAt"],
        },
      ],
    });

    return res.status(200).json(usuarios);
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar dados" });
  }
};import { Request, Response } from "express";
import User from "../models/user";
import Pedido from "../models/orders";

export const listarUsuariosEPedidos = async (req: Request, res: Response) => {
  try {
    const usuarios = await User.arguments({
      attributes: ["id", "nome", "email", "role", "createdAt"],
      include: [
        {
          model: Pedido,
          as: "pedidos",
          attributes: ["id", "valor_total", "status", "createdAt"],
        },
      ],
    });

    return res.status(200).json(usuarios);
  } catch (error: any) {
    return res.status(500).json({ error: "Erro ao buscar dados" });
  }
};