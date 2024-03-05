import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import styled from "styled-components";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I am available for freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    background-color: #da8f1a;
    min-height: 30vh;
`