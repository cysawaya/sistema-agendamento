import mercadoPago from "console";
import router from "../routers";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

 mercadoPago.assert ({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN as string,
});

export default mercadoPago;