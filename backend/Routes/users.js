// Rota de comunicação entre o backend e o frontend

import express from "express";
// Importando a const que armazena as querys e respostas do banco de dados.
import { getUsers, addUser, updateUser, deleteUser, getUserById } from "../Controllers/users.js";

const router = express.Router();

// Definindo uma rota na raiz.
// Este "getUsers" é chamado do "../Controllers/users.js".
router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", getUserById);

export default router;