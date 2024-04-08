import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

type WorkCardPropsType = {
    src: string;
    title: string;
    text: string;
    status: string;
}
export const WorkCard = (props: WorkCardPropsType) => {
    return (
        <StyledWorkCard>
            <ImageWrapper>
                <StyledImage src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>

            <Description>
                <WorkCardTitle>{props.title}</WorkCardTitle>
                <WorkCardText>{props.text}</WorkCardText>
                <Link active href={"#"}>Demo</Link>
                <Link href={"#"}>Code</Link>
            </Description>
        </StyledWorkCard>
    );
};

const StyledWorkCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const ImageWrapper = styled.div`
    position: relative; 
        ${Button} {
            opacity: 0;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -40%);
            transition: ${theme.animations.transition};

    &::before {
        width: 100%;
        height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        opacity: 0;
        transition: ${theme.animations.transition};
    }
        
        &:hover {
            &::before {
                opacity: 1;
            }
        
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const StyledImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const WorkCardTitle = styled.h3`
    margin-bottom: 14px;
`

const WorkCardText = styled.p`
    margin-bottom: 14px;
`

const Description = styled.div`
    padding: 25px 20px;
`
