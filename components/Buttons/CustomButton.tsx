import styled from "@emotion/styled";
import React from "react";

interface ICustomButton {
  type?: "primary" | "ghost" | "outlined";
  size?: "small" | "medium" | "large";
  style?: any;
  className?: string;
  buttonText?: string;
  clickType: "submit" | "button";
  clickHandler?: () => void;
}


const StyledButton = styled.button`
    padding: 8px 24px;
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 12px;
`

const CustomButton: React.FC<ICustomButton> = ({
  type,
  size,
  style,
  className,
  buttonText,
  clickType,
  clickHandler,
}) => {
  return (
    <StyledButton onClick={clickHandler} style={style} type={clickType}>
      {buttonText || "Submit"}
    </StyledButton>
  );
};

export default CustomButton;
