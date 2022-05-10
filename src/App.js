import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Notifications from './Notifications/Notifications';
import Users from './Users/Users';
import Settings from './Settings/Settings';
//import ClassComponent from './classComponent/ClassComponent';


const users = [
  {name: "sveta", surname: "sokolova"},
  {name: "vanya", surname: "ptashkin"},
  {name: "masha", surname: "koshkin"},
  {name: "uyra", surname: "ushkin"},
  {name: "ilya", surname: "soshkin"}
]
function App(props) {
  return (<>
    <Header />
    <div className='maincontent'>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route 
              path="/profile" 
              element={<Profile />}
               />
          <Route 
              path="/notifications" 
              element={<Notifications />}
               />
          <Route 
              path="/users" 
              element={
               <Users name={users[0].name} surname={users[0].surname}/>}
               />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  </>
  );
}
export default App;