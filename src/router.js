import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginLayout from './layouts/LoginLayout/LoginLayout';

export default class Router extends Component {
  render() {
    return (
      <div id="router">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={DefaultLayout} exact/>
            <Route path="/login" component={LoginLayout}/>
            <Route path="/home" component={DefaultLayout}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}