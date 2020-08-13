import React, { Component } from 'react';
import beian from '../../assets/pics/beian.png';
import './FooterNav.less';

export default class FooterNav extends Component {

  render() {
    return (
      <div id="HeadNav">
        <div className="nav-wrap"
             style={{ width: '800px', margin: 0, auto: true, padding: '20px', textAlign: 'center' }}>
          <p style={{ float: 'left', height: '20px', lineHeight: '20px', margin: '0px 0px 0px 5px', color: '#939393' }}>
            <span>
              <img src={beian} style={{ float: 'left' }} alt=""/>
                <a style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  height: '20px',
                  lineHeight: '20px',
                  margin: '0px 0px 0px 5px',
                  color: '#939393'
                }}
                   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011202000419">
                  苏公网安备 32011202000419号 &nbsp;&nbsp;&nbsp;
                </a>
            </span>
            备案证书号：
            <a style={{
              display: 'inline-block',
              textDecoration: 'none',
              height: '20px',
              lineHeight: '20px',
              margin: '0px 0px 0px 5px',
              color: '#939393'
            }}
               href="http://www.beian.miit.gov.cn"
               ref="nofollow">
              苏ICP备20023872号
            </a>
          </p>
        </div>
      </div>
    )
  }
}