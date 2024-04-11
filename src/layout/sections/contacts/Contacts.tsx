import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import emailjs from '@emailjs/browser';

export const Contacts = () => {const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

    if(!form.current) return
        
        emailjs
            .sendForm('service_9i6a211', 'template_m6r1czg', form.current, {
                publicKey: 'q5q8KTyn8A0leWgX2',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <StyledContacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <Field required placeholder={"Your name"} name={'user_name'}/>
                    <Field required placeholder={"Enter a subject"} name={'subject'}/>
                    <Field required placeholder={"Your email"} name={'email'}/>
                    <Field required placeholder="Enter your message" as={"textarea"} name={'message'}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
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
