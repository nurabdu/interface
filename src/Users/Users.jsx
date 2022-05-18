import React from 'react';
import UserItems from './UserItem/UserItems';
import Message from '../Dialog/Message/Message';
import styled from 'styled-components';

const Archive = styled.div`
display: grid;
grid-template-columns: 30% 1fr;

.messagesArchive{
  border-left: ridge;
  width: auto;
  height: auto;
  background-color: wheat;
}

.users{
  width: 240px;
}
`;


const Users = (props) => {

  let userElement = props.usersData.map((u) => <UserItems key={u} name={u.name} surname={u.surname} />)

  return (
    <>
      <Archive>
        <div className='users'>
          {userElement}
        </div>
        <div className='messagesArchive'>
          <Message
            dialogPage={props.dialogPage}
            AddMessage={props.AddMessage} 
            newMessageText={props.newMessageText}
            updateAddMessage={props.updateAddMessage}/>
        </div>
      </Archive>
    </>
  )
}
export default Users;