import React from 'react';
import styled from 'styled-components';

const NavItemStyle = styled.div`
    color: wheat;
    width: 310px;
    height: 40px;
    margin-bottom: 3px;
    border-radius 1rem;
    background: #2a9689;
    display: grid;
    justify-content: center;
    align-items: center;
`;

const NavbarItem = (props) => {
    return (
        <NavItemStyle>{props.text}</NavItemStyle>

    )
}
export default NavbarItem;