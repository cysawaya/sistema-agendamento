import { User } from "../models/User.js";

export const UserRepository = {
  // 🔍 Buscar todos os registros
  async findAll() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error("Erro ao buscar usuários: " + error.message);
    }
  },

  // 🔍 Buscar um único registro por ID
  async findOne(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Usuário não encontrado");
      return user;
    } catch (error) {
      throw new Error("Erro ao buscar usuário: " + error.message);
    }
  },

  // ✏️ Atualizar um registro
  async update(id, data) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Usuário não encontrado");

      await user.update(data);
      return user;
    } catch (error) {
      throw new Error("Erro ao atualizar usuário: " + error.message);
    }
  },

  // 🗑️ Excluir um registro
  async destroy(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Usuário não encontrado");

      await user.destroy();
      return { message: "Usuário removido com sucesso" };
    } catch (error) {
      throw new Error("Erro ao excluir usuário: " + error.message);
    }
  },
};
