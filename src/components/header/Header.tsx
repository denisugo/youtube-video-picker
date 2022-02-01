import styled from "styled-components";
import { header } from "../../config/colors";
import { AiOutlineYoutube } from "react-icons/ai";

const StyledHeader = styled.header`
  width: calc(100vw - 40px);
  padding: 20px;
  margin-bottom: 20px;
  font-size: 2rem;
  background-color: ${header.background};
  color: ${header.text};
  box-shadow: 0 0 5px ${header.shadow};

  span {
    margin: 0 10px;
    font-size: 1.75rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <span>
        <AiOutlineYoutube />
      </span>
      Welcome to my app. It will help you to pick a random video from a provided
      youtube channel
    </StyledHeader>
  );
}

export default Header;
