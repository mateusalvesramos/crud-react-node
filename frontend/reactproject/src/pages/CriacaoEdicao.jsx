import React from 'react';
import Form from "../components/Form.js";
import Table from "../components/Table.js";

const CriacaoEdicao = ({ users, setUsers, onEdit, setOnEdit, getUsers }) => {

    return (
        <>
            <title>Usuários</title>
            <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
            <Table users={users} setUsers={setUsers} setOnEdit={setOnEdit} mostrarAcoes={true}/>
        </>
    );
};

export default CriacaoEdicao;