import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from './context/TodoContext';


ReactDOM.render(
  <TodoContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TodoContextProvider>,
  document.getElementById('root')
);
