import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {WorkCard} from "./WorkCard";
import {TabMenu} from "./tabMenu/TabMenu";
import socialImg from "../../../assets/img/social network.png";
import timerImg from "../../../assets/img/timer.png";
import {Container} from "../../../components/Container";

const workItems = ["All", "Landing page", "React", "SPA"]

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={workItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <WorkCard src={socialImg} title={"Social network"} description={"Lorem ipsum dolor"}/>
                    <WorkCard src={timerImg} title={"Timer"} description={"Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor, Lorem ipsum dolor"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`
