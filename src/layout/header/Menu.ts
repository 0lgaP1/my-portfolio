// import React from 'react';
// import {Link, ListItem, Mask, StyledHeaderMenu} from "./headermenu/HeaderMenuStyles";
//
// const items = ["Home", "Skills", "Works", "Testimony", "Contact"]
// // const items = [
// //     {
// //         title: "Home",
// //         href: "home"
// //     },
// //     {
// //         title: "Skills",
// //         href: "skills"
// //     },
// //     {
// //         title: "Works",
// //         href: "works"
// //     },
// //     {
// //         title: "Testimony",
// //         href: "testimony"
// //     },
// //     {
// //         title: "Contact",
// //         href: "contact"
// //     }]
// export const Menu: React.FC = () => {
//     return (
//         <ul>
//             {
//                 items.map((item: string, index: number) => {
//                     return <ListItem key = {index} >
//                     <Link href = "" >
//                         {item}
//                         < Mask >
//                         <span>{item} < /span>
//                         < /Mask>
//                         < Mask >
//                         <span>{item} < /span>
//                         < /Mask>
//                         < /Link>
//                         < /ListItem>
//                 })
//             }
//         < /ul>
//     );
// };
// <ul>
//     {items.map((item: string, index: number) => {
//             return <ListItem key={index}>
//             <Link href="">
//                 {item}
//                 <Mask>
//                 <span>{item}</span>
//                 </Mask>
//                 <Mask>
//                 <span>{item}</span>
//                 </Mask>
//                 </Link>
//                 </ListItem>
//         })}
// </ul>
