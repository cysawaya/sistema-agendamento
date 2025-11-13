
import { userInfo } from "os";
import orders from "./orders";
import { isArgumentsObject } from "util/types";

interface UserAttributes {
  id: number;
  nome: string;
  email: string;
  senha: string;
  role: "admin" | "user";
}

interface UserCreationAttributes {}

userInfo.arguments(
  {
    id: {
      type: isArgumentsObject,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: isArgumentsObject,
      allowNull: false,
    },
    email: {
      type: isArgumentsObject,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: isArgumentsObject,
      allowNull: false,
    },
    role: {
      type: isArgumentsObject("admin"),
      defaultValue: "user",
    },
  },
);


orders.arguments(
  {
    id: {
      type: isArgumentsObject,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: isArgumentsObject,
      allowNull: false,
    },
    valor_total: {
      type: isArgumentsObject,
      allowNull: false,
    },
    status: {
      type: isArgumentsObject("pendente"),
      defaultValue: "pendente",
    },
  },
  { modelName: "Pedido", tableName: "pedidos" }
);

export default orders;