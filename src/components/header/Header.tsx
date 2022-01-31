import styled from "styled-components";
import { header } from "../../config/colors";

const StyledHeader = styled.header`
  width: calc(100vw - 40px);
  padding: 20px;
  margin-bottom: 20px;
  font-size: 2rem;
  background-color: ${header.background};
  color: ${header.text};
  box-shadow: 0 0 5px ${header.shadow};
`;

function Header() {
  return (
    <StyledHeader>
      Welcome to my app. Here it will help you to pick a random video from a
      provided youtube channel
    </StyledHeader>
  );
}

export default Header;
