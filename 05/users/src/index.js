import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './Users';
import reportWebVitals from './reportWebVitals';

let dataUrl = './user-data.json'

ReactDOM.render(
  <div>
    <Users data-url={dataUrl}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
