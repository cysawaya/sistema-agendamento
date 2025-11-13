import { Request, Response, NextFunction } from "express";

export interface DecodedUser {
  id: number;
  role: "admin" | "user";
}

export const autenticarAdmin = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  };
