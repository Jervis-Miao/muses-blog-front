import React, { Component } from 'react';
import './DefaultLayout.less';
import HeadNav from '../../common/Head/HeadNav';
import BottomNav from '../../common/Bottom/BottomNav';

export default class DefaultLayout extends Component {
  render() {
    return (
      <div id="defaultLayout">
        <HeadNav/>
        HelloWorld
        <BottomNav/>
      </div>
    )
  }
}