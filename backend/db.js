// Configuração do Banco de Dados

import mysql from "mysql";

export const db = mysql.createConnection({
    // Objeto: informações para conexão com nosso banco de dados.
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crud_trab1"
});