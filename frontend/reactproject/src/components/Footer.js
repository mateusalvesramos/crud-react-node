import React from "react";
import styled from "styled-components";

// Rodapé
const FooterStyle = styled.footer`
  background-color: #eeeeee;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #555;
`;

const Footer = () => {
    return(
        <FooterStyle>
            Desenvolvido por <strong>Mateus Alves Ramos</strong> - Ciência da Computação - PUCPR
        </FooterStyle>
    )
}

export default Footer;