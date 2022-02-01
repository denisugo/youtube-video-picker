import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { input } from "../../config/colors";

const StyledInput = styled.input`
  height: 40px;
  outline: none;
  border: none;
  width: calc(100% - 150px);
  padding: 10px 20px;
  margin: 10px;
  border-radius: 30px;
  box-shadow: 0 0 5px ${input.shadow};
  font-size: 1.3rem;
  color: ${input.text};
  -webkit-appearance: none;

  &::placeholder {
    color: ${input.placeholder};
  }

  &:focus {
    box-shadow: 0 0 10px ${input.shadow};
  }
`;

const Input = forwardRef((props: any, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <StyledInput
      ref={ref}
      type="text"
      required={true}
      placeholder="Paste a channel name"
    />
  );
});

export default Input;
