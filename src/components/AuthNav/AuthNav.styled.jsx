import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;

    &:active {
        color: #e84a5f;
    }

//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #eeea9e;
//   color: #3f51b5;
//   border: 1px solid #3f51b5;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: bold;
//   cursor: pointer;
//   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover {
//     background-color: #3f51b5;
//     color: #eeea9e;
//     border-color: #eeea9e;
//   }
`;
