import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavContainer = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  align-items: center;
`;

const NavItemContainer = styled.ul`
  display: flex;
  gap: 0 10px;
  padding: 0;
`;

const NavItem = styled.li`
  list-style-type: none;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const SignInNav = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

const menu = [
  { id: 0, url: "/", name: "Home" },
  { id: 1, url: "products", name: "Products" },
  { id: 2, url: "collections", name: "Collections" },
  { id: 3, url: "about", name: "About" },
];

const NavBar = () => {
  return (
    <NavContainer>
      <NavItemContainer>
        {menu.map((item) => {
          return (
            <Link key={item.id} href={"/" + item.url} passHref>
              <NavItem>{item.name}</NavItem>
            </Link>
          );
        })}
      </NavItemContainer>
      <Box>
        <Link passHref href={"/sign-in"}>
          <SignInNav>Sign in</SignInNav>
        </Link>
      </Box>
    </NavContainer>
  );
};

export default NavBar;
