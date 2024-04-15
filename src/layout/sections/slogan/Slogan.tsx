import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {scroller} from "react-scroll";

const scrollToContacts = () => {
    scroller.scrollTo('contacts', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
    });
};
export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>I am available for freelance</SectionTitle>
                    <Button onClick={scrollToContacts}>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section``