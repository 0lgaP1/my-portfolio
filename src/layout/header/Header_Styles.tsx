import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

//Header
const Header = styled.header`
    background-color: rgba(31, 31, 32, 0.93);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
//Menu
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const MenuItem = styled.li`
    position: relative;
`
const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;
    //outline: 1px solid red;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
        transition: ${theme.animations.transition};
    }

    &:hover, &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            color: ${theme.colors.font};
            transform: skewX(12deg) translateX(5px);

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`
//MobileMenu
const MobileMenu = styled.nav`
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -120px;
    right: -100px;
    z-index: 999999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 0.6s ease-in-out;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);
    `}
    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 1s ease-in-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 40px;
        }
    `}
`

// DesctopMenu
const DesctopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`

export const S = {
    Header,

    Mask,
    MenuItem,
    NavLink,

    MobileMenu,
    BurgerButton,
    MobileMenuPopup,

    DesctopMenu,
};