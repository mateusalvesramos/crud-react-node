// Comunicação entre o backend e o banco

// Importando a const que criamos no db.js
import {db} from "../db.js";

// Função para listagem de usuários.
// Passando como parâmetro a requisição e o response
export const getUsers = (_, res ) => {
    // Query SQL
    const q = "SELECT * FROM usuarios";
    // Este obejto "db" contem as informações de conexão com o nosso database.
    db.query(q, (err, data) => {
        // Verificando se há erro. Caso tenha, o retorna como resposta.
        if (err) return res.json(err);
        // Se não, retorna status positivo e a respota com a query.
        return res.status(200).json(data);
    });
};

// Função que realiza a adição de um novo usuário
export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(nome, email, cpf, fone) VALUES(?)"

    const values = [req.body.nome, req.body.email, req.body.cpf, req.body.fone];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    });
};

// Atualização dos dados do usuário.
export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET nome = ?, email = ?, cpf = ?, fone = ? WHERE id = ?";

    const values = [req.body.nome, req.body.email, req.body.cpf, req.body.fone]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

// Exclusão de usuário.
export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE id = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    });
};

export const getUserById = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json({ msg: "Usuário não encontrado." });
      return res.status(200).json(data[0]); // retorna o primeiro (e único) item
    });
  };
