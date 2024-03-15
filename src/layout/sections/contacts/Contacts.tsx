import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"Your name"}/>
                    <Field placeholder={"Enter a subject"}/>
                    <Field placeholder="Enter your message" as={"textarea"} />
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
        
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 155px;
    }
        
    ${Button} {
        //width: inherit;
        display: block;
    }
`

const Field = styled.input`
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.border};
    width: 100%;
    padding: 7px 15px;
    
    font-family: "Popins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    
    color: ${theme.colors.font};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor}
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.border};
    }
`
