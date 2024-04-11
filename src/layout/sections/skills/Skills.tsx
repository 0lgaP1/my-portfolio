import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillData = [
    {
        iconId: "codeSvg",
        title: "HTML5",
        description: "It's a markup language used for structuring and presenting hypertext documents on the World Wide Web",
    },
    {
        iconId: "css",
        title: "CSS3",
        description: "It's a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    },
    {
        iconId: "react",
        title: "React",
        description: "It is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    },
    {
        iconId: "typescript",
        title: "TypeScript",
        description: "It is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    },
    {
        iconId: "styledComponents",
        title: "Styled Components",
        description: "It's a styling library by which JavaScript is used to style components",
    },
    {
        iconId: "webdesign",
        title: "Figma",
        description: "It is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
    }
]
export const Skills = () => {
    return (
        <StyledSkills id={"skills"}>
            <Container>
                <SectionTitle>My skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index)=>{
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}

                        />
                    })}
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    position: relative;
`

