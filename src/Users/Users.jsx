import React from 'react';
//import UserItems from './UserItem/UserItems';
// {/* <div>users</div>
//      {usersElement} */}
const  Users = (props) => {

  // let usersElement = props.usersData.map((u) =>  <UserItems surname={u.surname} name={u.name}/>)

  return (
    <>
   {props.name} {props.surname}
    </>
  )
}
export default Users;