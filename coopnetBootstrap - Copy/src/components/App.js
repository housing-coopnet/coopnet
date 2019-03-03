import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import Home from './Home';
import Signup from './Signup';

export default class App extends Component {
  render() {
    return (
<Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
    );
  }
}