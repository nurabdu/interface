import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Messages from './Dialog/Messages';

function App() {
  return (<>
    <Header />
    <div className='maincontent'>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path="/dialogs" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </>
  );
}
export default App;