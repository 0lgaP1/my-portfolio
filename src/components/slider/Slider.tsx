import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './slider.css'
import {S} from "./Slider_Styles";


type SlidePropsType = {
    text: string
    userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide text={"Promptly and accurately carries out assignments from management. Possesses broad erudition and a creative approach to tasks."} userName={"S. Potapov, Head of the Planning Economic Department, Gefest"}/>,
    <Slide text={"She is communicative, polite and tactful in her interactions with colleagues."} userName={"A. Orlov, Planning bureau chief, Gefest"}/>,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>

);



