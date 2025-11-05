import { Router } from "express";
import {
  listarAgendamentos,
  criarAgendamento,
  deletarAgendamento,
} from "../controllers/agendamentoController";

const router = Router();

router.get("/agendamentos", listarAgendamentos);
router.post("/agendamentos", criarAgendamento);
router.delete("/agendamentos/:id", deletarAgendamento);

export default router;

