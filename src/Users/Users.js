import React from 'react'
import UserItems from './UserItem/UserItems';

const  Users = () => {
  return (
    <>
    <UserItems surname='Azimov' name='Kuba'/>
    <UserItems surname='makarych' name='afonya'/>
    <UserItems surname='barskih' name='tima'/>
    <UserItems surname='tarasov' name='vadim'/>
    </>
  )
}
export default Users;