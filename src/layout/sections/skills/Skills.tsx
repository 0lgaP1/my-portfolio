import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"codeSvg"} title={"HTML5"} description={"It's a markup language used for structuring and presenting hypertext documents on the World Wide Web"}/>
                <Skill iconId={"css"} title={"CSS3"} description={"It's a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML"}/>
                <Skill iconId={"react"} title={"React"} description={"It is a free and open-source front-end JavaScript library for building user interfaces based on components."}/>
                <Skill iconId={"typescript"} title={"TypeScript"} description={"It is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript."}/>
                <Skill iconId={"styledComponents"} title={"Styled Components"} description={"It's a styling library by which JavaScript is used to style components"}/>
                <Skill iconId={"webdesign"} title={"Figma"} description={"It is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows."}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #a1b433;
    min-height: 100vh;
`

