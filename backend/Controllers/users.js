// Comunicação entre o backend e o banco

// Importando a const que criamos no db.js
import {db} from "../db.js";

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

