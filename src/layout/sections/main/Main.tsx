import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/main-photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <StyledText>
                        <SmallText>Hi there!</SmallText>
                        <NameText>I'm <span>Olga Patapchuk</span></NameText>
                        <MainTitle>A Web Developer</MainTitle>
                    </StyledText>

                    <PhotoWrapper>
                        <Photo src={photo} alt="Main photo"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: rgba(129, 110, 162, 0.95);
    display: flex;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledText = styled.div`

`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`

const NameText = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::before {
            width: 100%;
            height: 20px;
            content: "";
            background-color: ${theme.colors.accent};
            display: inline-block;

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        background-color: transparent;
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`
