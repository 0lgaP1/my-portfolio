import React from 'react';
import { S } from '../Header_Styles'
import {Menu} from "../menu/Menu";

export const DesctopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.DesctopMenu >
            <Menu />
        </S.DesctopMenu >
    );
};

