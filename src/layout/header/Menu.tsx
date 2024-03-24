import React from 'react';
import {Link, ListItem, Mask} from "./headermenu/HeaderMenuStyles";

// const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
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
            {items.map((item, index)=>{
                return <ListItem key={index}>
                    <Link href={`#${item.href}`}>
                        {item.title}
                        <Mask>
                            <span>{item.title} </span>
                        </Mask>
                        < Mask>
                            <span>{item.title} </span>
                        </Mask>
                    </Link>
                </ListItem>
            })}
        </ul>
    );
};