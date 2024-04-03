import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {WorkCard} from "./WorkCard";
import {TabMenu} from "./tabMenu/TabMenu";
import socialImg from "../../../assets/img/social network.png";
import timerImg from "../../../assets/img/timer.png";
import {Container} from "../../../components/Container";

// const tabsItems = ["All", "Landing page", "React", "SPA"]

const tabsItems: Array<{status: "all" | "landing" | "react" | "spa", title: string}> = [
    {
        title: "All",
        status: "all",
    },

    {
        title: "Landing page",
        status: "landing",
    },

    {
        title: "React",
        status: "react",
    },

    {
        title: "SPA",
        status: "spa"
    },
]

const WorkData = [
    {   src: socialImg,
        title: 'Social network',
        text: "Lorem ipsum dolor",
        type: "spa",
    },

    {   src: timerImg,
        title: "Timer",
        text: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor, Lorem ipsum dolor",
        type: "react",
    },

]
export const Works = () => {
    return (
        <StyledWorks id={"works"}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {WorkData.map((w)=> {
                        return <WorkCard
                                title={w.title}
                                src={w.src}
                                text={w.text}
                                status={w.type} />
                        })}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`
