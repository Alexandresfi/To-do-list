import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToDoList } from './ToDoList';
import { GlobalStyle } from './global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoList />
    <GlobalStyle />
  </React.StrictMode>
);