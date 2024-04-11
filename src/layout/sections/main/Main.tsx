import React from 'react';
import photo from '../../../assets/img/main-photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.Text>
                        <S.SmallText>Hi there!</S.SmallText>
                        <S.NameText>I'm <span>Olga P</span></S.NameText>
                        <S.MainTitle>
                            <Typewriter
                                options={{
                                    strings: ['A web developer', 'A frontend developer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                            <p>A Web Developer</p>
                        </S.MainTitle>
                    </S.Text>

                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.8}
                    glareColor="#ffffff"
                    glarePosition="bottom"
                    glareBorderRadius="20px">
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Main photo"/>
                    </S.PhotoWrapper>
                </Tilt>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


