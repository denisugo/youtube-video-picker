import { createGlobalStyle } from "styled-components";
import { global } from "../../config/colors";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${global.background};
        margin: 0;
    }
`;
