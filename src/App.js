import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import Jeevan from "./jeevan";
import Rakesh from "./rakesh";
import Teja from "./teja";
import Nilav from "./nilav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Rakesh" component={Rakesh} />
          <Route path="/Jeevan" component={Jeevan} />
          <Route path="/Teja" component={Teja} />
          <Route path="/Nilav" component={Nilav} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
