import React, { Component } from 'react';
import { Menu } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import './HeadNav.less';

export default class HeadNav extends Component {
  state = {
    current: 'home',
  }

  onSelectHandle = (item) => {
    this.setState({ current: item.key })
  }

  render() {
    return (
      <div id="HeadNav">
        <div className="nav-wrap">
          <div className="nav-logo-wrap">
            <GlobalOutlined className="nav-logo"/>
          </div>
          <div className="nav-list-wrap">
            <Menu selectedKeys={[this.state.current]} mode="horizontal" onSelect={this.onSelectHandle}>
              <Menu.Item key="home">
                首页
              </Menu.Item>
              <Menu.Item key="aboutme">
                关于我
              </Menu.Item>
              <Menu.Item key="article">
                文章分享
              </Menu.Item>
              <Menu.Item key="resource">
                资源共享
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    )
  }
}