import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddMessage, updateAddMessage } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} AddMessage={AddMessage} updateAddMessage={updateAddMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}