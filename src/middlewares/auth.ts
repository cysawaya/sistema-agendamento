import { Request, Response, NextFunction } from 'express';

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== "Bearer secrettoken123") {
    return res.status(401).json({ error: "Não autorizado" });
  }

  next();
}

