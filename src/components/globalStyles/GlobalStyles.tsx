import { createGlobalStyle } from "styled-components";
import { global } from "../../config/colors";

export const GlobalStyle = createGlobalStyle`

    
    
    html{
        height: 100%;
    }
    
    body{
        margin: 0;
        height: 100%;
        background: ${global.background}; 
        box-sizing: border-box;
        
    }
    
    #root{
        height: 100%;
        font-family: 'Roboto', sans-serif;
        
    }
`;
