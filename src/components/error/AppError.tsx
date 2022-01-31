import styled from "styled-components";
import { error } from "../../config/colors";

const StyledError = styled.h2`
  font-size: 1.5rem;
  color: ${error.text};
`;

function AppError() {
  return <StyledError>An error occured🥲</StyledError>;
}

export default AppError;
