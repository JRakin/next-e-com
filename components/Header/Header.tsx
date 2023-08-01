import React from "react";
import { Container, ContainerWrapper } from "../Container/Container";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <ContainerWrapper data-testid="header">
      <Container>
        <NavBar />
      </Container>
    </ContainerWrapper>
  );
};

export default Header;
