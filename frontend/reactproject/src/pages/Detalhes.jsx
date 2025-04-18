import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ccc;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  color: #1976d2;
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 1rem;
  margin: 10px 0;

  strong {
    color: #333;
    margin-right: 5px;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: #1976d2;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

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
        <Container>
            <Title>Detalhes do Usuário</Title>
            <Info><strong>ID:</strong> {usuario.id}</Info>
            <Info><strong>Nome:</strong> {usuario.nome}</Info>
            <Info><strong>Email:</strong> {usuario.email}</Info>
            <Info><strong>Fone:</strong> {usuario.fone}</Info>
            <br/>
            <BackLink to="/">Voltar para a Lista</BackLink>
        </Container>
    );
};

export default Detalhes;