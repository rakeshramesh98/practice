import React from "react";
import "./App.css";
import Jeevan from "./Jeevan";
import Nav from "./Nav";
import Rakesh from "./Rakesh";
import Date from "./Date";
import Buttons from "./Antd/Buttons";
import Menus from "./Antd/Menus";
import Typo from "./Antd/Typo";
import Themes from "./Antd/Themes";
import Breadcrumbs from "./Antd/Breadcrumbs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigations from "./Antd/Navigations";
import Dropdowns from "./Antd/Dropdowns";
import Paginations from "./Antd/Paginations";
import Pageheaders from "./Antd/Pageheaders";
import Antd from "./Antd";
import Basic from "./Antd/basic";
import Lookup from "./Antd/Lookup";
import Noncase from "./Antd/Noncase";
import Load from "./Antd/Load";
import Side from "./Antd/Side";
import Controlled from "./Antd/Controlled";
import Withgrid from "./Antd/Withgrid";
import Datapicker from "./Antd/Datapicker";
import Borderless from "./Antd/Borderless";
import Demo from "./Antd/Dynamicform";
import Formlayout from "./Antd/Formlayout";
import Otherlayout from "./Antd/Otherlayout";
import Registration from "./Antd/Registration";
import Prepost from "./Antd/Prepost";
import Group from "./Antd/Group";
import GroupRadio from "./Antd/GroupRadio";
import SolidRadio from "./Antd/SolidRadio";
import Horizontal from "./Antd/Horizontal";
import Title from "./Antd/Title";
import Vertical from "./Antd/Vertical";
import Withouttitle from "./Antd/Withouttitle";
import Flexstretch from "./Antd/Flexstretch";
import Gutter from "./Antd/Gutter";
import Typesetting from "./Antd/Typesetting";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App App-header">
      <Navbar />
      <Router>
        <div className="row">
          <div className="col-md-2">
            <Nav />
          </div>
          <div className="col-md-10 mt-4">
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
              <Route path="/Buttons" component={Buttons} />
              <Route path="/Typo" component={Typo} />
              <Route path="/Navigations" component={Navigations} />
              <Route path="/Breadcrumbs" component={Breadcrumbs} />
              <Route path="/Dropdowns" component={Dropdowns} />
              <Route path="/Menus" component={Menus} />
              <Route path="/Themes" component={Themes} />
              <Route path="/Paginations" component={Paginations} />
              <Route path="/Pageheaders" component={Pageheaders} />
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
