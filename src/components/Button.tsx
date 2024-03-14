import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    z-index: 0;
    
    &:hover {
        &::before {
        height: 100%;
        width: 100%;
    }
    }
    
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        border-radius: 3px;
        transform: translateX(-50%);
    }
`
