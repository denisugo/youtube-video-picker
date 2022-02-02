import styled from "styled-components";
import { button } from "../../config/colors";
import { IoIosSwap } from "react-icons/io";

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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    transform: scale(0.8);
  }
`;

function Button() {
  return (
    <StyledButton>
      <IoIosSwap />
    </StyledButton>
  );
}

export default Button;
