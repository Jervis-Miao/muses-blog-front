import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginLayout from './layouts/LoginLayout/LoginLayout';

export default class RouterWrap extends Component {
  render() {
    return (
      <div id="router">
        <HashRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} exact/>
            <Route path="/login" component={LoginLayout}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}