import styled from "styled-components";
import {theme} from "../styles/Theme";

export const IconWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.primaryBg};
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: top left;

        position: absolute;
        z-index: -1;
        left: 50%;
        top: 50%;
    }
`