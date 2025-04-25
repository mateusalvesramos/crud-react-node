import GlobalStyle from "./styles/global";
import styled from "styled-components";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        // Realizando a ordenação dos dados que vem da requisição por ordem crescente de ID.
        setUsers(res.data.sort((a, b) => (a.id - b.id ? 1 : -1)));
        } catch (error) {
        // Futuramente add um popup ou toast.
        console.error("Erro ao buscar usuários:", error); 
        }
    };

    useEffect(() => {
        getUsers();
    }, [setUsers]);

  useEffect(() => {
    getUsers();
  }, []);

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
                element={<Listagem users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>}
              />

              {/* Página de criação e edição de usários*/}
              <Route 
                path="criacao_edicao" 
                element={<CriacaoEdicao users={users} setUsers={setUsers} onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>}
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