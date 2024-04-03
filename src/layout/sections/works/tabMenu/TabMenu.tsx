import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link"

export const TabMenu = (props: {tabsItems: Array<{status: "all" | "landing" | "react" | "spa", title: string}>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map((item, index:number)=>{
                    return <ListItem key={index}>
                        <Link href="">{item.status}</Link>
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