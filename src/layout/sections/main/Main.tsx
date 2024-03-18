import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/main-photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
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
    display: flex;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`
const StyledText = styled.div`

`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;
`

const NameText = styled.h2`
    ${font( {family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

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
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

const MainTitle = styled.h1`
    ${font( {weight: 400, Fmax: 27, Fmin: 20})}
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

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

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
    
`
