import React from "react";
import styled from "styled-components";

const Style = styled.div`
display: grid;
width: 310px;
height: 40px;
background-color: antiquewhite;
align-items: center;
justify-content: center;
font-size: 22px;
border-color: #5f4e4e;
margin-bottom: 1px;

.leftColumn{
    overflow-y: scroll;
    width: 312px;
    height: 100vh;
   
}
`

const Users = (props) => {
    return (
        <Style>
            <div className="leftColumn">
                <div>
                    <span>{props.id}</span>
                    <span>{props.surname}</span>
                    <span>{props.name}</span>
                </div>
            </div>
        </Style>
    )
}
export default Users;

