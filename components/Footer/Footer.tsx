import styled from "@emotion/styled";
import React from "react";
import { ContainerWrapper } from "../Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const FooterContainerWrapper = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
  min-height: 300px;
  display: flex;
`;

const FooterContainer = styled("div")({
  display: "flex",
  gap: "0 40px",
  padding: "30px 40px",
});

const FooterMenuBox = styled.ul`
  padding: 0;
  list-style: none;
`;

const LinkItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  padding: 4px 0;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: 16px;
`;

const menu = ["Articles", "Help & Faq", "About us", "Terms & Conditions"];

const Footer = () => {
  return (
    <ContainerWrapper>
      <FooterContainerWrapper>
        <FooterContainer>
          <FooterMenuBox>
            {menu.map((item) => {
              return <LinkItem key={item}>{item}</LinkItem>;
            })}
          </FooterMenuBox>
          <div>
            <IconContainer>
              <div>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>01100200010</div>
            </IconContainer>
            <IconContainer>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>test@test.com</div>
            </IconContainer>
          </div>
        </FooterContainer>
      </FooterContainerWrapper>
    </ContainerWrapper>
  );
};

export default Footer;
