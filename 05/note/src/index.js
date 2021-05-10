import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Note from './Note';
import reportWebVitals from './reportWebVitals';

let secondsLeft = 5

let interval = setInterval(() => {
  if (secondsLeft === 0) {
    ReactDOM.render(
      <div>
        Note was removed after {secondsLeft} secs.
      </div>,
      document.getElementById('root')
    )
  } else {
    ReactDOM.render(
      <div>
        <Note secondsLeft={secondsLeft}/>
      </div>,
      document.getElementById('root')
    );
  }
  secondsLeft = Math.max(secondsLeft - 1, 0)
}, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
