
export interface Agendamento {
  id?: number;
  nomeCliente: string;
  servico: string;
  data: string;    // Formato YYYY-MM-DD
  horario: string; // Formato HH:MM
}
