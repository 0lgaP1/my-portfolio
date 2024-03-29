import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        
        min-width: 360px;
    }
    
    a {
        text-decoration: none;
        color: ${theme.colors.font};
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: unset;
        cursor: pointer;
        color: ${theme.colors.font};
    }
    
    section {
        padding: 100px 0;
        
        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }
    
    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }
    
    p {
        font-size: 14px;
        line-height: 1.4;
        font-weight: 400;
    }
    
    h3 {
        letter-spacing: 1px;
        font-size: 21px;
        font-weight: 700;
        font-family: 'Josefin Sans', sans-serif;
    }
    
`
