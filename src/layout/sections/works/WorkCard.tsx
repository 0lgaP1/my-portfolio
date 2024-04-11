import React from 'react';
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";
import {S} from "./Work_Styles"

type WorkCardPropsType = {
    src: string;
    title: string;
    text: string;
    status: string;
}
export const WorkCard: React.FC<WorkCardPropsType> = (props: WorkCardPropsType) => {
    return (
        <S.WorkCard>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.WorkCardTitle>{props.title}</S.WorkCardTitle>
                <S.WorkCardText>{props.text}</S.WorkCardText>
                <Link active href={"#"}>Demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Description>
        </S.WorkCard>
    );
};


