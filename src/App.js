import React from 'react';
import './App.css';
import Jeevan from './Jeevan'
import Nav from "./Nav";
import Rakesh from "./Rakesh";
import Date from "./Date";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Antd from "./Antd";
import Basic from './basic';
import Lookup from './Lookup';
import Noncase from './Noncase';
import Load from './Load';
import Side from './Side';
import Controlled from './Controlled';
import Withgrid from './Withgrid';
import Datapicker from './Datapicker';
import Borderless from './Borderless';
import Demo from './Dynamicform';
import Formlayout from './Formlayout';
import Otherlayout from './Otherlayout';
import Registration from './Registration';
import Prepost from './Prepost';
import Group from './Group';
import GroupRadio from './GroupRadio';
import SolidRadio from './SolidRadio';
import Horizontal from './Horizontal';
import Title from './Title';
import Vertical from './Vertical';
import Withouttitle from './Withouttitle';
import Flexstretch from './Flexstretch';
import Gutter from './Gutter';
import Typesetting from './Typesetting';
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
            <Route path="/Antd" component={Antd} />
            <Route path="/Basic" component={Basic} />
            <Route path="/Lookup" component={Lookup} />
            <Route path="/Noncase" component={Noncase} />
            <Route path="/Load" component={Load} />
            <Route path="/Side" component={Side} />
            <Route path="/Controlled" component={Controlled} />
            <Route path="/Withgrid" component={Withgrid} />
            <Route path="/Datapicker" component={Datapicker} />
            <Route path="/Borderless" component={Borderless} />
            <Route path="/Dynamicform" component={Demo} />
            <Route path="/Formlayout" component={Formlayout} />
            <Route path="/Otherlayout" component={Otherlayout} />
            <Route path="/Registration" component={Registration} />
            <Route path="/Group" component={Group} />
            <Route path="/Prepost" component={Prepost} />
            <Route path="/GroupRadio" component={GroupRadio} />
            <Route path="/SolidRadio" component={SolidRadio} />
            <Route path="/Horizontal" component={Horizontal} />
            <Route path="/Title" component={Title} />
            <Route path="/Vertical" component={Vertical} />
            <Route path="/Withouttitle" component={Withouttitle} />
            <Route path="/Flexstretch" component={Flexstretch} />
            <Route path="/Gutter" component={Gutter} />
            <Route path="/Typesetting" component={Typesetting} />


          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
