import {theme} from "./Theme";

type FontPropsType = {
    family?: string;
    color?: string;
    lineHeight?: number;
    weight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({family, color, weight, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || '1.2'};
    font-weight: ${weight || '400'};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
    
`