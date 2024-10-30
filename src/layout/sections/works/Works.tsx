import React, {useState} from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {WorkCard} from "./WorkCard";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import socialImg from "../../../assets/img/social network.png";
import timerImg from "../../../assets/img/timer.png";
import counter from "../../../assets/img/counter.jpg";
// import todolist from "../../../assets/img/todolist.jpg";
// import gameImg from "../../../assets/img/game-rock-paper-scissors.jpg"
// import regForm from "../../../assets/img/reg-form.jpg"
import {Container} from "../../../components/Container";
import {AnimatePresence, motion} from "framer-motion"

// const tabsItems = ["All", "Landing page", "React", "SPA"]

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
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
    // {
    //     src: todolist,
    //     title: 'To-do List App',
    //     text: "An application to add and achieve tasks",
    //     type: "spa",
    //     id: 3,
    // },
    {
        src: timerImg,
        title: 'Counter',
        text: "A counter with progress bar",
        type: "spa",
        id: 1,
    },

    // {
    //     src: regForm,
    //     title: "Registration form",
    //     text: "Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem i",
    //     type: "react",
    //     id: 2
    // },

    // {
    //     src: timerImg,
    //     title: "Grade book App",
    //     text: "A helper for teachers to ensure whether a student passed the exam or not",
    //     type: "react",
    //     id: 4
    // },

    // {
    //     src: gameImg,
    //     title: 'A game Rock-paper-scissors',
    //     text: "Lorem ipsum dolor",
    //     type: "spa",
    //     id: 5,
    // },
    //
    // {
    //     src: timerImg,
    //     title: "Wall clock",
    //     text: "In case you're in a hurry :)",
    //     type: "landing",
    //     id: 6
    // },
    // {
    //     src: timerImg,
    //     title: "Workshop",
    //     text: "Landing for a workshop",
    //     type: "landing",
    //     id: 6
    // },
]
export const Works: React.FC = () => {
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

    function changeFilterStatus(value: TabsStatusType) {
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
                    <AnimatePresence>

                        {filteredWorks.map((w) => {
                            return (
                                <motion.div style={{width: "400px", flexGrow: 1, maxWidth: "540px"}}
                                            layout={true}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            key={w.id}
                                >
                                    <WorkCard
                                        title={w.title}
                                        src={w.src}
                                        text={w.text}
                                        status={w.type}
                                        key={w.id}
                                    />
                                </motion.div>
                            )

                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    position: relative;

    ${FlexWrapper} {
        gap: 30px;
    }
`
