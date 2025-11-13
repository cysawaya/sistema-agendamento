import { Router } from "express";
import { criarPagamento } from "../controllers/pagamentoController";

const router = Router();

router.post("/", criarPagamento);

export default router;

import pagamentoRouter from "./orders.routers";
pagamentoRouter.use("/pagamentos", pagamentoRouter);