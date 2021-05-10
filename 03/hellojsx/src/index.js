import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Hello
      id='ember'
      frameworkName='Ember.js'
      title='A framework for creating ambitious web applications.'/>,    
    <Hello
      id='backbone'
      frameworkName='Backbone.js'
      title='Backbone.js gives structure to web applications...'/>,
    <Hello
      id='angular'
      frameworkName='Angular.js'
      title='Superheroic Javascript MVW Framework'/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
