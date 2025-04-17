// Este é o componente raiz da aplicação, que renderiza a lista de usuários e exibe um modal ao clicar em um usuário.

import { useState, useEffect } from "react";
import "./App.css"; // Importa os estilos da aplicação
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Listagem from "./pages/Listagem";
import CriacaoEdicao from "./pages/CriacaoEdicao";
import Detalhes from "./pages/Detalhes";
import axios from "axios";

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
    <Router>
      <div>
        <nav>
          <Link to="/">Listagem</Link>
          <Link to="/criacao_edicao">Cadastro</Link>
          <Link to="/detalhes">Detalhes</Link>
          <h3>Mateus Alves Ramos</h3>
        </nav>

        
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
  ); 
}

export default App;