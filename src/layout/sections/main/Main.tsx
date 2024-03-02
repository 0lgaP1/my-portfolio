import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/main-photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"center"}>
                <StyledText>
                    <span>Hi there!</span>
                    <h2>I'm Olga Patapchuk</h2>
                    <h1>A Web Developer</h1>
                </StyledText>
                <Photo src={photo} alt="Main photo" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 90vh;
    background-color: rgba(129, 110, 162, 0.95);
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledText = styled.div`

`
