import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Container da navbar
const Nav = styled.nav`
  background-color: #1976d2;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

// Links da navbar
const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLinks>
          <StyledLink to="/">Listagem</StyledLink>
          <StyledLink to="/criacao_edicao">Cadastro</StyledLink>
        </NavLinks>
        <strong>Usuários</strong>
      </Nav>
    </>
  );
};

export default Navbar;