import React from 'react';
import Table from "../components/Table.js";

const Listagem = ({ users, setUsers, setOnEdit }) => {

    return (
        <div>
            <Table users={users} setUsers={setUsers} setOnEdit={setOnEdit} mostrarAcoes={false} />
        </div>
    );
};

export default Listagem;