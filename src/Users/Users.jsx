import React from 'react';
import UserItems from './UserItem/UserItems';

const  Users = (props) => {

 let userElement = props.usersData.map((u)=> <UserItems name={u.name} surname={u.surname}/>)

  return (
    <>
      {userElement}
    </>
  )
}
export default Users;