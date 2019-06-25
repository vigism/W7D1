import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import * as actions from './actions/todo_actions.js';

import App from './components/app.jsx';

document.addEventListener('DOMContentLoaded',() => {
  const root = document.getElementById("content");
  ReactDOM.render(
     <App />,
     root 
     );
     
    });
    let store = configureStore();
    window.store = store;
    window.actions = actions;