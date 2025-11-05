import { db } from "../config/database";
import { Agendamento } from "../types/Agendamento";

export const AgendamentoModel = {
  async listar(): Promise<Agendamento[]> {
    const [rows] = await db.query("SELECT * FROM agendamentos");
    return rows as Agendamento[];
  },

  async criar(agendamento: Agendamento): Promise<void> {
    const { nomeCliente, servico, data, horario } = agendamento;
    await db.query(
      "INSERT INTO agendamentos (nomeCliente, servico, data, horario) VALUES (?, ?, ?, ?)",
      [nomeCliente, servico, data, horario]
    );
  },

  async deletar(id: number): Promise<void> {
    await db.query("DELETE FROM agendamentos WHERE id = ?", [id]);
  },
};


