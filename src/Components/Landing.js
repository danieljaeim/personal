import React, { Component } from 'react';
import '../Stylesheets/Landing.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Cover from '../Components/Cover';
import ProjectSlot from '../Components/ProjectSlot';
import Farewell from './Farewell';

export default class Landing extends Component {
  render() {
    return (
      <Router>
            <Switch>
              <Route path="/">
                <Cover />
                <ProjectSlot/>
                <Farewell />
              </Route>
            </Switch>
      </Router>
    )
  }
}
