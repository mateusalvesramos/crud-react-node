import React from 'react';
import Form from "../components/Form.js";
import Table from "../components/Table.js";
import { useState, useEffect } from "react";
import axios from "axios";

const CriacaoEdicao = () => {
    // Esta lista de usuários será passada para a tabela.
    const [users, setUsers] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    // Requisição ao banco da lista de usuários.
    const getUsers = async () => {
        try {
        const res = await axios.get("http://localhost:8800");
        // Realizando a ordenação dos dados que vem da requisição por ordem alfabética.
        // ? é um if, antes dele vem a condição.
        setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
        // Futuramente add um popup ou toast.
        console.error("Erro ao buscar usuários:", error); 
        }
    };

    useEffect(() => {
        getUsers();
    }, [setUsers]);

    return (
        <>
            <title>Usuários</title>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
            <Table users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>
        </>
    )
}

export default CriacaoEdicao;