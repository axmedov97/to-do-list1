import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from "./component/index"

ReactDOM.render(
  <React.StrictMode>
    <div className='malumot'><h1>Deleted</h1><h2>Add</h2><h3>Edit</h3></div> 
    <Todo ism='Muhsinbek'/>
  </React.StrictMode>, 
  document.getElementById("root")
);



