import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import addContact from './addContact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <Link to="/add">
           <button className="btn btn-success">ADD</button>
        </Link>  
      </div>
    );
  }
}

export default App;
