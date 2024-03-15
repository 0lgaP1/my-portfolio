import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Name>Olga Patapchuk</Name>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"git"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>© 2024 Olga Patapchuk, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`

const Name = styled.span`
    letter-spacing: 3px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;

`

const SocialItem = styled.li`



`


const SocialLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accent};
}

    &:hover {
    cursor: pointer;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.secondaryBg};
    transform: translateY(-4px);   
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`