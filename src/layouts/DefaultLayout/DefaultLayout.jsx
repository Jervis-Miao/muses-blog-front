import React, { Component } from 'react';
import './DefaultLayout.less';
import HeadNav from '../../common/Head/HeadNav';
import FooterNav from '../../common/Footer/FooterNav';

export default class DefaultLayout extends Component {
  render() {
    return (
      <div id="defaultLayout">
        <HeadNav/>
        <div>
          <p>
            欢迎来到缪强的个人空间
          </p>
          <p>
            HelloWorld
          </p>
        </div>
        <FooterNav/>
      </div>
    )
  }
}