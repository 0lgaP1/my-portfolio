import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {WorkCard} from "./WorkCard";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import socialImg from "../../../assets/img/social network.png";
import timerImg from "../../../assets/img/timer.png";
import {Container} from "../../../components/Container";

// const tabsItems = ["All", "Landing page", "React", "SPA"]

const tabsItems: Array<{status: TabsStatusType, title: string}> = [
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
        status: "spa",
    },
]

const worksData = [
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
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus (value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <StyledWorks id={"works"}>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filteredWorks.map((w)=> {
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
