import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Student from './App';
import Student2 from './Class';
import Batch from './batching';
import Calculator from './calulator';
import ParentComponent from './ParentComponent';
const colors =["red","blue","black"];
ReactDOM.render(
  <React.StrictMode>
    <> 
    {/* <Student colors={colors}/> 
    <Student2/>
    <Batch/> */}
    {/* <Calculator/> */}
    <ParentComponent/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
