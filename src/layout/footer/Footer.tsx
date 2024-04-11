import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles"

const socialItemData = [
    {
        viewBox: "0 0 21 21",
        iconId: "instagram",
        href: "https://www.instagram.com/nlolya",
    },
    {
        viewBox: "0 0 98 98",
        iconId: "git",
        href: "https://github.com/0lgaP1",
    },
    {
        viewBox: "0 0 21 21",
        iconId: "linkedin",
        href: "https://www.linkedin.com/in/olga-patapchuk-844857278/",
    },
    {
        viewBox: "0 0 21 21",
        iconId: "telegram",
        href: "https://t.me/therealnlolya/",
    }
]

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.Name>Olga Patapchuk</S.Name>
                    <S.SocialList>

                        {socialItemData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink
                                        href={s.href}
                                        target="_blank">
                                        <Icon height={"21"}
                                              width={"21"}
                                              viewBox={s.viewBox}
                                              iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>

                    <S.Copyright>© 2024 Olga Patapchuk, All Rights Reserved.</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

