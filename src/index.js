import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import addContact from './addContact';
import viewComponent from './viewComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
	<Router>
          <div className="add_btn_div">
          <header className="header-fixed">

          <div className="header-limiter">

            <h1><Link to="/">Phone Directory</Link></h1>

          </div>
        </header>
          	<Route exact path="/" component={App} /> 
            <Route path="/add" component={addContact} />
            <Route path="/view" component={viewComponent} />
          </div>
        </Router>,document.getElementById('root'))

serviceWorker.unregister();
