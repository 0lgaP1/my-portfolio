import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";


type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}></Icon>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: rgba(255, 255, 255, 0.37);
    width: 30%;
    margin: 10px;
    padding: 10px 10px 0 10px;
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`