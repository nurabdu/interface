import React from 'react';
import styled from 'styled-components';
import Icon from './../../Images/holiday.jpg';

const ItemStyle = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
width: auto;
height: 50px;
border: solid;
margin-top: 0.1rem;


.img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
}
.userdata{
    display: grid;
    grid-template-columns: 1fr 1fr;

}
`;

const UserItems = (props) => {
    return (
        <ItemStyle>
            <img className='img' src={Icon}/>
            <div className='userdata'>
                <h3>{props.surname}</h3>
                <h3>{props.name}</h3>
            </div>
        </ItemStyle>
    )
}
export default UserItems;