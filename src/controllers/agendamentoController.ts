import { Request, Response } from "express";
import { AgendamentoModel } from "../models/agendamentoModel";
import { Agendamento } from "../types/Agendamento";

export const listarAgendamentos = async (req: Request, res: Response) => {
  try {
    const agendamentos = await AgendamentoModel.listar();
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar agendamentos", error });
  }
};

export const criarAgendamento = async (req: Request, res: Response) => {
  try {
    const novoAgendamento: Agendamento = req.body;
    await AgendamentoModel.criar(novoAgendamento);
    res.status(201).json({ message: "Agendamento criado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar agendamento", error });
  }
};

export const deletarAgendamento = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    await AgendamentoModel.deletar(id);
    res.status(200).json({ message: "Agendamento excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir agendamento", error });
  }
};

