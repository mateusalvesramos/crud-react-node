import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detalhes = () => {
    // Capturando o id da URL.
    const { id } = useParams();
    // Criação de estado para o usuário (estado: "usuario").
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const getUser = async () => {
          try {
            const res = await axios.get(`http://localhost:8800/${id}`);
            setUsuario(res.data);
          } catch (error) {
            console.error("Erro ao buscar usuário:", error);
          }
        };
        
        getUser();
      }, [id]); // O effect roda sempre que o id mudar.

      if (!usuario) {
        return <p>Carregando dados do usuário...</p>;
      }

    return (
        <div>
            <h2>Detalhes do Usuário</h2>
            <div>
                <p><strong>ID:</strong> {usuario.id}</p>
                <p><strong>Nome:</strong> {usuario.nome}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Fone:</strong> {usuario.fone}</p>
            </div>
            <br/>
            <Link to="/">Voltar para a Lista</Link>
        </div>
    )
}

export default Detalhes;