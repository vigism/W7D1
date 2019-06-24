import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import * as actions from './actions/todo_actions.js';

document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById("content");
  ReactDOM.render(
     <h1>TODO App</h1>,
     root 
     );
     
    });
    let store = configureStore();
    window.store = store;
    window.actions = actions;