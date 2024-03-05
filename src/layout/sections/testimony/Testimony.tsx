import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Slider} from "../../../components/slider/Slider";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Icon iconId={"quote"} />
                    <Slider/>
                </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #97cc9f;
    min-height: 100vh;
`
