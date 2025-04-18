// Estilização
import "./App.css"; // Importa os estilos da aplicação
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Listagem from "./pages/Listagem";
import CriacaoEdicao from "./pages/CriacaoEdicao";
import Detalhes from "./pages/Detalhes";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import axios from "axios";

// Componentes de estilização
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
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
      <GlobalStyle/>
        <Container>
        <Router>
          <div>
            <Navbar />

            <Routes>
              {/* Página de listagem de usuários*/}
              <Route 
                path="/" 
                element={<Listagem />}
              />

              {/* Página de criação e edição de usários*/}
              <Route 
                path="criacao_edicao" 
                element={<CriacaoEdicao />}
              />
              <Route
                path="/usuario/:id"
                element={<Detalhes />}
              />

            </Routes>

            
          </div>
        </Router>
      </Container>
      <Footer />
    </>
  ); 
}

export default App;