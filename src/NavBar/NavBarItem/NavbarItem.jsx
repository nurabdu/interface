import React from 'react';
import styled from 'styled-components';

const NavItemStyle = styled.div`
    width: 310px;
    height: 40px;
    margin-bottom: 3px;
    background: #1d2e47;
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
