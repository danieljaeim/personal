import React, { Component } from 'react';
import '../Stylesheets/Landing.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cover from '../Components/Cover';
import Navbar from './Navbar';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: "PROJECTS",
      sleeping: true
    }
  }

  changeCurrentTab = (newTab) => {
    this.setState({currentTab: newTab});
  }

  render() {

    let { currentTab } = this.state;

    return (
      <Router>
        <Switch>
          <Route path="/">
            <Navbar changeTabs={this.changeCurrentTab}/>
            <Cover currentTab = {currentTab}/>
            {/* <ProjectSlot/> */}
            {/* <Farewell /> */}
          </Route>
        </Switch>
      </Router>
    )
  }
}
