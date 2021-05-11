import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Radio from './Radio';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Radio name="radio-group" id="radio1" order="1" label="Credit card"/>
    <Radio name="radio-group" id="radio2" order="2" label="PayPal"/>
    <Radio name="radio-group" id="radio3" order="3" lable="Check"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
