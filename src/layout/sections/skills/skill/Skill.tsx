import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {IconWrapper} from "../../../../components/IconWrapper";


type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={props.iconId}></Icon>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 60px 40px 20px 62px;
`

const SkillTitle = styled.h3`
    margin-top: 70px;
    margin-bottom: 15px;
`

const SkillText = styled.p`
    text-align: center;
    letter-spacing: 1px;
`

