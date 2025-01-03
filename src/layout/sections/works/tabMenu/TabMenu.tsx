import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link"

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: TabsStatusType
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map((item, index:number)=>{
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
    
`