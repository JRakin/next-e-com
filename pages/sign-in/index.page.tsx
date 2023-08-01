import React from "react";
import SignInForm from "./components/SignInForm";
import { ContainerWrapper } from "@/components/Container/Container";
import { Box } from "@mui/material";

const Signin = () => {
  return (
    <ContainerWrapper>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', minHeight: 'calc(100vh - 370px)' }}>
        <SignInForm />
      </Box>
    </ContainerWrapper>
  );
};

export default Signin;
