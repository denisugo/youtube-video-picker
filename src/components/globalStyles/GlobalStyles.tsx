import { createGlobalStyle } from "styled-components";
import { global } from "../../config/colors";

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    
    html{
        height: 100%;
    }
   
    body{
        background-color: ${global.background};
        margin: 0;
        height: 100%;
        
    }

    #root{
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }
`;
