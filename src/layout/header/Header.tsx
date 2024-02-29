import React from "react";
import styled from "styled-components";
import {Navigation} from "../../components/navigation/Navigation";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(116, 244, 244, 0.75);
    display: flex;
    justify-content: space-between;
`