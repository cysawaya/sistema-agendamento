import {Router } from "express";
import { listarUsuariosEPedidos } from "../controllers/adminController";
import { autenticarAdmin } from "../Middleware/authMiddleware";

const router = Router();

router.get("/usuarios-pedidos", autenticarAdmin, listarUsuariosEPedidos);

export default router;

import adminRouter from "./orders.routers";
adminRouter.use("/admin", adminRouter);