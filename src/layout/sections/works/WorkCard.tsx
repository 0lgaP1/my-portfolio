import React from 'react';
import styled from "styled-components";

type WorkCardPropsType = {
    src: string;
    title: string;
    description: string;
}
export const WorkCard = (props: WorkCardPropsType) => {
    return (
        <StyledWorkCard>
            <StyledImage src={props.src} alt=""/>
            <WorkCardTitle>{props.title}</WorkCardTitle>
            <WorkCardText>{props.description}</WorkCardText>
            <Link href={"#"}>Demo</Link>
            <Link href={"#"}>Code</Link>
        </StyledWorkCard>
    );
};

const StyledWorkCard = styled.div`
    background-color: rgba(255, 255, 255, 0.37);
    margin: 10px;
`

const StyledImage = styled.img`

`

const WorkCardTitle = styled.h3`

`

const WorkCardText = styled.p`

`
const Link = styled.a`

`