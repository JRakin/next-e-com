import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Layout = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Layout;
