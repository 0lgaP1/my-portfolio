import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: grab;
`

export const StyledSlide = styled.div`
    text-align: center;
`

export const StyledText = styled.p`
    
`

export const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 36px;
    display: inline-block;
`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        
        border-radius: 20px;
        background-color: rgba(129, 110, 162, 0.95);

        & + span {
            margin-left: 5px;
        }
        
        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`