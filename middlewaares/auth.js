function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== "Bearer secrettoken123") {
    return res.status(401).json({ error: "Não autorizado" });
  }

  // Continua para o próximo middleware ou rota
  next();
}
