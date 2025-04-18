import React from "react";
import styled from "styled-components";
import { FaTrash } from 'react-icons/fa';
import { FaPenToSquare } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import { Link } from "react-router-dom";

const TableStyle = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

// Recebendo uma propriedade chamada "users" (uma espécie de parâmetro).
const Table = ({ users, setUsers, setOnEdit, mostrarAcoes = true }) => {

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
        <TableStyle>
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
                        <td width="5%">{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.cpf}</td>
                        <td>{item.email}</td>
                        <td>{item.fone}</td>

                        {mostrarAcoes && (
                            <>
                                <td width="5%">
                                    <FaPenToSquare style={{ cursor: 'pointer' }} onClick={() => handleEdit(item)}/>
                                </td>
                                <td width="5%">
                                    <FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(item.id)} />
                                </td>
                            </>
                        )}
                        
                        <td width="5%">
                            <Link to={`/usuario/${item.id}`}>
                                <CgDetailsMore style={{ color: 'black' }} />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </TableStyle>
    );
};

export default Table;