import React from 'react';
import styled from "styled-components";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";

type WorkCardPropsType = {
    src: string;
    title: string;
    description: string;
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

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }

        ${Button} {
            opacity: 1;
        }

    }
}

${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);

    &::before {
        width: 100%;
        height: 100%;
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
