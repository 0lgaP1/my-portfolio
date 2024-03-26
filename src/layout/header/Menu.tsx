import React from 'react';
import {ListItem, Mask, NavLink} from "./headermenu/HeaderMenuStyles";

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "skills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contact",
        href: "contact"
    }]
export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <ListItem key={index}>
                    <NavLink to={item.href}
                             smooth={true}
                    >
                        {item.title}
                        <Mask>
                            <span>{item.title} </span>
                        </Mask>
                        < Mask>
                            <span>{item.title} </span>
                        </Mask>
                    </NavLink>
                </ListItem>
            })}
        </ul>
    );
};