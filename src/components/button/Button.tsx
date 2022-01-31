import React from "react";
import styled from "styled-components";
import { button } from "../../config/colors";

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  font-size: 1.3rem;
  background-color: ${button.background};
  color: ${button.text};
  transition: 0.2s all;
  box-shadow: 0 0 5px ${button.shadow};

  &:active {
    transform: scale(0.8);
  }
`;

interface IButton {
  text: string;
}

function Button({ text }: IButton) {
  return <StyledButton>{text}</StyledButton>;
}

export default Button;
