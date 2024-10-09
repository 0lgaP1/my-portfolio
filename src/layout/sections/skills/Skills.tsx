import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

const skillData = [
    {
        iconId: "javascript",
        title: "JavaScript",
        description: "It's a scripting programming language that implement complex features on web pages.",
    },
    {
        iconId: "typescript",
        title: "TypeScript",
        description: "It's a free open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.",
    },
    {
        iconId: "react",
        title: "React",
        description: "It is a free and open-source front-end JavaScript library for building user interfaces based on components.",
    },
    {
        iconId: "redux",
        title: "Redux",
        description: "Redux is a JavaScript library for managing and centralizing application state, commonly used with libraries such as React for building user interfaces.",
    },
    {
        iconId: "jest",
        title: "Jest",
        description: "It's a testing framework built on JavaScript, designed majorly to work with React and React Native-based web applications. ",
    },
    {
        iconId: "unittests",
        title: "Unit tests",
        description: "Unit testing is a type of software testing where individual units or components of a program are tested in isolation to ensure they function as expected.",
    },
    {
        iconId: "html5",
        title: "HTML5",
        description: "A markup language used for structuring and presenting hypertext documents on the World Wide Web",
    },
    {
        iconId: "css",
        title: "CSS3",
        description: "A style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML",
    },
    {
        iconId: "styledComponents",
        title: "Styled Components",
        description: "A styling library by which JavaScript is used to style components",
    },
    {
        iconId: "webdesign",
        title: "Figma",
        description: "A collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
    },
    {
        iconId: "materialui",
        title: "MaterialUI",
        description: "MUI is a popular open-source React component library that helps developers create modern, responsive and visually appealing user interfaces for React applications."
    },
    {
        iconId: "bootstrap",
        title: "Bootstrap",
        description: "A front-end framework used for building responsive and mobile-first websites and web applications."
    }
]
export const Skills: React.FC = () => {
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

