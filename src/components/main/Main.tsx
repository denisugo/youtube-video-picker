import { ReactChild } from "react";
import styled from "styled-components";
import { paragraph } from "../../config/colors";

const StyledMain = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    margin: 20px 20px 0;
    color: ${paragraph.text};
  }
`;

interface IMain {
  children: ReactChild | ReactChild[];
}

function Main({ children }: IMain) {
  return (
    <StyledMain>
      <p>
        This will choose one video from the 50 most popular videos on the
        channel
      </p>
      {children}
    </StyledMain>
  );
}

export default Main;
