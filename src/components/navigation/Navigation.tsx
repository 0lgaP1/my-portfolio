import React from 'react';
import styled from "styled-components";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Testimony</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledNavigation>
    );
};

const StyledNavigation = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
    }
`