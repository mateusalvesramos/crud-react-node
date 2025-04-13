import React from "react";
import axios from "axios";

// Recebendo uma propriedade chamada "users" (uma espécie de parâmetro).
const Table = ({ users, setUsers, setOnEdit }) => {

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/" + id)
            // Promisse.
            // Data é o texto de sucesso que nós criamos no Controllers/user.js.
            .then(({ data }) => {
                // Criando um novo array filtrando os usuários retirando aquele no qual foi deletado (por meio do ID.
                const newArray = users.filter((user) => user.id !== id);

                // Atualizando a exibição dos usuários com o novo array filtrado.
                setUsers(newArray);
            })
            .catch(({ data }) => console.log(data));

        setOnEdit(null);
    };

    const handleEdit = async (item) => {
        setOnEdit(item);
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Fone</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.cpf}</td>
                        <td>{item.email}</td>
                        <td>{item.fone}</td>
                        <td>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;