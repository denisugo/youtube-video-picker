import { ReactChild, FormEvent } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px;
`;

interface IForm {
  children: ReactChild | ReactChild[];
  callback?: (e: FormEvent<HTMLFormElement>) => void;
}

function Form({ children, callback }: IForm) {
  return <StyledForm onSubmit={callback}>{children}</StyledForm>;
}

export default Form;
