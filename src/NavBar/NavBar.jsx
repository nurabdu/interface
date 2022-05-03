import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavbarItem from './NavBarItem/NavbarItem';
const NavBarStyle = styled.div`
justif-content: center;
margin-top: 0.2rem;
`;

const NavBar = () => {
    return (
        <NavBarStyle>
            <div>
            <NavLink to='/dialogs'><NavbarItem text="Messages" /></NavLink>
            </div>
            <div>
               <NavLink to='/profile'><NavbarItem text="Profile" /></NavLink>
            </div>
            {/* <div>
            <NavLink to='/users'><NavbarItem text="Users" /></NavLink>
            </div>
            <div>
            <NavLink to='/setting'><NavbarItem text="Setting" /></NavLink>
            </div> */}
        </NavBarStyle>
    )
}
export default NavBar;