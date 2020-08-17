import React, { Component } from 'react';
import beian from '../../assets/pics/beian.png';
import './FooterNav.less';
import { Col, Row } from 'antd';

export default class FooterNav extends Component {

  render() {
    return (
      <Row id="FooterNav" justify="center">
        <Col>
          <img src={beian} style={{ float: 'left' }} alt=""/>
          <a className="link" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011202000419">
            苏公网安备 32011202000419号 &nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </Col>
        <Col>
          备案证书号:
          <a className="link" href="http://www.beian.miit.gov.cn" ref="nofollow">
            苏ICP备20023872号
          </a>
        </Col>
      </Row>
    )
  }
}