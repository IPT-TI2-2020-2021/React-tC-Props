// ***********************************************
// index.js
// ***********************************************

import React from 'react';  // <--- esta instrução por causa da linha 10
import ReactDOM from 'react-dom';  // <--- esta instrução por causa da linha 9
import App from './App';  // <--- esta instrução por causa da linha 11

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
