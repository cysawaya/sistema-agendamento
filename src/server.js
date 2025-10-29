import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { authMiddleware } from "./authMiddleware.js";

dotenv.config();
const app = express();
app.use(express.json());

// Usuário fake para exemplo
const userDB = {
  id: 1,
  username: "admin",
  password: bcrypt.hashSync("123456", 10), // senha criptografada
};

// 🔐 Rota de Login (gera o token)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== userDB.username) {
    return res.status(401).json({ message: "Usuário não encontrado" });
  }

  const passwordMatch = bcrypt.compareSync(password, userDB.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Senha incorreta" });
  }

  // Gerar Token JWT
  const token = jwt.sign(
    { id: userDB.id, username: userDB.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return res.json({ auth: true, token });
});

// 🔒 Rota protegida
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.username}!` });
});

app.listen(3000, () => console.log("✅ Servidor rodando na porta 3000"));
