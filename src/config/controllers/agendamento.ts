import { UserRepository } from "../repositories/UserRepository.js";

export const UserController = {
  async index(req, res) {
    const users = await UserRepository.findAll();
    res.json(users);
  },

  async show(req, res) {
    const user = await UserRepository.findOne(req.params.id);
    res.json(user);
  },

  async update(req, res) {
    const updated = await UserRepository.update(req.params.id, req.body);
    res.json(updated);
  },

  async destroy(req, res) {
    const result = await UserRepository.destroy(req.params.id);
    res.json(result);
  },
};
