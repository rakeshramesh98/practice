import React from 'react';
import './App.css';
import Jeevan from './Jeevan'
import Nav from "./Nav";
import Rakesh from "./Rakesh";
import Date from "./Date";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App App-header">

      <Router>
      <div>
          <Nav />
          <Switch>
            <Route path="/Rakesh" component={Rakesh} />
            <Route path="/Date" component={Date} />
            <Route path="/Jeevan" component={Jeevan} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
