import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";

type WorkCardPropsType = {
    src: string;
    title: string;
    description: string;
}
export const WorkCard = (props: WorkCardPropsType) => {
    return (
        <StyledWorkCard>
            <StyledImage src={props.src} alt=""/>
            <Description>
            <WorkCardTitle>{props.title}</WorkCardTitle>
            <WorkCardText>{props.description}</WorkCardText>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
            </Description>
        </StyledWorkCard>
    );
};

const StyledWorkCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;
           
    ${Link} {
        padding: 10px 0;

    & + ${Link} {
        margin-left: 20px;
    }
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
